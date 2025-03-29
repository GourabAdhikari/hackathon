import { Faq3 } from "@/components/blocks/faq3";

const demoData = {
  heading: "Frequently asked questions",
  description:
    "Everything you need to know about shadcnblocks. Can't find the answer you're looking for? Feel free to contact our support team.",
  items: [
    {
      id: "faq-1",
      question: "How does PROTEX predict floods?",
      answer:
        "PROTEX uses real-time weather data, AI-driven analysis, and historical flood patterns to provide accurate flood forecasts.",
    },
    {
      id: "faq-2",
      question: "Can I get alerts for specific locations?",
      answer:
        "Yes! You can set your preferred locations and receive flood alerts based on real-time risk assessments.",
    },
    {
      id: "faq-3",
      question: "Does the app work offline?",
      answer:
        "Yes, you can download maps, emergency contacts, and flood safety guides to access them without an internet connection.",
    },
    {
      id: "faq-4",
      question: "How accurate are the flood predictions?",
      answer:
        "Our AI models are trained on large datasets and continuously updated to improve accuracy, but predictions may vary based on sudden weather changes.",
    },
    {
      id: "faq-5",
      question: "Is the app free to use?",
      answer:
        "Yes, PROTEX is free to use, with almost all essential flood alerts and safety features available at no cost.",
    },
  ],
  supportHeading: "Still have questions?",
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.",
  supportButtonText: "Contact Support",
  supportButtonUrl: "https://protectwithprotex.com",
};

function Faq3Demo() {
  return <Faq3 {...demoData} />;
}

export { Faq3Demo };
