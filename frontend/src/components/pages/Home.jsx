import "../css/home.css";

import observer from "../animations/hover";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div>
      <section id="s1" className="hidden">
        <div id="navbar">
          <div className="navbar-container">
            <div className="navbar-content">
              <div className="navbar-brand">
                <div className="logo-wrapper">
                  <div className="logo">
                    <img
                      src={"/pictures/urapolku.png"}
                      alt="icon"
                      width="22px"
                      height="22px"
                    />
                    <p>Urapolku</p>
                  </div>
                </div>
              </div>
              <div className="navbar-menu">
                <li>
                  <a href="#">Avoimet Työpaikat</a>
                </li>
                <li>
                  <a href="#">Jätä työpaikka ilmoitus</a>
                </li>
                <li>
                  <a href="#">Suosikit</a>
                </li>
                <button className="Register">Rekisteröidy</button>
                <button className="Login">Kirjaudu</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s2" className="hidden">
        <div id="Hero-stack">
          <div className="Small-container">
            <div className="Title-section hidden">
              <div className="Pill">
                <p>Kaikki työpaikat - ja myös niiden palkat</p>
              </div>
              <div className="Content hidden">
                <h1>
                  Yhdellä haulla urapolulta löydät kaikki avoimet työpaikat.
                </h1>
                <div className="Paragraph-wrapper">
                  <p>
                    Urapolku on työnetsimisalusta, joka tarjoaa sinulle nopean
                    ja tehokkaan tavan löytää juuri sinulle sopivia työpaikkoja.
                  </p>
                </div>
              </div>
              <div className="Actions">
                <button className="Download">Rekisteröidy</button>
                <button className="Open-jobs">Avoimet työpaikat</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s3" className="hidden">
        <div id="Content">
          <div className="Video">
            <img src={"/pictures/video.png"} alt="" />
          </div>
        </div>
      </section>
      <section id="s4" className="hidden">
        <div id="Middle-section">
          <div className="Middle-section-title">
            <div className="Middle-title-wrapper">
              <h2>Teemme uran löytämisestä sinulle helpompaa!</h2>
            </div>
            <p>
              Check out our amazing features and experience the power of
              Vaultflow for yourself.
            </p>
          </div>
        </div>
        <div className="Middle-section-columns">
          <div className="Middle-section-column">
            <div className="Middle-section-card-wrapper">
              <div className="Middle-section-icon-wrapper">
                <img src={"/pictures/Urapolku_AI_logo.png"} alt="" />
              </div>
              <div className="Middle-section-card-content">
                <h2>Urapolku AI</h2>
                <p>
                  Urapolku AI on innovatiivinen työkalu, joka auttaa sinua
                  löytämään oikean urapolun hyödyntämällä tekoälyä. Urapolun
                  avulla voit saada yksilöllisiä ja räätälöityjä suosituksia,
                  jotka perustuvat vastaamasi 20 eri kysymykseen tulokseen.
                  Vastausten avulla Urapolku AI arvioi kykyjäsi, kiinnostuksen
                  kohteitasi ja tavoitteitasi urasi suhteen. Urapolku AI on
                  suunniteltu auttamaan kaikkia, jotka haluavat löytää itselleen
                  sopivan urapolun.
                </p>
              </div>
              <div className="Middle-section-button">
                <button>Lue lisää</button>
              </div>
            </div>
          </div>
          <div className="Middle-section-column">
            <div className="Middle-section-card-wrapper">
              <div className="Middle-section-icon-wrapper">
                <img src={"/pictures/Digital-image.png"} alt="" className="" />
              </div>
              <div className="Middle-section-card-content">
                <h2>Digital Credit Tokens</h2>
                <p>
                  Reward your customers and incentivize engagement with our
                  innovative digital credit tokens. Our tokens can be customized
                  to match your branding, and are a flexible and scalable way to
                  drive customer loyalty and encourage repeat business.
                </p>
              </div>
              <div className="Middle-section-button">
                <button>View dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s5" className="hidden">
        <div id="Lower-container">
          <div className="Lower-container-content">
            <h2>Tietoa Urapolusta</h2>
            <p>
              Etsitpä sitten töitä tai haluat löytää uusia työntekijöitä, me
              tarjoamme sinulle innovatiivisen ratkaisun löytää juuri sen mitä
              etsit: olipa kyseessä sitten uusi työpaikka, taitava osaaja,
              suunnanmuutos, unelmatyön tavoittelu tai vaikka kesätyö.
              Urapolullta löydät suuren valikoiman avoimia työpaikkoja, parhaat
              vinkit työnhakuun ja kiehtovimmat tarinat työelämän koukeroista.
            </p>
            <button>Rekisteröidy</button>
          </div>
        </div>
      </section>
      <section id="s6" className="hidden">
        <div id="Footer">
          <div className="Footer-container">
            <div className="Footer-3columns">
              <div className="Footer-first-column">
                <div className="Footer-link-wrapper">
                  <h2>Contact</h2>
                </div>
                <div className="Footer-links">
                  <p>Work inquires: work@vaultflow.com</p>
                  <p>PR and speaking: press@vaultflow.com</p>
                  <p>New business: newbusiness@vaultflow.com</p>
                </div>
                <div className="Footer-link-wrapper-career">
                  <h2>Careers</h2>
                  <p>Careers@waitflow.com</p>
                </div>
                <p>© 2023 Urapolku. All Rights Reserved.</p>
              </div>
              <div className="Footer-second-column">
                <div className="Footer-second-link-wrapper">
                  <h2>Address</h2>
                  <div className="Footer-address-wrapper">
                    <p>398 11th Street, Floor 2 San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="Footer-second-link-wrapper">
                  <h2>Socials</h2>
                  <div className="Footer-socials">
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Tik Tok</p>
                  </div>
                </div>
              </div>
              <div className="Footer-third-column">
                <div className="Footer-logo-wrapper">
                  <div className="Footer-logo">
                    <img src={""} alt="" />
                    <h2>Urapolku</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
