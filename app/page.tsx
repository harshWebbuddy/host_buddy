import LocationPage from "@/components/Locationpage";
import Plans from "@/components/Plans";
import ContactForm from "@/components/Form";
import Support from "@/components/Support";
import { Hero } from "@/components";
import Plan1 from "@/components/Plans";
import PlanPage from "@/components/PlanPage";
import Rating from "@/components/Rating";
import FooterBox from "@/components/FooterBox";

export default function Home() {
  return (
    <div className="w-full justify-center items-center ">
    <Hero />
    <div className="w-10/12 mx-auto">  <PlanPage />
    </div>
  
    <Support />
    <LocationPage />
    <ContactForm />
  </div>
  );
}
