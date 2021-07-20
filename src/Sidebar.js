import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1624916888457-cd3eb62cc17e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt=""
        ></img>
        <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
        <h1>{user.displayName}</h1>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2543</p>
        </div>
        <div className="sidebar_stat">
          <p>Veiw of Post</p>
          <p className="sidebar_statNumber">2543</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("Programming")}
        {recentItem("Web developer")}
        {recentItem("Java developer")}
        {recentItem("Design")}
        {recentItem("Software")}
      </div>
    </div>
  );
}

export default Sidebar;
