import NewsItem from './NewsItem';

function NewsGrid({ items = [] }) {
  return (
    <div className="news-grid">

      {Array.isArray(items) ? items.map((item, i) => <NewsItem key={i} item={item} />) : null}
    </div>
  );
}

export default NewsGrid;
