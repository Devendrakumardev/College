import React from "react";
import Nabvar from "./componets/Nvabar/Nabvar";
import Hero from "./componets/Hero/Hero";
import Program from "./componets/Program/Program";
import Title from "./componets/Title/Title";
import Aboute from "./componets/About/Aboute";
import Campus from "./componets/Campus/Campus";
import Testimonal from "./componets/Tesimonial/Testimonal";
import Contact from "./componets/Conatct/Contact";
import Footer from "./componets/Footer/Footer";
import VideoPlayer from "./componets/VideoPlayer.jsx/VideoPlayer";

const App = () => {
  return (
    <div>
      <Nabvar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" Title="What We Offers" />
        <Program />
        <Aboute />
        <Title subTitle="Gallery" Title="Campus Photo" />
        <Campus />
        <Title subTitle="TESTIMONIAL" Title="What Student Says" />
        <Testimonal />
        <Title subTitle="CONTACT US" Title="Get in Touch" />
        <Contact />
        <Footer />
        {/* <VideoPlayer /> */}
      </div>
    </div>
  );
};

export default App;
