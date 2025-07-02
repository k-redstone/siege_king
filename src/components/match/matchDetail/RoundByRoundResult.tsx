import { Target, Locate } from 'lucide-react'

interface IRoundByRoundResultProps {
  setData: string[]
}

export default function RoundByRoundResult({
  setData,
}: IRoundByRoundResultProps) {
  return (
    <div className="space-y-4">
      <div className="text-2xl font-bold">
        <h2 className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          라운드별 결과
        </h2>
      </div>

      <div>
        {/* Round Grid */}

        {/* grid */}
        {/* <div className="mb-6 grid grid-cols-3 gap-2 sm:grid-cols-6 md:grid-cols-9 xl:grid-cols-15"> */}
        <div className="mb-6 flex gap-x-2 overflow-x-auto">
          {setData.map((team, index) => {
            if (team === 'teamA') {
              return (
                <div
                  key={index}
                  className={`flex-1 rounded-lg border p-4`}
                >
                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <span className="text-xs whitespace-nowrap">
                      Rnd {index + 1}
                    </span>
                    <Locate className="text-blue-400" />
                  </div>
                </div>
              )
            }

            return (
              <div
                key={index}
                className={`flex-1 rounded-lg border p-4`}
              >
                <div className="flex flex-col items-center justify-center gap-y-2">
                  <span className="text-xs whitespace-nowrap">
                    Rnd {index + 1}
                  </span>
                  <Locate className="text-orange-500" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
