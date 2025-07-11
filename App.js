import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [catImage, setCatImage] = useState("");

  const fetchCat = async () => {
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="App">
      <h1>Cat Randomizer</h1>
      {catImage && <img src={catImage} alt="Gato" width="400" />}
      <br />
      <button onClick={fetchCat}>Ver otro gato</button>
    </div>
  );
}
