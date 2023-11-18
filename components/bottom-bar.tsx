import Link from "next/link";

import marker from "@/public/marker.svg";
import home from "@/public/home.svg";
import settings from "@/public/settings.svg";

export default function BottomBar() {
  return (
    <div className="fixed mx-auto bottom-0 w-full flex items-center justify-center h-fit bg-[#F1EEEE]">
      <Link href={"./"} className="btn bg-transparent border-none">
        <img src={marker.src} />
      </Link>
      <Link href={"./home"} className="btn bg-transparent border-none">
        <img src={home.src} />
      </Link>
      <Link href={"./"} className="btn bg-transparent border-none">
        <img src={settings.src} />
      </Link>
    </div>
  );
}
