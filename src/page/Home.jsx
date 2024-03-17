import React from "react";
import Hero from "../component/Hero";
import ContractStart from "../component/ContractStart";
import Plan from "../component/Plan";
import Earning from "../component/Earning";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContractStart />
      <Plan />
      <Earning />
    </>
  );
};

export default Home;
