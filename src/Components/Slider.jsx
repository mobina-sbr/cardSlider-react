import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import { Dna } from "react-loader-spinner";
import Card from "./Card";

export default function Slider() {
  const [heros, setHeros] = useState([]);
  const [current, setCurrent] = useState(0);
  useEffect(
    () => {  
      fetch("http://localhost:3001/heroes")
        .then((response) => response.json())
        .then((data) => setHeros(data))
        }, 
   []
  );
  function nextHandler() {
    const indexHero = current + 1 < heros.length ? current + 1 : 0;
    setCurrent(indexHero);
  }
  function prevHandler() {
    const indexHero = current - 1 < 0 ? heros.length - 1 : current - 1;
    setCurrent(indexHero);
  }
  return (
    <div className="slide-container">
      <div className="wrapper">
        {!heros.length ? (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : (
          <>
            <Arrow direction="prev" handleClick={prevHandler} />
            <Card hero={heros[current]}/>
            <Arrow direction="next" handleClick={nextHandler} />
          </>
        )}
      </div>
    </div>
  );
}
