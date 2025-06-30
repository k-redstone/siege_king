import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-card border-border border-t px-4 py-6">
      <div className="mx-auto max-w-6xl text-center">
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <p className="text-muted-foreground text-sm">
              틀린 정보 제보: che06189@gmail.com
            </p>
          </div>
          <div className="text-muted-foreground flex flex-col gap-y-1 text-sm">
            <p>Family Site</p>

            <Link
              prefetch={false}
              className="text-end"
              href={'https://saebaldong.kr/'}
            >
              - 새발동
            </Link>
            <Link
              prefetch={false}
              className="text-end"
              href={'https://lol.saebaldong.kr/'}
            >
              - 낙오전
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
