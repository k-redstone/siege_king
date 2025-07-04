import { useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const MATCH_RECORDS_TABS = [
  { id: 0, label: '전체' },
  { id: 1, label: '토너먼트' },
  { id: 2, label: '스크림' },
] as const

export type MatchRecordsTabId = (typeof MATCH_RECORDS_TABS)[number]['id']

export function useTabQuery(defaultTab: MatchRecordsTabId = 0) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const tab = Number(searchParams.get('tab') ?? defaultTab) as MatchRecordsTabId

  const setTab = useCallback(
    (tab: MatchRecordsTabId) => {
      const params = new URLSearchParams(searchParams)
      params.set('tab', tab.toString())
      router.replace(`/match-records?${params.toString()}`)
    },
    [router, searchParams],
  )

  return { tab, setTab }
}
