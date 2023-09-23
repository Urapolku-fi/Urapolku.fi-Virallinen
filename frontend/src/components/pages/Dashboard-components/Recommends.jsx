import React from 'react';
import '../../css/Dashboard/Recommends.css';
import { useNavigate } from 'react-router-dom';

function RecommendCard({ imageSrc, title, description, location, url }) {
  const navigate = useNavigate();
  return (
    <div
      className="Recommends-Card"
      onClick={() => {
        navigate(url);
        window.scrollTo(0, 0);
      }}
    >
      <div className="Recommends-circle-image">
        <img className="Recommends-card-image" src={imageSrc} alt="" />
      </div>
      <div className="Recommends-card-text-content">
        <h2 className="Recommends-card-title">{title}</h2>
        <p>{description}</p>
        {location && <p className="Recommends-card-location">{location}</p>}
      </div>
    </div>
  );
}

function Recommends({ recommends }) {
  return (
    <section className="Recommends-frame">
      <h2 className="Recommends-title">Urapolku recommends</h2>
      <div className="Recommends-Cards">
        {recommends.map((recommend, index) => (
          <RecommendCard
            key={index}
            imageSrc={recommend.imageSrc}
            title={recommend.title}
            description={recommend.description}
            location={recommend.location}
            url={recommend.url}
          />
        ))}
      </div>
      <div className="Recommends-View-all-recommendations">
        <img src="/pictures/Arrow-left-alt.png" alt="" width="16px" height="8px" />
        <a href="/">
          <h2 className="Recommends-footer-title">View all recommendations</h2>
        </a>
      </div>
    </section>
  );
}

export default Recommends;
