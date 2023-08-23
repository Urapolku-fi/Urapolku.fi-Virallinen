import React from "react";
import "../../css/Dashboard/Articles.css";
import Ball from "../HoverBall";
import { useNavigate } from "react-router-dom";

function ArticleCard({ backgroundImage, text, url }) {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div
      className={`Article-card`}
      onClick={() => {
        navigate(url);
        window.scrollTo(0, 0);
      }}
    >
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
            <div className="Ball">
              <Ball />
            </div>
            <ArticleCard
              backgroundClass={article.backgroundClass}
              backgroundImage={article.backgroundImage}
              text={article.text}
              url={article.url}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
