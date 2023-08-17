import "../../css/Dashboard/Articles.css";
const Articles = () => {
  return (
    <section className="Articles-frame">
      <div className="Article-title">
        <h2 className="Text">Articles</h2>
        <div className="View-all">
          <p>View-all</p>
          <img src="" alt="" />
        </div>
      </div>
      <div className="Article-cards">
        <div className="Article-card">
          <div className="First-article-card-background">
            <div className="Article-card-text">
              <p>
                Cracking the Code: Unconventional Strategies for Landing Your
                Dream Job
              </p>
            </div>
          </div>
        </div>
        <div className="Article-card">
          <div className="Second-article-card-background">
            <div className="Article-card-text">
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

export default Articles;
