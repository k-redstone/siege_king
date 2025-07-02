import type { Metadata } from 'next'

import { getMetadata } from '@/constants/metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata({
    title: '매치 상세기록',
    description: '토너먼트 및 스크림의 상세 기록을 확인하세요.',
    path: '/match-details',
  })
}

export default function MatchDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
