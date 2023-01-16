import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import { useEffect } from "react";
import { AUTH_USER_KEY } from "../../util/localStorage";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem(AUTH_USER_KEY) === null) {
      alert("You are not logged in!");
      window.location.href = "/";
    }
  });

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Feed />
      </div>
    </>
  );
}
