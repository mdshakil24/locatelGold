import React from "react";
import Empieza from "../components/Empieza";
import Faq from "../components/HomeTwo/Faq";
import Hero from "../components/HomeTwo/Hero";
import Beneficios from "../components/HomeTwo/Beneficios";
import Functional from "../components/HomeTwo/Functional"
import Planesy from "../components/HomeTwo/Planesy";

export default function HomeTwo() {
  return (
    <>
      <Hero />
      <Beneficios />
      <Functional />
      <Planesy />

      <Faq />
      <Empieza />
    </>
  );
}
