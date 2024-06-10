import React from "react";
import Literature from "./Literature";
import LiteratureCard from "./LiteratureCard";
import LiteratureData from "./LiteratureData";
import LiteratureDesc from "./LiteratureDesc";

const LiteraturePage = () => {
  return (
    <div>
      <Literature />
      <LiteratureDesc />
      {/* <LiteratureCard />
      <LiteratureData /> */}
    </div>
  );
};

export default LiteraturePage;
