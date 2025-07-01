import { useEffect, useState } from 'react'

import { getRelativeTime } from '@/lib/utils'

export default function useRelativeTime(dateString: string) {
  const [relative, setRelative] = useState('')

  useEffect(() => {
    setRelative(getRelativeTime(dateString))
  }, [dateString])

  return relative
}
