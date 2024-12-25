"use client";

import React from "react";
import ParticlesComponent from "../components/particles";
import CodeForces from "../components/Codeforces";
import Leetcode from "../components/Leetcode";
import Codechef from "../components/Codechef";
import FloatingDock from "../components/Navbar";

const Home = () => {
  return (
    <div className="App">
      <div className="content">
        <section id="codeforces">
          <CodeForces />
        </section>
        <section id="leetcode">
          <Leetcode />
        </section>
        <section id="codechef">
          <Codechef />
        </section>
      </div>
      <ParticlesComponent id="particles" />
      <FloatingDock />
    </div>
  );
};

export default Home;