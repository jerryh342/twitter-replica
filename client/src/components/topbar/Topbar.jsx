import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { logoutUser } from "../../util/localStorage";
export default function Topbar() {
  const handleLogOut = () => {
    logoutUser();
    window.location.href = "/";
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BlueBirb</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          x
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <button className="logoutBtn" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
}
