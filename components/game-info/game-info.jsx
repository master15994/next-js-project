import Profile from "../profile/profile";
import CrossIcon from "./сross-icon";

export default function GameInfo() {
  return (
    <div className="w-full p-4 justify-between mt-10 h-32 bg-white rounded-lg shadow-xl flex ">
      <div className="relative flex gap-5 items-center justify-center">
        <div className="w-7 h-7 rounded-full absolute left-0 top-0 bg-white flex items-center justify-center"><CrossIcon /></div>
        <Profile />
        <div className="h-10 w-px  bg-slate-200" />
        <div className="text-slate-900 text-lg font-bold">01:02</div>
      </div>

      <div className="flex gap-5 items-center justify-center">
        <div className="text-orange-500 text-lg font-bold">00:02</div>
        <div className="h-10 w-px  bg-slate-200" />
        <div className="relative">
          <div className="w-7 h-7 rounded-full absolute -left-1 -top-1 bg-white flex items-center justify-center"><CrossIcon /></div>
          <Profile />
        </div>

      </div>
    </div>
  )
}