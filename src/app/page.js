import Image from "next/image";
import Banner from "./Components/Banner";
import { CollegeCardsSection } from "./Components/CollegeCardsSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <CollegeCardsSection/>
    </div>
  );
}
