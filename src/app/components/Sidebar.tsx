import Link from "next/link"
import { FC, ReactNode } from "react"

import Image from "next/image";
import dog from "../../../public/image/dog.jpg";

interface SpecificsProps {
    children: ReactNode;
}

const Sidebar: FC<SpecificsProps> = ({
    children,
}: SpecificsProps): ReactNode => {
    return (
        <div className="flex flex-col h-full w-1/4 bg-[#4d7c0f] items-center pt-5">
            <Link href={"/"}>
                <Image src={dog} alt="pik" className="w-[250px] h-[250px] rounded-full shawdow-2xl" />
            </Link>
            <p className="mt-10 text-[50px] font-bold">mung</p>
            <p className="text-center">This is Gangazi!!!</p>
        </div>
    )
}

export default Sidebar;