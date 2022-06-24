import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SingleBeerCard from "./SingleBeerCard";

import "./SingleBeer.css";
import "./Spinner.css";



export default function SingleBeer() {
  const { id } = useParams();
  console.log(id);
  const [beer, setBeer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((res) => {
      setBeer(res.data);
      console.log(res.data);
      setIsLoading(false);

    }).catch(()=>{

    })
  }, []);

  return (
    <div className="singleCard">
      {isLoading ? <div className="lds-dual-ring"></div> : <SingleBeerCard beer={beer}/>}

    </div>
  );
}
