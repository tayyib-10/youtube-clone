import React from 'react'

// Icons 
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import HistoryIcon from "@material-ui/icons/History"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpOutlined"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"

import SidebarRow from "./SidebarRow"
import './sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="Home" Icon = {HomeIcon} selected/>
            <SidebarRow title="Trending" Icon = {WhatshotIcon}/>
            <SidebarRow title="Subscriptions" Icon = {SubscriptionsIcon}/>
            <hr/>
            <SidebarRow title="Library" Icon = {VideoLibraryIcon}/>
            <SidebarRow title="History" Icon = {HistoryIcon}/>
            <SidebarRow title="Your videos" Icon = {OndemandVideoIcon}/>
            <SidebarRow title="Watch Later" Icon = {WatchLaterIcon}/>
            <SidebarRow title="Liked videos" Icon = {ThumbUpAltOutlinedIcon}/>
            <SidebarRow title="Show more" Icon = {ExpandMoreOutlinedIcon}/>
            <hr/>
        </div>
    )
}

export default Sidebar
