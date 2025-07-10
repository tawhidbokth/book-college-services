import Image from "next/image";
import Banner from "./Components/Banner";
import { CollegeCardsSection } from "./Components/CollegeCardsSection";
import { ImageGallerySection } from "./Components/ImageGallerySection";

export default function Home() {
  return (
    <div>
      <Banner />
      <CollegeCardsSection />
      <ImageGallerySection/>
    </div>
  );
}
