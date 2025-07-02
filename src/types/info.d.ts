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

export interface ISetPlayerStats {
  name: string
  kills: number
  deaths: number
  assists: number
  operators: readonly string[]
}

export interface ISetTeamResult {
  name: string
  score: number
  players: ISetPlayerStats[]
}

export interface IMatchSetResult {
  setNumber: number
  map: string
  roundsWin: string[]
  teamA: ISetTeamResult
  teamB: ISetTeamResult
}

export interface IDetailMatchInfo {
  id: number
  date: string
  time: string
  stage: string
  teamA: string
  teamB: string
  scoreA: number
  scoreB: number
  status: TMatchStatus
  maps: readonly string[]
  isScrim: boolean
  sets?: IMatchSetResult[]
}
