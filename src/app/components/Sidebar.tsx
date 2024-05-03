import Image from "next/image";
import dog from "../../../public/image/dog.jpg"
export default function Sidebar() {
    return (
        <div className="flex flex-col h-full w-1/4 bg-[#4d7c0f] items-center pt-5">
            <Image src={dog} alt="pik" className="w-[250px] h-[250px] rounded-full shawdow-2xl" />
            <p className="mt-10 text-[50px] font-bold">mung</p>
            <p className="text-center">This is Gangazi!!!</p>
        </div>
    )
}