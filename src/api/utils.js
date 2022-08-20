export const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
        clearTimeout(timer);
      }, delay);
    };
  };
  
export const filterIndex = rankList => {
    for (let i = 0; i < rankList.length; i++) {
        if (rankList[i].tracks.length && !rankList[i+1].tracks.length) {
            return i + 1
        }
    }
}

export const findIndex = (song, list) => {
  return list.findIndex(item => {
    return song.id === item.id;
  });
};

//处理歌手列表拼接歌手名字
export const getName = list => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

