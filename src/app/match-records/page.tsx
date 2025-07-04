'use client'

import { Suspense } from 'react'

import MatchReocrdsClient from '@/components/match/MatchReocrdsClient'
import { GAPageView } from '@/hooks/useGAPageViesw'

export default function MatchRecordsPage() {
  return (
    <Suspense>
      <MatchReocrdsClient />
      <GAPageView />
    </Suspense>
  )
}
