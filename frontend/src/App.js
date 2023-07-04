import logo from './pictures/urapolku.png';
import aiLogo from './pictures/Urapolku_AI_logo.png'
import video from './pictures/video.png'
import digital from './pictures/Digital-image.png'

import './App.css';

import observer from './animations';
import {useEffect} from 'react'


function App() {
    useEffect(() => {
      const elements = document.querySelectorAll('.hidden');
      elements.forEach((el) => observer.observe(el));
  
      // Clean up the observer when the component unmounts
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, []);
  return (
    
    <div>
    <section id="s1" class="hidden">
        <div id="navbar">
            <div class="navbar-container">
                <div class="navbar-content">
                    <div class="navbar-brand">
                        <div class="logo-wrapper">
                            <div class="logo">
                                <img src={logo} alt="icon" width="22px" height="22px"/>
                                <p>Urapolku</p>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-menu">
                        <li><a href="#">Avoimet Työpaikat</a></li>
                        <li><a href="#">Jätä työpaikka ilmoitus</a></li>
                        <li><a href="#">Suosikit</a></li>
                        <button class="Register">Rekisteröidy</button>
                        <button class="Login">Kirjaudu</button>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="s2" class="hidden">
        <div id="Hero-stack">
            <div class="Small-container">
                <div class="Title-section hidden">
                    <div class="Pill">
                        <p>Kaikki työpaikat - ja myös niiden palkat</p>

                    </div>
                    <div class="Content hidden">
                        <h1>Yhdellä haulla urapolulta löydät kaikki avoimet työpaikat.</h1>
                        <div class="Paragraph-wrapper">
                            <p>Urapolku on työnetsimisalusta, joka tarjoaa sinulle nopean ja tehokkaan tavan löytää juuri sinulle sopivia työpaikkoja.</p>
                        </div>
                    </div>
                    <div class="Actions">
                        <button class="Download">Rekisteröidy</button>
                        <button class="Open-jobs">Avoimet työpaikat</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="s3" class="hidden">
    <div id="Content">
        <div class="Video">
            <img src={video} alt=""/>
        </div>
    </div>
    </section>
    <section id="s4" class="hidden">
        <div id="Middle-section">
            <div class="Middle-section-title">
                <div class="Middle-title-wrapper">
                    <h2>Teemme uran löytämisestä sinulle helpompaa!</h2>
                </div>
                <p>Check out our amazing features and experience the power of Vaultflow for yourself.</p>
            </div>
        </div>
        <div class="Middle-section-columns">
            <div class="Middle-section-column">
                <div class="Middle-section-card-wrapper">
                    <div class="Middle-section-icon-wrapper">
                        <img src={aiLogo} alt=""/>
                    </div>
                    <div class="Middle-section-card-content">
                        <h2>Urapolku AI</h2>
                        <p>Urapolku AI on innovatiivinen työkalu, joka auttaa sinua löytämään oikean urapolun hyödyntämällä tekoälyä. Urapolun avulla voit saada yksilöllisiä ja räätälöityjä suosituksia, jotka perustuvat vastaamasi 20 eri kysymykseen tulokseen. Vastausten avulla Urapolku AI arvioi kykyjäsi, kiinnostuksen kohteitasi ja tavoitteitasi urasi suhteen. Urapolku AI on suunniteltu auttamaan kaikkia, jotka haluavat löytää itselleen sopivan urapolun.</p>
                    </div>
                        <div class="Middle-section-button">
                        <button>Lue lisää</button>
                    </div>
                </div>  
            </div>
            <div class="Middle-section-column">
                <div class="Middle-section-card-wrapper">
                    <div class="Middle-section-icon-wrapper">
                        <img src={digital} alt="" class=""/>
                    </div>
                    <div class="Middle-section-card-content">
                        <h2>Digital Credit Tokens</h2>
                        <p>Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.</p>
                    </div>
                        <div class="Middle-section-button">
                        <button>View dashboard</button>
                    </div>
                </div>  
            </div>
            </div>
    </section>
    <section id="s5" class="hidden">
        <div id="Lower-container">
            <div class="Lower-container-content">
                <h2>Tietoa Urapolusta</h2>
                <p>Etsitpä sitten töitä tai haluat löytää uusia työntekijöitä, me tarjoamme sinulle innovatiivisen ratkaisun löytää juuri sen mitä etsit: olipa kyseessä sitten uusi työpaikka, taitava osaaja, suunnanmuutos, unelmatyön tavoittelu tai vaikka kesätyö. Urapolullta löydät suuren valikoiman avoimia työpaikkoja, parhaat vinkit työnhakuun ja kiehtovimmat tarinat työelämän koukeroista.</p>
                <button>Rekisteröidy</button>
            </div>
        </div>
    </section>
    <section id="s6" class="hidden">
        <div id="Footer">
            <div class="Footer-container">
                <div class="Footer-3columns">
                    <div class="Footer-first-column">
                        <div class="Footer-link-wrapper">
                            <h2>Contact</h2>
                        </div>
                        <div class="Footer-links">
                            <p>Work inquires: work@vaultflow.com</p>
                            <p>PR and speaking: press@vaultflow.com</p>
                            <p>New business: newbusiness@vaultflow.com</p>
                        </div>
                        <div class="Footer-link-wrapper-career">
                            <h2>Careers</h2>
                            <p>Careers@waitflow.com</p>
                        </div>
                        <p>© 2023 Urapolku. All Rights Reserved.</p>
                    </div>
                    <div class="Footer-second-column">
                        <div class="Footer-second-link-wrapper">
                            <h2>Address</h2>
                            <div class="Footer-address-wrapper">
                                <p>398 11th Street, Floor 2 San Francisco, CA 94103</p>
                            </div>
                        </div>
                        <div class="Footer-second-link-wrapper">
                            <h2>Socials</h2>
                            <div class="Footer-socials">
                                <p>Twitter</p>
                                <p>Instagram</p>
                                <p>Tik Tok</p>
                            </div>
                        </div>
                    </div>
                    <div class="Footer-third-column">
                        <div class="Footer-logo-wrapper">
                            <div class="Footer-logo">
                                <img src={logo} alt=""/>
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

export default App;
