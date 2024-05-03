import Image from "next/image";
import { Inter } from "next/font/google";
import NavPng from "@/public/nav.png";
import ScanQR from "@/public/scan.png";
import Group1 from "@/public/Group 1.png";
import ScreenImage from "@/public/Screenshot.png";
import JobPost from "@/public/Job Posts.png";
import LeaveManagementSystem from "@/public/Leave Management System.png";
import AdvancePayTracker from "@/public/Advance Pay Tracker.png";
import PaymentTrackers from "@/public/Payment Trackers.png";
import MonthlyPayslip from "@/public/Monthly Payslip.png";
import Kochi from "@/public/Kochi.png";
import cuate from "@/public/cuate.png";
import Logo from "@/public/logo.png";
import PlayStore from "@/public/Google Play Badge.png";
import AppStore from "@/public/App Store Badge.png";
import EmployeeCard from "@/public/Employee card.png";
import Bengaluru from "@/public/Bengaluru.png";
import JobSeeker from "@/public/Job Seekers.png";
import VerifiedEmployees from "@/public/Verified Employees.png";
import { FaSearch } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Marquee from "react-fast-marquee";
import Ripple from "@/components/ripple";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`f bg-white ${inter.className}`}>
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image src={NavPng} alt=""></Image>
          <nav className="md:mr-auto md:ml-8 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <a className="mr-7 text-gray-600 hover:text-gray-900">Home</a>
            <a className="mr-7 text-gray-600 hover:text-gray-900">About</a>
            <a className="mr-7 font-bold text-black hover:text-gray-900">
              Let&#39;s Talk Business!
            </a>
          </nav>
          <button className="inline-flex items-center bg-[#FFD704] text-black py-1 px-3 border-2 font-bold border-black focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
            Download the App
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <div className=" bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] hero min-h-screen flex flex-col gap-20 items-center justify-center">
        {/* Hero Heading */}
        <div className="flex flex-col gap-10">
          <h2 className=" font-extrabold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-snug sm:px-40 md:px-52 lg:px-60 xl:px-72 2xl:px-80 items-center justify-center text-center">
            Bring your hiring journey with <span className="bg-vector1 bg-no-repeat bg-contain bg-center">Kaamhai</span>
          </h2>
          <p className=" text-3xl sm:px-[5rem] md:px-[12rem] lg:px-[20rem] xl:px-[28rem] 2xl:px-[38rem] leading-snug items-center justify-center text-center">
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
        <div className="flex flex-row items-center px-10 justify-center">
          <div className="flex flex-col w-[80%] md:w-[70%] lg:w-[60%] xl:w-[47%] 2xl:w-[47%] xl:mt-10">
            <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl leading-snug capitalize text-[#9E9E9E] text-wrap">
              We&#39;ll help you make{" "}
              <span className=" text-black bg-vector1 bg-no-repeat bg-contain bg-center">smarter</span> hiring decisions
            </h1>
            <p className="text-3xl leading-snug items-center justify-center">
              To access the app, just open the link we&#39;ll send you{" "}
              <span className="italic bg-[#FFD704]">via SMS.</span>
            </p>
          </div>
          <div className="xl:ml-[-10rem] xl:mb-32 2xl:ml-[-12rem] 2xl:mb-36">
            <Image src={Group1} alt=""></Image>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div className=" bg-bgimage flex flex-col xl:flex-row xl:pt-10">
        <div className="flex flex-col font-bold mt-40 ml-16 text-4xl items-center justify-end">
          <h1>About Us</h1>
          <Image src={ScreenImage} alt=""></Image>
        </div>
        <div className="flex flex-col items-center justify-center sm:px-20 md:px-28 lg:px-40 sm:pt-10 xl:w-[70%] pb-16 xl:pl-10 xl:pr-36 2xl:pr-40 gap-16">
          <div className=" border-b-2 border-black text-wrap text-center xl:text-left sm:text-2xl md:text-3xl lg:text-4xl pb-12">
            <p>
              Kaamhai is a revolutionary platform designed to connect blue
              collar employees with job opportunities and streamline HR
              management for employers. Our mission is to empower individuals
              and businesses in the blue collar sector by providing innovative
              solutions tailored to their needs
            </p>
          </div>
          <div className=" border-b-2 border-black text-4xl pb-12 items-center sm:gap-20 md:gap-24 lg:gap-32 xl:gap-44 2xl:gap-64 flex flex-row">
            <div className="flex flex-col items-start text-wrap gap-10">
              <div>
                <Image src={VerifiedEmployees} alt=""></Image>
              </div>
              <div className=" font-bold">1000+</div>
              <div>
                Verified <br /> Employees
              </div>
            </div>
            <div className="flex flex-col items-start justify-between text-wrap gap-10">
              <div>
                <Image src={JobPost} alt=""></Image>
              </div>
              <div className=" font-bold">2500+</div>
              <div>
                Job <br /> Post
              </div>
            </div>
            <div className="flex flex-col items-start justify-between text-wrap gap-10">
              <div>
                <Image src={JobSeeker} alt=""></Image>
              </div>
              <div className=" font-bold">500+</div>
              <div>
                Job <br /> Seeker
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Business Operations */}
      <div className="bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)]">
        <div className="flex flex-col flex-wrap items-center justify-center">
          <h1 className=" text-5xl font-bold text-center py-16 leading-normal">
            Simplify Your Business Operations <br /> with Ease!
          </h1>
          <div className="flex lg:flex-row flex-col  text-3xl font-bold px-10 pb-16 w-[75%] gap-10 items-center justify-center">
            <div className="flex flex-row items-center lg:border-none border-b-2 lg:pb-0 pb-20 border-gray-600">
            <div className=" flex flex-col items-center gap-14">
              <Image src={LeaveManagementSystem} alt=""></Image>
              <h1 className=" text-center">Leave Management<br/> System</h1>
            </div>
            <div className=" flex flex-col-reverse -mb-32 items-center gap-14">
              <Image src={AdvancePayTracker} alt=""></Image>
              <h1 className=" text-center">Advance Pay<br/> Tracker</h1>
            </div>
            </div>
            <div className="flex flex-row items-center">
            <div className=" flex flex-col items-center gap-14">
              <Image src={PaymentTrackers} alt=""></Image>
              <h1 className=" text-center">Payment<br/> Trackers</h1>
            </div>
            <div className=" flex flex-col-reverse -mb-32 items-center gap-14">
              <Image src={MonthlyPayslip} alt=""></Image>
              <h1 className=" text-center">Monthly<br/> Payslip</h1>
            </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col py-16 px-48 justify-around items-center">
          <h1 className="sm:text-5xl lg:text-4xl xl:text-5xl font-bold uppercase">
            Find{" "}
            <span className="bg-[#FFD704] leading-normal">
              Verified <br /> Employees
            </span>{" "}
            in your City
          </h1>
          <div className="flex text-3xl font-bold text-center">
            <div>
              <Image src={Kochi} alt=""></Image>
              <h1>Kochi</h1>
            </div>
            <div>
              <Image src={Bengaluru} alt=""></Image>
              <h1>Bengaluru</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Employee card */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-black p-20 md:shadow-xl">
        <div>
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
            Get Your Employee card now !
          </p>
          <div className="text-[#FFD704] text-3xl font-semibold flex items-center justify-between gap-20 mt-20">
            <div className="flex flex-col items-start gap-48">
              <h1>Profile Verification</h1>
              <h1>Face Verification</h1>
              <h1>Passport Verification</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1>Bank Account Verification</h1>
              <Image src={EmployeeCard} alt="" className=" mt-20"></Image>
            </div>
            <div className="flex flex-col items-start gap-48">
              <h1>Personal Verification</h1>
              <h1>Aadhar card Verification</h1>
              <h1>Voter ID Verification</h1>
            </div>
          </div>
        </div>
        <Ripple />
      </div>
      {/* Contact Us */}
      <div className="bg-white flex lg:flex-row flex-col lg:gap-0 gap-10 items-center lg:px-10 xl:px-0 xl:gap-16 py-16 justify-center">
        <div>
          <Image src={cuate} alt=""></Image>
        </div>
        <div className="flex flex-col items-end justify-end capitalize gap-6">
          <h1 className=" text-5xl font-bold text-right rtl:text-left leading-snug">
            Our support team is <br />{" "}
            <span className=" italic">active 24x7</span>
          </h1>
          <p className=" font-medium text-2xl text-right rtl:text-left leading-snug">
            Feel free to chat with our support team whenever <br /> you need
            more clarity
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#F2F1EE] flex flex-col items-center py-10 gap-4">
        <div className="flex justify-between gap-[2rem] md:gap-[10rem] lg:gap-[25rem] xl:gap-[40rem]">
          <div className="flex flex-col">
            <div>
              <Image src={Logo} alt=""></Image>
            </div>
            <div>
              <h1 className="text-xl font-bold pb-10">
                Upgrade your hiring process with kaamhai. <br /> Designed with
                verified databases
              </h1>
            </div>
            <div>
              <h1 className="text-xl font-bold">Contact Us</h1>
            </div>
            <div>
              <p>
                <span className="text-xl font-bold">Address:</span>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className=""
                >
                  &nbsp; Desk ID:HD-428, <br /> WeWork Prestige Atlanta, 80 Feet
                  Main Road, Koramangala, <br /> 1A Bloack Bangalore, KA -
                  560034
                </a>
              </p>
            </div>
            <div>
              <p>
                <span className="ext-xl font-bold">Email:</span>
                <a
                  href="mailto:Support@Kaamhai.in"
                  aria-label="Our email"
                  title="Our email"
                  className=""
                >
                  &nbsp; Support@Kaamhai.in
                </a>
              </p>
            </div>
            <div>
              <p>
                <span className="ext-xl font-bold">Phone:</span>
                <a
                  href="tel:+919656188888"
                  aria-label="Our phone"
                  title="Our phone"
                  className=""
                >
                  &nbsp;+919656188888
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-xl font-extrabold">Get the App</h1>
            <Image  src={AppStore} alt=""></Image>
            <Image src={PlayStore} alt=""></Image>
          </div>
        </div>
        <div>
          <p>© 2024 <span className=" font-bold">Kaamhai</span>. All rights reserved I Made with 💙</p>
        </div>
      </footer>
    </main>
  );
}
