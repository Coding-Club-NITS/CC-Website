import { HoverEffect } from "./ui/hover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-8xl mx-auto pt-20">
      {Object.entries(projects).map(([year, items]) => (
        <div key={year} className="mb-10">
          <h1 className="text-3xl font-bold text-center mb-6">{year}</h1>
          <HoverEffect items={items} />
        </div>
      ))}
    </div>
  );
}
export const projects = {
  "2024": [
    {
      title: "Akash Gupta",
      description:
        "Developed a scalable e-commerce platform to handle high traffic.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sneha Sharma",
      description: "Created a machine learning model for weather prediction.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Rajiv Menon",
      description: "Designed a mobile app for personal finance tracking.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Akash Gupta",
      description:
        "Developed a scalable e-commerce platform to handle high traffic.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sneha Sharma",
      description: "Created a machine learning model for weather prediction.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Rajiv Menon",
      description: "Designed a mobile app for personal finance tracking.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "2023": [
    {
      title: "Priya Verma",
      description: "Built a library management system for college libraries.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Arjun Nair",
      description: "Implemented a real-time chat application using Socket.IO.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ananya Reddy",
      description: "Worked on a blockchain-based voting system.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Priya Verma",
      description: "Built a library management system for college libraries.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Arjun Nair",
      description: "Implemented a real-time chat application using Socket.IO.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ananya Reddy",
      description: "Worked on a blockchain-based voting system.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "2022": [
    {
      title: "Kunal Joshi",
      description: "Developed a responsive portfolio website for freelancers.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ritika Roy",
      description: "Automated data analysis for a sales company using Python.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Vikram Iyer",
      description: "Created an AI-based chatbot for customer support.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Kunal Joshi",
      description: "Developed a responsive portfolio website for freelancers.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ritika Roy",
      description: "Automated data analysis for a sales company using Python.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Vikram Iyer",
      description: "Created an AI-based chatbot for customer support.",
      link: "https://codeforces.com/tourist",
      image:
        "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};
