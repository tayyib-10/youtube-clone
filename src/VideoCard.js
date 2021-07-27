import React from "react";
import "./VideoCard.css";

// Icons
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <div className="videoCard__thumbnail"></div>
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        <div className="videoCard__text">
          <h4>
            🔴 Build a SaaS Product using ES6 JavaScript | Day 4 of the 5-Day
            Coding Bootcamp
          </h4>
          <p>22K views : Streamed 2 days ago</p>
          <p className="channelName">Clever Programmer</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
