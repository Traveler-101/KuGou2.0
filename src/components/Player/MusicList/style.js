import styled from "styled-components";

export const Wrapper = styled.div`
    
    .header {
        width: 100%;
        height: 2rem;
        padding: 0 1rem;
        line-height: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        border-bottom: 1px solid #e5e5e5;
        span {
            margin-left: 0.7rem;
        }
        .right {
            float: right;
        }
    }
    >li {
        display: flex;
        height: 3rem;
        align-items: center;
        margin-top: 0.5rem;
       
        .index {
            width: 1rem;
            height: 2rem;
            line-height: 2rem;
            text-align: center;
        }
        .title {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            margin-left: 1rem;
            border-bottom: 1px solid #e5e5e5;
        }
    }
    
`