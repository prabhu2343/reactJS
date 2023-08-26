import React from "react";
import Header from "./Header.js";
import Banner from "./Banner.js";
import TwoColumn from "./TwoColumn.js";
import Scroller from "./Scroller.js";
import Footer from "./Footer.js";

function App(){
  return(
    <div>
      <Header/>
      <Banner/>
      <TwoColumn/>
      <Scroller/>
      <Footer/>
    </div>
  );
}

export default App;