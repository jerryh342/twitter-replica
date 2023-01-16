import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import { useEffect } from "react";
import { AUTH_USER_KEY } from "../../util/localStorage";
import axios from "axios";

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState("");

  useEffect(async () => {
    const res = await axios.get(`/auth?id=${post.userId}`);
    setUser(res.data.username);
  }, [post.userId]);

  const likeHandler = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUsername">{user}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">10 people like it</span>
          </div>
        </div>
      </div>
    </div>
  );
}
