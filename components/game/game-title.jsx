import Image from "next/image";

import arrow from "../icons/right-arrow.svg"
import Link from "next/link";
import GameInfo from "../game-info/game-info";
import GameField from "../game-field/game-field";


export default function GameTitle() {
  return (
    <div >
      <Link href="#" className="flex items-center">
        <Image src={arrow} alt="arrow" />
        <span className=" text-xs text-black">На главную</span>
      </Link>
      <div className=" pl-2 text-3xl leading-tight">Крестики - Нолики</div>
      <GameInfo />
      <GameField />
    </div>
  )
}