import React from "react";
import "../../css/Dashboard/DailyPicks.css";
import { useNavigate } from "react-router-dom";

function DailyPickCard({ title, description, backgroundImage, url }) {
  const navigate = useNavigate();
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div
      className="Daily-Pick-Card"
      style={cardStyle}
      onClick={() => {
        navigate(url);
        window.scrollTo(0, 0);
      }}
    >
      <div className="Card-text-content">
        <p>{title}</p>
        <p className="Card-description">{description}</p>
      </div>
    </div>
  );
}

function DailyPicks({ dailyPicks }) {
  return (
    <section className="Daily-pick-frame">
      <h2>Daily Picks</h2>
      {dailyPicks.map((pick, index) => (
        <div className="Daily-pick-card" key={index}>
          <DailyPickCard
            title={pick.title}
            description={pick.description}
            backgroundImage={pick.backgroundImage}
            url={pick.url}
          />
        </div>
      ))}
    </section>
  );
}

export default DailyPicks;
