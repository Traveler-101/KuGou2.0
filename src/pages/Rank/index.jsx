import React from "react";
import { connect } from "react-redux";
import { Container, List, ListItem, SongList } from "./style";
import { getRankList } from "./store/actionCreators";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import LazyLoad from "react-lazyload";
import defaultImg from "@/assets/images/./default.png";
import Loading from "@/components/loading";
import { useState } from "react";

function Rank(props) {
  const { rankList, enterLoading } = props;
  // console.log(rankList)
  const { getRankListDispatch } = props;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const enterDetail = (detail) => {
  //   navigate(`/rank/${detail.id}`);
  // };
  useEffect(() => {
    getRankListDispatch();
  }, []);
  useEffect(() => {
    setShow(true)
  }, [])
  const back = () => {
    setShow(false);
  }
  let suggestList = rankList.slice(0, 3);
  let hotList = rankList.slice(3);
  const renderRankList = (list, suggest) => {
    return (
      <List suggestRank={suggest}>
        {list.map((item) => {
          return (
            <ListItem
              key={item.id}
              tracks={item.tracks}
            >
              <div className="img_wrapper">
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={defaultImg}
                      alt="music"
                    />
                  }
                >
                  <img src={item.coverImgUrl} alt="" />
                </LazyLoad>
              </div>
              {renderSongList(item.tracks)}
            </ListItem>
          );
        })}
      </List>
    );
  };
  const renderSongList = (list) => {
    return list.length ? (
      <SongList>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {index + 1}. {item.first} - {item.second}
            </li>
          );
        })}
      </SongList>
    ) : null;
  };

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="show"
      unmountOnExit
      onExited={() => navigate(-1)}
    >
      <Container>
        <div className="header">
          <span>
          <i
            className="fa fa-chevron-left"
            onClick={() => back()}
          ></i>
          </span>
          <span className="title">排行榜</span>
          <span onClick={() => navigate("/search")}>
            <i className="fa fa-search"></i>
          </span>
        </div>
        <h1 className="suggest">推荐</h1>
        {renderRankList(suggestList)}
        <h1 className="hot">热门</h1>
        {renderRankList(hotList, true)}
        {enterLoading ? <Loading></Loading> : null}
      </Container>
    </CSSTransition>
  );
}

const mapStateToProps = (state) => {
  return {
    rankList: state.rank.rankList,
    enterLoading: state.rank.enterLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDispatch() {
      dispatch(getRankList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));
