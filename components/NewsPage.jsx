import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function NewsPage() {
  const { id } = useParams(); // This will capture the :id from the URL
  const [articleUrl, setArticleUrl] = useState('');

  useEffect(() => {
    // Fetch the news article by ID or URL here
    // For demonstration, I'm using a mock API call
    fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=d209a9b8208c49aa8fe908d91d95c5f2`)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles && data.articles.length > 0) {
          setArticleUrl(data.articles[0].url); // Assuming the first article's URL is what you want
        }
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
      });
  }, [id]);

  return (
    <div>
      {articleUrl ? (
        <iframe
          src={articleUrl} // The URL of the news article
          width="100%"
          height="100%"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NewsPage;
