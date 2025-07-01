import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRelativeTime(input: string): string {
  const [datePart, timePart] = input.split(' ')
  const [year, month, day] = datePart.split('-').map(Number)
  const [hour, minute, second] = timePart.split(':').map(Number)
  const inputDate = new Date(year, month - 1, day, hour, minute, second)

  const now = new Date()
  if (inputDate > now) return '방금 전'

  const diffMs = now.getTime() - inputDate.getTime()
  const diffMin = Math.floor(diffMs / (1000 * 60))
  const diffHour = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDay = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffHour < 1) {
    return `${diffMin}분 전`
  } else if (diffDay < 1) {
    return `${diffHour}시간 전`
  } else {
    return `${diffDay}일 전`
  }
}

export function toMinuteSecond(seconds: number): string {
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  return `${mm}:${ss}`
}
