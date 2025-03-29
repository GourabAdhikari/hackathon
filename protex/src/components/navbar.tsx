import { Book, Shield, User, HelpCircle } from "lucide-react";

import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";

const demoData = {
  logo: {
    url: "/",
    src: "/logo.svg", // Update with your actual logo path
    alt: "Protex",
    title: "PROTEX",
  },
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Features",
      url: "#",
      items: [
        {
          title: "Interactive Map",
          description: "View real-time flood risk in your area.",
          icon: <Shield className="size-5 shrink-0" />,
          url: "/interactive-map",
        },
        {
          title: "Emergency Resource Finder",
          description: "Locate shelters, hospitals, and safe routes.",
          icon: <User className="size-5 shrink-0" />,
          url: "/emergency-resources",
        },
        {
          title: "Offline Mode",
          description: "Access PROTEX without internet.",
          icon: <Book className="size-5 shrink-0" />,
          url: "/offline-mode",
        },
      ],
    },
    {
      title: "Support",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Find answers to common questions",
          icon: <HelpCircle className="size-5 shrink-0" />,
          url: "/help",
        },
        {
          title: "Contact",
          description: "Get in touch with our support team",
          icon: <User className="size-5 shrink-0" />,
          url: "/contact",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Community Feedbacks",
      url: "/community-feedbacks",
    },
  ],
  mobileExtraLinks: [
    { name: "Help", url: "/help" },
    { name: "Contact", url: "/contact" },
    { name: "Privacy", url: "/privacy" },
    { name: "Terms", url: "/terms" },
  ],
  auth: {
    login: { text: "Sign in", url: "/signin" },
    signup: { text: "Get Started", url: "/signup" },
  },
};

function Navbar1Demo() {
  return <Navbar1 {...demoData} />;
}

export { Navbar1Demo };
