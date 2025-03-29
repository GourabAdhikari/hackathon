import { PricingContainer } from "@/components/ui/pricing-container";

// Types
interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  accent: string;
  rotation?: number;
}
const DEMO_PLANS: PricingPlan[] = [
  {
    name: "Free Plan",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "1 User",
      "Basic Flood Alerts (General Notification)",
      "Access to City-Level Flood Risk Maps.",
      "Basic Support",
    ],
    isPopular: false,

    accent: "bg-rose-500",
    rotation: -2,
  },
  {
    name: "Pro",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support"],
    isPopular: true,

    accent: "bg-blue-500",
    rotation: 1,
  },
  {
    name: "Enterprise",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: ["Unlimited", "Contact Us", "1TB Storage", "24/7 Support"],
    isPopular: false,

    accent: "bg-purple-500",
    rotation: 2,
  },
];
export function PricingDemo() {
  return (
    <div className="flex flex-col items-center gap-16">
      <PricingContainer title="Choose Your Perfect Plan" plans={DEMO_PLANS} />
      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold text-center relative">
          Additional{" "}
          <span className="text-cyan-500 relative">
            Features
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0"></span>
          </span>
        </h2>
        <ul className="w-full max-w-2xl space-y-4">
          {[
            {
              icon: "🌍",
              title: "API Access for Third-Party Apps",
              action: "Contact Us",
            },
            {
              icon: "🛰️",
              title: "Satellite & Drone Inspection Reports",
              action: "Custom Pricing",
            },
            {
              icon: "🏢",
              title: "Custom Enterprise Solutions",
              action: "Get a Quote",
            },
          ].map((feature) => (
            <li
              key={feature.title}
              className="flex items-center justify-between p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-white font-medium">{feature.title}</span>
              </div>
              <span className="text-cyan-500 text-sm">{feature.action}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
