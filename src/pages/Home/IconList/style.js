import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 4rem;
    background: white;
    display: flex;
    margin-top: 0.6rem;
    border-radius: 1rem;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-around;
    }
    i{
        font-size: 1.8em;
        margin-top: 2px;
    }
    span {
        font-size: 9px;
        color: black;
    }
`