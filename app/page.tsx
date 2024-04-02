import LocationPage from "@/components/Locationpage";
import Plans from "@/components/Plans";
import ContactForm from "@/components/Form";
import Support from "@/components/Support";
import { Hero } from "@/components";

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Plans/>
      <Support/>
      <LocationPage/>
      <ContactForm/>
    </main>
  );
}
