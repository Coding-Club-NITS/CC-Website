import { HeroParallax } from './components/ui/hero-parallax'
export default function Home() {
  const products = [
    {
      title: "Sessions",
      link:  "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524959/mo5fk0clewmk3wwtfree.jpg?_s=public-apps",
      thumbnail: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524959/mo5fk0clewmk3wwtfree.jpg?_s=public-apps"
    },
    {
      title: "Code-Intium",
      link: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718526037/IMG20231104200715_ydkaee.jpg?_s=public-apps",
      thumbnail: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718526037/IMG20231104200715_ydkaee.jpg?_s=public-apps"
    },
    {
      title: "The Family",
      link: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524961/b8ydp5nvc0kryeyl9n8w.jpg?_s=public-apps",
      thumbnail: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524961/b8ydp5nvc0kryeyl9n8w.jpg?_s=public-apps"
    },
    {
      title: "Contests",
      link: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524986/txgmdrlbtvdpmvq7cfng.jpg?_s=public-apps",
      thumbnail: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524986/txgmdrlbtvdpmvq7cfng.jpg?_s=public-apps"
    },
  ];
  

  
  return (
    <>
      <HeroParallax products={products}/>
    </>
  );
}
