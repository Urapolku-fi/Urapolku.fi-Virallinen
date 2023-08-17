import "../../css/Dashboard/Recommends.css";
const Recommends = () => {
  return (
    <section className="Recommends-frame">
      <h2 className="Recommends-title">Urapolku recommends</h2>
      <div className="Recommends-Card">
        <div className="Recommends-circle-image">
          <img
            className="Recommends-card-image"
            src={"/pictures/temp/Lowes.png"}
            alt=""
          />
        </div>
        <div className="Recommends-card-text-content">
          <h2 className="Recommends-card-title">Lowe's Companies, Inc</h2>
          <p>Human Resources Services</p>
          <p className="Recommends-card-location">Helsinki, Finland</p>
        </div>
      </div>
      <div className="Recommends-Card">
        <div className="Recommends-circle-image">
          <img
            className="Recommends-card-image"
            src={"/pictures/temp/Crafting.png"}
            alt=""
          />
        </div>
        <div className="Recommends-card-text-content">
          <h2 className="Recommends-card-title">
            Crafting More Than Words: Unveiling the..
          </h2>
          <p>Article</p>
        </div>
      </div>
      <div className="Recommends-Card">
        <div className="Recommends-circle-image">
          <img
            className="Recommends-card-image"
            src={"/pictures/temp/Twitter-eclipse.png"}
            alt=""
          />
        </div>
        <div className="Recommends-card-text-content">
          <h2 className="Recommends-card-title">
            Why Twitter’s rebrand to ‘X’ feels shocking...{" "}
          </h2>
          <p>News</p>
        </div>
      </div>
      <div className="Recommends-Card">
        <div className="Recommends-circle-image">
          <img
            className="Recommends-card-image"
            src={"/pictures/temp/mcdonalds-eclipse.png"}
            alt=""
          />
        </div>
        <div className="Recommends-card-text-content">
          <h2 className="Recommends-card-title">McDonald's</h2>
          <p>Restaurant</p>
          <p className="Recommends-card-location">Chicago, Illinois</p>
        </div>
      </div>
      <div className="Recommends-View-all-recommendations">
        <h2 className="Recommends-footer-title">View all recommendations</h2>
      </div>
    </section>
  );
};
export default Recommends;
