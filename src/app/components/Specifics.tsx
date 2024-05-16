import Link from "next/link"
import { FC, ReactNode } from "react"

interface SpecificsProps {
    children: ReactNode;
}

const Specifics: FC<SpecificsProps> = ({
    children,
}: SpecificsProps): ReactNode => {
    return (
        <div className="flex flex-col justify-between w-full h-full">
            <div className="flex w-full h-52 bg-orange-400">
                <button className="flex flex-col h-1/5 bg-[#4338ca] rounded-xl">
                    <Link href={"/profile"}>Profile</Link>
                </button>
            </div>
            {children}
            <div className="flex w-full h-52 bg-blue-400">

            </div>
        </div>
    )
}

export default Specifics;