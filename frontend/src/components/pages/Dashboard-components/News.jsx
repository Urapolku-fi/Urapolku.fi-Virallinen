import '../../css/Dashboard/News.css';
import { useNavigate } from 'react-router-dom';

function NewsItem({ text, backgroundImage, url }) {
  const navigate = useNavigate();
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div
      className={`News-item`}
      onClick={() => {
        navigate(url);
        window.scrollTo(0, 0);
      }}
    >
      <div className="News-item-background" style={cardStyle}>
        <div className="News-item-text-content">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
function News({ news }) {
  return (
    <section className="News-frame">
      <div className="News-title">
        <h2>News</h2>
        <div className="View-all">
          <p>
            <a href="/">View-all</a>
          </p>
          <img src="/pictures/Arrow-right-alt.png" alt="" height="24px" width="24px" />
        </div>
      </div>
      <div className="News-items">
        {news.map((newsItem, index) => (
          <NewsItem
            key={index}
            backgroundImage={newsItem.backgroundImage}
            text={newsItem.text}
            url={newsItem.url}
          />
        ))}
      </div>
    </section>
  );
}

export default News;
