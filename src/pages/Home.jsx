import React from "react";
import Empieza from "../components/Empieza";
import AdditionalBenefit from "../components/Home/AdditionalBenefit";
import Faq from "../components/Home/Faq";
import Hero from "../components/Home/Hero";
import InfoTable from "../components/Home/InfoTable";
import LocatelGold from "../components/Home/LocatelGold";
import WhyChooseLocatel from "../components/Home/WhyChooseLocatel"
import ElegirLocatel from "../components/Home/ElegirLocatel";

export default function Home() {
  return (
    <>
      <Hero />
      <LocatelGold />
      <WhyChooseLocatel />
       <ElegirLocatel />
      <InfoTable />
      <Faq />
      <AdditionalBenefit />
      <Empieza />
    </>
  );
}
