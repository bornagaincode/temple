import React from "react";
import Announcement from "./components/announcement/Announcement";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";
import "draft-js/dist/Draft.css";

function App() {
  return (
    <div className="App">
      <Announcement />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
