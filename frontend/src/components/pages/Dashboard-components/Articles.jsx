import React from "react";
import "../../css/Dashboard/Articles.css";
function ArticleCard({ backgroundClass, text }) {
  return (
    <div className={`Article-card ${backgroundClass}`}>
      <div className="Article-card-background">
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
          <div className="Article-card">
            <ArticleCard
              key={index}
              title={article.title}
              backgroundClass={article.backgroundClass}
              text={article.text}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
