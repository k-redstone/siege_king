import { Clock } from 'lucide-react'
import { notFound } from 'next/navigation'

import GoBackBtn from '@/components/match/matchDetail/GoBackBtn'
import MatchOverviewCard from '@/components/match/matchDetail/MatchOverviewCard'
import RoundResultTabPanel from '@/components/match/matchDetail/RoundResultTabPanel'
import { IDetailMatchInfo } from '@/types/info'

type Params = Promise<{ id: string }>

export default async function MatchDetailsPage(props: { params: Params }) {
  const { id: matchId } = await props.params
  const url = process.env.NEXT_PUBLIC_MATCH_JSON_URL

  if (!url) throw new Error('환경변수(MATCH_JSON_URL)가 설정되지 않았습니다.')

  const res = await fetch(`${url}/${matchId}.json`, {
    next: { revalidate: 10 },
  })
  if (!res.ok) {
    return notFound()
  }

  const matchData: IDetailMatchInfo = await res.json()

  return (
    <div className="bg-background text-foreground py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8">
          <GoBackBtn />
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              경기 상세 결과
            </h1>
            <div className="text-muted-foreground flex items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                2025-07-28 20:00
              </div>
              <span className="bg-primary/20 text-primary rounded-full px-3 py-1 text-sm font-semibold">
                스크림
              </span>
            </div>
          </div>
        </div>

        {/* Match Overview */}
        <MatchOverviewCard matchData={matchData} />

        {matchData.sets && <RoundResultTabPanel matchData={matchData.sets} />}
      </div>
    </div>
  )
}
