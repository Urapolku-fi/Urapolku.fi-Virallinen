import React from "react";
import "../../css/Dashboard/News.css";

function NewsItem({ backgroundClass, text, backgroundImage }) {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div className={`News-item ${backgroundClass}`}>
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
          <a href="/">
            <p>View-all</p>
          </a>
          <img
            src="/pictures/Arrow-right-alt.png"
            alt=""
            height="24px"
            width="24px"
          />
        </div>
      </div>
      <div className="News-items">
        {news.map((newsItem, index) => (
          <div className="News-item" key={index}>
            <NewsItem
              backgroundClass={newsItem.backgroundClass}
              backgroundImage={newsItem.backgroundImage}
              text={newsItem.text}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
