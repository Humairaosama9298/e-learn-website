"use client";

import react from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/footer";


export default function Contact() {
  const routes = useRouter();
  return (
    <main>
      <section className="text-gray-600 body-font relative">
        <div className="px-5 py-10 mx-auto bg-[#b2ebf2] bg-opacity-55 ">
          <div className="flex flex-col justify-evenly lg:flex-row bg-[#05626a] m-10 rounded-xl">
            <div className="lg:w-1/2 xl:w-1/3 p-10  sm:space-y-10">
            <h1 className="text-white text-3xl md:text-5xl m-5 ">
              Let's Talk on Something 
              <span className="font-bold text-[#2aa5b6]"> Great </span> together
            </h1>
            <div className="text-sm space-y-10 flex flex-col  ">
              <div className="inline-flex gap-5 px-6 mt-14">
                <div className="w-5 h-5 text-[#2aa5b6] tracking-widest ">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>
                <Link
                  className="text-white "
                  href="mailto:humairaosama6@email.com"
                >
                  humairaosama6@email.com
                </Link>
              </div>
              <div className="inline-flex gap-5  px-6 ">
                <div className="w-5 h-5  text-[#2aa5b6] tracking-widest ">
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </div>
                <Link
                  className="text-white "
                  href="tel:+923194051374"
                >
                  92 319 4051374
                </Link>
              </div>
              <div className=" inline-flex gap-5  px-6 ">
                 <div className="w-5 h-5  text-[#2aa5b6] tracking-widest ">
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                </div>
                <Link
                  className="text-white"
                  href="https://www.google.com/maps/place/Mazar-e-Quaid-e-Azam+Muhammad+Ali+Jinnah/@24.9167872,67.0236672,12z/data=!4m9!1m2!2m1!1s151%2F2!3m5!1s0x3eb33e5e736977c1:0x70ed36c8a6891d3a!8m2!3d24.8753868!4d67.0409721!16zL20vMGI1azUz?entry=ttu&g_ep=EgoyMDI0MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                >
                  151/2 aurangabad Nazmabad,Karachi
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-10 ml-7 mt-16 sm:mt-96 mb-14 sm:mx-6 md:mt-20">
            <div className="w-6 h-6 bg-transparent">
              <Link className="text-[#2aa5b6]" href="http://www.LinkedIn.com" ><FontAwesomeIcon icon={faLinkedin} size="lg"/></Link>
            </div>
            <div className="w-6 h-5-transparent">
              <Link className="text-[#2aa5b6]" href="http://www.instagram.com" ><FontAwesomeIcon icon={faInstagram} size="lg"/></Link>
            </div>
            <div className="w-6 h-6 bg-transparent">
              <Link className="text-[#2aa5b6]" href="http://www.facebook.com" ><FontAwesomeIcon icon={faFacebook} size="lg"/></Link>
            </div>
            </div>
          </div>
          <div className="
           bg-white mx-10 xl:w-[700px] xl:h-[700px] mb-10 rounded-xl xl:m-10">
            <div className="flex flex-col mt-8 mb-10 mx-10 ">
              <h2 className="text-[#2aa5b6] sm:py-5 text-lg font-bold title-font">
                I'm interested in:
              </h2>
              <div className=" flex flex-wrap gap-2 ">
              <Button onClick={()=>{routes.push("https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6")}} variant="outline" className="rounded-3xl my-2  
              hover:text-white text-[10px] sm:text-xs hover:border-none  hover:bg-[#2aa5b6]">HTML COURSE</Button>
              <Button onClick={()=>{routes.push("https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob")}}  variant="outline" className="rounded-3xl my-2 sm:px-6  hover:text-white text-[10px] sm:text-xs hover:border-none hover:bg-[#2aa5b6]">CSS COURSE</Button>
              <Button onClick={()=>{routes.push("https://www.youtube.com/watch?v=3ivvqbUpGbg&list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo&index=1")}} variant="outline" className="rounded-3xl  px-5  sm:my-2 hover:text-white text-[10px] sm:text-xs  hover:border-none hover:bg-[#2aa5b6]">JAVASCRIPT</Button>
              <Button onClick={()=>{routes.push("https://www.youtube.com/watch?v=rRAVqEFnT1s")}} variant="outline" className="rounded-3xl  px-5  sm:my-2  hover:text-white sm:text-xs text-[10px] hover:border-none hover:bg-[#2aa5b6]">TYPESCRIPT</Button>
              <Button onClick={()=>{routes.push("https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt")}}  variant="outline" className="rounded-3xl my-2 sm:my-2 hover:text-white  sm:text-xs text-[10px] hover:border-none hover:bg-[#2aa5b6]">REACT COURSE</Button>
              </div>
              <div className="relative my-5 mb-4">
                <label
                  htmlFor="name"
                  className=" text-right py-5 hover:text-[#2aafb6]">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="hover:border-[#2aafb6] border-gray-300 border-b-2 focus:ring-2 text-base outline-none text-gray-500  px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></Input>
              </div>
              <div className="relative my-5 mb-4">
                <label
                  htmlFor="email"
                  className="hover:text-[#2aafb6] leading-7 text-sm "
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className=" border-b-2 border-gray-300 hover:border-[#2aafb6] focus:ring-2 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></Input>
              </div>
              <div className="relative my-5 mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 hover:text-[#2aafb6]  text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="my-5 w-full bg-white rounded-xl border border-gray-300  hover:border-[#2aafb6] focus:ring-2 focus:ring-[#2aafb6] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <Button className="text-white bg-[#05626a] border-0 py-2 px-6 focus:outline-none hover:bg-[#2aafb6] rounded-xl text-lg">
                SEND
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
