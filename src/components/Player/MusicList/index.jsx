import React from "react";
import { Wrapper } from "./style";
import { Modal, Toast, DotLoading } from "antd-mobile";

const MusicList = ({playList, handleDeleteSong, handleDeleteAllSong}) => {
  function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        {
          <DotLoading color="primary" />;
        }
        resolve();
      }, time);
    });
  }

  return (
    <Wrapper>
      <div className="header">
        <i className="fa fa-random"></i>
        <span>随机播放</span>
        <span>{playList.length}</span>
        <div className="right">
          <i
            className="fa fa-trash"
            onClick={() =>
              Modal.confirm({
                content: "清空播放队列",
                onConfirm: async () => {
                  await sleep(2000);
                  Toast.show(
                    {
                      icon: "success",
                      content: "提交成功",
                      position: "bottom",
                    },
                    handleDeleteAllSong()
                  );
                },
              })
            }
          ></i>
        </div>
      </div>
      {playList.map((item, index) => {
        let start = index + 1;
        return (
          <li key={item.id}>
            <span className="index">{start}</span>
            <div className="title">
              <span style={{ fontWeight: "700" }}>{item.title}</span>
              <span style={{ fontSize: "12px" }}>{item.author}</span>
            </div>
            <div className="delete">
              <i
                className="fa fa-close"
                onClick={() => handleDeleteSong(item)}
              ></i>
            </div>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default MusicList
