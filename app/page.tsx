import Image from "next/image";
import Navigation from "@/components/navigation";
import Banner from "@/components/banner";
import Skillsets from "@/components/Skillsets";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import PortfolioSection from "@/components/portfolio-section";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <Navigation/>
     <Banner />
     <Skillsets />
     <Projects />
     <PortfolioSection/>
     <Contact />
    </main>
  );
}
