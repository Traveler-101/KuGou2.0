import React, { useRef, useState } from "react";
import { useMemo } from "react";
import { Wrapper } from "./style";
import { debounce } from "@/api/utils";
import { useEffect } from "react";

const SearchBox = (props) => {
  const queryRef = useRef(null);
  const [query, setQuery] = useState('');
  const { newQuery } = props;
  const { handleQuery } = props;
  let handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 500)
  }, [handleQuery]);
  
  useEffect(() => {
    queryRef.current.focus();
  }, [])
  useEffect(() => {
    handleQueryDebounce(query);
  }, [query])
  useEffect(() => {
    let curQuery = query;
    if(newQuery !== query){
      curQuery = newQuery;
      queryRef.current.value = newQuery;
    }
    setQuery(curQuery);
    // eslint-disable-next-line
  }, [newQuery]);
  const handleChange = (e) => {
    console.log(e)
    let val = e.target.value
    // console.log(val)
    setQuery(val)
  }
  const clearQuery = () => {
    setQuery('');
    queryRef.current.value = '';
    queryRef.current.focus();
  }
  const displayStyle = query ? {display: 'block'}: {display: 'none'};
  return (
    <Wrapper>
      <div className="search-box">
        <i className="fa fa-search"></i>
        <input ref={queryRef} placeholder="音乐/歌手/拼音" onChange={handleChange} />
        <i className="fa fa-close" style={displayStyle} onClick={clearQuery}></i> 
      </div>
    </Wrapper>
  );
};

export default SearchBox;
