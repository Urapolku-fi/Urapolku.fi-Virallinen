import '../../css/Dashboard/UrapolkuAi.css';
const UrapolkuAi = () => {
  return (
    <section className="Urapolku-AI">
      <div className="Content">
        <p className="UrapolkuAI-title">Say hello to Urapolku AI</p>
        <div className="Card-content">
          <div className="First-two-cards">
            <div className="Career">
              <img src="\pictures\Urapolku_AI_logo.png" alt="" height="48px" width="48px" />
              <div className="Career-text-content">
                <h2>Career quide</h2>
                <p className="UrapolkuAI-description">
                  The &quotCareer Guide&quot is an innovative AI system integrated into our job
                  search platform, designed to provide personalized career recommendations and
                  comprehensive roadmaps to users based on their responses to a series of input
                  questions. This feature aims to assist job seekers in making informed and
                  strategic decisions about their career paths, helping them discover suitable
                  career options aligned with their interests, skills, and aspirations.
                </p>
              </div>
              <div className="Urapolku-link">
                <a href="/">
                  <p className="UrapolkuAI-link">Read more</p>
                </a>
              </div>
            </div>
            <div className="Digital">
              <img src="/pictures/Digital-image.png" alt="" height="48px" width="48px" />
              <div className="Digital-text-content">
                <h2>Digital credit tokens</h2>
                <p className="UrapolkuAI-description">
                  Reward your customers and incentivize engagement with our innovative digital
                  credit tokens. Our tokens can be customized to match your branding, and are a
                  flexible and scalable way to drive customer loyalty and encourage repeat business.
                </p>
              </div>
              <div className="Urapolku-link">
                <a href="/">
                  <p className="UrapolkuAI-link">View tokens</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Code-collab">
          <img
            className="Collab-logo"
            src="/pictures/code-collab-logo.png"
            alt=""
            height="48px"
            width="48px"
          />
          <div className="Code-collab-content">
            <div className="Code-collab-text-content">
              <h2>Code collaboration</h2>
              <p className="UrapolkuAI-description">
                Our advanced code synchronization technology ensures that your data is always
                up-to-date and accurate, no matter where it&apos coming from. Whether you&apore
                integrating data from multiple sources or working with a team of developers, our
                synchronization technology makes it easy to collaborate and ensure that your data is
                consistent and reliable.
              </p>
              <div className="Urapolku-link">
                <a href="/">
                  <p className="UrapolkuAI-link">View code collaboration</p>
                </a>
              </div>
            </div>
            <div className="code-collab-image">
              <img src="/pictures/code-collab.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UrapolkuAi;
