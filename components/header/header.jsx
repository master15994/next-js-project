import Image from "next/image"
import avatar from "./avatar.jpg"

export default function Header() {
  return (
    <div className="flex h-24 items-center px-20 bg-white shadow-lg">
      <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2x1">Играть</button>
      <button className=" justify-end ml-auto flex items-center gap-4 w-20 text-start"><Image className="rounded-full" src={avatar} alt="avatar" />
        <div className="column ">
          <div className="text-teal-600 text-xl leading-tight">Пулатов</div>
          <div className=" text-slate-900 text-xs leading-tight flex gap-2">Рейтинг:<span>1320</span></div>
        </div>
        <div>
          <svg fill="none" height="32" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m93.5 174.5 163 163 163-163" stroke="#000" stroke-linecap="round" stroke-width="24" /></svg>

        </div>
      </button>
    </div>
  )
}