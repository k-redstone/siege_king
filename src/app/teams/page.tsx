import { Users, Crown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import StreamerCard from '@/components/info/StreamerCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { STREAMER_INFO, TEAM_INFO } from '@/constants/info'
import { GAPageView } from '@/hooks/useGAPageViesw'

export default function TeamsPage() {
  const groupA = STREAMER_INFO.filter((streamer) => streamer.tier === 'A')
  const groupB = STREAMER_INFO.filter((streamer) => streamer.tier === 'B')
  const groupC = STREAMER_INFO.filter((streamer) => streamer.tier === 'C')
  const groupD = STREAMER_INFO.filter((streamer) => streamer.tier === 'D')
  const groupE = STREAMER_INFO.filter((streamer) => streamer.tier === 'E')

  return (
    <div className="bg-background text-foreground py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            참가 스트리머 및 팀 소개
          </h1>
        </div>

        {/* Streamer */}
        <section className="px-4 py-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold">참가 스트리머</h2>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="border-primary flex flex-col border">
                <div className="px-4 py-1">
                  <p className="text-primary text-xl font-extrabold">
                    TEAM LEADER LINE-UP
                  </p>
                </div>
                <div className="flex justify-center gap-4 p-2">
                  {groupA.map((streamer) => (
                    <StreamerCard
                      key={streamer.hashId}
                      data={streamer}
                    />
                  ))}
                </div>
              </div>

              <div className="border-primary flex flex-col border">
                <div className="px-4 py-1">
                  <p className="text-primary text-xl font-extrabold">
                    MEMBER LINE-UP
                  </p>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex justify-center p-2">
                    <div className="bg-primary flex items-center justify-center">
                      <span className="px-1 text-2xl font-extrabold text-black">
                        B
                      </span>
                    </div>
                    {groupB.map((streamer) => (
                      <StreamerCard
                        key={streamer.hashId}
                        data={streamer}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center p-2">
                    <div className="bg-primary flex items-center justify-center">
                      <span className="px-1 text-2xl font-extrabold text-black">
                        C
                      </span>
                    </div>
                    {groupC.map((streamer) => (
                      <StreamerCard
                        key={streamer.hashId}
                        data={streamer}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center p-2">
                    <div className="bg-primary flex items-center justify-center">
                      <span className="px-1 text-2xl font-extrabold text-black">
                        D
                      </span>
                    </div>
                    {groupD.map((streamer) => (
                      <StreamerCard
                        key={streamer.hashId}
                        data={streamer}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center p-2">
                    <div className="bg-primary flex items-center justify-center">
                      <span className="px-1 text-2xl font-extrabold text-black">
                        E
                      </span>
                    </div>
                    {groupE.map((streamer) => (
                      <StreamerCard
                        key={streamer.hashId}
                        data={streamer}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-4 py-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold">팀 소개</h2>
            </div>
          </div>
          <div className="space-y-12">
            {TEAM_INFO.map((team) => (
              <Card
                key={team.teamName}
                className="bg-card border-border py-4"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                          <Users className="text-primary h-6 w-6" />
                        </div>
                        {team.teamName}
                      </CardTitle>
                      {/* <p className="text-muted-foreground mt-2">
                        {team.description}
                      </p> */}
                    </div>
                    <div className="text-right">
                      <div className="text-muted-foreground text-sm">
                        팀 리더
                      </div>
                      <div className="flex items-center gap-1 font-semibold">
                        <Crown className="text-primary h-4 w-4" />
                        {team.leader}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {team.member.map((playerName) => {
                      const playerData = STREAMER_INFO.find(
                        (streamer) => streamer.nickname === playerName,
                      )
                      if (playerData === undefined) {
                        return
                      }
                      return (
                        <Card
                          key={playerData.hashId}
                          className="bg-muted/30 border-border/50"
                        >
                          <CardContent className="p-4">
                            <div className="text-center">
                              <div className="bg-primary/20 mx-auto mb-3 h-16 w-16 overflow-hidden rounded-full">
                                <Image
                                  src={playerData.profileUrl}
                                  alt={playerData.nickname}
                                  className="h-full w-full object-cover"
                                  width={64}
                                  height={64}
                                  unoptimized
                                />
                              </div>
                              <h4 className="mb-1 text-sm font-semibold">
                                {playerData.nickname}
                              </h4>
                              <div className="mb-2 flex items-center justify-center gap-1">
                                <span className="bg-primary/20 text-primary rounded px-2 py-1 text-xs">
                                  {playerData.tier} 티어
                                </span>
                              </div>
                              <Link
                                target="_blank"
                                className="cursor-pointer"
                                href={`https://chzzk.naver.com/live/${playerData.hashId}`}
                                prefetch={false}
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full cursor-pointer text-xs"
                                >
                                  라이브 보러가기
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <GAPageView />
    </div>
  )
}
