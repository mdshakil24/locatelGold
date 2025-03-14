import React from "react";
import Empieza from "../components/Empieza";
import AdditionalBenefit from "../components/Home/AdditionalBenefit";
import Faq from "../components/Home/Faq";
import Hero from "../components/Home/Hero";
import InfoTable from "../components/Home/InfoTable";
import LocatelGold from "../components/Home/LocatelGold";
import WhyChooseLocatel from "../components/Home/WhyChooseLocatel"

export default function Home() {
  return (
    <>
      <Hero />
      <LocatelGold />
      <WhyChooseLocatel />
      <InfoTable />
      <Faq />
      <AdditionalBenefit />
      <Empieza />
    </>
  );
}
