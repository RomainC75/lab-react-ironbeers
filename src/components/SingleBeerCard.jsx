import React from "react";

import "./SingleBeer.css";


export default function SingleBeerCard({beer}) {
  return (
    <div>
      <img src={beer.image_url} />
      <section>
        <div className="line">
          <h3>{beer.name}</h3>
          <p className="attenuation">{beer.attenuation_level}</p>
        </div>
        <div className="line">
          <h4 className="tagLine">{beer.tagline}</h4>
          <p className="brewedBy">{beer.first_brewed}</p>
        </div>
      </section>
      <p className="description">{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}
