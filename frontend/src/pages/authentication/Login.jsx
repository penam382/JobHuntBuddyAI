
function Login() {
    return (
        <div>
            <form action="">
                <h1>Lets Start Job Hunting</h1>
                <p>
                    Please login or sign up to continue.
                </p>
                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                </div>
                
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>
                        Don't have an account?
                        <a href="#">Register</a>
                    </p>
                </div>

            </form>
        </div>
      );
}

export default Login;