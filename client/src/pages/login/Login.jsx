import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { saveUser } from "../../util/localStorage";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    const res = await axios.post("/auth/login", {
      username: username,
      password: password,
    });
    if (res.status === 200) {
      saveUser(res.data._id, username);
      navigate("/home");
    } else {
      alert("wrong combination");
    }
  };

  const register = () => {
    navigate("/register");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BlueBirb</h3>
          <span className="loginDesc"></span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              className="loginInput"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" onClick={login}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={register}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
