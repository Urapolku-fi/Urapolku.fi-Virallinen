import '../css/signup.css';
function Signup() {
    return (
        <div id="Signup-wrapper">
        <div id="Left-side">
            <div id="Header-desktop">
                <img src="pictures/urapolku.png" width="26px" height="26px" alt=""/>
                <h2>Urapolku</h2>
            </div>
            <div id="Info-box">
                <p>create a free account to land your dream job and connect with your ideal employers
                </p>
            </div>
        </div>
        <div id="Container">
        <div id="Header">
            <img src="pictures/urapolku.png" width="26px" height="26px" alt=""/>
            <h2>Urapolku</h2>
        </div>
        <div class="Welcome">
            <h2>Create account</h2>
        </div>
        <div class="Desktop-signin-buttons">
            <div class="Google-signin">
                <button>
                    <img src="pictures/Google-logo.png" alt=""/>
                    <p>Sign up with google</p>
                </button>
            </div>
            <div class="Facebook-signin">
                <button>
                    <img src="pictures/Mobile-facebook-icon.png" alt=""/>
                    <p>Sign up with Facebook</p>

                </button>
            </div>
        </div>
        <div class="Desktop-OR">
            <p>- OR -</p>
        </div>
        <div class="Input-fields">
            <input type="text" name="" id="Fullname" placeholder="Full name"/>
            <input type="text" name="" id="Email" placeholder="Email Address"/>
            <input type="text" name="" id="Password" placeholder="Password"/>
            <button class="passframe"><img src="pass-frame.png" alt=""/></button>
            <div class="Phone-number">
            <div class="Country-number">
                <p class="number">+358</p>
            </div>
            <input type="text" name="" id="Phone-number-text" placeholder="Phone-number"/>
            </div>
            <label for="File-upload">Work History (optional)</label>
            <input type="file" name="" id="File-upload"/>
        </div>
        <p class="user-agree">By clicking Create Account, you agree to Urapolku’s <a href="/">Agreement and Privacy Policy</a></p>
        <div class="Login-button">
            <button><p>Create account</p></button>
        </div>
        <div class="OR">
            <p>- OR -</p>
        </div>
        <div class="Signin-button">
            <div class="Google-signin">
                <button>
                    <img src="pictures/Google-logo.png" alt=""/>
                    <p>Sign in with google</p>
                </button>
            </div>
            <div class="Facebook-signin">
                <button>
                    <img src="pictures/Mobile-facebook-icon.png" alt=""/>
                    <p>Sign in with Facebook</p>

                </button>
            </div>
        </div>
        <div class="No-account">
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
    </div>
    </div>   
    )
};
export default Signup