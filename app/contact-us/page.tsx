import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Label from '@/components/Label';
import PageLabel from '@/components/PageLabel';
import ContactForm from '@/components/ContactForm';
const page = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center gap-10    bg-white">
      <Navbar />
      <PageLabel title="*Contact Us" />
      <ContactForm />
      <Label />
      <Footer />
    </main>
  )
}

export default page
