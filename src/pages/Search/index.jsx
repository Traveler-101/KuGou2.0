import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from "react-router-dom";
import { Container, ShortcutWrapper, HotWrapper, SongsWrapper } from "./style";
import SearchBox from "./Search_box";
import Loading from "@/components/loading";
import { changeEnterLoading, getHotList, getResultSongsList } from './store/actionCreator'
import { getName } from "@/api/utils";

const Search = (props) => {
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);
    console.log(query)
    const { hotList, songsList, enterLoading } = props
    const { 
        getHotListDispatch, 
        getResultSongsListDispatch,
        changeEnterLoadingDispatch
} = props
    const navigate = useNavigate()
    useEffect(() => {
        if (!hotList.length) {
            getHotListDispatch()
        }
    }, [])
    const handleQuery = (q) => {
        setQuery(q)
        if(!q) return;
        getResultSongsListDispatch(q);
        changeEnterLoadingDispatch(true);
    }
    const renderHotList = () => {
        return (
            <ul>
                {
                    hotList.map((item, index) => {
                        return (
                            <li
                                className="hotword"
                                key={item.first}
                                onClick={() => setQuery(item.first)}
                            >
                                <div className="top">{index + 1}</div>
                                <div className="name">{item.first}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    const renderSongsList = () => {
        return (
            <SongsWrapper>
                {
                    songsList.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="info">
                                    <span>{item.name}</span>
                                    <span>
                                        {getName(item.artists)} - {item.album.name}
                                    </span>
                                </div>
                                
                            </li>
                        )   
                    })
                }
            </SongsWrapper>
        )
    }
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
            <SearchBox newQuery={query} handleQuery={handleQuery} />
            <ShortcutWrapper show={!query}>
                <HotWrapper >
                    <div className="title">热门搜索</div>
                    {renderHotList()}
                </HotWrapper>
            </ShortcutWrapper>
            <ShortcutWrapper show={query}>
                {renderSongsList()}
            </ShortcutWrapper>
            {enterLoading ? <Loading /> : null}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        hotList: state.search.hotList,
        songsList: state.search.songsList,
        enterLoading: state.search.enterLoading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHotListDispatch() {
            dispatch(getHotList())
        },
        getResultSongsListDispatch(data) {
            dispatch(getResultSongsList(data))
        },
        changeEnterLoadingDispatch(data) {
            dispatch(changeEnterLoading(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))