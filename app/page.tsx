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
    <div className="w-9/12 justify-center items-center mx-auto">
      <div className="mb-40">
      <Hero /> 
      </div>
      <PlanPage/>    
    <Support/> 

     <LocationPage/>
      <ContactForm/>
      <FooterBox />
  </div>
  );
}
