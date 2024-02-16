import FreeSlider from '@/components/FreeSlider';
import PageInitialize from './PageInitialize/page';
import Header from '@/components/Header';
import HeroSwiper from '@/components/HeroSwiper';
import About from '@/components/About';
import CustomNav from '@/components/CustomNav';
import MenuList from '@/components/MenuList';
import ScaleX from '@/components/ScaleX';
import Footer from '@/components/Footer';
import Experties from '@/components/Experties';

export default function Home() {
  return (
    <div className="bg-black overflow-hidden ">
      <Header />
      <HeroSwiper />
      <PageInitialize />
      <FreeSlider />
      <About />
      <CustomNav />
      <MenuList />
      <ScaleX />
      <Experties />
      <Footer />
    </div>
  );
}
