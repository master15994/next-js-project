import avatar from "./avatar.jpg"
import Image from "next/image"

export default function Profile() {
  return (
    <div className="flex items-center gap-4">
      <button className=" justify-end ml-auto flex items-center gap-4 w-20 text-start"><Image className="rounded-full" src={avatar} alt="avatar" /></button>
      <div className="column ">
        <div className="text-teal-600 text-xl leading-tight">Пулатов</div>
        <div className=" text-slate-900 text-xs leading-tight flex gap-2">Рейтинг:<span>1320</span></div>
      </div>
    </div>
  )
}