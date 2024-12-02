
import Link from "next/link";
import { Card } from "./ui/card";

export default function Footer(){
    return(
        <main>
            <footer className="text-gray-600  bg-[#b2ebf2] bg-opacity-55 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap xl:flex-row text-center  ">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#00838f] tracking-widest text-sm mb-3">COURSES</h2>
        <nav className="list-none text-xs space-y-3 mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Html</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Css</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Typescript</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">javascript</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#00838f] tracking-widest text-sm mb-3">LANGUAGES</h2>
        <nav className="list-none text-xs space-y-3 mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">English</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">urdu</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">French</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Chinese</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#00838f] tracking-widest text-sm mb-3">SERVICES</h2>
        <nav className="list-none text-xs space-y-3 mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Online Classes</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Home Tution</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Zoom Classes</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">One to one Clasess</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#00838f] tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none text-xs space-y-3  mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="flex flex-col justify-center items-center lg:w-1/4 w-full px-4 py-10">
        <h2 className="text-[#00838f]  title-font font-bold tracking-widest text-sm mb-3 sm:mb-10">SUBSCRIBE</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-[#00b2d4]  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#00838f] border-0 py-2 px-6 focus:outline-none hover:bg-[#ffa000] rounded">SUBSCRIBE</button>
        </div>
        <pre className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack waistcoat green juice
        </pre>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className=" bg-[#b2ebf2] px-5 py-6 mx-auto flex flex-col items-center sm:flex-row ">
      <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img className="w-14 h-14 sm:w-14 sm:h-14 md:w-24 md:h-24 md:mb-2"  src="/images/logo.png" alt="logo" ></img>
        <span className=" text-xl">E-Learn</span>
      </div>
      <p className="text-[8px] text-justify px-14">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quam totam quasi est, repellat dolor quaerat vitae in? Eum architecto velit accusamus quae est at adipisci rerum harum sapiente neque!</p>
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 E-Learn —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="http://www.facebook.com" className="text-[#316FF6]">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link href="http://www.twitter.com" className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link href="https://www.instagram.com/" className="ml-3 text-red-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link href="https://www.linkedin.com/in/humaaaira666-osama666/" className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
        </main>
    )
}