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
import kaamhailogo from "@/public/kaamhai-logo.png";
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
            <Image
              src={kaamhailogo}
              alt=""
              className=" h-[75px] w-[174px]"
            ></Image>
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
              <Image
                src={AppStore}
                alt=""
                className=" h-[2.90rem] w-40"
              ></Image>
            </Link>
            <Link href="">
              <Image src={PlayStore} alt="" className=""></Image>
            </Link>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <div className=" bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] hero min-h-screen flex flex-col pt-16 gap-20 items-center justify-center">
        {/* Hero Heading */}
        <div className="flex flex-col gap-10">
          <h2 className=" font-extrabold text-4xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-snug items-center justify-center text-center">
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
            <div className="flex border-2 border-black bg-white rounded-full">
              <div className="flex px-1 py-1">
                <input
                  type="search"
                  name="search"
                  placeholder="Enter employee Unique ID here"
                  className=" w-[30rem] focus:outline-none ml-4"
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
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card flex items-center justify-center flex-col dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full group-hover/card:shadow-xl"
                          src={LeaveManagementSystem}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Leave Management
                          <br /> System
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  <CardContainer className="inter-var pt-24">
                    <CardBody className="bg-gray-50 flex flex-col-reverse items-center justify-center gap-16 relative group/card  dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className="dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full group-hover/card:shadow-xl"
                          src={AdvancePayTracker}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Advance Pay
                          <br /> Tracker
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
                <div className="flex flex-row items-center">
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card flex items-center justify-center flex-col gap-10 dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full group-hover/card:shadow-xl"
                          src={PaymentTrackers}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Payment
                          <br /> Trackers
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  <CardContainer className="inter-var pt-24">
                    <CardBody className="bg-gray-50 flex flex-col-reverse gap-16 items-center relative group/card  dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full group-hover/card:shadow-xl"
                          src={MonthlyPayslip}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
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
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card flex items-center justify-center flex-col dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full group-hover/card:shadow-xl"
                          src={LeaveManagementSystem}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Leave Management
                          <br /> System
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  <CardContainer className="inter-var pt-24">
                    <CardBody className="bg-gray-50 flex flex-col-reverse items-center justify-center gap-16 relative group/card  dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className="dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full group-hover/card:shadow-xl"
                          src={AdvancePayTracker}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Advance Pay
                          <br /> Tracker
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
                <div className="flex flex-row items-center">
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card flex items-center justify-center flex-col gap-10 dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full group-hover/card:shadow-xl"
                          src={PaymentTrackers}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Payment
                          <br /> Trackers
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  <CardContainer className="inter-var pt-24">
                    <CardBody className="bg-gray-50 flex flex-col-reverse gap-16 items-center relative group/card  dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full group-hover/card:shadow-xl"
                          src={MonthlyPayslip}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
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
      <div className="bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)]">
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
        <div className="">
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
      </div>
      {/* About Us */}
      <div id="about" className="bg-cover bg-bgimage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="275"
          viewBox="0 0 250 275"
          fill="none"
          className=" absolute mt-72 ml-12"
        >
          <path
            d="M249.7 209.892C235.591 233.012 215.042 251.368 190.652 262.638C166.262 273.907 139.126 277.585 112.677 273.205C86.2274 268.825 61.6518 256.585 42.0578 238.031C22.4637 219.478 8.73139 195.446 2.59725 168.973C-3.53689 142.5 -1.79731 114.775 7.59599 89.3056C16.9893 63.8359 33.6145 41.7647 55.3691 25.8831C77.1237 10.0015 103.031 1.0227 129.814 0.0822443C156.597 -0.858214 183.054 6.28186 205.839 20.5996L134.5 137.5L249.7 209.892Z"
            fill="white"
          />
        </svg>
        <div className=" flex flex-col xl:flex-row xl:pt-10">
          <div className="flex flex-col font-bold mt-40 ml-16 text-4xl items-center justify-end">
            <h1>About Us</h1>
            <Image src={ScreenImage} alt="" className=" z-[999]"></Image>
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
          <div className=" flex flex-row gap-5">
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
            <Link href="/">
              {" "}
              <svg
                id="_1-Email"
                data-name="1-Email"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <defs>
                  <style>
                    {`.cls-1{fill:#f6b445}.cls-2{fill:#fed049}.cls-3{fill:none;stroke:#474c54;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}`}
                  </style>
                </defs>
                <g id="_Group_" data-name="&lt;Group&gt;">
                  <path
                    className="cls-1"
                    d="M47 9v28a4.025 4.025 0 0 1-1.17 2.83L28 22l-.28-.43z"
                  />
                  <path
                    className="cls-2"
                    d="M45.83 39.83A4.025 4.025 0 0 1 43 41H5a4.025 4.025 0 0 1-2.83-1.17L20 22l.25-.39L24 24l3.72-2.43.28.43z"
                  />
                  <path
                    className="cls-1"
                    d="M20.25 21.61 20 22 2.17 39.83A4.025 4.025 0 0 1 1 37V11a3.944 3.944 0 0 1 .18-1.19L2 10z"
                  />
                  <path
                    className="cls-2"
                    d="M47 9 27.72 21.57 24 24l-3.75-2.39L2 10l-.82-.19A4 4 0 0 1 5 7h37c4 0 5 2 5 2z"
                  />
                  <path
                    className="cls-3"
                    d="M42 7H5a4 4 0 0 0-3.82 2.81A3.944 3.944 0 0 0 1 11v26a3.995 3.995 0 0 0 4 4h38a3.995 3.995 0 0 0 4-4V9L27.72 21.57 24 24l-3.75-2.39L2 10"
                  />
                </g>
                <path className="cls-3" d="M39 33 28 22M9 33l11-11" />
              </svg>
            </Link>
            <Link href="/">
              <svg
                id="Layer_1"
                // style={{ enableBackground: 'new 0 0 100 100' }}
                width="48"
                height="48"
                version="1.1"
                viewBox="0 0 100 100"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <style type="text/css">
                  {`.st0{fill:url(#Background_13_);}
          .st1{fill:url(#path-2_7_);}
          .st2{filter:url(#Adobe_OpacityMaskFilter);}
          .st3{fill:#FFFFFF;}
          .st4{mask:url(#mask-3_1_);fill:#FFFFFF;}
          .st5{fill:url(#SVGID_1_);}
          .st6{fill:#1E1E1F;}
          .st7{fill:url(#Oval_6_);}
          .st8{stroke:#000000;stroke-width:0.3;}
          .st9{fill:#2B2A2A;}
          .st10{fill:#FF9500;}
          .st11{fill:url(#Background_14_);}
          .st12{fill:url(#path-2_8_);}
          .st13{filter:url(#Adobe_OpacityMaskFilter_1_);}
          .st14{mask:url(#mask-3_2_);}
          .st15{fill:#FFFFFF;fill-opacity:0.7;}
          .st16{fill:url(#Background_15_);}
          .st17{fill:url(#Background_16_);}
          .st18{fill:url(#Background_17_);}
          .st19{filter:url(#Adobe_OpacityMaskFilter_2_);}
          .st20{mask:url(#mask-2_6_);fill-opacity:0.29;}
          .st21{filter:url(#Adobe_OpacityMaskFilter_3_);}
          .st22{mask:url(#mask-2_5_);}
          .st23{fill:url(#path-4_2_);}
          .st24{filter:url(#Adobe_OpacityMaskFilter_4_);}
          .st25{mask:url(#mask-2_4_);}
          .st26{fill:#AAAAAA;}
          .st27{fill:url(#Background_18_);}
          .st28{fill:#141416;}
          .st29{filter:url(#Adobe_OpacityMaskFilter_5_);}
          .st30{mask:url(#mask-2_3_);fill:url(#Chart_1_);stroke:#FFFFFF;stroke-width:0.75;}
          .st31{filter:url(#Adobe_OpacityMaskFilter_6_);}
          .st32{mask:url(#mask-2_2_);}
          .st33{fill:#01A6F1;}
          .st34{filter:url(#Adobe_OpacityMaskFilter_7_);}
          .st35{mask:url(#mask-2_1_);fill:#777778;}
          .st36{fill:url(#Background_19_);}
          .st37{fill:#2E2E30;}
          .st38{fill:#7F7F7F;}
          .st39{fill:#777777;}
          .st40{fill:none;}
          .st41{fill:url(#SVGID_2_);}
          .st42{fill:url(#Oval_7_);}
          .st43{filter:url(#Adobe_OpacityMaskFilter_8_);}
          .st44{mask:url(#mask-3_3_);fill:#FF1414;}
          .st45{filter:url(#Adobe_OpacityMaskFilter_9_);}
          .st46{mask:url(#mask-2_8_);}
          .st47{fill:#1BADF8;}
          .st48{fill:#63DA38;}
          .st49{filter:url(#Adobe_OpacityMaskFilter_10_);}
          .st50{mask:url(#mask-2_7_);}
          .st51{fill:#B7B7B7;}
          .st52{filter:url(#Adobe_OpacityMaskFilter_11_);}
          .st53{mask:url(#mask-2_24_);fill:url(#Red_1_);}
          .st54{filter:url(#Adobe_OpacityMaskFilter_12_);}
          .st55{mask:url(#mask-2_23_);fill:url(#Orange_1_);}
          .st56{filter:url(#Adobe_OpacityMaskFilter_13_);}
          .st57{mask:url(#mask-2_22_);fill:url(#Yellow_1_);}
          .st58{filter:url(#Adobe_OpacityMaskFilter_14_);}
          .st59{mask:url(#mask-2_21_);fill:url(#Green_1_);}
          .st60{filter:url(#Adobe_OpacityMaskFilter_15_);}
          .st61{mask:url(#mask-2_20_);fill:url(#Turquoise_1_);}
          .st62{filter:url(#Adobe_OpacityMaskFilter_16_);}
          .st63{mask:url(#mask-2_19_);fill:url(#Blue_1_);}
          .st64{filter:url(#Adobe_OpacityMaskFilter_17_);}
          .st65{mask:url(#mask-2_18_);fill:url(#Purple_1_);}
          .st66{filter:url(#Adobe_OpacityMaskFilter_18_);}
          .st67{mask:url(#mask-2_17_);fill:url(#Pink_1_);}
          .st68{fill:url(#Background_20_);}
          .st69{fill:#353535;}
          .st70{fill:url(#SVGID_3_);}
        `}
                </style>
                <g id="Symbols_11_">
                  <g id="Graphics-_x2F_-App-Icons-_x2F_-Phone">
                    <g id="Phone-Icon">
                      <linearGradient
                        gradientTransform="matrix(60 0 0 -60 -17169 37581)"
                        gradientUnits="userSpaceOnUse"
                        id="Background_13_"
                        x1="286.9837"
                        x2="286.9837"
                        y1="626.266"
                        y2="624.7667"
                      >
                        <stop offset="0" style={{ stopColor: "#67FF81" }} />
                        <stop offset="1" style={{ stopColor: "#01B41F" }} />
                      </linearGradient>
                      <path
                        className="st0"
                        d="M63.6,5c9,0,13.5,0,18.4,1.5c5.3,1.9,9.5,6.1,11.4,11.4C95,22.9,95,27.4,95,36.4v27.2     c0,9,0,13.5-1.5,18.4c-1.9,5.3-6.1,9.5-11.4,11.4C77.2,95,72.7,95,63.6,95H36.4c-9,0-13.5,0-18.4-1.5C12.7,91.5,8.5,87.4,6.6,82     C5,77.2,5,72.7,5,63.6V36.4c0-9,0-13.5,1.5-18.4C8.5,12.7,12.7,8.5,18,6.6C22.9,5,27.4,5,36.4,5H63.6z"
                        id="Background_11_"
                      />
                      <path
                        className="st3"
                        d="M25.7,44.3c-3.3-6-4.6-10.9-4.6-14.2s0.8-4.2,1.6-5c0.8-0.8,4.5-3,5.2-3.5c0.6-0.4,3-1.3,4.5,0.9     s4.3,6.5,6.3,9.4c3.1,4.1,0.6,5.9-0.2,7c-1.5,2-2.3,2.5-2.3,4.9c0,2.4,6.8,9.4,8.4,11.1c1.6,1.7,8.4,7.6,10.5,8     c2.1,0.3,5-1.9,5.6-2.5c3.1-2.4,4.8-0.6,6.2,0.2c1.4,0.8,7.8,4.8,9.8,6.1c1.9,1.3,1.7,3.4,1.7,3.4s-1.3,3.9-4.3,6.8     c-0.7,0.7-2,1.6-5.1,1.6c-3.1,0-6.5-0.6-14.5-5c-6.5-3.6-12.7-9.2-16-12.5C35.2,57.8,29.5,51.2,25.7,44.3z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#F2F1EE] flex flex-col items-center pt-10 pb-2 gap-4">
        <div className="flex justify-between gap-20">
          <div>
            <div>
              <Image
                src={kaamhailogo}
                alt=""
                className=" h-[85px] w-[185px]"
              ></Image>
            </div>
            <div>
              <h1 className=" font-semibold pb-4">
                Upgrade your hiring process with kaamhai. <br /> Designed with
                verified databases
              </h1>
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
          </div>
          <div className="flex">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-xl font-bold">Know more</h1>
              </div>
              <div className="flex font-semibold gap-4">
                <Link href="https://www.offbeatx.com/" className="">
                  Offbeat
                </Link>
                <Link href="/privacy" rel="external nofollow noopener"
              target="_blank">Privacy-policy</Link>
                <Link href="/refund" rel="external nofollow noopener"
              target="_blank">Refund-policy</Link>
                <Link href="/termsconditions" rel="external nofollow noopener"
              target="_blank">Terms & Conditions</Link>
              </div>
              <div>
                <h1 className="text-xl font-bold">Connect with Us</h1>
                <div className="flex flex-row h-10 w-10 gap-3 mt-4">
                  <Link href="https://web.whatsapp.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      width="48"
                      viewBox="0 0 448 512"
                    >
                      <path
                        // fill="#FFD704"
                        d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"
                      />
                    </svg>
                  </Link>
                  <Link href="https://x.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      width="48"
                      viewBox="0 0 448 512"
                    >
                      <path
                        // fill="#FFD704"
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
                      />
                    </svg>
                  </Link>
                  <Link href="https://www.youtube.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      width="48"
                      viewBox="0 0 448 512"
                    >
                      <path
                        // fill="#FFD704"
                        d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"
                      />
                    </svg>
                  </Link>
                  <Link href="https://www.facebook.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      width="48"
                      viewBox="0 0 448 512"
                    >
                      <path
                        // fill="#FFD704"
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                      />
                    </svg>
                  </Link>
                  <Link href="https://www.linkedin.com/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      width="48"
                      viewBox="0 0 448 512"
                    >
                      <path
                        // fill="#FFD704"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                  </Link>
                  <Link href=""></Link>
                </div>
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
                <Image
                  src={AppStore}
                  alt=""
                  className=" h-[45px] w-[153px]"
                ></Image>
              </Link>
              <Link href="">
                <Image src={PlayStore} alt=""></Image>
              </Link>
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <p>
            © 2024 <span className=" font-bold">Kaamhai</span>. All rights
            reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
