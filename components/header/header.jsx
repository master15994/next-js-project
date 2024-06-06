import { UiButton } from "@/uikit/ui-button";

import Profile from "../profile/profile";

export default function Header() {
  return (
    <div className="flex justify-between h-24 items-center px-20 bg-white shadow-lg">
      <UiButton variant="primary" size="lg" className="w-42">Играть</UiButton>
      <div className="flex items-center gap-2">
        <Profile />
        <svg fill="none" height="2" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m93.5 174.5 163 163 163-163" stroke="#000" stroke-linecap="round" stroke-width="24" /></svg>
      </div>
    </div>
  )
}