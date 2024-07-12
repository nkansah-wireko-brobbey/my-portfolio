import Image from "next/image";
import Navigation from "@/components/navigation";
import Banner from "@/components/banner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <Navigation/>
     <Banner />
    </main>
  );
}
