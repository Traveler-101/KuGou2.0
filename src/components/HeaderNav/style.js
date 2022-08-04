
import styled from "styled-components";

export const Tab = styled.div`
  width: 100%;
  position: fixed;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 2;
  border-bottom: 1px solid #ccc;
  background: white;
  /* background-color: rgb(35, 149, 255); */
  i {
    width: 1rem;
  }
  a {
    flex: 1;
    padding: 0.1rem 0;
    font-size: 0.7rem;
    &.active {
      span {
        padding: 0.15rem 0;
        font-weight: 800;
        font-size: 0.8rem;
        color: black;
        border-bottom: 0.12rem solid yellow;
      }
    }
  }
`;

export const TabItem = styled.div`
  
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  i:last-child {
    margin-right: 0.2rem;
    margin-left: 0.2rem;
  }
`;