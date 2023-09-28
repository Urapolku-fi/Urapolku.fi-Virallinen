import '../../css/Browse/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <div className="footer-links-wrapper">
              <div className="contact">Contact</div>
              <div className="footer-links">
                <div className="work-inquires-workvaultflow">Work inquires: work@vaultflow.com</div>
                <div className="work-inquires-workvaultflow">
                  PR and speaking: press@vaultflow.com
                </div>
                <div className="work-inquires-workvaultflow">
                  New business: newbusiness@vaultflow.com
                </div>
              </div>
            </div>
            <div className="footer-links-wrapper1">
              <div className="careers">Careers</div>
              <div className="careersvaultflowcom">Careers@vaultflow.com</div>
            </div>
            <div className="vaultflow-all-rights">© 2023 Vaultflow. All Rights Reserved.</div>
          </div>
          <div className="footer-column">
            <div className="footer-links-wrapper">
              <div className="contact">Address</div>
              <div className="address-wrapper">
                <div className="th-street-floor-container">
                  <p className="th-street-floor">398 11th Street, Floor 2</p>
                  <p className="th-street-floor">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
            <div className="footer-links-wrapper">
              <div className="careers">Social</div>
              <div className="footer-links">
                <div className="twitter">Twitter</div>
                <div className="twitter">Instagram</div>
                <div className="twitter">Tik Tok</div>
              </div>
            </div>
          </div>
          <div className="footer-column2">
            <div className="logo-wrapper">
              <div className="logo">
                <img className="valtflow-icon" alt="" src={'/pictures/urapolku.png'} />
                <b className="urapolku">Urapolku</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
