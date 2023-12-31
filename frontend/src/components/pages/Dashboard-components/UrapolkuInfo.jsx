import '../../css/Dashboard/UrapolkuInfo.css';
import { useNavigate } from 'react-router-dom';
const UrapolkuInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="Urapolku-info-container">
      <h2>Tietoa urapolusta</h2>
      <p>
        Etsitpä sitten töitä tai haluat löytää uusia työntekijöitä, me tarjoamme sinulle
        innovatiivisen ratkaisun löytää juuri sen mitä etsit: olipa kyseessä sitten uusi työpaikka,
        taitava osaaja, suunnanmuutos, unelmatyön tavoittelu tai vaikka kesätyö. Urapolullta löydät
        suuren valikoiman avoimia työpaikkoja, parhaat vinkit työnhakuun ja kiehtovimmat tarinat
        työelämän koukeroista.
      </p>
      <div className="Urapolku-info-register-button">
        <button
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        >
          Rekisteröidy
        </button>
      </div>
    </section>
  );
};
export default UrapolkuInfo;
