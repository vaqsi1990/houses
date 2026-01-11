import Image from "next/image";
import Hero from "./components/Hero";
import Popularplaces from "./components/Popularplaces";
import FeaturedProperties from "./components/FeaturedProperties";

export default function Home() {
  return (
   <>
   <Hero />
   <Popularplaces />
   <FeaturedProperties />
   </>
  );
}
