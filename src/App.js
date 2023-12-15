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
      query = "artificial intelligence OR AI";
    } else if (category === "QuantumLeap") {
      query = "quantum computing OR quantum leap";
    } else if (category === "TechSpotlight") {
      query = "technology spotlight OR tech spotlight";
    } else if (category === "InnovativeCareers") {
      query = "innovative careers OR tech jobs OR tech internships";
    }

    const GNEWS_API_ENDPOINT = 'https://gnews.io/api/v4/search';
    const GNEWS_API_KEY = 'aa67008ce8a8b6cefa9a9b731a376b66'; // Your GNews API Key

    fetch(`${GNEWS_API_ENDPOINT}?q=${encodeURIComponent(query)}&token=${GNEWS_API_KEY}&lang=en`)
      .then(res => res.json())
      .then(data => setItems(data.articles))
      .catch(error => console.error('Error:', error));
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
