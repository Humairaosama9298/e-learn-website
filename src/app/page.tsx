'use client';

import About from "@/app/about/page";
import Hero_section from "@/components/hero_section";
import Link from "next/link";
import Footer from "../components/footer";
import Feature from "@/app/services/page";
import Contact from "./contact/page";

export default function home(){
  return(
   <div>
    <Hero_section/>
    <Feature/>
    <Footer/>
   </div>
  )
}