import Image from "next/image";
import Banner from "./Components/Banner";
import { CollegeCardsSection } from "./Components/CollegeCardsSection";
import { ImageGallerySection } from "./Components/ImageGallerySection";
import { ResearchPapersSection } from "./Components/ResearchPapersSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <CollegeCardsSection />
      <ImageGallerySection />
      <ResearchPapersSection/>
    </div>
  );
}
