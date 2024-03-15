import About from "@/components/about";
import HeroSection from "@/components/herosection";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <div className="bg-black h-4/5">
        <Navbar />
        <HeroSection />
      </div>
      {/* Arrow Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
      <div className="bg-white  h-1/5">
        <About />
      </div>
    </div>
  );
}
