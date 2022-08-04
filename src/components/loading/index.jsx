import React from "react";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
    50%{
        transform:rotatez(180deg) scale(1.5);
        border-style:dotted;
    }
    100%{
        transform:rotatez(360deg) scale(0.9);
    }
`
const LoadingWrapper = styled.div`
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        margin: auto;
        width: 50px;
        height: 50px;
    .loader {
        display: flex;
        text-align: center;
    }
    .loader::before{
        content:"";
        color:white;
        height:25px;
        width:25px;
        background:transparent;
        border-radius:50%;
        border:0.625rem solid blue;
        border-color:#1565C0 #26C6DA;
        animation:${loading} 1.5s infinite;
    }
    .title {
        width: 4rem;
        color: #666;
        margin-top: 0.5rem;
    }
`
function Loading() {
    return (
        <LoadingWrapper>
            <div className="loader"></div>
            <div className="title">加载中...</div>
        </LoadingWrapper>
    )
}

export default Loading