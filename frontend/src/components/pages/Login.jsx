import "../css/login.css";

function Login() {
  return (
    <div id="Wrapper-login">
        <div id="Login">
            <div id="Login-Left-side">
                <div id="Login-Header-desktop">
                    <img src="pictures/urapolku.png" width="26px" height="26px" alt=""/>
                    <h2>Urapolku</h2>
                </div>
                <div id="Login-Info-box">
                    <p>create a free account to land your dream job and connect with your ideal employers
                    </p>
                </div>
            </div>
            <div id="Login-Container">
            <div id="Login-Header">
                <img src="pictures/urapolku.png" width="26px" height="26px" alt=""/>
                <h2>Urapolku</h2>
            </div>
            <div class="Login-Welcome">
                <h2>Welcome back</h2>
            </div>
            <div class="Login-Desktop-signin-buttons">
                <div class="Login-Google-signin">
                    <button>
                        <img src="pictures/Google-logo.png" alt=""/>
                        <p>Sign in with google</p>
                    </button>
                </div>
                <div class="Login-Facebook-signin">
                    <button>
                        <img src="pictures/Mobile-facebook-icon.png" alt=""/>
                        <p>Sign in with Facebook</p>
    
                    </button>
                </div>
            </div>
            <div class="Login-Desktop-OR">
                <p>- OR -</p>
            </div>
            <div class="Login-Input-fields">
                <input type="text" name="" id="Login-Email" placeholder="Email"/>
                <input type="text" name="" id="Login-Password" placeholder="Password"/>
                <button class="Login-passframe"><img src="pictures/pass-frame.png" alt=""/></button>
            </div>
            <div class="Login-button">
                <button><p>Log in</p></button>
            </div>
            <div class="Login-OR">
                <p>- OR -</p>
            </div>
            <div class="Login-Signin-button">
                <div class="Login-Google-signin">
                    <button>
                        <img src="pictures/Google-logo.png" alt=""/>
                        <p>Sign in with google</p>
                    </button>
                </div>
                <div class="Login-Facebook-signin">
                    <button>
                        <img src="pictures/Mobile-facebook-icon.png" alt=""/>
                        <p>Sign in with Facebook</p>
    
                    </button>
                </div>
            </div>
            <div class="Login-No-account">
                <p>Don't have an account? <a href="/register">Sign up</a></p>
            </div>
        </div>
    </div>
    </div>
  );
}
export default Login;
