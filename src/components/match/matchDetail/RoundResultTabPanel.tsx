'use client'

import { Target } from 'lucide-react'
import { useState } from 'react'

import RoundByRoundResult from '@/components/match/matchDetail/RoundByRoundResult'
import TeamScoreBoard from '@/components/match/matchDetail/TeamScoreBoard'
import { Button } from '@/components/ui/button'
import { IMatchSetResult } from '@/types/info'
interface IRoundResultTabPanelProps {
  matchData: IMatchSetResult[]
}

export default function RoundResultTabPanel({
  matchData,
}: IRoundResultTabPanelProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  if (!matchData || matchData.length === 0) {
    return <div>라운드 데이터가 없습니다.</div>
  }

  return (
    <div className="flex flex-col gap-y-6">
      <div className="mb-6 flex justify-center gap-2">
        {matchData.map((match, idx) => (
          <Button
            className="cursor-pointer"
            key={match.setNumber}
            variant={selectedIndex === idx ? 'default' : 'outline'}
            onClick={() => setSelectedIndex(idx)}
          >
            {match.setNumber} Set
          </Button>
        ))}
      </div>

      <div className="flex gap-x-4 text-2xl font-bold">
        <h2 className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          세트 결과
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center">
          <h2 className="mb-2 text-xl font-bold">
            {matchData[selectedIndex].teamA.name}
          </h2>
          <div className="text-2xl font-bold text-blue-400">
            {matchData[selectedIndex].teamA.score}
          </div>
        </div>

        <div className="text-center">
          <div className="text-muted-foreground mb-2 text-xl">VS</div>
        </div>

        <div className="flex-1 text-center">
          <h2 className="mb-2 text-xl font-bold">
            {matchData[selectedIndex].teamB.name}
          </h2>
          <div className="text-2xl font-bold text-orange-400">
            {matchData[selectedIndex].teamB.score}
          </div>
        </div>
      </div>

      <div className="flex gap-x-4 text-2xl font-bold">
        <h2 className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          라운드
        </h2>
      </div>

      <RoundByRoundResult setData={matchData[selectedIndex].roundsWin} />

      <div className="flex gap-x-4 text-2xl font-bold">
        <h2 className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          스코어보드
        </h2>
      </div>
      <TeamScoreBoard
        type="teamA"
        setData={matchData[selectedIndex].teamA}
      />

      <TeamScoreBoard
        type="teamB"
        setData={matchData[selectedIndex].teamB}
      />
    </div>
  )
}
