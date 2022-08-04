import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .search-box {
    padding: 0.5rem;
    background: #fbfbfb;
    position: absolute;
    width: 100%;
    .fa-search {
        position: absolute;
        left: 1.2rem;
        top: 1.1rem;
        
    }
    .fa-close {
        position: absolute;
        top: 1.1rem;
        left: 13rem;
    }
    input {
        padding: 0.5rem 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid #e5e5e5;
        width: 80%;
    }
    .submit {
        width: 20%;
    }
  }
  
`;
const SearchBox = () => {
  return (
    <Wrapper>
      <div className="search-box">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="请输入搜索内容" />
        <i className="fa fa-close"></i>
        
      </div>
      
    </Wrapper>
  );
};

export default SearchBox;
