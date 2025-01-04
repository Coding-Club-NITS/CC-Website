"use client";
import React from "react";

import AboutUsPage from "../../components/aboutUsHelper";
import SmoothScrolling from "@/app/components/smoothScroll";

function page() {
  return (
    <div>
      <SmoothScrolling>
        <AboutUsPage />
      </SmoothScrolling>
    </div>
  );
}

export default page;
