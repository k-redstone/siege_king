'use client'

import { Play, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { STREAMER_INFO } from '@/constants/info'
import useRelativeTime from '@/hooks/useRelativeTime'
import { toMinuteSecond } from '@/lib/utils'
import { IClip } from '@/types/clip'

interface IClipPreviewItemProps {
  data: IClip
}

export default function ClipPreviewItem({ data }: IClipPreviewItemProps) {
  const relativeTime = useRelativeTime(data.createdDate)
  const streamer =
    STREAMER_INFO.find((streamer) => streamer.hashId === data.ownerChannelId) ||
    null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-card border-border hover:border-primary/50 group cursor-pointer transition-all duration-200">
          {/* Thumbnail */}
          <div
            className="relative overflow-hidden rounded-t-lg"
            style={{ paddingBottom: '56.25%' }}
          >
            <Image
              src={`${data.thumbnailImageUrl}?type=o280x500_blur`}
              alt={data.clipTitle}
              fill
              unoptimized
              className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/20">
              <div className="rounded-full bg-black/60 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <Play
                  className="h-6 w-6 text-white"
                  fill="white"
                />
              </div>
            </div>
            <div className="absolute right-2 bottom-2 flex items-center gap-1 rounded bg-black/80 px-2 py-1 text-xs text-white">
              <Clock className="h-3 w-3" />
              {toMinuteSecond(data.duration)}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Title */}
            <h3 className="group-hover:text-primary mb-2 line-clamp-2 min-h-[2.8em] text-sm font-semibold transition-colors">
              {data.clipTitle}
            </h3>

            {/* Streamer Info */}
            {streamer && (
              <div className="flex items-center gap-2">
                <Image
                  width={24}
                  height={24}
                  src={streamer.profileUrl}
                  alt={streamer.nickname}
                  unoptimized
                  className="rounded-full"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {streamer.nickname}
                  </p>
                </div>
                <span className="text-muted-foreground text-xs">
                  {relativeTime}
                </span>
              </div>
            )}

            {/* Stats */}
            {/* <div className="text-muted-foreground mb-3 flex items-center justify-end text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {data.readCount}
            </div>
          </div>
          <span>{getRelativeTime('2025-07-01 18:30:59')}</span>
        </div> */}
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-x-auto sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-y-4 pt-2">
            <p>{data.clipTitle}</p>
            <p className="text-muted-foreground text-xs">{relativeTime}</p>
          </DialogTitle>
          <div
            className="relative overflow-hidden"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              title={data.clipTitle}
              src={`https://chzzk.naver.com/embed/clip/${data.clipUID}`}
              allow="autoplay; clipboard-write; web-share"
              allowFullScreen
            />
          </div>
          <div className="my-3 flex">
            {streamer && (
              <Link
                href={`https://chzzk.naver.com/${data.ownerChannelId}`}
                target="_blank"
                className="group flex cursor-pointer items-center gap-2"
              >
                <Image
                  width={24}
                  height={24}
                  src={streamer.profileUrl}
                  alt={streamer.nickname}
                  unoptimized
                  className="rounded-full"
                />
                <div>
                  <span className="truncate text-sm font-medium group-hover:underline">
                    {streamer.nickname}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </DialogHeader>
        <DialogFooter className="sm:hidden">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="cursor-pointer"
            >
              닫기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
