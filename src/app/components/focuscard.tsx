import FocusCards from "./ui/focuscard";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Amartya Ahmed",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profile: "https://codeforces.com/profile/tourist",
      description: "Competitive Comder",
    },
    {
      title: "Siddhid Saha",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profile: "https://codeforces.com/profile/tourist",
      description: "Competitive Comder",
    },
    {
      title: "Arnab Kumar Singh",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profile: "https://codeforces.com/profile/tourist",
      description: "Competitive Comder",
    },
    {
      title: "Anubhav Chakravarty",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profile: "https://codeforces.com/profile/tourist",
      description: "Competitive Comder",
    },
    {
      title: "Agraz Saha",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profile: "https://codeforces.com/profile/tourist",
      description: "Competitive Comder",
    },
    {
      title: "Darpan Deka",
      src: "https://assets.aceternity.com/the-first-rule.png",
      profile: "https://codeforces.com/profile/tourist",
      description: "Competitive Comder",
    },
  ];

  return <FocusCards cards={cards} />;
}
