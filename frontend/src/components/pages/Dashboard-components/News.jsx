import "../../css/Dashboard/News.css";
const News = () => {
  return (
    <section className="News-frame">
      <div className="News-title">
        <h2 className="Text">News</h2>
        <div className="View-all">
          <p>View-all</p>
          <img
            src="/pictures/Arrow-right-alt.png"
            alt=""
            height="24px"
            width="24px"
          />
        </div>
      </div>
      <div className="News-items">
        <div className="News-item">
          <div className="News-first-background">
            <div className="News-item-text-content">
              <p>
                Cracking the Code: Unconventional Strategies for Landing Your
                Dream Job
              </p>
            </div>
          </div>
        </div>
        <div className="News-item">
          <div className="News-second-background">
            <div className="News-item-text-content">
              <p>
                The Art of Becoming: Uncover Your True Self and Harness Your
                Potential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default News;
