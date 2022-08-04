import React, { useState } from "react";
import { ListWrapper, List, ListItem } from "./style";
import LazyLoad from 'react-lazyload'
import Music from '@/assets/images/./default.png'
import Loading from "../../../components/loading";

export default function Recommend({ recommendList, enterLoading }) {
  return (
    <ListWrapper>
      <div className="title">
         <p>专属推荐</p>
    
       </div>
       { enterLoading?<Loading /> : null }
       
      <List>
        {
          recommendList.map(item => {
            return (
              <ListItem key={item.id}>
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  <LazyLoad placeholder={<img width="100%" height="100%" src={Music} alt="music"/>}>
                    <img src={item.img + "?param=300x300"} width="100%" height="100%" alt="music"/>
                  </LazyLoad>
                  <div className="play_count">
                    <i className="fa fa-headphones"></i>
                    <span className="count">{item._count}</span>
                  </div>
                </div>
                <div className="desc">{item.title}</div>
                
              </ListItem>
            )
          })
        }
      </List>

    </ListWrapper>
    
  );
}
