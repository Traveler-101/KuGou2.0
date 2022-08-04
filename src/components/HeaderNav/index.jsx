import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Tab, TabItem } from "./style";

export default function ListenDetailNav() {
  const navigate = useNavigate()
  return (
    <Tab>
      <NavLink to="/home">
        <TabItem>
          <span>音乐</span>
        </TabItem>
      </NavLink>
      <NavLink to="/playlist">
        <TabItem>
          <span>歌单</span>
        </TabItem>
      </NavLink>
      <NavLink to="/vedio">
        <TabItem>
          <span>视频</span>
        </TabItem>
      </NavLink>
      <NavLink to="/rock">
        <TabItem>
          <span>国风</span>
        </TabItem>
      </NavLink>
      <TabItem>
        <i className="fa fa-search" onClick={() => navigate("/search")}></i>
      </TabItem>
      <TabItem>
        <i className="fa fa-bars" onClick={() => alert("用户中心正在开发中，敬请期待")}></i>
      </TabItem>
    </Tab>
  );
}
