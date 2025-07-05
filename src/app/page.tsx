import Link from 'next/link'

import { InfoCard } from '@/components/info/InfoCard'
import StreamerCard from '@/components/info/StreamerCard'
import ShortMatchInfo from '@/components/match/ShortMatchInfo'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  HOME_INFO,
  TOURNAMENT_INFO,
  STREAMER_INFO,
  AUCTION_INFO,
  AUCTION_FAIL_INFO,
} from '@/constants/info'
import { GAPageView } from '@/hooks/useGAPageViesw'
import { IMatchInfo } from '@/types/info'

export default async function MainHome() {
  const url = process.env.NEXT_PUBLIC_SCREAM_INFO_JSON_URL

  if (!url)
    throw new Error('환경변수(SCREAM_INFO_JSON_URL)가 설정되지 않았습니다.')

  const res = await fetch(url, { next: { revalidate: 10 } })
  const screamData: IMatchInfo[] = await res.json()

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

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card className="bg-card border-border">
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
                      <div className="text-lg font-semibold">7/5 21:00</div>
                      <div className="text-primary text-3xl font-bold">
                        경매 방송
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`https://chzzk.naver.com/live/0dcec72cd1033032a77dfced6c0c91f8`}
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 text-primary hover:bg-primary/10 mt-3 cursor-pointer bg-transparent"
                    >
                      실시간 시청
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
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
                  {screamData.map((match) => (
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

      {/* Auction Results Board */}
      <section className="bg-muted/20 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold">팀장 경매 결과판</h2>
            <p className="text-muted-foreground">
              경매 진행 순서대로 낙찰 결과
            </p>
          </div>

          <div className="mb-8 flex justify-center gap-x-5">
            <span
              className={`rounded-full bg-purple-500/20 px-3 py-1 text-sm font-semibold text-purple-400`}
            >
              핑맨 : 1000P
            </span>
            <span
              className={`rounded-full bg-orange-500/20 px-3 py-1 text-sm font-semibold text-orange-400`}
            >
              빅헤드 : 950P
            </span>
            <span
              className={`rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400`}
            >
              실프 : 1050P
            </span>
            <span
              className={`bg-primary/20 text-primary rounded-full px-3 py-1 text-sm font-semibold`}
            >
              뱅 : 1200P
            </span>
          </div>

          {/* Main Auction Results Table */}
          <Card className="bg-card border-border mb-8">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-border bg-muted/30 border-b">
                      <th className="px-4 py-4 text-left font-semibold">
                        그룹
                      </th>
                      <th className="px-4 py-4 text-left font-semibold">
                        선수명
                      </th>
                      <th className="px-4 py-4 text-left font-semibold">
                        경매결과
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {AUCTION_INFO.map((player, index) => (
                      <tr
                        key={index}
                        className="border-border/50 hover:bg-muted/10 border-b"
                      >
                        <td className="px-4 py-3">
                          <span
                            className={`text-primary inline-block h-8 w-8 rounded-full text-center text-sm leading-8 font-bold`}
                          >
                            {player.tier}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-medium">{player.name}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${player.color}`}
                          >
                            {player.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Failed Auctions */}
          <Card className="bg-muted/10 border-border mb-8">
            <CardContent className="p-4">
              <h3 className="text-muted-foreground mb-4 text-center text-lg font-semibold">
                유찰 경매
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-border/50 border-b">
                      <th className="text-muted-foreground px-4 py-3 text-left font-semibold">
                        그룹
                      </th>
                      <th className="text-muted-foreground px-4 py-3 text-left font-semibold">
                        선수명
                      </th>
                      <th className="text-muted-foreground px-4 py-3 text-left font-semibold">
                        경매결과
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {AUCTION_FAIL_INFO.map((player, index) => (
                      <tr
                        key={index}
                        className="border-border/30 border-b"
                      >
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block h-8 w-8 rounded-full text-center text-sm leading-8 font-bold ${
                              player.tier === 'C'
                                ? 'bg-muted/30 text-muted-foreground'
                                : 'bg-muted/30 text-muted-foreground'
                            }`}
                          >
                            {player.tier}
                          </span>
                        </td>
                        <td className="text-muted-foreground px-4 py-3 font-medium">
                          {player.name}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${player.color}`}
                          >
                            {player.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <GAPageView />
    </div>
  )
}
