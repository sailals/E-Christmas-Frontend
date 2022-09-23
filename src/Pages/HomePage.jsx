import React from "react";
import Celebrate from "../Components/Celebrate";
import Footer from "../Components/Footer";
import GiftSection from "../Components/GiftSection";
import Giving from "../Components/Giving";
import Home from "../Components/Home";
import Message from "../Components/Message";
import Navbar from "../Components/Navbar";
import New from "../Components/New";
import Services from "../Components/Services";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <Giving />
        <Celebrate />
        <GiftSection />
        <New />
        <Message />
        <Services />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
