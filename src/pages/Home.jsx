import React from "react";
import Empieza from "../components/Empieza";
import AdditionalBenefit from "../components/Home/AdditionalBenefit";
import Faq from "../components/Home/Faq/Faq";
import Hero from "../components/Home/Hero/Hero";
import InfoTable from "../components/Home/InfoTable";
import LocatelGold from "../components/Home/LocatelGold";

export default function Home() {
  return (
    <>
      <Hero />
      <LocatelGold />
      <InfoTable />
      <Faq />
      <AdditionalBenefit />
      <Empieza />
    </>
  );
}
