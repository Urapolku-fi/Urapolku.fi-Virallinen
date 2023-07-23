import "../css/login.css";

function Login() {
  return (
    <section id="Login">
      <div id="Left-side">
        <div className="Logo-wrapper">
          <div className="Top">
            <img id="logo" src={"pictures/urapolku.png"} alt="" />
            <h2>Urapolku</h2>
          </div>
        </div>
        <p>
          create a free account to land your dream job and connect with your
          ideal employers
        </p>
      </div>
      <div id="Right-side">
        <div className="box">
          <div className="Mobile-logo-wrapper">
            <img id="logo" src={"pictures/urapolku.png"} alt="" />
            <h2>Urapolku</h2>
          </div>
          <h2 className="Welcome">Welcome back!</h2>
          <div className="Signin-buttons">
            <div className="Google-signin">
              <button>
                <img src={"pictures/Google-logo.png"} alt="" />
                <p>Sign in with google</p>
              </button>
            </div>

            <div className="Facebook-signin">
              <button>
                <img src={"pictures/facebook-logo.png"} alt="" />
                <p>Sign in with Facebook</p>
              </button>
            </div>
          </div>
          <div className="OR">
            <p>OR</p>
          </div>

          <div className="input-fields">
            <div className="Email-field">
              <input
                type="text"
                className="email"
                placeholder="Email address"
              />
            </div>
            <div className="pass-field">
              <input
                type="password"
                className="password"
                placeholder="Password"
              />
              <button>
                <img src={"pictures/pass-frame.png"} alt="" />
              </button>
            </div>
          </div>
          <button className="Log-in">
            <p>Log in</p>
          </button>
          <div className="Mobile-or">
            <p>
              <span>OR</span>
            </p>
          </div>
          <div className="Mobile-signin-buttons">
            <div className="Mobile-google-signin">
              <button>
                <img src={"pictures/Mobile-google-icon.png"} alt="" />
                <p>Sign in with google</p>
              </button>
            </div>

            <div className="Mobile-facebook-signin">
              <button>
                <img src={"/pictures/Mobile-facebook-icon.png"} alt="" />
                <p>Sign in with Facebook</p>
              </button>
            </div>
          </div>
          <div className="Create-account">
            <p>Dont have an account?</p>
            <li>
              <a href="/">Sign up</a>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
