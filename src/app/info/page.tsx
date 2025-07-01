import { Trophy, Calendar, Target, Users, Award, Gamepad2 } from 'lucide-react'

import { InfoCard } from '@/components/info/InfoCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function InfoPage() {
  return (
    <div className="bg-background text-foreground py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">대회 정보</h1>
          <p className="text-primary">
            틀린 대회 정보가 있다면 제보 부탁드립니다!
          </p>
        </div>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">대회 개요</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard>
              <InfoCard.Icon>
                <Trophy className="text-primary mx-auto h-12 w-12" />
              </InfoCard.Icon>
              <InfoCard.Title>총 상금</InfoCard.Title>
              <InfoCard.Value>₩10,000,000</InfoCard.Value>
            </InfoCard>
            <InfoCard>
              <InfoCard.Icon>
                <Users className="text-primary mx-auto h-12 w-12" />
              </InfoCard.Icon>
              <InfoCard.Title>참가 스트리머 / 팀</InfoCard.Title>
              <InfoCard.Value>20명 / 4팀</InfoCard.Value>
            </InfoCard>
            <InfoCard>
              <InfoCard.Icon>
                <Gamepad2 className="text-primary mx-auto h-12 w-12" />
              </InfoCard.Icon>
              <InfoCard.Title>대회 방식</InfoCard.Title>
              <InfoCard.Value>싱글 토너먼트 Bo3</InfoCard.Value>
            </InfoCard>
            <InfoCard>
              <InfoCard.Icon>
                <Calendar className="text-primary mx-auto h-12 w-12" />
              </InfoCard.Icon>
              <InfoCard.Title>대회 기간</InfoCard.Title>
              <InfoCard.Value>7/5 ~ 7/12</InfoCard.Value>
            </InfoCard>
          </div>
        </section>

        {/* Tournament Rules */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">대회 규칙</h2>
          <div className="flex flex-col gap-y-4">
            <Card className="bg-card border-border py-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="text-primary h-5 w-5" />
                  경기 형식 (프로경기 룰)
                </CardTitle>
                <p className="text-primary">틀린 룰이 있다면 꼭 알려주세요!</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 7포인트 선승제</li>
                  <li>• 6라운드마다 공수 교대</li>
                  <li>• 밴픽 시스템 적용</li>
                  <li>• 연장시 8포인트 선승제 (불확실...)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border py-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="text-primary h-5 w-5" />
                  경기 설정
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 게임 시간 10초간 스폰킬 & 아웃플레이 금지</li>
                  <li>• 팀장 오퍼레이터 제한</li>
                  <ul className="pl-4">
                    <li>- 1배율만 사용 가능</li>
                    <li>- 수비때 캐릭 제한은 없지만 앵커만 가능(로밍 금지)</li>
                    <li>- 3속 대원 사용금지</li>
                  </ul>
                  <li>• 경기 맵</li>
                  <ul className="pl-4">
                    <li>- 오리건 / 빌라 / 해안선</li>
                  </ul>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border py-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="text-primary h-5 w-5" />
                  경기별 맵 배정
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-sm">
                  <li>
                    • 4강 1경기 <br />
                    <span className="pl-3">
                      (1 Set: 해안선 / 2 Set: 오리건 / 3 Set: 빌라)
                    </span>
                  </li>
                  <li>
                    • 4강 2경기 <br />
                    <span className="pl-3">
                      (1 Set: 오리건 / 2 Set: 빌라 / 3 Set: 해안선)
                    </span>
                  </li>
                  <li>
                    • 3, 4위전 <br />
                    <span className="pl-3">
                      (1 Set: 빌라 / 2 Set: 해안선 / 3 Set: 오리건)
                    </span>
                  </li>
                  <li>
                    • 결승전 <br />
                    <span className="pl-3">
                      (1 Set: 오리건 / 2 Set: 해안선 / 3 Set: 빌라)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Prize Distribution */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">상금 분배</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <Award className="text-primary mx-auto mb-2 h-8 w-8" />
                  <div className="text-lg font-bold">1위</div>
                  <div className="text-primary font-bold">₩5,000,000</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <Award className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
                  <div className="text-lg font-bold">2위</div>
                  <div className="text-foreground font-bold">₩2,500,000</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 text-center">
                  <Award className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
                  <div className="text-lg font-bold">3위</div>
                  <div className="text-foreground font-bold">₩1,500,000</div>
                </div>
                <div className="bg-muted/20 rounded-lg p-4 text-center">
                  <Award className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
                  <div className="text-lg font-bold">4위</div>
                  <div className="text-foreground font-bold">₩1,000,000</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Schedule */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">대회 일정</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-primary/20 flex items-center gap-4 rounded p-3">
                  <div className="text-primary text-sm font-semibold">
                    7월 5일
                  </div>
                  <div className="text-sm">팀 경매</div>
                </div>
                <div className="bg-primary/20 flex items-center gap-4 rounded p-3">
                  <div className="text-primary text-sm font-semibold">
                    7월 7일 ~ 7월 10일
                  </div>
                  <div className="text-sm">공식 스크림</div>
                </div>
                <div className="bg-primary/20 flex items-center gap-4 rounded p-3">
                  <div className="text-primary text-sm font-semibold">
                    7월 11일
                  </div>
                  <div className="text-sm">4강전</div>
                </div>
                <div className="bg-primary/20 flex items-center gap-4 rounded p-3">
                  <div className="text-primary text-sm font-semibold">
                    7월 12일
                  </div>
                  <div className="text-sm font-semibold">결승전 및 3/4위전</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
