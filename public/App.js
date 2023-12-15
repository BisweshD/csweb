import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    const GNEWS_API_ENDPOINT = 'https://gnews.io/api/v4/top-headlines';
    const GNEWS_API_KEY = 'aa67008ce8a8b6cefa9a9b731a376b66'; // Your GNews API Key

    // Adjusting the request URL for GNews
    fetch(`${GNEWS_API_ENDPOINT}?country=us&topic=${category}&token=${GNEWS_API_KEY}`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
    .catch(error => console.error('Error:', error));
  }, [category])

  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
  )
}

export default App
