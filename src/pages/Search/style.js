import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 6rem;
    background-color: white;
    &.fly-enter,&.fly-appear {
        /* 初始状态 */
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        /* 进入之后的状态 */
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.25rem 0.5rem;
        border-bottom: 1px solid #e5e5e5;
        background-color: white;
        span {
            line-height: 1.5rem;
            font-size: 1rem;
        }
        .title {
            flex: 1;
            text-align: center;
            line-height: 1.5rem;
            color: black;
            font-size: 1rem;
            padding-right: 0.8rem;
        }
    }
`
export const ShortcutWrapper = styled.div`
    position: absolute;
    top: 6rem;
    bottom: 0;
    width: 100%;
    display: ${props => props.show ? "" : "none"};
`
export const HotWrapper = styled.div`
    .title {
        font-size: 18px;
        font-weight: bold;
        padding-left: 1.2rem;
        margin-bottom: 0.8rem;
    }
    li:first-child {
        color: #f84824;
    }
    li:nth-child(2) {
        color: #f47f1b;
    }
    li:nth-child(3) {
        color: #ffb11f;
    }
    .hotword {
        height: 2rem;
        width: 100%;
        padding: 0.5rem 1.2rem;
        font-size: 16px;
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        color: #a1a4b3;
    }
    .top {
        width: 1rem;
        text-align: center;
        font-size: 16px;
        line-height: 1rem;
        margin-right: 1.2rem;
        font-weight: bold;
    }
    .name {
        color: black;
    }
`

export const SongsWrapper = styled.ul`
    padding-left: 1.5rem;
    z-index: 112;
    background-color: white;
   >li {
    display: flex;
    height: 3rem;
    align-items: center;
    .info {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        height: 100%;
        padding: 0.5rem 0;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #e5e5e5;
        >span:first-child{
            font-size: 16px;
            color: #333;
        }
        >span:last-child{
            margin-top: 0.2rem;
            font-size: 12px;
            color: #bba8a8;
        }
    }
   }
    
`

