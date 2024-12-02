import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero_section() {
  return (
  <main>
    <section className="text-gray-600 bg- body-font">
  <div className=" mx-auto flex px-5 py-24  md:px-10 md:py-9 md:flex-row flex-col  bg-[#b2ebf2] bg-opacity-55 items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl  mb-4 font-bold text-gray-900"> Elevate Your Knowledge
      </h1>
      <p className="my-5 mb-8 text-sm sm:text-lg sm:text-justify  leading-relaxed"> "Stay ahead of the curve with our cutting-edge courses, industry insights, and expert guidance to enhance your professional growth."</p>
      <div className="flex justify-center">
        <Button className="inline-flex text-[#00838f] border-0 py-2 px-6 focus:outline-none hover:bg-white focus:ring-4 focus:ring-[#00bcd4] font-medium rounded-[5px] text-lg"  >MORE INFO</Button>
        <Button className="ml-4 inline-flex text-white text-[10px] hover:bg-[#FFA000] bg-[#00bcd4] focus:ring-4 focus:ring-white font-medium rounded-[5px] py-2 px-6 focus:outline-none text-lg">SEE DETAIL</Button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src="/images/girl_learn.png"/>
    </div>
  </div>
</section>
</main>
  );
}
