import Navbar from "@/components/Navbar";
import PageLabel from "@/components/PageLabel";
import OurClients from "@/components/OurClients";
import Label from "@/components/Label";
import Footer from "@/components/Footer";

const page = () => {
  return (
     <main className="bg-zinc-50">
        <Navbar />
        <PageLabel title="*our works." />
        <OurClients />
        <Label />
        <Footer />
     </main>
  )
}

export default page
