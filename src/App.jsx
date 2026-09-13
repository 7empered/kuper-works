import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Process from "./components/Process";
import Compare from "./components/Compare";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="apex-root">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Compare />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
