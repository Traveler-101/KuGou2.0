import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 6rem;
    background-color: white;
    &.show-enter,&.show-appear {
        /* 初始状态 */
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.show-enter-active, &.show-apply-active {
        /* 进入之后的状态 */
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.show-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.show-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .suggest {
        width: 100%;
        padding-top: 2.5rem;
        padding-left: 0.5rem;
        font-weight: 700;
        font-size: 0.9rem;
        color: #333;
    }
    .hot {
        width: 100%;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        font-weight: 700;
        font-size: 0.9rem;
        color: #333;
    }
    .header {
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        background-color: white;
        padding: 0.25rem 0.5rem;
        z-index: 99;
        & > span {
            line-height: 1.5rem;
            color: black;
            font-size: 1rem;
            &.i {
                font-size: 25px;
            }
        }
    }
`

export const List = styled.ul`
    width: 100%;
    margin-top: 0.5rem;
    padding: 0 0.25rem;
    display: ${props => props.suggestRank ? "flex" : ""};
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background: white;
    width: 100%;
`

export const ListItem = styled.li`
    background: rgb(98 119 192 / 4%);
    display: ${props => props.tracks.length ? "flex" : ""};
    margin: 0.5rem 0;
    /* border-bottom: 1px solid #666; */
    .img_wrapper {
        width: ${props => props.tracks.length ? "27vw": "28vw"};
        height: ${props => props.tracks.length ? "27vw": "28vw"};
        position: relative;
        img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
    }
`

export const SongList = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5rem 0.5rem;
    
`