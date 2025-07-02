import { Users } from 'lucide-react'
// import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import { IDetailMatchInfo } from '@/types/info'

interface IMatchOverviewCardProps {
  matchData: IDetailMatchInfo
}

export default function MatchOverviewCard({
  matchData,
}: IMatchOverviewCardProps) {
  return (
    <Card className="from-card via-card to-card border-border mb-8 bg-gradient-to-r">
      <CardContent className="p-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <Users className="mx-auto mb-3 h-16 w-16 rounded-full" />
            {/* <img
              src={matchData.teamA.logo || '/placeholder.svg'}
              alt={matchData.teamA.name}
              className="mx-auto mb-3 h-16 w-16 rounded-full"
              /> */}
            <h2 className="mb-2 text-2xl font-bold">{matchData.teamA}</h2>
            <div className="text-primary text-4xl font-bold">
              {matchData.scoreA}
            </div>
          </div>

          <div className="px-8 text-center">
            <div className="text-muted-foreground mb-2 text-xl">VS</div>
          </div>

          <div className="flex-1 text-center">
            <Users className="mx-auto mb-3 h-16 w-16 rounded-full" />
            {/* <img
              src={matchData.teamB.logo || '/placeholder.svg'}
              alt={matchData.teamB.name}
              className="mx-auto mb-3 h-16 w-16 rounded-full"
            /> */}
            <h2 className="mb-2 text-2xl font-bold">{matchData.teamB}</h2>
            <div className="text-primary text-4xl font-bold">
              {matchData.scoreB}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
