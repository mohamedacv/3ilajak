import { logo } from "@/assets/images/image";
import Image from "next/image";

function IconLogo() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900">
      <Image src={logo} alt="Logo" preload className="h-6 w-6 object-contain" />
    </div>
  );
}

export default IconLogo;
