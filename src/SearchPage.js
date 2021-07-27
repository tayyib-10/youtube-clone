import React from "react";

import "./SearchPage.css";
import "./VideoCard.css"
import ChannelRow from "./ChannelRow";
import VideoCard from "./VideoCard";


import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow 
      image = "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
      channel = "clever programmer"
      verified 
      subs = "976k"
      noOfVideos ="598"
      description = "Just Want to Say a Big Thanks to Clever Programmer Team. Their Youtube Channel helped me a lot!!"
      />

      <VideoCard className="video-card"/>
      <VideoCard className="video-card" />
        <VideoCard className="video-card" />
        <VideoCard className="video-card" />
        <VideoCard className="video-card" />
        <VideoCard className="video-card" />
        <VideoCard className="video-card" />
        <VideoCard className="video-card" />
        <VideoCard className="video-card" />
        <VideoCard className="video-card" />
        <VideoCard className="video-card" />
    </div>
  );
}

export default SearchPage;
