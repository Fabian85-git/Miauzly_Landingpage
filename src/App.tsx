import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { ForWhom } from "./components/ForWhom";
import { WhyMiauzly } from "./components/WhyMiauzly";
import { SneakPreview } from "./components/SneakPreview";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <ForWhom />
      <WhyMiauzly />
      <SneakPreview />
      <Newsletter />
      <Footer />
    </div>
  );
}
