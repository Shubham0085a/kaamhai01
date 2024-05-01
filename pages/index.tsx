import Image from "next/image";
import { Inter } from "next/font/google";
import NavPng from "@/public/nav.png";
import ScanQR from "@/public/scan.png";
import Group1 from "@/public/Group 1.png";
import { FaSearch } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Marquee from "react-fast-marquee";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`f bg-white ${inter.className}`}>
      <header className=" body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image src={NavPng} alt=""></Image>
          <nav className="md:mr-auto md:ml-8 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
            <a className="mr-7 text-gray-600 hover:text-gray-900">Home</a>
            <a className="mr-7 text-gray-600 hover:text-gray-900">About</a>
            <a className="mr-7 font-bold text-black hover:text-gray-900">
              Let’s Talk Business!
            </a>
          </nav>
          <button className="inline-flex items-center bg-[#FFD704] text-black py-1 px-3 border-2 font-bold border-black  focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
            Download the App
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <div className=" bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] hero min-h-screen flex flex-col gap-20 items-center justify-center">
        {/* Hero Heading */}
        <div className="flex flex-col gap-10">
          <h2 className=" font-extrabold text-8xl leading-snug px-80 items-center justify-center text-center">
            Bring your hiring journey with <span className="">Kaamhai</span>
          </h2>
          <p className=" text-3xl px-[38rem] leading-snug items-center justify-center text-center">
            Upgrade your hiring process with Kaamhai Designed with verified
            databases
          </p>
          <div className=" flex items-center gap-3 justify-center">
            <div className="flex border-2 border-black rounded-full">
              <div className="flex px-1 py-1">
                <input
                  type="search"
                  name="search"
                  placeholder="Enter employee Unique ID here"
                  className=" w-80 focus:outline-none ml-4 rounded-full"
                />
                <button
                  type="submit"
                  className=" content-center border-2 border-black bg-[#FFD704] rounded-full h-12 w-12"
                >
                  <FaSearch className="ml-2 h-7 w-7" />
                </button>
              </div>
            </div>
            <div>
              <button className="flex items-center gap-3 border-2 border-black bg-[#FFD704] rounded-full px-5 py-2">
                <Image src={ScanQR} alt="" />
                <p className=" font-bold text-2xl">Scan QR</p>
              </button>
            </div>
          </div>
        </div>
        {/* Scroll Section */}
        <div className=" bg-[#FFD704] border flex border-black border-t-4 border-b-4 border-l-0 border-r-0 w-full h-20">
          <Marquee>
            <div className=" mr-10 font-bold text-5xl uppercase">
              <h1>Empowerment</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-5xl uppercase">
              <h1>Accessibility</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-5xl uppercase">
              <h1>Efficiency</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-5xl uppercase">
              <h1>Empowerment</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-5xl uppercase">
              <h1>Accessibility</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-5xl uppercase">
              <h1>Efficiency</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
          </Marquee>
        </div>
        {/* Hero Description */}
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col w-[47%] mt-10">
            <h1 className="font-extrabold text-8xl leading-snug capitalize text-[#9E9E9E] text-wrap">We&#39;ll help you make <span className=" text-black">smarter</span> hiring decisions</h1>
            <p className="text-3xl leading-snug items-center justify-center">To access the app, just open the link we&#39;ll send you <span className="italic bg-[#FFD704]">via SMS.</span></p>
          </div>
          <div className=" -ml-80">
            <Image src={Group1} alt=""></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
