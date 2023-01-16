import "./register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verification, setVerification] = useState("");
  const navigate = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();
    if (password === verification /*&& !username.isEmpty()*/) {
      try {
        const res = await axios.post("/auth/register", {
          username: username,
          password: password,
        });
        console.log(res);
        res.status === 200 ? navigate("/") : alert("failed");
      } catch (err) {
        console.log(err);
        console.log("noms");
      }
    }
    /*if (username.isEmpty()) {
      alert("Please fill in username");
    } else {
      alert("The two passwords don't match");
    }
    return null;*/
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BlueBirb</h3>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={registerUser}>
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
            <input
              placeholder="Password Again"
              className="loginInput"
              onChange={(e) => setVerification(e.target.value)}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
