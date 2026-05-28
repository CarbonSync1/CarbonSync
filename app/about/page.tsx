import Hero from '@/components/about-us/Hero';
import About from '@/components/about-us/About';
import Innovation from '@/components/about-us/Innovation';
import Offerings from '@/components/about-us/Offerings';
import Team from '@/components/about-us/Team';
import Newsroom from '@/components/about-us/Newsroom';
import Logos from '@/components/about-us/Logos';
import Timeline from '@/components/about-us/Timeline';
import CallToAction from '@/components/about-us/CallToAction';
import Experience from '@/components/about-us/Experience';
import '@/components/about-us/about-styles.css';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <About />
      <Innovation />
      <Offerings />
      <Team />
      <Newsroom />
      <Logos />
      <Timeline />
      <CallToAction />
      <Experience />
    </>
  );
}
