import styled from "styled-components";


export const ListWrapper = styled.div`
  max-width: 100%;
  background-color: white;
  margin-top: 0.5rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  .title{
    
        display: flex;
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        p {
            margin-left: 0.6rem;
            font-size: 16px;
            font-weight: 600;
            color: #666;
        }
        .right {
        font-size: 20px;
        flex: 1;
        i{
            float: right;
            margin-right: 1rem;
        }
    }
    }
  
`
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ListItem = styled.div`
  position: relative;
  width: 32%;
  .decorate {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 35px;
    border-radius: 0.5rem;
    background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
  }
  .img_wrapper{
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: 12px;
      line-height: 15px;
      color: #f1f1f1;
      .play{
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 6px;
    }
  }
  .desc {
      overflow: hidden;
      margin-top: 2px;
      padding: 0 2px;
      height: 2.5rem;
      text-align: left;
      font-size: 12px;
      line-height: 1.5;
      color: black;
    }
`