"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Group1 from "@/public/Group 1.png";
import ScreenImage from "@/public/Screenshot.png";
import JobPost from "@/public/Job Posts.png";
import LeaveManagementSystem from "@/public/Leave Management System.png";
import AdvancePayTracker from "@/public/Advance Pay Tracker.png";
import PaymentTrackers from "@/public/Payment Trackers.png";
import MonthlyPayslip from "@/public/Monthly Payslip.png";
import Kochi from "@/public/Kochi.png";
import cuate from "@/public/cuate.png";
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
import Logo from "@/public/logo.png";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Highlight } from "@/components/highlight";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import Header from "@/components/Header";
import VerifiedProfessional from "@/public/Verified Professional.png";
import AdManagement from "@/public/Ad Management.png";
import BrandProfile from "@/public/Brand Profile.png";
import EmployeeManagement from "@/public/Employee Management.png";

const inter = Inter({ subsets: ["latin"] });
const words = `Kaamhai is a revolutionary platform designed to connect blue
collar employees with job opportunities and streamline HR
management for employers. Our mission is to empower individuals
and businesses in the blue collar sector by providing innovative
solutions tailored to their needs
`;

export default function Home() {
  const [counterOn, setcounterOn] = useState(false);
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
      text: "Connecting",
    },
    {
      text: "you",
    },
    {
      text: "to",
    },
    {
      text: "Opportunities",
    },
  ];
  return (
    <main className={`f bg-white ${inter.className}`}>
      <div>
        <Header />
      </div>
      {/* Hero Section */}
      <div className=" bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] hero min-h-screen mt-16 flex flex-col pt-16 gap-20 items-center justify-center">
        {/* Hero Heading */}
        <div className="flex flex-col gap-10">
          <h2 className=" font-extrabold text-4xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-snug items-center justify-center text-center">
            Bring your hiring journey <br /> with{" "}
            <span className="bg-vector1 relative bg-no-repeat bg-contain bg-center">
              Kaamhai
            </span>
          </h2>
          <p className="text-xl sm:text-3xl   leading-snug items-center justify-center text-center">
            Upgrade your hiring process with Kaamhai,
            <br /> Designed with verified databases
          </p>
          <div className=" flex items-center gap-3 justify-center">
            <div className="flex border-2 border-black bg-white rounded-full">
              <div className="flex px-1 py-1">
                <input
                  type="search"
                  name="search"
                  placeholder="Coming soon..."
                  className=" w-[20rem] sm:w-[30rem] focus:outline-none ml-4"
                />
                <button
                  type="submit"
                  className=" content-center border-2 border-black bg-[#FFD704] rounded-full h-12 w-12"
                >
                  <FaSearch className="ml-2 h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Section */}
        <div className=" bg-[#FFD704] border flex border-black border-t-4 border-b-4 border-l-0 border-r-0 w-full h-[3.5rem] sm:h-20">
          <Marquee>
            <div className=" mr-10 font-bold text-4xl sm:text-5xl uppercase">
              <h1>Empowerment</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-4xl sm:text-5xl uppercase">
              <h1>Accessibility</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-4xl sm:text-5xl uppercase">
              <h1>Efficiency</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-4xl sm:text-5xl uppercase">
              <h1>Empowerment</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-4xl sm:text-5xl uppercase">
              <h1>Accessibility</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
            <div className=" mr-10 font-bold text-4xl sm:text-5xl uppercase">
              <h1>Efficiency</h1>
            </div>
            <div className=" mr-10">
              <IoIosStar />
            </div>
          </Marquee>
        </div>
        {/* Business Operations */}
        <div className="bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] flex flex-col gap-10 w-screen">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" text-5xl font-bold pb-5 text-start leading-normal">
              {/* Simplify Your Business Operations <br /> with Ease! */}
              <TypewriterEffect words={empolyers} />
            </h1>
            <div className="flex flex-col lg:flex-row-reverse flex-wrap items-center justify-center w-screen">
              <div className=" ">
                <Image src={Employer} alt=""></Image>
              </div>
              <div className="flex lg:flex-row flex-col  text-3xl font-semibold   items-center justify-center">
                <div className="flex flex-row items-center  lg:pb-0 ">
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card flex items-center justify-center flex-col dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto  rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-cover rounded-full"
                          src={VerifiedProfessional}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Verified <br /> Professionals
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
                          className="dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-cover rounded-full"
                          src={EmployeeManagement}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Employee <br /> Management
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
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-cover rounded-full"
                          src={AdManagement}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Ad <br /> Management
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                  <CardContainer className="inter-var pt-16">
                    <CardBody className="bg-gray-50 flex flex-col-reverse gap-16 items-center relative group/card  dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-cover rounded-full"
                          src={BrandProfile}
                          alt=""
                        ></Image>
                      </CardItem>
                      <CardItem className=" text-black">
                        <h1 className=" text-center">
                          Brand <br /> Profile
                        </h1>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center w-screen">
            <h1 className=" text-5xl font-bold text-end leading-normal">
              {/* Caption for Employees */}
              <TypewriterEffect words={employee} />
            </h1>
            <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-screen">
              <div className=" ">
                <Image src={Employees} alt=""></Image>
              </div>
              <div className="flex lg:flex-row flex-col  text-3xl font-semibold   items-center justify-center">
                <div className="flex flex-row items-center  lg:pb-0 ">
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card flex items-center justify-center flex-col dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto  rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full"
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
                          className="dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full "
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
                <div className="flex flex-row gap-10 items-center">
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card flex items-center justify-center flex-col gap-10 dark:bg-[linear-gradient(180deg,_#F4F4F4_0%,_#FFFFFF_100%)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[17rem] rounded-xl  border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white h-[10rem] w-[9rem]"
                      >
                        <Image
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full"
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
                          className=" dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] object-none object-center rounded-full"
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
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-black p-5 sm:p-20 md:shadow-xl">
        <div className=" z-10">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
            Get Your Employee card now !
          </p>
          <div className="text-[#FFD704] sm:text-3xl sm:font-semibold p-5 sm:p-0 flex items-center justify-between gap-14 sm:gap-20 mt0 sm:mt-20">
            <div className="flex flex-col items-start gap-48">
              <h1>Profile Verification</h1>
              <h1>Face Verification</h1>
              <h1>Passport Verification</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1>Bank Account Verification</h1>
              <div className=" flex items-center justify-center h-[490%] w-[490%]">
                <Image
                  src={EmployeeCard}
                  alt=""
                  className="pt-48 sm:mt-20"
                ></Image>
              </div>
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
        <div className="flex flex-col lg:flex-row pt-10 items-center px-4 justify-center">
          <div className="flex flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[47%] 2xl:w-[47%] xl:mt-10">
            <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl leading-snug capitalize text-[#9E9E9E] text-wrap">
              We&#39;ll help you make{" "}
              <span className=" text-black bg-vector1 bg-no-repeat bg-contain bg-center">
                smarter
              </span>{" "}
              hiring decisions
            </h1>
            <p className="text-3xl leading-snug items-center justify-center">
              Download our app and start{" "}
              <Highlight className=" italic">Hiring now.</Highlight>
            </p>
          </div>
          <div className="xl:ml-[-10rem] xl:mb-32 2xl:ml-[-12rem] 2xl:mb-36">
            <Image src={Group1} alt=""></Image>
          </div>
        </div>
        {/* Verified Employees in your City */}
        <div className="">
          <div className="flex lg:flex-row flex-col h-auto py-16 gap-5 lg:px-24 xl:px-48 justify-around items-center">
            <h1 className=" p-10 text-5xl font-bold uppercase">
              Find{" "}
              <Highlight className=" leading-normal">
                Verified <br /> Employees
              </Highlight>{" "}
              in your City
            </h1>
            <div className="flex flex-col sm:flex-row text-3xl gap-10 sm:gap-28 font-bold text-center">
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
      <div id="about" className="bg-cover bg-[#FFD704]">
        <div className=" flex flex-col xl:flex-row">
          <div className="flex relative flex-col font-bold mt-10 sm:mt-40 ml-0 sm:ml-16 text-4xl items-center justify-end">
            <h1 className=" z-[999]">About Us</h1>
            <Image src={ScreenImage} alt="" className=" z-[999]"></Image>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="275"
              viewBox="0 0 250 275"
              fill="none"
              className=" absolute top-10 -left-5"
            >
              <path
                d="M249.7 209.892C235.591 233.012 215.042 251.368 190.652 262.638C166.262 273.907 139.126 277.585 112.677 273.205C86.2274 268.825 61.6518 256.585 42.0578 238.031C22.4637 219.478 8.73139 195.446 2.59725 168.973C-3.53689 142.5 -1.79731 114.775 7.59599 89.3056C16.9893 63.8359 33.6145 41.7647 55.3691 25.8831C77.1237 10.0015 103.031 1.0227 129.814 0.0822443C156.597 -0.858214 183.054 6.28186 205.839 20.5996L134.5 137.5L249.7 209.892Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center sm:px-20 md:px-28 lg:px-40 sm:pt-10 xl:w-[70%] pb-16 xl:pl-10 xl:pr-36 2xl:pr-40 gap-16">
            <div className=" border-b-2 border-black text-wrap text-center p-4  sm:p-0 xl:text-left sm:text-2xl md:text-3xl lg:text-4xl pb-12">
              <TextGenerateEffect words={words} />
            </div>
            <div className="border-b-2 border-black w-full flex items-center justify-center">
              <ScrollTrigger
                onEnter={() => setcounterOn(true)}
                onExit={() => setcounterOn(false)}
              >
                <div className=" text-4xl pb-12 items-center gap-12 sm:gap-20 md:gap-24 lg:gap-32 xl:gap-44 2xl:gap-64 flex flex-row">
                  <div className="flex flex-col items-start text-wrap gap-3">
                    <div>
                      <Image src={VerifiedEmployees} alt=""></Image>
                    </div>
                    <div className=" font-semibold text-2xl sm:text-4xl sm:font-bold">
                      {/* {counterOn && (
                        <CountUp
                          start={728}
                          end={1000}
                          duration={3}
                          delay={0}
                        />
                      )} */}
                      1000+
                    </div>
                    <div className=" font-normal text-lg text-center sm:font-semibold sm:text-xl">
                      Verified <br /> Employees
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between text-wrap gap-3">
                    <div>
                      <Image src={JobPost} alt=""></Image>
                    </div>
                    <div className="font-semibold text-2xl sm:text-4xl sm:font-bold">
                      {/* {counterOn && (
                        <CountUp
                          start={2000}
                          end={2500}
                          duration={4}
                          delay={0}
                        />
                      )} */}
                      2500+
                    </div>
                    <div className=" font-normal text-lg text-center sm:font-semibold sm:text-xl">
                      Job <br /> Post
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between text-wrap gap-3">
                    <div>
                      <Image src={JobSeeker} alt=""></Image>
                    </div>
                    <div className="font-semibold text-2xl sm:text-4xl sm:font-bold">
                      {/* {counterOn && (
                        <CountUp start={126} end={500} duration={3} delay={0} />
                      )} */}
                      500+
                    </div>
                    <div className=" font-normal text-lg text-center sm:font-semibold sm:text-xl">
                      Job <br /> Seeker
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div
        id="contact"
        className="bg-white flex lg:flex-row flex-col  py-16 px3 sm:px-20 md:px-32 lg:px-40 justify-between"
      >
        <div className=" pl-10">
          <Image src={cuate} alt=""></Image>
        </div>
        <div className="flex flex-col items-center sm:items-end justify-center sm:justify-end p-4 capitalize gap-6">
          <h1 className=" text-5xl font-bold text-center sm:text-right sm:rtl:text-left leading-snug">
            Our support team is <br />{" "}
            <span className=" italic">active 24x7</span>
          </h1>
          <p className=" font-medium text-2xl text-center sm:text-right sm:rtl:text-left leading-snug">
            Feel free to chat with our support team whenever <br /> you need
            more clarity
          </p>
          <div className=" flex flex-row gap-5">
            <Link href="https://wa.me/917090121000">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </Link>
            <Link href="mailto:support@kaamhai.in ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                viewBox="0 0 512 512"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
            </Link>
            <Link href="tel:+917090121000">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                viewBox="0 0 512 512"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#F2F1EE]">
        <div className="mx-auto max-w-screen-2xl space-y-8 px-5 2xl:px-0  pt-10 pb-4  lg:space-y-16 ">
          <div className="grid grid-cols-1 p-5 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600">
                <Image
                  src={Logo}
                  alt=""
                  className="footer_logo h-[52px] w-[185px]"
                />
              </div>

              <p className="mt-4 max-w-sm font-semibold pb-4 ">
                Upgrade your hiring process with kaamhai. <br /> Designed with
                verified databases
              </p>

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

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 ">
              <div>
                <p className="text-xl font-bold">Know more</p>
                <div className="flex font-semibold pt-5 gap-4">
                  <Link href="https://www.offbeatx.com/" className="">
                    Offbeat
                  </Link>
                  <Link
                    href="/privacy"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    Privacy-policy
                  </Link>
                  <Link
                    href="/refund"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    Refund-policy
                  </Link>
                  <Link
                    href="/termsconditions"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                <p className="text-xl pt-5 font-bold">Connect with Us</p>
                <div className="flex flex-row h-10 w-10 gap-3 mt-4">
                  <Link href="https://wa.me/917090121000">
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
                  <Link href="https://x.com/KaamHai_in?t=vlgjo84JRfAxSdSEv44ExQ&s=09">
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
                  {/* <Link href="https://www.youtube.com/">
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
                  </Link> */}
                  <Link href="https://www.instagram.com/kaamhai.in?igsh=MWU5ajF0Z3V5NzlqNg==">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      width="48"
                      viewBox="0 0 448 512"
                    >
                      <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                    </svg>
                  </Link>
                  <Link href="https://www.facebook.com/kaamhai.in?mibextid=JRoKGi">
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
                  <Link href="https://www.linkedin.com/company/kaamhai/">
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
                </div>
              </div>

              <div>
                <p className="text-xl font-extrabold">Get the App</p>

                <p className=" font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Pariatur, doloribus.
                </p>
                <div className="flex pt-5 gap-10">
                  <Link
                    href="https://www.apple.com/app-store/"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    <Image
                      src={AppStore}
                      alt=""
                      className=" h-[45px] w-[153px]"
                    ></Image>
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.kaamhai"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    <Image src={PlayStore} alt=""></Image>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className=" text-center">
            &copy; 2024{" "}
            <Link href="https://www.offbeatx.com/" className=" font-bold">
              Offbeat Technet Pvt Ltd
            </Link>{" "}
            All rights reserved. Technology partner{" "}
            <Link href="https://www.nityom.com" className=" font-bold">
              Nityom
            </Link>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}
