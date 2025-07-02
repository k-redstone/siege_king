'use client'

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

      <RoundByRoundResult setData={matchData[selectedIndex].roundsWin} />
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
