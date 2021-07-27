import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  const [inputTerm, setInputTerm] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg"
            alt="youtube_icon"
            srcset=""
            className="header__logo"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputTerm(e.target.value)}
          value={inputTerm}
          type="text"
          placeholder="Search"
        />
        <Link to={`search/${inputTerm}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Mohammad Tayyib"
          src="https://yt3.ggpht.com/yti/APfAmoGSQ6mkI_Up_Er-aLV4y2_6dvddb-lFTzkVyo0n=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default Header;
