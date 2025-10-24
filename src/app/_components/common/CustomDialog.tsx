'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CustomDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

interface CustomDialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  children: React.ReactNode
  showCloseButton?: boolean
}

export function CustomDialog({ open, onOpenChange, children }: CustomDialogProps) {
  const [container, setContainer] = React.useState<HTMLElement | null>(null)

  // 모달이 열릴 때 백그라운드 스크롤 완전 차단 및 Lenis 비활성화
  React.useEffect(() => {
    if (open) {
      const scrollY = window.scrollY

      // Lenis 비활성화
      const html = document.documentElement
      html.classList.add('lenis-stopped')

      // body 스크롤 차단
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      return () => {
        // Lenis 재활성화
        html.classList.remove('lenis-stopped')

        // body 스타일 복원
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [open])

  React.useEffect(() => {
    // Portal container를 body에 생성
    const portalContainer = document.createElement('div')
    portalContainer.id = 'modal-portal'
    portalContainer.style.position = 'fixed'
    portalContainer.style.top = '0'
    portalContainer.style.left = '0'
    portalContainer.style.width = '100%'
    portalContainer.style.height = '100%'
    portalContainer.style.zIndex = '9999'
    portalContainer.style.pointerEvents = open ? 'auto' : 'none'

    document.body.appendChild(portalContainer)
    setContainer(portalContainer)

    return () => {
      if (portalContainer.parentNode) {
        portalContainer.parentNode.removeChild(portalContainer)
      }
    }
  }, [open])

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {container && (
        <DialogPrimitive.Portal container={container}>
          {children}
        </DialogPrimitive.Portal>
      )}
    </DialogPrimitive.Root>
  )
}

export const CustomDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  CustomDialogContentProps
>(({ children, className, showCloseButton = true, ...props }, ref) => (
  <>
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      )}
    />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] bg-card border border-border rounded-lg shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      data-lenis-prevent
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </>
))

CustomDialogContent.displayName = 'CustomDialogContent'

export const CustomDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
    {...props}
  />
)

export const CustomDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentProps<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))

CustomDialogTitle.displayName = 'CustomDialogTitle'

export const CustomDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentProps<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))

CustomDialogDescription.displayName = 'CustomDialogDescription'