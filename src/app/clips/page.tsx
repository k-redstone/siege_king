import ClipPreviewItem from '@/components/clip/ClipPreviewItem'
import { GAPageView } from '@/hooks/useGAPageViesw'
import { IClip } from '@/types/clip'

export default async function ClipsPage() {
  const url = process.env.NEXT_PUBLIC_CLIPS_JSON_URL

  if (!url) throw new Error('환경변수(CLIPS_JSON_URL)가 설정되지 않았습니다.')

  const res = await fetch(url, { next: { revalidate: 10 } })
  const data: IClip[] = await res.json()

  return (
    <div className="bg-background text-foreground py-10">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">클립</h1>
          <p className="text-muted-foreground text-base">
            참여 스트리머의 치지직 클립 중 `레인보우 식스 시즈` 태그가 붙어있는
            클립들만 보여줍니다!
          </p>
          <p className="text-muted-foreground text-base">
            * 오전 10시를 기준으로 클립이 업데이트될 예정입니다.
          </p>
          <p className="text-muted-foreground text-base">
            * 아직 페이지 최적화를 진행하지 않아 로딩이 길어지는 점 죄송합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data
            .toSorted((a, b) => b.createdDate.localeCompare(a.createdDate))
            .map((clip) => (
              <ClipPreviewItem
                key={clip.clipUID}
                data={clip}
              />
            ))}
        </div>
      </div>
      <GAPageView />
    </div>
  )
}
