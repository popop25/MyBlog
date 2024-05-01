import Image from "next/image";
import Pik from "../../public/image/pik.jpg";

export default function Home() {
  return (
    <>
      <main className="flex flex-row h-svh">
        <div className="flex flex-col h-full w-1/4 bg-[#4d7c0f] items-center pt-5">
          <Image src={Pik} alt="pik" className="w-[250px] h-[250px] rounded-full shawdow-2xl" />
          <p className="mt-10 text-[50px] font-bold">pika</p>
          <p className="text-center">This is Pikachu!!!</p>
        </div>
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex w-full h-52 bg-orange-400">

          </div>
          <div className="flex w-full h-52 bg-blue-400">

          </div>
        </div>
        {/*
        <div className="flex flex-col w-full">
          <header className="h-1/6 bg-[#64748b]">01</header>
          <nav className="h-2/3 bg-[#fbbf24]">02</nav>
          <footer className="h-1/6 bg-[#ca8a04]">03</footer>
  </div> */}

      </main>
    </>
  );
}
