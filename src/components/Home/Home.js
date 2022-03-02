import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Gallery from "../Gallery/Gallery";
import Packages from "../Packages/Packages";
import Resort from "../Resort/Resort";
import Sports from "../Sports/Sports";
import Tourplan from "../Tourplan/Tourplan";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Packages></Packages>
      <Tourplan></Tourplan>
      <Sports></Sports>
      <Resort></Resort>
      <Faq></Faq>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
