'use client'
// import { HeroParallax } from './components/ui/hero-parallax'
import ScrollCards from './components/scrollcards'
import Footer from './components/footercomp'
import Testimonials from './components/testimonials'
import { FlipWordsDemo } from './components/flipword';
import Parallax from './components/parallax';

export default function page(){
  return (
    <div className='bg-black-900'>
      <Parallax/>
      <ScrollCards/>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <FlipWordsDemo/>
      <Testimonials/>
      <Footer/>
    </div>
    </div> 
  );
}

