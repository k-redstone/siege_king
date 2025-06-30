import React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

function InfoCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card className={cn(`bg-card border-border`, className)}>
      <CardContent className="p-4 text-center">{children}</CardContent>
    </Card>
  )
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
      {children}
    </div>
  )
}

function Title({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2 font-semibold">{children}</h3>
}

function Value({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('text-primary text-2xl font-bold', className)}>
      {children}
    </p>
  )
}

function Sub({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('text-muted-foreground text-sm', className)}>
      {children}
    </div>
  )
}

InfoCard.Icon = Icon
InfoCard.Title = Title
InfoCard.Value = Value
InfoCard.Sub = Sub

export { InfoCard }
