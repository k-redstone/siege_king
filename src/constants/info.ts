import { IBaseInfo, IMatchInfo, IStreamerInfo } from '@/types/info'

export const HOME_INFO: IBaseInfo[] = [
  { title: '참가 스트리머 및 팀', label: '20명 / 4팀' },
  { title: '총 상금', label: '₩1,000만 원' },
  { title: '대회 기간', label: '7/5일 ~ 7/12일' },
  { title: '팀 선정 방식', label: '팀장 경매제' },
] as const

export const TOURNAMENT_INFO: IMatchInfo[] = [
  {
    title: '4강 1경기',
    label: '예정',
    sub: '7/11 20:00',
    status: 'scheduled',
  },
  {
    title: '4강 2경기',
    label: '예정',
    sub: '7/11 20:00',
    status: 'scheduled',
  },
  {
    title: '3/4위전',
    label: '예정',
    sub: '7/12 20:00',
    status: 'scheduled',
  },
  {
    title: '결승전',
    label: '예정',
    sub: '7/12 20:00',
    status: 'scheduled',
  },
]

export const TEAM_INFO = [
  {
    teamName: '핑맨팀',
    teamImage: 'test',
    leader: '핑맨',
    member: ['핑맨', '너불', '미도미도 마요', '디디디용', '채현찌'],
  },
  {
    teamName: '빅헤드팀',
    teamImage: 'test',
    leader: '빅헤드',
    member: ['빅헤드', '댕균', '냐미', '백곰파', '하네'],
  },
  {
    teamName: '실프팀',
    teamImage: 'test',
    leader: '실프',
    member: ['실프', '금사향', '임나은', '담유이', '엘리'],
  },
  {
    teamName: '뱅팀',
    teamImage: 'test',
    leader: '뱅',
    member: ['뱅', '푸린', '아구이뽀', '이로나묭 치카', '멋사'],
  },
]

// 핑맨
// bg-purple-500/20 text-purple-400

// 빅헤드
// bg-orange-500/20 text-orange-400

// 실프
// bg-blue-500/20  text-blue-400

// 뱅
// bg-primary/20 text-primary

export const AUCTION_INFO = [
  {
    tier: 'B',
    name: '댕균',
    result: '빅헤드 (220P)',
    team: '빅헤드팀',
    color: 'bg-orange-500/20 text-orange-400',
  },
  {
    tier: 'C',
    name: '미도미도 마요',
    result: '유찰',
    team: '',
    color: '',
  },
  {
    tier: 'D',
    name: '담유이',
    result: '실프 (30P)',
    team: '실프팀',
    color: 'bg-blue-500/20  text-blue-400',
  },
  {
    tier: 'D',
    name: '디디디용',
    result: '핑맨 (300P)',
    team: '핑맨팀',
    color: 'bg-purple-500/20 text-purple-400',
  },
  {
    tier: 'B',
    name: '금사향',
    result: '실프 (200P)',
    team: '실프팀',
    color: 'bg-blue-500/20  text-blue-400',
  },
  {
    tier: 'E',
    name: '엘리',
    result: '실프 (85P)',
    team: '실프팀',
    color: 'bg-blue-500/20  text-blue-400',
  },
  {
    tier: 'D',
    name: '이로나묭 치카',
    result: '뱅 (30P)',
    team: '뱅팀',
    color: 'bg-primary/20 text-primary',
  },
  {
    tier: 'C',
    name: '아구이뽀',
    result: '뱅 (300P)',
    team: '뱅팀',
    color: 'bg-primary/20 text-primary',
  },
  {
    tier: 'D',
    name: '백곰파',
    result: '빅헤드 (자동낙찰)',
    team: '빅헤드팀',
    color: 'bg-orange-500/20 text-orange-400',
  },
  {
    tier: 'B',
    name: '너불',
    result: '유찰',
    team: '',
    color: '',
  },
  {
    tier: 'C',
    name: '임나은',
    result: '실프 (730P)',
    team: '실프팀',
    color: 'bg-blue-500/20 text-blue-400',
  },
  {
    tier: 'C',
    name: '냐미',
    result: '빅헤드 (50P)',
    team: '빅헤드팀',
    color: 'bg-orange-500/20 text-orange-400',
  },
  {
    tier: 'B',
    name: '푸린',
    result: '뱅 (165P)',
    team: '뱅팀',
    color: 'bg-primary/20 text-primary',
  },
  {
    tier: 'E',
    name: '멋사',
    result: '뱅 (700P)',
    team: '뱅팀',
    color: 'bg-primary/20 text-primary',
  },
  {
    tier: 'E',
    name: '채현찌',
    result: '핑맨 (685P)',
    team: '핑맨팀',
    color: 'bg-purple-500/20 text-purple-400',
  },
  {
    tier: 'E',
    name: '하네',
    result: '빅헤드 (자동낙찰)',
    team: '빅헤드팀',
    color: 'bg-orange-500/20 text-orange-400',
  },
]

