import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("AI"); // Initial category set to AI

  useEffect(() => {
    let query;
    if (category === "AI") {
      query = "artificial intelligence OR AI";
    } else if (category === "QuantumLeap") {
      query = "quantum computing OR quantum leap";
    } else if (category === "TechSpotlight") {
      query = "technology spotlight OR tech spotlight";
    } else if (category === "InnovativeCareers") {
      query = "innovative careers OR tech jobs OR tech internships";
    }

    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=021baff830cb4c8fa2c688eefdd78b46`)
      .then(res => res.json())
      .then(data => setItems(data.articles));
  }, [category]);

  return (
    <div className="App">
      <h1 className="title">InnovativeFeed: The Latest News On Everything Computer Science</h1>
      <h2 className="section-header">Tech News</h2>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default App;
