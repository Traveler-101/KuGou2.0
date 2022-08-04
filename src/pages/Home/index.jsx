import React, { useEffect, useState } from 'react'
import Banners from './Banners'
import Recommend from './Recommend'
import IconList from './IconList'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'

function Home(props) {
    const { 
        bannerList, 
        recommendList, 
        enterLoading 
    } = props;
    const { getBannerDataDispatch, getRecommendDataDispatch } = props;
    useEffect(() => {
        getBannerDataDispatch()
        getRecommendDataDispatch()
    }, [])
    return (
        <>
            <Banners bannerList={bannerList}/>
            <IconList />
            <Recommend recommendList={recommendList} enterLoading={enterLoading}/>
            
            
        </>        
    )
}
const mapStateToProps = (state) => {
    return {
        enterLoading: state.home.enterLoading,
        bannerList: state.home.bannerList,
        recommendList: state.home.recommendList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionCreators.getBannerList());
        },
        getRecommendDataDispatch() {
            dispatch(actionCreators.getRecommendList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)