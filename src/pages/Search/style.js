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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.25rem 0.5rem;
        border-bottom: 1px solid #e5e5e5;
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