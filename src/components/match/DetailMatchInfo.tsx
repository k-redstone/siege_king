import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { IDetailMatchInfo } from '@/types/info'

interface IDetailMatchInfoProps {
  match: IDetailMatchInfo
}

export default function DetailMatchInfo({ match }: IDetailMatchInfoProps) {
  return (
    <Card className={`bg-card border-border`}>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-muted-foreground text-sm">
              {match.date} {match.time}
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                match.isScrim
                  ? 'bg-orange-500/20 text-orange-400'
                  : match.status === 'done'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400'
              }`}
            >
              {match.stage} - {match.status}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="mb-1 text-lg font-semibold">{match.teamA}</div>
              <div className="text-primary text-3xl font-bold">
                {match.scoreA}
              </div>
            </div>
            <div className="text-muted-foreground text-xl">VS</div>
            <div className="text-center">
              <div className="mb-1 text-lg font-semibold">{match.teamB}</div>
              <div className="text-primary text-3xl font-bold">
                {match.scoreB}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-muted-foreground mb-2 text-sm">맵 풀</div>
            <div className="flex max-w-48 flex-wrap gap-1">
              {match.maps.map((map, index) => (
                <span
                  key={index}
                  className="bg-muted rounded px-2 py-1 text-xs"
                >
                  {map}
                </span>
              ))}
            </div>
            <Link href={`/match-details/${match.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 cursor-pointer"
              >
                상세 보기
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
