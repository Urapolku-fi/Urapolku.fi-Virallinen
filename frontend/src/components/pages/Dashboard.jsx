import Articles from "./Dashboard-components/Articles";
import DailyPicks from "./Dashboard-components/DailyPicks";
import News from "./Dashboard-components/News";
import Recommends from "./Dashboard-components/Recommends";
import UrapolkuAi from "./Dashboard-components/UrapolkuAi";
import UrapolkuInfo from "./Dashboard-components/UrapolkuInfo";
import UrapolkuTitle from "./Dashboard-components/UrapolkuTitle";
import AppliedJobs from "./Dashboard-components/AppliedJobs";
import "../css/dashboard.css";
function Dashboard() {
  return (
    <section id="Dashboard-wrapper">
      <div className="Dashboard-hero">
        <div className="Dashboard-title">
          <UrapolkuTitle />
        </div>
        <div className="Dashboard-search"></div>
      </div>
      <div className="Dashboard-content-section">
        <div id="Dashboard-content">
          <div className="Dashboard-left-bar">
            <div className="Sticky-left-bar">
              <Recommends />
              <AppliedJobs />
            </div>
          </div>
          <div className="Urapolku-cards">
            <div className="Dashboard-daily-picks">
              <DailyPicks />
            </div>
            <div className="Dashboard-articles">
              <Articles />
            </div>
            <div className="Dashboard-news">
              <News />
            </div>
          </div>
        </div>
        <div className="Dashboard-Urapolku-ai">
          <UrapolkuAi />
        </div>
        <div className="Dashboard-urapolku-info">
          <UrapolkuInfo />
        </div>
      </div>
    </section>
  );
}
export default Dashboard;
