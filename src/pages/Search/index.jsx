import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import SearchBox from "./Search_box";

const Search = () => {
    const navigate = useNavigate()
    return (
            <Container>
                    <div className="header">
                    <span>
                    <i
                        className="fa fa-chevron-left"
                        onClick={() => navigate(-1)}
                    ></i>
                    </span>
                    <div className="title">搜索</div>
                    </div>   
                <SearchBox />
            </Container>
    )
}

export default React.memo(Search)