import { IMatchInfo } from '@/types/info'

interface IShortMatchInfo {
  data: IMatchInfo
}

export default function ShortMatchInfo({ data }: IShortMatchInfo) {
  if (data.status === 'done')
    return (
      <div className="bg-primary/10 border-primary/20 rounded border p-3 text-center">
        <div className="text-primary mb-1 text-sm">{data.title}</div>
        <div className="text-sm font-semibold">{data.label}</div>
        <div className="text-muted-foreground text-xs">{data.sub}</div>
      </div>
    )
  if (data.status === 'scheduled')
    return (
      <div className="rounded border border-blue-500/20 bg-blue-500/10 p-3 text-center">
        <div className="mb-1 text-sm text-blue-400">{data.title}</div>
        <div className="text-sm font-semibold">{data.label}</div>
        <div className="text-muted-foreground text-xs">{data.sub}</div>
      </div>
    )
  if (data.status === 'live')
    return (
      <div className="bg-primary/20 border-primary/40 rounded border p-3 text-center">
        <div className="text-primary relative mb-1 gap-x-2 text-sm">
          <span>{data.title}</span>
          <span className="text-primary absolute right-0 animate-pulse rounded-full bg-white px-3 py-1 text-xs font-semibold">
            LIVE
          </span>
        </div>
        <div className="text-sm font-semibold">{data.label}</div>
        <div className="text-muted-foreground text-xs">{data.sub}</div>
      </div>
    )
}
