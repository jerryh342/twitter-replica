import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import { AUTH_USERNAME, AUTH_USER_KEY } from "../../util/localStorage";

export default function Feed() {
  const [feed, setFeed] = useState([]);
  useEffect(async () => {
    const posts = await axios.post("/post/feed", {
      userId: localStorage.getItem(AUTH_USER_KEY),
    });
    setFeed(posts.data);
  }, [
    localStorage.getItem(AUTH_USERNAME),
    localStorage.getItem(AUTH_USER_KEY),
  ]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {feed.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
