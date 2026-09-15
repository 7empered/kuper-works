import { useState } from "react";
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
import BookingModal from "./components/BookingModal";
import { useSmoothWheelScroll } from "./hooks/useSmoothWheelScroll";

export default function App() {
  useSmoothWheelScroll();

  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingNote, setBookingNote] = useState("");

  const openBooking = (note = "") => {
    setBookingNote(note);
    setBookingOpen(true);
  };
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="apex-root">
      <Header onBook={openBooking} />
      <Hero onBook={openBooking} />
      <Marquee />
      <Services />
      <Process />
      <Compare />
      <Pricing onBook={openBooking} />
      <Testimonials />
      <Contact onBook={openBooking} />
      <Footer />
      <BookingModal open={bookingOpen} initialNote={bookingNote} onClose={closeBooking} />
    </div>
  );
}
