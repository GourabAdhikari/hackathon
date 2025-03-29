import { FeaturesSectionWithCardGradientDemo } from "@/components/cards";
import { Faq3Demo } from "@/components/faq";
import Footer from "@/components/footer";
import { GlobeDemo } from "@/components/globe";
import { DemoBackgroundPaths } from "@/components/herosection";

import { ParallaxScrollSecondDemo } from "@/components/photo";
import { PricingDemo } from "@/components/pricing";

import { TestimonialsDemo } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <DemoBackgroundPaths />
      <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-6 mt-30">
        Our <span className="text-cyan-600">Features</span>
      </h1>
      <FeaturesSectionWithCardGradientDemo />
      <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-6 mt-30">
        Some <span className="text-cyan-600">Previews</span>
      </h1>
      <ParallaxScrollSecondDemo />
      <TestimonialsDemo />
      <PricingDemo />
      <div className="relative h-[600px] w-full my-52">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Unified Across the <span className="text-cyan-600">Globe</span>
        </h2>
        <GlobeDemo />
      </div>
      <Faq3Demo />
      <Footer />
    </>
  );
}
