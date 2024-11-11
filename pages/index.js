import AnimatedSection from "@/components/AnimatedSection";
import About from "../components/Section/About";
import ContactUs from "../components/Section/ContactUs";
import SliderCustom from "../components/Section/SliderCustom";

export default function Home() {
  return (
    <>
      <AnimatedSection />
      <div className="slider-box">
        <h2>Why you should choose us?</h2>
        <SliderCustom />
      </div>
      <About />
      <ContactUs />
    </>
  );
}
