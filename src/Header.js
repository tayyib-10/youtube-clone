import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg"
          alt="youtube_icon"
          srcset=""
          className="header__logo"
        />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search"/>
        <SearchIcon className='header__inputButton'/>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar
          alt="Mohammad Tayyib"
          // src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fjeanfelisme.com%2F30-days-of-javascript%2F&psig=AOvVaw2RhO24FdELtRGEugzfuu_O&ust=1624564390710000&source=images&cd=vfe\\&ved=0CAoQjRxqFwoTCLDLtoLErvECFQAAAAAdAAAAABAF"
        />
      </div>
    </div>
  );
}

export default Header;
