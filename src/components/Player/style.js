import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 2rem;
    position: fixed;
    bottom: 2.5rem;
    left: 0;
    display: flex;
    background: white;
    z-index: 2;
    .play {
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        background: #E0FFFF;
        border-radius: 1rem;
        margin: 0 0.25rem;
        display: flex;
    }
    .play_title {
        width: 50%;
        color: black;
        & img {
            height: 2rem;
            width: 2rem;
            float: left;
            border-radius: 1rem;
            margin-left: 0.5rem;
        }
    }
    .play_next {
        flex: 1;
        margin-left: 2.5rem;
        & i{
            margin-left: 1rem;
        }
    }

`