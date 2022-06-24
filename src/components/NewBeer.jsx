import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

import newBeerBanner from "../assets/new-beer.png";

import './NewBeer.css'

export default function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  });
  const [fieldValidation , setFieldValidation] = useState({
    name: true,
    tagline: true,
    description: true,
    first_brewed: true,
    brewers_tips: true,
    attenuation_level: true,
    contributed_by: true
  })
  const [isAdded, setIsAdded ] = useState(false)
  const [isRefused , setIsRefused ] = useState(false)

  const validateStringField = (event) =>{
    if(newBeer[event.target.name].length<5){
        setFieldValidation({...fieldValidation,[event.target.name]:false})
    }else{
        setFieldValidation({...fieldValidation,[event.target.name]:true})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newBeer.name.length)
    if (
      newBeer.name.length>=5 &&
      newBeer.tagline.length>=5 &&
      newBeer.description.length>=5 &&
      newBeer.first_brewed.length>=5 &&
      newBeer.brewers_tips.length>=5 &&
      newBeer.contributed_by.length>5
    ) {
      console.log(newBeer)
      axios({
        url: "https://ih-beers-api2.herokuapp.com/beers/new",
        method: "POST",
        data: { ...newBeer },
      })
      .then((res) => console.log("response : ", res));
      setIsAdded(true)
    }else{
        console.log('input problem !')
        setIsRefused(true)
    }
    
  };

  useEffect(() => {
    console.log(newBeer);
  }, [newBeer]);
  return (
    <>
      <div className="banner">
        <img src={newBeerBanner} />
        <h1>newBeerBanner !</h1>
        <h2>Add a New Beer ! </h2>
      </div>
      <form onSubmit={handleSubmit}>
          <div className="inputLine">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(event) => {
                setNewBeer({
                  ...newBeer,
                  [event.target.name]: event.target.value,
                });
                validateStringField(event)
                setIsAdded(false)
                setIsRefused(false)
              }}
            />
            {!fieldValidation.name && <p className="errorField">!!</p>}
          </div>
          <div className="inputLine">
            <label htmlFor="tagline">tagLine</label>
            <input
              type="text"
              name="tagline"
              onChange={(event) => {
                setNewBeer({
                  ...newBeer,
                  [event.target.name]: event.target.value,
                });
                validateStringField(event)
                setIsAdded(false)
                setIsRefused(false)
              }}
            />
            {!fieldValidation.tagline && <p className="errorField">!!</p>}
          </div>
          <div className="inputLine">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              onChange={(event) => {
                setNewBeer({
                  ...newBeer,
                  [event.target.name]: event.target.value,
                });
                validateStringField(event)
                setIsAdded(false)
                setIsRefused(false)
              }}
            />
            {!fieldValidation.description && <p className="errorField">!!</p>}
          </div>
          <div className="inputLine">
            <label htmlFor="first_brewed">first_brewed</label>
            <input
              type="text"
              name="first_brewed"
              onChange={(event) => {
                setNewBeer({
                  ...newBeer,
                  [event.target.name]: event.target.value,
                });
                validateStringField(event)
                setIsAdded(false)
                setIsRefused(false)
              }}
            />
            {!fieldValidation.first_brewed && <p className="errorField">!!</p>}
          </div>
          <div className="inputLine">
            <label htmlFor="brewers_tips">brewers_tips</label>
            <input
              type="text"
              name="brewers_tips"
              onChange={(event) => {
                setNewBeer({
                  ...newBeer,
                  [event.target.name]: event.target.value,
                });
                validateStringField(event)
                setIsAdded(false)
                setIsRefused(false)
              }}
            />
            {!fieldValidation.brewers_tips && <p className="errorField">!!</p>}
          </div>
          <div className="inputLine">
            <label htmlFor="attenuation_level">attenuation_level</label>
            <input
              type="number"
              min={0}
              name="attenuation_level"
              onChange={(event) => {
                setNewBeer({
                  ...newBeer,
                  [event.target.name]: event.target.value,
                });
                setIsAdded(false)
                setIsRefused(false)
              }}
            />
          </div>
          <div className="inputLine">
            <label htmlFor="contributed_by">contributed_by</label>
            <input
              type="text"
              name="contributed_by"
              onChange={(event) => {
                setNewBeer({
                  ...newBeer,
                  [event.target.name]: event.target.value,
                });
                validateStringField(event)
                setIsAdded(false)
                setIsRefused(false)
              }}
            />

            {!fieldValidation.contributed_by && <p className="errorField">!!</p>}
          </div>
          <button type="submit">Add it !</button>
        </form>
        {isAdded && <div className="isAdded">Ok, beer added !</div> }
      {isRefused && <div className="isRefused">Not Added ! </div>}
    </>
  );
}
