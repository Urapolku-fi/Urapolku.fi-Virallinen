import React from "react";
import "../../css/Dashboard/Articles.css";

function ArticleCard({ backgroundClass, backgroundImage, text }) {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className={`Article-card ${backgroundClass}`}>
      <div className="Article-card-background" style={cardStyle}>
        <div className="Article-card-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

function Articles({ articles }) {
  return (
    <section className="Articles-frame">
      <div className="Article-title">
        <h2>Articles</h2>
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
      <div className="Article-cards">
        {articles.map((article, index) => (
          <div className="Article-card" key={index}>
            <ArticleCard
              backgroundClass={article.backgroundClass}
              backgroundImage={article.backgroundImage}
              text={article.text}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
