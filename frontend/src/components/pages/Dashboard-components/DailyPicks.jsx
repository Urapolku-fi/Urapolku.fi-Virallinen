import React from "react";
import "../../css/Dashboard/DailyPicks.css";

function DailyPickCard({ title, description }) {
  return (
    <div className="Daily-Pick-Card">
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
      <div className="Daily-pick-background">
        <div className="Daily-pick-cards">
          {dailyPicks.map((pick, index) => (
            <div className="Daily-pick-card" key={index}>
              <DailyPickCard
                title={pick.title}
                description={pick.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DailyPicks;
