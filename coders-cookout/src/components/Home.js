import React from "react";
import "../App.css";
import Image from "./Images/Image";
import "./Images/Image.css";
import Jumbo from "./Jumbo";
import RecipeOfDay from "./RecipeOfDay";
import "./Home.css";

function Home() {
  return (
    <div>
      <RecipeOfDay />
      <Jumbo />
    </div>
  );
}

export default Home;
