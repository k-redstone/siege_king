import Link from 'next/link'

import { InfoCard } from '@/components/info/InfoCard'
import StreamerCard from '@/components/info/StreamerCard'
import ShortMatchInfo from '@/components/match/ShortMatchInfo'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  HOME_INFO,
  TOURNAMENT_INFO,
  SCREAM_INFO,
  STREAMER_INFO,
} from '@/constants/info'
import { GAPageView } from '@/hooks/useGAPageViesw'

export default function MainHome() {
  const groupA = STREAMER_INFO.filter((streamer) => streamer.tier === 'A')
  const groupB = STREAMER_INFO.filter((streamer) => streamer.tier === 'B')
  const groupC = STREAMER_INFO.filter((streamer) => streamer.tier === 'C')
  const groupD = STREAMER_INFO.filter((streamer) => streamer.tier === 'D')
  const groupE = STREAMER_INFO.filter((streamer) => streamer.tier === 'E')

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="from-primary/10 via-background to-muted/20 relative flex items-center justify-center bg-gradient-to-br py-20">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-foreground mb-3 text-3xl font-bold md:text-5xl">
            핑맨과 함께하는 <br />
            레인보우 식스 시즈 X:시즈킹
          </h1>
          <p className="text-muted-foreground mb-4 text-base md:text-lg">
            개선된 그래픽으로 업그레이드 된 레인보우 식스 시즈 X로 펼쳐지는
            시즈킹이 시작됩니다!
          </p>
          <Link href={'/info'}>
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              대회 소개 보기
            </Button>
          </Link>
        </div>
      </section>

      {/* info Section */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-4">
            {HOME_INFO.map((item) => (
              <InfoCard
                className="hover:border-primary/50 transition-colors"
                key={item.title}
              >
                <InfoCard.Value>{item.label}</InfoCard.Value>
                <InfoCard.Sub>{item.title}</InfoCard.Sub>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Streamer */}
      <section className="bg-muted/20 px-4 py-8">
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

      {/* Official Match Status */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-2xl font-bold">
            공식 경기 상황판
          </h2>
          <div className="flex flex-col gap-6">
            {/* Current/Next Match */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Current */}
              {/* <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">현재 진행 중</h3>
                    <span className="bg-primary/20 text-primary animate-pulse rounded-full px-3 py-1 text-xs font-semibold">
                      LIVE
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="mb-4 flex items-center justify-center gap-6">
                      <div className="text-center">
                        <div className="text-lg font-semibold">팀 이름 A</div>
                        <div className="text-primary text-3xl font-bold">
                          A팀 스코어
                        </div>
                      </div>
                      <div className="text-muted-foreground text-xl">VS</div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">팀 이름 B</div>
                        <div className="text-primary text-3xl font-bold">
                          B팀 스코어
                        </div>
                      </div>
                    </div>
                    <div className="text-muted-foreground text-sm">
                      결승전 - 맵: Villa
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 text-primary hover:bg-primary/10 mt-3 bg-transparent"
                    >
                      실시간 시청
                    </Button>
                  </div>
                </CardContent>
              </Card> */}

              {/* Next */}
              {/* <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">다음 경기</h3>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
                    예정
                  </span>
                </div>
                <div className="text-center">
                  <div className="mb-4 flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold">Team A</div>
                      <div className="text-muted-foreground text-2xl font-bold">
                        -
                      </div>
                    </div>
                    <div className="text-muted-foreground text-xl">VS</div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">Team B</div>
                      <div className="text-muted-foreground text-2xl font-bold">
                        -
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground mb-2 text-sm">
                    4강 1경기
                  </div>
                  <div className="text-muted-foreground text-xs">
                    7월 11일 20:00
                  </div>
                </div>
              </CardContent>
            </Card> */}
              {/* <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">다음 경기</h3>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
                    예정
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-primary mb-2 text-3xl font-semibold">
                    팀 경매
                  </div>
                  <div className="text-muted-foreground text-xs">
                    7월 05일 21:00
                  </div>
                </div>
              </CardContent>
            </Card> */}
            </div>

            {/* Tournament Bracket Preview */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">토너먼트 현황</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  {TOURNAMENT_INFO.map((match) => (
                    <ShortMatchInfo
                      key={match.title}
                      data={match}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Scream Bracket Preview */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">스크림 현황</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  {SCREAM_INFO.map((match) => (
                    <ShortMatchInfo
                      key={match.title}
                      data={match}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <GAPageView />
    </div>
  )
}
