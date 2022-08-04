import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 100%;
    height: 2.5rem;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 2;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-around;
        &.active {
        color: yellow;
        /* transform: rotate(0deg);
        transition: transform .25s linear; */
        /* background-color: #00FFFF; */
    }
    }
    
    i{
        font-size: 1.8em;
        margin-top: 0.1rem;
    }
    span {
        font-size: 0.45rem;
        color: black;
    }
`