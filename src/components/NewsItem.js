import React from 'react';

function NewsItem({ item }) {
  // Extract the domain name from the URL
  const websiteUrl = new URL(item.url).hostname;

  // Format the date and time
  const date = new Date(item.publishedAt);
  const formattedDate = `${date.toDateString()} at ${date.toLocaleTimeString()}`;

  return (
    <div className="article">
      {/* Article Image */}
      <div className="article-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>

      {/* Article Content */}
      <div className="article-content">
        {/* Source */}
        <div className="article-source">
          <img 
            src={`https://www.google.com/s2/favicons?domain=${websiteUrl}`} 
            alt={item.source.name}
          />
          <span>{item.source.name}</span>
        </div>

        {/* Title */}
        <h2 className="article-title">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </h2>

        {/* Description */}
        <p className="article-description">{item.description}</p>

        {/* Additional Info */}
        <div className="article-details">
          <small><b>Published On: </b>{formattedDate}</small>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
