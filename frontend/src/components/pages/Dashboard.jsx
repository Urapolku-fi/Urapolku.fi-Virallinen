import Articles from './Dashboard-components/Articles';
import DailyPicks from './Dashboard-components/DailyPicks';
import News from './Dashboard-components/News';
import Recommends from './Dashboard-components/Recommends';
import UrapolkuAi from './Dashboard-components/UrapolkuAi';
import UrapolkuInfo from './Dashboard-components/UrapolkuInfo';
import UrapolkuTitle from './Dashboard-components/UrapolkuTitle';
import AppliedJobs from './Dashboard-components/AppliedJobs';
import '../css/dashboard.css';
function Dashboard() {
  const articlesData = [
    {
      backgroundImage: '/pictures/temp/First-article-image.png',
      text: 'Cracking the Code: Unconventional Strategies for Landing Your Dream Job',
      url: '/',
    },
    {
      backgroundImage: '/pictures/temp/Second-article-image.png',
      text: 'The Art of Becoming: Uncover Your True Self and Harness Your Potential',
      url: '/',
    },
  ];
  const dailyPicksData = [
    {
      title: 'Job',
      description: 'Haluatko mukaan dynaamiseen tiimiin jossa myös etätyö onnistuu?',
      backgroundImage: '/pictures/temp/Daily-pick-image.png',
      url: '/',
    },
  ];
  const newsData = [
    {
      backgroundImage: '/pictures/temp/First-article-image.png',
      text: 'Cracking the Code: Unconventional Strategies for Landing Your Dream Job',
      url: '/',
    },
    {
      backgroundImage: '/pictures/temp/Second-article-image.png',
      text: 'The Art of Becoming: Uncover Your True Self and Harness Your Potential',
      url: '/',
    },
  ];
  const recommendsData = [
    {
      imageSrc: '/pictures/temp/Lowes.png',
      title: "Lowe's Companies, Inc",
      description: 'Human Resources Services',
      location: 'Helsinki, Finland',
      url: '/',
    },
    {
      imageSrc: '/pictures/temp/Crafting.png',
      title: 'Crafting More Than Words: Unveiling the...',
      description: 'Article',
      url: '/',
    },
    {
      imageSrc: '/pictures/temp/Twitter-eclipse.png',
      title: 'Why Twitter’s rebrand to ‘X’ feels shocking...',
      description: 'News',
      url: '/',
    },
    {
      imageSrc: '/pictures/temp/mcdonalds-eclipse.png',
      title: "McDonald's",
      description: 'Restaurant',
      location: 'Chicago, Illinois',
      url: '/',
    },
  ];
  const appliedJobsData = [
    {
      imageSrc: '/pictures/temp/Lowes.png',
      title: "Lowe's Companies, Inc",
      description: 'Human Resources Services',
      location: 'Helsinki, Finland',
      url: '/',
      progress: 1,
    },
    {
      imageSrc: '/pictures/temp/Crafting.png',
      title: 'Crafting More Than Words: Unveiling the...',
      description: 'Article',
      url: '/',
      progress: 2.5,
    },
    {
      imageSrc: '/pictures/temp/Twitter-eclipse.png',
      title: 'Why Twitter’s rebrand to ‘X’ feels shocking...',
      description: 'News',
      url: '/',
      progress: 2,
    },
    {
      imageSrc: '/pictures/temp/mcdonalds-eclipse.png',
      title: "McDonald's",
      description: 'Restaurant',
      location: 'Chicago, Illinois',
      url: '/',
      progress: 0.5,
    },
  ];
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
              <Recommends recommends={recommendsData} />
              {appliedJobsData.length > 0 && <AppliedJobs appliedJobs={appliedJobsData} />}
            </div>
          </div>
          <div className="Urapolku-cards">
            <div className="Dashboard-daily-picks">
              <DailyPicks dailyPicks={dailyPicksData} />
            </div>
            <div className="Dashboard-articles">
              <Articles articles={articlesData} />
            </div>
            <div className="Dashboard-news">
              <News news={newsData} />
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
