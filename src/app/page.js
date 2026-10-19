import EcoSystemCards from "./components/EcoSystemCards";
import EcosystemInside from "./components/EcosystemInside";
import Footer from "./components/Footer";
import Hero from "./components/HeroSellix";
import HowItWorks from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import WhyDeniedSection from "./components/WhyDeniedSection";



export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <EcoSystemCards></EcoSystemCards>
      <WhyDeniedSection></WhyDeniedSection>
      <EcosystemInside></EcosystemInside>
      <HowItWorks></HowItWorks>
      <PricingSection></PricingSection>
      <Footer></Footer>
    </main>
  );
}