import React from "react";
import Announcement from "./components/announcement/Announcement";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PageSlider from "./components/page_slider/PageSlider";
import MapSection from "./components/map_section/MapSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Header />
      <Hero />
      <PageSlider />
      <MapSection />
    </div>
  );
}

export default App;
