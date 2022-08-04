import React from "react";
import { FooterWrapper } from "./style";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

export default function Footer() {
  const { pathname } = useLocation();
 
  return (
      <FooterWrapper>
        <Link
          to="/home"
          className={classnames({
            active: pathname == "/home" || pathname == "/",
          })}
        >
          <i className="fa fa-music"></i>
          <span>首页</span>
        </Link>
        <Link
          to="/watch"
          className={classnames({ active: pathname == "/watch" })}
        >
          <i className="fa fa-play-circle-o"></i>
          <span>直播</span>
        </Link>
        <Link
          to="/sing"
          className={classnames({ active: pathname == "/sing" })}
        >
          <i className="fa fa-microphone"></i>
          <span>唱玩</span>
        </Link>
        <Link to="/me" className={classnames({ active: pathname == "/me" })}>
          <i className="fa fa-user"></i>
          <span>我的</span>
        </Link>
      </FooterWrapper>
  );
}
