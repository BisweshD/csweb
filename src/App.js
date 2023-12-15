 // Update the path to your actual logo file

import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import logo from './CSInformed.png';


function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("AI"); // Initial category set to AI

  useEffect(() => {
    let query;
    if (category === "AI") {
      query = "(artificial intelligence OR AI OR machine learning OR deep learning)";
    } else if (category === "Quantum Computing") {
      query = "(quantum computing OR quantum algorithms OR quantum mechanics)";
    } else if (category === "TechSpotlight") {
      query = "(technology spotlight OR tech spotlight OR tech trends)";
    } else if (category === "FutureTech") {
      query = "(future technology OR future tech OR emerging technology)";
    }
  
    fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&sortBy=publishedAt&language=en&apiKey=021baff830cb4c8fa2c688eefdd78b46`)
    .then(res => res.json())
    .then(data => setItems(data.articles));
}, [category]);
  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} alt="InnovateFeed Logo" className="app-logo" />
       
      </header>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default App;
