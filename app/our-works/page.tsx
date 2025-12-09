import Navbar from "@/components/Navbar";
import PageLabel from "@/components/PageLabel";
import OurClients from "@/components/OurClients";
import Label from "@/components/Label";
import Footer from "@/components/Footer";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import IndustriesWeServe from "@/components/IndustriesWeServe";


const page = () => {
  return (
     <main className="bg-white text-black">
        <Navbar />
        <PageLabel title="*our works." />
           <IndustriesWeServe />
        <OurClients />
        <Label />
        <Footer />
     </main>
  )
}

export default page
