function NewsItem({ item }) {
  // Extract the domain name from the URL
  const websiteUrl = new URL(item.url).hostname;

  // Format the date and time
  const formatDate = new Date(item.publishedAt).toLocaleString();

  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer">
    <div className="article">
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
        <h2 className="article-title">{item.title}</h2>

        {/* Description */}
        <p className="article-description">{item.description}</p>

        {/* Additional Info */}
        <div className="article-details">
          <small><b>Published On: </b>{formatDate}</small>
        </div>
      </div>
    </div>
    </div>
    </a>
  );
}

export default NewsItem;
