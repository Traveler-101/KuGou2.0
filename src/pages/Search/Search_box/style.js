import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  .search-box {
    padding: 0.5rem;
    background: #fbfbfb;
    position: absolute;
    width: 100%;
    .fa-search {
        position: absolute;
        left: 1.5rem;
        top: 1.1rem;
    }
    .fa-close {
        position: absolute;
        top: 1.1rem;
        left: 16rem;
    }
    input {
        padding: 0.5rem 2rem;
        border-radius: 1rem;
        border: 1px solid #e5e5e5;
        width: 100%;
    }
  }
  
`;