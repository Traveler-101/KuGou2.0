import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./style";
import PlayImage from "@/assets/images/cyx.webp";
import Image1 from "@/assets/images/4.png";
import { Popup } from "antd-mobile";
import MusicList from "./MusicList";
import { getPlayList, deleteSong, deleteAllSong } from "./store/actionCreators";
// 快捷方式 @ = src     工程化 alias

function Play(props) {
  const [visible, setVisible] = useState(false);
  const { playList } = props;
  const { getPlayListDispatch, deleteSongDispatch, deleteAllSongDispatch } =
    props;
  useEffect(() => {
    getPlayListDispatch();
  }, []);

  const handleDeleteSong = (song) => {
    deleteSongDispatch(song);
    console.log(song);
  };
  const handleDeleteAllSong = () => {
    deleteAllSongDispatch();
  };
  return (
    <Wrapper>
      <div className="play">
        <div className="play_title">
          <img src={PlayImage} />
          <span>孤勇者 - 陈奕迅</span>
        </div>
        <div className="play_next">
          <i className="fa fa-play"></i>
          <i className="fa fa-step-forward"></i>
          <i
            className="fa fa-list-ul"
            onClick={() => {
              setVisible(true);
            }}
          ></i>
          <Popup
            visible={visible}
            onMaskClick={() => {
              setVisible(false);
            }}
          >
            <div
              style={{
                height: "50vh",
                overflowY: "scroll",
                padding: "2rem 1rem",
              }}
            >
              {playList.length != 0 ? (
                <MusicList
                  playList={playList}
                  handleDeleteSong={handleDeleteSong}
                  handleDeleteAllSong={handleDeleteAllSong}
                />
              ) : (
                <img src={Image1} width="90%" />
              )}
            </div>
          </Popup>
        </div>
      </div>
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    playList: state.play.playList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPlayListDispatch() {
      dispatch(getPlayList());
    },
    deleteSongDispatch(data) {
      dispatch(deleteSong(data));
    },
    deleteAllSongDispatch() {
      dispatch(deleteAllSong());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Play);
