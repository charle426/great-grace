import Vision from "../Components/Vision";
import HeroSection from "../Components/heroSection";
import JoinUs from "../Components/joinUs";
import Prayer from "../Components/prayer";
import UpcomingEvents from "../Components/upcomingEvent";
import Welcome from "../Components/welcome";
import Whatsapp from "../Components/whatsapp";

export default function Homepage({ setActiveNav }) {
  setActiveNav("home");
  return (
    <>
      <HeroSection />
      <Welcome />
      <Prayer />
      <Vision/>
      <JoinUs />
      <Whatsapp/>
      <UpcomingEvents/>
    </>
  );
}
