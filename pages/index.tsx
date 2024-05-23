"use client";
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
import Employees from "@/public/employees.png";
import Employer from "@/public/employer.png";
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
import CityRipple from "@/components/cityripple";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Highlight } from "@/components/highlight";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";

const inter = Inter({ subsets: ["latin"] });
const words = `Kaamhai is a revolutionary platform designed to connect blue
collar employees with job opportunities and streamline HR
management for employers. Our mission is to empower individuals
and businesses in the blue collar sector by providing innovative
solutions tailored to their needs
`;

export default function Home() {
  const empolyers = [
    {
      text: "Simplify",
    },
    {
      text: "Your",
    },
    {
      text: "Business",
    },
    {
      text: "Operations",
      className: "",
    },
    {
      text: "with",
    },
    {
      text: "Ease!",
    },
  ];
  const employee = [
    {
      text: "Caption",
    },
    {
      text: "for",
    },
    {
      text: "Employees",
    },
  ];
  return (
    <main className={`f bg-white ${inter.className}`}>
      <header className="body-font sticky top-0 bg-white z-[999]">
        <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
          <Link href="/">
            <Image src={NavPng} alt=""></Image>
          </Link>
          <nav className="md:mr-auto md:ml-8 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-7 text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/" className="mr-7 text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link
              href=""
              className="mr-7 font-bold text-black hover:text-gray-900"
            >
              Let&#39;s Talk Business!
            </Link>
          </nav>
          <div className=" flex gap-6">
            <Link href="">
              <Image src={AppStore} alt=""></Image>
            </Link>
            <Link href="">
              <Image src={PlayStore} alt=""></Image>
            </Link>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <div className=" bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] hero min-h-screen flex flex-col gap-20 items-center justify-center">
        {/* Hero Heading */}
        <div className="flex flex-col gap-10">
          <h2 className=" font-extrabold text-4xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-snug   items-center justify-center text-center">
            Bring your hiring journey <br /> with{" "}
            <span className="bg-vector1 bg-no-repeat bg-contain bg-center">
              Kaamhai
            </span>
          </h2>
          <p className=" text-3xl   leading-snug items-center justify-center text-center">
            Upgrade your hiring process with Kaamhai,
            <br /> Designed with verified databases
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
        {/* Business Operations */}
        <div className="bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)]">
          <div className="flex flex-row-reverse items-center justify-center">
            <div className=" ">
              <Image src={Employer} alt=""></Image>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center">
              <h1 className=" text-5xl font-bold text-start leading-normal">
                {/* Simplify Your Business Operations <br /> with Ease! */}
                <TypewriterEffect words={empolyers} />
              </h1>
              <div className="flex lg:flex-row flex-col  text-3xl font-bold px-10   gap-3 items-center justify-center">
                <div className="flex flex-row items-center lg:border-none border-b-2 lg:pb-0 pb-20 border-gray-600">
                  {/* <div className=" flex flex-col items-center gap-14">
                    <Image src={LeaveManagementSystem} alt=""></Image>
                    <h1 className=" text-center">
                      Leave Management
                      <br /> System
                    </h1>
                  </div> */}
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <Image
                          className="h-60 w-full object-cover rou rounded-xl group-hover/card:shadow-xl"
                          src={LeaveManagementSystem}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem translateZ="50" className=" text-black">
                        <h1 className=" text-center">
                          Leave Management
                          <br /> System
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  <CardContainer className="inter-var pt-24">
                    <CardBody className="bg-gray-50 flex flex-col-reverse gap-5 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <Image
                          className="h-60 w-full object-cover rou rounded-xl group-hover/card:shadow-xl"
                          src={AdvancePayTracker}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem translateZ="50" className=" text-black">
                        <h1 className=" text-center">
                          Advance Pay
                          <br /> Tracker
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  {/* <div className=" flex flex-col-reverse -mb-32 items-center gap-14">
                    <Image src={AdvancePayTracker} alt=""></Image>
                    <h1 className=" text-center">
                      Advance Pay
                      <br /> Tracker
                    </h1>
                  </div> */}
                </div>
                <div className="flex flex-row items-center">
                  {/* <div className=" flex flex-col items-center gap-14">
                    <Image src={PaymentTrackers} alt=""></Image>
                    <h1 className=" text-center">
                      Payment
                      <br /> Trackers
                    </h1>
                  </div> */}
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 flex flex-col items-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <Image
                          className="h-60 w-full object-cover rou rounded-xl group-hover/card:shadow-xl"
                          src={PaymentTrackers}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem translateZ="50" className=" text-black">
                        <h1 className=" text-center">
                          Payment
                          <br /> Trackers
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  {/* <div className=" flex flex-col-reverse -mb-32 items-center gap-14">
                    <Image src={MonthlyPayslip} alt=""></Image>
                    <h1 className=" text-center">
                      Monthly
                      <br /> Payslip
                    </h1>
                  </div> */}
                  <CardContainer className="inter-var pt-24">
                    <CardBody className="bg-gray-50 flex flex-col-reverse items-center gap-5 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <Image
                          className="h-60 w-full object-cover rou rounded-xl group-hover/card:shadow-xl"
                          src={MonthlyPayslip}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem translateZ="50" className=" text-black">
                        <h1 className=" text-center">
                          Monthly
                          <br /> Payslip
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className=" ">
              <Image src={Employees} alt=""></Image>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-center">
              <h1 className=" text-5xl font-bold text-end leading-normal">
                {/* Caption for Employees */}
                <TypewriterEffect words={employee} />
              </h1>
              <div className="flex lg:flex-row flex-col  text-3xl font-bold px-10  gap-10 items-center justify-center">
                <div className="flex flex-row items-center lg:border-none border-b-2 lg:pb-0 border-gray-600">
                  {/* <div className=" flex flex-col items-center gap-14">
                    <Image src={LeaveManagementSystem} alt=""></Image>
                    <h1 className=" text-center">
                      Leave Management
                      <br /> System
                    </h1>
                  </div> */}
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <Image
                          className="h-60 w-full object-cover rou rounded-xl group-hover/card:shadow-xl"
                          src={LeaveManagementSystem}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem translateZ="50" className=" text-black">
                        <h1 className=" text-center">
                          Leave Management
                          <br /> System
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  {/* <div className=" flex flex-col-reverse -mb-32 items-center gap-14">
                    <Image src={AdvancePayTracker} alt=""></Image>
                    <h1 className=" text-center">
                      Advance Pay
                      <br /> Tracker
                    </h1>
                  </div> */}
                  <CardContainer className="inter-var pt-24">
                    <CardBody className="bg-gray-50 flex flex-col-reverse gap-5 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <Image
                          className="h-60 w-full object-cover rou rounded-xl group-hover/card:shadow-xl"
                          src={AdvancePayTracker}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem translateZ="50" className=" text-black">
                        <h1 className=" text-center">
                          Advance Pay
                          <br /> Tracker
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
                <div className="flex flex-row items-center">
                  {/* <div className=" flex flex-col items-center gap-14">
                    <Image src={PaymentTrackers} alt=""></Image>
                    <h1 className=" text-center">
                      Payment
                      <br /> Trackers
                    </h1>
                  </div> */}
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 flex flex-col items-center relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <Image
                          className="h-60 w-full object-cover rou rounded-xl group-hover/card:shadow-xl"
                          src={PaymentTrackers}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem translateZ="50" className=" text-black">
                        <h1 className=" text-center">
                          Payment
                          <br /> Trackers
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  {/* <div className=" flex flex-col-reverse -mb-32 items-center gap-14">
                    <Image src={MonthlyPayslip} alt=""></Image>
                    <h1 className=" text-center">
                      Monthly
                      <br /> Payslip
                    </h1>
                  </div> */}
                  <CardContainer className="inter-var pt-24">
                    <CardBody className="bg-gray-50 flex flex-col-reverse items-center gap-5 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        <Image
                          className="h-60 w-full object-cover rou rounded-xl group-hover/card:shadow-xl"
                          src={MonthlyPayslip}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem translateZ="50" className=" text-black">
                        <h1 className=" text-center">
                          Monthly
                          <br /> Payslip
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              </div>
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
      {/* Hero Description */}
      <div className="flex flex-row items-center px-10 justify-center">
        <div className="flex flex-col w-[80%] md:w-[70%] lg:w-[60%] xl:w-[47%] 2xl:w-[47%] xl:mt-10">
          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl leading-snug capitalize text-[#9E9E9E] text-wrap">
            We&#39;ll help you make{" "}
            <span className=" text-black bg-vector1 bg-no-repeat bg-contain bg-center">
              smarter
            </span>{" "}
            hiring decisions
          </h1>
          <p className="text-3xl leading-snug items-center justify-center">
            To access the app, just open the link we&#39;ll send you{" "}
            <Highlight className=" italic">via SMS.</Highlight>
          </p>
        </div>
        <div className="xl:ml-[-10rem] xl:mb-32 2xl:ml-[-12rem] 2xl:mb-36">
          <Image src={Group1} alt=""></Image>
        </div>
      </div>
      {/* Verified Employees in your City */}
      <div className="bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)]">
        <div className="flex lg:flex-row flex-col py-16 px-48 justify-around items-center">
          <h1 className="sm:text-5xl lg:text-4xl xl:text-5xl font-bold uppercase">
            Find{" "}
            <Highlight className=" leading-normal">
              Verified <br /> Employees
            </Highlight>{" "}
            in your City
          </h1>
          <div className="flex text-3xl gap-20 font-bold text-center">
            <div className="flex flex-col gap-10">
              <div className=" relative h-52 w-52">
                <Image src={Kochi} alt="" className=" absolute z-10"></Image>
                <CityRipple />
              </div>
              <h1>Kochi</h1>
            </div>
            <div className="flex flex-col gap-10">
              <div className=" relative h-52 w-52">
                <Image
                  src={Bengaluru}
                  alt=""
                  className=" absolute z-10"
                ></Image>
                <CityRipple />
              </div>
              <h1>Bengaluru</h1>
            </div>
          </div>
        </div>
      </div>
      {/* About Us */}
      <div
        id="about"
        className="about bg-bgimage flex flex-col xl:flex-row xl:pt-10"
      >
        <div className="flex flex-col font-bold mt-40 ml-16 text-4xl items-center justify-end">
          <h1>About Us</h1>
          <Image src={ScreenImage} alt=""></Image>
        </div>
        <div className="flex flex-col items-center justify-center sm:px-20 md:px-28 lg:px-40 sm:pt-10 xl:w-[70%] pb-16 xl:pl-10 xl:pr-36 2xl:pr-40 gap-16">
          <div className=" border-b-2 border-black text-wrap text-center xl:text-left sm:text-2xl md:text-3xl lg:text-4xl pb-12">
            {/* <p>
              Kaamhai is a revolutionary platform designed to connect blue
              collar employees with job opportunities and streamline HR
              management for employers. Our mission is to empower individuals
              and businesses in the blue collar sector by providing innovative
              solutions tailored to their needs
            </p> */}
            <TextGenerateEffect words={words} />
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
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
              ></path>
              <path
                fill="#fff"
                d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
              ></path>
              <path
                fill="#cfd8dc"
                d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
              ></path>
              <path
                fill="#40c351"
                d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#F2F1EE] flex flex-col items-center py-10 gap-4">
        <div className="flex justify-between gap-20">
          <div>
            <div>
              <Image src={Logo} alt=""></Image>
            </div>
            <div>
              <h1 className="text-xl font-bold pb-10">
                Upgrade your hiring process with kaamhai. <br /> Designed with
                verified databases
              </h1>
            </div>
          </div>
          <div className="flex">
            <div>
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
                    &nbsp; Desk ID:HD-428, <br /> WeWork Prestige Atlanta, 80
                    Feet Main Road, Koramangala, <br /> 1A Bloack Bangalore, KA
                    - 560034
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
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-xl font-extrabold">Get the App</h1>
              <p className=" font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Pariatur, doloribus.
              </p>
            </div>
            <div className="flex gap-10">
              <Link href="">
                <Image src={AppStore} alt=""></Image>
              </Link>
              <Link href="">
                <Image src={PlayStore} alt=""></Image>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p>
            © 2024 <span className=" font-bold">Kaamhai</span>. All rights
            reserved I Made with 💙
          </p>
        </div>
      </footer>
    </main>
  );
}
