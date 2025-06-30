import { Metadata } from 'next'

interface IGenerateMetadataProps {
  title?: string
  description?: string
  path?: string
}

export const META = {
  title: '2025 시즈킹',
  siteName: 'r6.saebaldong.kr',
  description: '핑맨과 함께하는 레인보우 식스 시즈 X: 시즈킹',
  keyword: [
    '새발동',
    '치지직',
    '유튜브',
    '통계',
    '스트리머',
    '레식',
    '레인보우식스 시즈',
    '시즈킹',
    '핑맨',
  ],
  url: 'https://r6.saebaldong.kr',
  naverVerification: '6fc81db361f091c43bd0e96750c8ecd93cd5badf',
  ogImage: '/opengraph-image.PNG',
} as const

export const getMetadata = (metadataProps?: IGenerateMetadataProps) => {
  const { title, description, path } = metadataProps || {}

  const TITLE = title ? `2025 시즈킹 | ${title}` : META.title
  const DESCRIPTION = description || META.description
  const PAGE_URL = path ? path : ''

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    robots: {
      index: true,
      follow: true,
    },

    // og
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: META.ogImage,
      },
    },

    // 트위터
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: META.ogImage,
      },
    },
  }

  return metadata
}
