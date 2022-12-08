import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Login() {
  return (
    <div className="Login">
      <div className="sect1">
        <img className="logo" src={Logo} alt="logo" />
        <section className="log-img"></section>
      </div>

      <div className="sect2">
        <h1>Welcome!</h1>
        <p className="sub-header">Enter details to login.</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p className="forgot-password">forgot password?</p>

        <Link to="/home">
          <button className="btn-login">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
