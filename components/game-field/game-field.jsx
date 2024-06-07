import { UiButton } from "@/uikit/ui-button";
import ZeroIcon from "../icons/zero-icon";
import CrossIcon from "../icons/сross-icon";
import CrosIcon from "../icons/cros-icon";


const cells = new Array(19 * 19).fill(null)

export default function GameField() {
  return (
    <div className="w-full min-h-80 p-4 mt-10  bg-white rounded-lg shadow-xl " >
      <div className="flex align-center justify-between mb-5">

        <div className="mr-auto">
          <div className="flex items-center justify-center text-slate-900 font-bold">Ход:<CrosIcon /></div>
          <div className=" flex items-center justify-center text-slate-900 text-xs leading-tight gap-2">Cледующий: <ZeroIcon /></div>
        </div>

        <div className="flex gap-2">
          <UiButton variant="primary" size="lg">
            Ничья
          </UiButton>
          <UiButton variant="outline" size="lg" >
            Сдаться
          </UiButton>
        </div>

      </div>

      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px">
        {cells.map((_, i) => (
          <button key={i} className="border border-slate-200 -ml-px -mt-px flex items-center">
            <ZeroIcon />
          </button>
        ))}
      </div>
    </div>
  )

}