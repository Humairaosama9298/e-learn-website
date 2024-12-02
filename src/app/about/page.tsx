'use client';
import Image from "next/image";
import Footer from "@/components/footer";


export default function About(){
    return(
        
            <main className="bg-[#b2ebf2] bg-opacity-55">
                <div className="flex flex-col xl:flex-row space-y-10">
                <div>  
                    <h1 className="text-4xl p-10 px-10">Online E-Learn Academy</h1>
                    <p className="text-left px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus at blanditiis, quos eligendi dolor necessitatibus voluptatibus consequatur ab incidunt perspiciatis, totam tempore dolorum facilis similique! Dignissimos nostrum eum eius quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
             
                     <div>
            <Image className="px-10" src="/images/hero.jpg" alt="about-imag" width={500}
            height={100} ></Image>
            </div>
            </div>
            <div>
                <Footer/>
            </div>
            
            </main>
    )
}