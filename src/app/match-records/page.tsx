'use client'

import { useState } from 'react'

import DetailMatchInfo from '@/components/match/DetailMatchInfo'
import { Button } from '@/components/ui/button'
import { DETAIL_MATCH_INFO } from '@/constants/matchDetail'

export default function MatchRecordsPage() {
  const [selectedFilter, setSelectedFilter] = useState('전체')
  const filters = ['전체', '공식경기', '스크림']

  const filteredMatches =
    selectedFilter === '전체'
      ? DETAIL_MATCH_INFO
      : DETAIL_MATCH_INFO.filter((match) =>
          selectedFilter === '공식경기' ? !match.isScrim : match.isScrim,
        )

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
          {filters.map((filter) => (
            <Button
              className="cursor-pointer"
              key={filter}
              variant={selectedFilter === filter ? 'default' : 'outline'}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
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
