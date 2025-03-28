import { Book, Shield, User, HelpCircle } from "lucide-react";

import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";

const demoData = {
  logo: {
    url: "/",
    src: "/logo.svg", // Update with your actual logo path
    alt: "Protex",
    title: "Protex",
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
          title: "Password Manager",
          description: "Securely store and manage your passwords",
          icon: <Shield className="size-5 shrink-0" />,
          url: "/password-manager",
        },
        {
          title: "Account Security",
          description: "Monitor and protect your online accounts",
          icon: <User className="size-5 shrink-0" />,
          url: "/account-security",
        },
        {
          title: "Documentation",
          description: "Learn how to use Protex effectively",
          icon: <Book className="size-5 shrink-0" />,
          url: "/docs",
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
