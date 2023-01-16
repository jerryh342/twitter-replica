import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { AUTH_USERNAME, AUTH_USER_KEY } from "../../util/localStorage";
import { useState } from "react";
import axios from "axios";
export default function Share() {
  const [input, setInput] = useState("");

  const handlePostSubmit = async () => {
    try {
      const res = await axios.post("/post/create", {
        userId: localStorage.getItem(AUTH_USER_KEY),
        desc: input,
      });
      if (res.status === 200) {
        alert("Post submitted!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <textarea
            placeholder={
              "What's on your mind, " +
              localStorage.getItem(AUTH_USERNAME) +
              "?"
            }
            className="shareInput"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={handlePostSubmit}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
