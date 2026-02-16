import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import WhyNumberOne from "./sections/WhyNumberOne";
import WhyForYou from "./sections/WhyForYou";
import BeforeAndAfter from "./sections/BeforeAndAfter";
import Testimonials from "./sections/Testimonials";
import Offers from "./sections/Offers";

export default function Home() {
  return (
    <div>
      <section id="home"><HeroSection /></section>
      <section id="products"><OverviewSection /></section>
      <section id="why"><WhyNumberOne /></section>
      <section id="about"><WhyForYou /></section>
      <section id="results"><BeforeAndAfter /></section>
      <Offers />
      <section id="testimonials"><Testimonials /></section>
    </div>
  );
}
