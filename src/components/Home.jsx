import React from "react";
import { Link } from "react-router-dom";

import './Home.css'

export default function Home() {
  return (
    <>
      <div>Home</div>
      <nav>
        <Link to="/beers">Beers List</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/new-beer">New Beer</Link>
      </nav>
    </>
  );
}
