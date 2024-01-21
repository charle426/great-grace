import HeroSection from "../Components/heroSection";
import JoinUs from "../Components/joinUs";
import Prayer from "../Components/prayer";
import UpcomingEvents from "../Components/upcomingEvent";
import Welcome from "../Components/welcome";

export default function Homepage({ setActiveNav }) {
  setActiveNav("home");
  return (
    <>
      <HeroSection />
      <JoinUs />
      <Prayer />
      <Welcome />
      <UpcomingEvents/>
    </>
  );
}
