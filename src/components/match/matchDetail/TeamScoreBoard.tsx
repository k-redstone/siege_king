import Image from 'next/image'

import { STREAMER_INFO } from '@/constants/info'
import { ISetTeamResult } from '@/types/info'

interface ITeamScoreBoardProps {
  type?: 'teamA' | 'teamB'
  setData: ISetTeamResult
}

const TEAM_COLOR = {
  teamA: {
    text: 'text-blue-400',
    leftBorder: 'border-l-blue-400',
    borderSub: 'border-blue-400/30',
    bgFrom: 'from-blue-400/15',
    bgVia: 'via-blue-400/8',
    bgActive: 'from-blue-400/10',
  },
  teamB: {
    text: 'text-orange-500',
    leftBorder: 'border-l-orange-500',
    borderSub: 'border-orange-500/30',
    bgFrom: 'from-orange-500/15',
    bgVia: 'via-orange-500/8',
    bgActive: 'from-orange-500/10',
  },
} as const

export default function TeamScoreBoard({
  type,
  setData,
}: ITeamScoreBoardProps) {
  const color = TEAM_COLOR[type ?? 'teamA']
  return (
    <div className="overflow-x-auto">
      <div
        className={`min-w-[1100px] rounded-lg border-l-4 ${color.leftBorder} bg-gradient-to-r ${color.bgFrom} ${color.bgVia} to-transparent p-4`}
      >
        <div className="mb-6 flex items-center gap-3">
          {/* 팀 이미지 자리 */}
          <div className="h-10 w-10 rounded-full bg-white" />
          <h3 className={`text-xl font-bold ${color.text}`}>{setData.name}</h3>
        </div>

        <div className="space-y-2">
          <div
            className={`text-muted-foreground grid grid-cols-12 gap-2 border-b ${color.borderSub} pb-2 text-xs font-semibold`}
          >
            <div className="col-span-2">선수명</div>
            <div className="col-span-1 text-center">K/D</div>
            <div className="col-span-1 text-center">K</div>
            <div className="col-span-1 text-center">D</div>
            <div className="col-span-1 text-center">A</div>
            <div className="col-span-5">라운드별 오퍼레이터</div>
          </div>

          {setData.players.map((player) => {
            const streamer = STREAMER_INFO.find(
              (streamer) => streamer.nickname === player.name,
            )

            if (!streamer) return

            return (
              <div
                key={player.name}
                className={`grid grid-cols-12 items-center gap-2 rounded-lg bg-gradient-to-r ${color.bgActive} px-2 py-3 text-sm`}
              >
                <div className="col-span-2 flex items-center gap-2">
                  <Image
                    src={streamer.profileUrl}
                    alt={player.name}
                    className="h-6 w-6 rounded-full"
                    width={24}
                    height={24}
                    unoptimized
                  />
                  <div className="flex items-center gap-1 font-semibold">
                    {player.name}
                  </div>
                </div>
                <div
                  className={`col-span-1 text-center font-bold ${color.text}`}
                >
                  {(player.kills / player.deaths).toFixed(2)}
                </div>
                <div className="text-muted-foreground col-span-1 text-center font-bold">
                  {player.kills}
                </div>
                <div className="text-muted-foreground col-span-1 text-center font-bold">
                  {player.deaths}
                </div>
                <div className="text-muted-foreground col-span-1 text-center font-bold">
                  {player.assists}
                </div>
                <div className="col-span-6 flex gap-1">
                  {player.operators.map((op, opIndex) => (
                    <div
                      key={opIndex}
                      title={`라운드 ${opIndex + 1}: ${op}`}
                    >
                      <Image
                        src={`/assets/${op}.svg`}
                        alt={player.name}
                        width={30}
                        height={30}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