export const AUCTION_FAIL_INFO = [
  {
    tier: 'C',
    name: '미도미도 마요',
    result: '핑맨팀 (자동 낙찰)',
    color: 'bg-muted/20 text-muted-foreground',
  },
  {
    tier: 'B',
    name: '너불',
    result: '핑맨팀 (자동 낙찰)',
    color: 'bg-muted/20 text-muted-foreground',
  },
]

export const STREAMER_INFO: IStreamerInfo[] = [
  {
    hashId: '0dcec72cd1033032a77dfced6c0c91f8',
    nickname: '핑맨',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDAxMTZfMTUy/MDAxNzA1MzQ2MzAyMTk1.Yx7vkk0J_zrRwwO1phw9a4Nv3gdbJVdfA6SiEBdC3fwg.KoyqttnEWA7pEkXlclRKnLKtNA1VK5Sg0AmJ6mPh3I4g.PNG/e25eceea-dc89-4efa-9dba-3424ff63b636-profile_image-300x300.png?type=f120_120_na',
    tier: 'A',
  },
  {
    hashId: 'ca1850b2eceb7f86146695fd9bb9cefc',
    nickname: '빅헤드',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyMzEyMTlfMzYg/MDAxNzAyOTcwODY1OTUy.1hHkqzH-zyEhyW2EJNfj1q6r7XTDeQNNqL_owQQ6AFwg.mCjDaHbdF0jjfhB2PvFuFJLxL9jQ-PV0oSLLDRXoGLUg.GIF/popHEAD.gif?type=f120_120_na',
    tier: 'A',
  },
  {
    hashId: 'd6fc3283fe0938bca8d65093e4c2bb94',
    nickname: '실프',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDEwMThfNzgg/MDAxNzI5MjM1Mjc1NTYy.Qblw8-SDtgX1cgiv-HKFasWbX7Ynr5j-HGPmDyhi9vwg.g5XvfcEXVrIRHCIFt-gU1JjrkXusKOyhE9fb7r7qkJ0g.JPEG/%EB%A8%80%EB%8B%98_%ED%8C%AC%EC%95%84%ED%8A%B8.jpg?type=f120_120_na',
    tier: 'A',
  },
  {
    hashId: '9d4f299325b38f9183bdb90b8849d912',
    nickname: '뱅',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNTA0MTFfMTU0/MDAxNzQ0MzA0NTg5MjE5.6toa4kRwjhkudPEPzM5M08cuq8RfU2Ptn9Wg6I3YR4Ig.bgsdMNxOyWwzXIksUTuqR-Wsl4RIKRsjj46lxWMrtpsg.PNG/558C0E86-BEE1-4CB1-8814-F503574FD862-1744304587.png?type=f120_120_na',
    tier: 'A',
  },
  {
    hashId: 'af3323d30e11ae42c39d7203c7e07fa2',
    nickname: '너불',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDAyMjlfMjcz/MDAxNzA5MjE0NDYwMzEy.dQvgcBdhcAdX8cAx0YgzS0YMrakV3Z4ss6Mz1b5DfUcg.yuS4A_DBGE7z1BGuBpEyZnE7FnQUx1jk1VhBhkTpHBYg.JPEG/IMG_3079.jpg?type=f120_120_na',
    tier: 'B',
  },
  {
    hashId: '75bd327f6ba6f57106c79fe3f2c3d19f',
    nickname: '푸린',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyMzEyMTlfNTQg/MDAxNzAyOTY4NDIzNjE0.GN9Dk4gQE0lIL2pfJ1mIz1VnwxaC6aCDFP7XTumaskkg.HwHFCCnnrnHiJfbq6zogmkKyyr7Y4oiaLdisS7TgAXAg.PNG/%ED%91%B8%EB%A6%B0.png?type=f120_120_na',
    tier: 'B',
  },
  {
    hashId: '5f800579267362c952f76f3c6fe695b2',
    nickname: '금사향',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDAxMTRfMjcw/MDAxNzA1MTkxNTU3NDc4.x1rCWsOynlDIT3N_1BLWbw5XDGcLho1UmOWO1js0paQg.u36jm24pj_pXZbpZA6W-paJKHef3jeaqfYt1qv7CnB4g.JPEG/NNG-17051915570515810076277150875551.jpg?type=f120_120_na',
    tier: 'B',
  },
  {
    hashId: '415d3f63dab9ca7fe8ab4eb3c55b856b',
    nickname: '댕균',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNTAzMDFfMjAz/MDAxNzQwNzYyMjYwMjc2.b5k32_Ntlk9LE9wuOFvz5HJ-rHt-x6w6vUDlwm00QNsg.CAFtC3BVW5gpL6kEPr5ok_k93gn8fPyCAlBpEliq8Zwg.JPEG/NNG-17407622597725899804339539473752.jpg?type=f120_120_na',
    tier: 'B',
  },
  {
    hashId: 'e112cad680f895d13769c43f56171b4a',
    nickname: '아구이뽀',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyMzEyMTlfMTI2/MDAxNzAyOTYwMDM3MDky.ezZG21epLypBugWGsVvGe0aho1ZcROtrF8N1AVogwfUg.7kIgNGVT5pH95Babbx7x4ONEV43PlfrlRmzLtrCWNvsg.PNG/%EB%85%BC%EB%85%BC%EB%8B%98%ED%94%84%EB%A1%9C%ED%95%84%EB%85%B8%EB%B0%B0%EA%B2%BD.png?type=f120_120_na',
    tier: 'C',
  },
  {
    hashId: '0de024a1ca4a64f1a23a95ff9eeee5a5',
    nickname: '임나은',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyMzEyMjFfMjE4/MDAxNzAzMTQwNTQ4NDEz.l-4zi6piSfpGzSTZNq_V7192BUVrOpkHUZsqIDW8lLgg.cqAuLaz96FEuvBTNQF3NovipkisvMs2As5G5MxjaZTcg.PNG/1%EC%9E%84%EB%82%98%EC%9D%80-2.png?type=f120_120_na',
    tier: 'C',
  },
  {
    hashId: '051f034c064edd60d48dee2a47bc0790',
    nickname: '미도미도 마요',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDExMjBfMjUx/MDAxNzMyMDg4MDk4MDY2.E4BupP-K7bW5YXQUGuNVXn-mY57F76bAN0OVhcKhwV4g.qHrCZJzseplgLOYwc9fgtMdX9izx6SSzD9TkyBAxyiog.PNG/vts-2024-11-20_16h34_08.png?type=f120_120_na',
    tier: 'C',
  },
  {
    hashId: 'afff6e3cc8c1487bc4135bc896811dcc',
    nickname: '냐미',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNTA0MDRfMjI0/MDAxNzQzNjk5NDM1NjUx.OWeuF8LMjQnU8YDm0J2mk3Rc-pYGw4R-JUUpWxngViIg._rC8R9VtoiAlX-TexjkciC4eSprmFdYC-VOtyX8We0Yg.PNG/%ED%94%8411.png?type=f120_120_na',
    tier: 'C',
  },
  {
    hashId: '20ef78f064ebfd8dd4f7ec8a3a222fd2',
    nickname: '백곰파',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDExMTNfNzkg/MDAxNzMxNDg5NzI5NTkz.LVF7ONbx_jwHHEUIaSQmMa3wYonP4WUi1H2uG3-mKycg.BQqTd9Sv9d21K8W4WPFJzF9MNNW1KLOvDTq2F4MV800g.PNG/111121.png?type=f120_120_na',
    tier: 'D',
  },
  {
    hashId: 'ec30975bd41d3179fe7734ddbf760acb',
    nickname: '이로나묭 치카',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDEwMTBfMjY0/MDAxNzI4NDk4NzE2NTE5.cvO_-g5KHuTU-H2mF9W9uaqZ6AnynIsytSjEQxbPZ2gg.zeAJ4XOd5ZV_q49jZWqtlpQk3szBZZexr6Yo5QWzOT8g.PNG/%ED%94%84%EC%82%AC.png?type=f120_120_na',
    tier: 'D',
  },
  {
    hashId: '798e100206987b59805cfb75f927e965',
    nickname: '디디디용',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDAyMDNfMTQg/MDAxNzA2OTI5MjcxMTY4.LvQ_-cO6JcMx2S8hq4W5WhOh4V2xSC_vmPT9CzLzb4Mg.zN9t4xHtPngpsn0z8CGmW84SVBSv_WarMcK2DJzVswAg.PNG/%EB%94%94%EB%94%94%EB%94%94%EC%9A%A9_%ED%94%84%EC%82%AC.png?type=f120_120_na',
    tier: 'D',
  },
  {
    hashId: 'b82e8bc2505e37156b2d1140ba1fc05c',
    nickname: '담유이',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDAyMDNfMTI5/MDAxNzA2OTI5NjEwNTg0.8eH_yzVzbSiZMgD9X7NYPk-r66ZqrNZspDlCeGmfVKwg.UgTLf2pU2tue6CbLhU8jx7Ogk2TbRYyt2rjHDGYMQQwg.PNG/%EB%8B%B4%EC%9C%A0%EC%9D%B4_%ED%94%84%EB%A1%9C%ED%95%84_%EC%82%AC%EC%A7%84%EC%9A%A9.png?type=f120_120_na',
    tier: 'D',
  },
  {
    hashId: '0e604eba7206f04b1e5f15e0a1cb2616',
    nickname: '채현찌',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDAyMDFfODIg/MDAxNzA2NzMwNzI2ODEw.0UyeM0Vo0_ABYYA3CBBs7JmMdYSNgBF-DgzE8L5USw4g.cK4Q2CDlYatJ0iCvZ35Ry3NB4WXBNYM81y7mf0_uDAcg.JPEG/3.jpg?type=f120_120_na',
    tier: 'E',
  },
  {
    hashId: '7b9c6553913c755812ef2cd9fbe1dc5c',
    nickname: '하네',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTVfMjk5/MDAxNzM5NjEwMjU4OTc2.tlFhh9W5LVjzWrTxnkxl7EdQbE_mSKZEdzqigZ12yvMg.PgMccT3ohvSt2TE9A6TjSkPmxlLnSfOcw9j60NBVgpcg.PNG/%ED%95%98%EB%84%A4%EC%A7%B1.png?type=f120_120_na',
    tier: 'E',
  },
  {
    hashId: '29f20622463916fa48ad735057b145ce',
    nickname: '멋사',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDAxMDJfNjUg/MDAxNzA0MTkyMzI1MzY5.61wfMebfwgpDvH1vha-f7XUfQxXXcj51LKATMO_vicAg.3ntP8Eq8NZAkAOk1ev77vrN53A5WT6-9iNrlVmW62wcg.PNG/photo_0.PNG?type=f120_120_na',
    tier: 'E',
  },
  {
    hashId: '475313e6c26639d5763628313b4c130e',
    nickname: '엘리',
    profileUrl:
      'https://nng-phinf.pstatic.net/MjAyNDEyMjdfOTcg/MDAxNzM1MjgyMTUwODI2.tGRlDF6lYvDfQ_XfW3tv_F6knjIjc52oC5rsXLHwVbsg.DStQURRzxiqNK09L68xV1PSwFn3IiqMhRMUX-8vCVRog.JPEG/NNG-17352821505144682683349853075059.jpg?type=f120_120_na',
    tier: 'E',
  },
]
