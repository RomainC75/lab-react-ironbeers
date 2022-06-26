import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import beersListBanner from "../assets/beers.png";

import "./ListBeers.css";

export default function ListBeers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [beerToFind, setBeerToFind] = useState('')

  useEffect(() => {
    setIsLoading(true);
    const url = beerToFind==='' ? 'https://ih-beers-api2.herokuapp.com/beers' :  `https://ih-beers-api2.herokuapp.com/beers/search?q=${beerToFind}`
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
        console.log(res);
      })
      .catch((e) => {});
  }, [beerToFind]);

  

  return (
    <>
      <div className="banner">
        <img className="bannerImg" src={beersListBanner} />
        <h1>Beers List !</h1>
      </div>
      <div>
        <input onChange={(event)=>{setBeerToFind(event.target.value)}}/>
      </div>
      {isLoading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <>
          <ul>
            {data.length > 0 &&
              data.map((beer) => {
                return (
                  <li className="card" key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                      <img src={beer.image_url} />
                    </Link>
                    <div className="right">
                      <h3>{beer.name}</h3>
                      <p className="tagLine">{beer.tagline}</p>
                      <p>Created by : {beer.contributed_by}</p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </>
  );
}
