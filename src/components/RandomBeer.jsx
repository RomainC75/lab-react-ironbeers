import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import RandomBeerImg from "../assets/random-beer.png";
import SingleBeerCard from "./SingleBeerCard";

import "./Spinner.css";
import "./SingleBeer.css";

export default function RandomBeer() {
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => {
        setBeer(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="banner">
        {isLoading ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <SingleBeerCard beer={beer} />
        )}
      </div>
    </>
  );
}
