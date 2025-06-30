export type TMatchStatus = 'done' | 'scheduled' | 'live'
export type TMatchType = 'tournament' | 'scream'

export type TStreamerTier = 'A' | 'B' | 'C' | 'D' | 'E'

export interface IBaseInfo {
  title: string
  label: string
}

export interface IMatchInfo extends IBaseInfo {
  sub: string
  status: TMatchStatus
}

export interface IStreamerInfo {
  hashId: string
  nickname: string
  profileUrl: string
  tier: TStreamerTier
}
