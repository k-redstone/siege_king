import Image from 'next/image'

import { IStreamerInfo } from '@/types/info'

interface IStreamerCardProps {
  data: IStreamerInfo
}

export default function StreamerCard({ data }: IStreamerCardProps) {
  return (
    <div className="border-primary flex flex-col border-2">
      <div className="relative">
        <div className="bg-primary text-background absolute right-1 w-4 rounded-b-2xl text-center font-bold">
          <span>{data.tier}</span>
        </div>
      </div>
      <Image
        src={data.profileUrl}
        alt={data.nickname}
        width={120}
        height={120}
        unoptimized
      />
      <div className="relative">
        <div className="bg-primary absolute left-1/2 h-0.5 w-10 -translate-x-1/2 md:h-1 md:w-15"></div>
      </div>
      <div className="bg-background py-1">
        <p className="text-primary text-center text-sm font-semibold lg:text-lg">
          {data.nickname}
        </p>
      </div>
    </div>
  )
}
