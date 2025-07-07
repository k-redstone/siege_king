'use client'

import { useEffect, useState } from 'react'

import DetailMatchInfo from '@/components/match/DetailMatchInfo'
import { Button } from '@/components/ui/button'
import { useTabQuery, MATCH_RECORDS_TABS } from '@/hooks/useTabQuery'
import { IDetailMatchInfo } from '@/types/info'

async function fetchMatchInfo(): Promise<IDetailMatchInfo[]> {
  const url = process.env.NEXT_PUBLIC_MATCH_LIST_JSON_URL
  if (!url)
    throw new Error('환경변수(MATCH_LIST_JSON_URL)가 설정되지 않았습니다.')

  const res = await fetch(url)
  if (!res.ok) throw new Error('데이터를 가져오는데 실패했습니다.')

  return res.json()
}

export default function MatchReocrdsClient() {
  const { tab, setTab } = useTabQuery()
  const [detailMatchInfo, setDetailMatchInfo] = useState<IDetailMatchInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function fetchData() {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchMatchInfo()
        if (isMounted) setDetailMatchInfo(data)
      } catch (e) {
        if (isMounted) setError((e as Error).message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()
    return () => {
      isMounted = false
    }
  }, [])

  const filteredMatches =
    tab === 0
      ? detailMatchInfo
      : detailMatchInfo.filter((match) =>
          tab === 1 ? !match.isScrim : match.isScrim,
        )

  if (loading)
    return <div className="py-5 text-center text-3xl font-bold">로딩 중...</div>
  if (error) return <div>오류: {error}</div>

  return (
    <div className="bg-background text-foreground py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">매치 기록</h1>
          {/* <p className="text-muted-foreground text-lg">경기 결과 및 통계</p> */}
          <p className="text-muted-foreground text-lg">
            공식 스크림 및 토너먼트 결과만 반영합니다.
          </p>
          <div className="mt-4"></div>
          <p className="text-muted-foreground text-base">
            매치 기록은 아직 작업이 안 끝났습니다. 공식 스크림이 진행되기 전까지
            업데이트 될 예정입니다!
          </p>
          <p className="text-muted-foreground text-base">
            매치 상세 기록은 세트별로 묶어서 제공 될 예정입니다.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex justify-center gap-2">
          {MATCH_RECORDS_TABS.map((matchTab) => (
            <Button
              className="cursor-pointer"
              key={matchTab.label}
              variant={tab === matchTab.id ? 'default' : 'outline'}
              onClick={() => setTab(matchTab.id)}
            >
              {matchTab.label}
            </Button>
          ))}
        </div>

        {/* Match Results */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">경기 결과</h2>
          <div className="space-y-4">
            {filteredMatches.map((match) => (
              <DetailMatchInfo
                key={match.id}
                match={match}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
