export const getColorClasses = (color: string) => {
  const colors = {
    orange: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    yellow: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    green: 'text-green-500 bg-green-500/10 border-green-500/20',
    purple: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
  }
  return colors[color as keyof typeof colors] || colors.orange
}

export const getIconColorClass = (color: string) => {
  const colors = {
    orange: 'text-orange-500',
    yellow: 'text-yellow-500',
    green: 'text-green-500',
    purple: 'text-purple-500'
  }
  return colors[color as keyof typeof colors] || 'text-orange-500'
}

export const getProgressColorClass = (color: string) => {
  const colors = {
    orange: '[&>div]:bg-orange-500',
    yellow: '[&>div]:bg-yellow-500',
    green: '[&>div]:bg-green-500',
    purple: '[&>div]:bg-purple-500'
  }
  return colors[color as keyof typeof colors] || '[&>div]:bg-orange-500'
}
