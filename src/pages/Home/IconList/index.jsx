import React from "react";
import { Wrapper } from "./style";
import { Link } from "react-router-dom";

const IconList = () => {
  return (
    <Wrapper>
      <Link to="#">
        <i className="fa fa-music"></i>
        <span>乐库</span>
      </Link>
      <Link to="#">
        <i className="fa fa-gittip"></i>
        <span>猜你喜欢</span>
      </Link>
      <Link to="#">
        <i className="fa fa-caret-square-o-up"></i>
        <span>每日推荐</span>
      </Link>
      <Link to="/rank">
        <i className="fa fa-trophy"></i>
        <span>排行榜</span>
      </Link>
      <Link to="#">
        <i className="fa fa-th-large"></i>
        <span>更多</span>
      </Link>
    </Wrapper>
  );
};

export default IconList;
