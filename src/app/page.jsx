import { Navbar } from "@/components";
import {
  About,
  Explore,
  // Feedback,
  // GetStarted,
  Hero,
  // Insights,
  // WhatsNew,
  // World,
} from "../sections";

export default function Page() {
  return (
    <div className="bg-primary-black  overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
    </div>
  );
}
