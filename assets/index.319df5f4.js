import{g as v,C as w,a as S,b as N,c as C,s as d,r as a,d as E,j as s,e as l,f as D,R as z,u as H,h as R,L as k}from"./index.8c1acd97.js";const Q=e=>({type:w,data:e}),G=e=>({type:N,data:e}),y=e=>({type:C,data:e}),j=e=>t=>{S(e).then(n=>{console.log(n);let r=n.data.result.songs;console.log(r),t(G(r)),t(y(!1))}).catch(()=>{console.log("\u641C\u7D22\u7ED3\u679C\u51FA\u73B0\u9519\u8BEF")})},T=()=>e=>{v().then(t=>{let n=t.data.result.hots;e(Q(n))})},A=d.div`
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 6rem;
    background-color: white;
    &.fly-enter,&.fly-appear {
        /* 初始状态 */
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        /* 进入之后的状态 */
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.25rem 0.5rem;
        border-bottom: 1px solid #e5e5e5;
        background-color: white;
        z-index: 100;
        span {
            line-height: 1.5rem;
            font-size: 1rem;
        }
        .title {
            flex: 1;
            text-align: center;
            line-height: 1.5rem;
            color: black;
            font-size: 1rem;
            padding-right: 0.8rem;
        }
    }
`,x=d.div`
    position: absolute;
    top: 6rem;
    bottom: 0;
    width: 100%;
    display: ${e=>e.show?"":"none"};
`,W=d.div`
    .title {
        font-size: 18px;
        font-weight: bold;
        padding-left: 1.2rem;
        margin-bottom: 0.8rem;
    }
    li:first-child {
        color: #f84824;
    }
    li:nth-child(2) {
        color: #f47f1b;
    }
    li:nth-child(3) {
        color: #ffb11f;
    }
    .hotword {
        height: 2rem;
        width: 100%;
        padding: 0.5rem 1.2rem;
        font-size: 16px;
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        color: #a1a4b3;
    }
    .top {
        width: 1rem;
        text-align: center;
        font-size: 16px;
        line-height: 1rem;
        margin-right: 1.2rem;
        font-weight: bold;
    }
    .name {
        color: black;
    }
`,q=d.ul`
    padding-left: 1.5rem;
    z-index: 112;
    background-color: white;
   >li {
    display: flex;
    height: 3rem;
    align-items: center;
    .info {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        height: 100%;
        padding: 0.5rem 0;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #e5e5e5;
        >span:first-child{
            font-size: 16px;
            color: #333;
        }
        >span:last-child{
            margin-top: 0.2rem;
            font-size: 12px;
            color: #bba8a8;
        }
    }
   }
    
`,B=d.div`
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
  
`,F=e=>{const t=a.exports.useRef(null),[n,r]=a.exports.useState(""),{newQuery:c}=e,{handleQuery:h}=e;let u=a.exports.useMemo(()=>E(h,500),[h]);return a.exports.useEffect(()=>{t.current.focus()},[]),a.exports.useEffect(()=>{u(n)},[n]),a.exports.useEffect(()=>{let i=n;c!==n&&(i=c,t.current.value=c),r(i)},[c]),s(B,{children:l("div",{className:"search-box",children:[s("i",{className:"fa fa-search"}),s("input",{ref:t,placeholder:"\u97F3\u4E50/\u6B4C\u624B/\u62FC\u97F3",onChange:i=>{console.log(i);let p=i.target.value;r(p)}}),s("i",{className:"fa fa-close",style:n?{display:"block"}:{display:"none"},onClick:()=>{r(""),t.current.value="",t.current.focus()}})]})})},I=e=>{const[t,n]=a.exports.useState("");a.exports.useState(!1),console.log(t);const{hotList:r,songsList:c,enterLoading:h}=e,{getHotListDispatch:u,getResultSongsListDispatch:f,changeEnterLoadingDispatch:g}=e,m=H();a.exports.useEffect(()=>{r.length||u()},[]);const i=o=>{n(o),o&&(f(o),g(!0))},p=()=>s("ul",{children:r.map((o,L)=>l("li",{className:"hotword",onClick:()=>n(o.first),children:[s("div",{className:"top",children:L+1}),s("div",{className:"name",children:o.first})]},o.first))}),b=()=>s(q,{children:c.map(o=>s("li",{children:l("div",{className:"info",children:[s("span",{children:o.name}),l("span",{children:[R(o.artists)," - ",o.album.name]})]})},o.id))});return l(A,{children:[l("div",{className:"header",children:[s("span",{children:s("i",{className:"fa fa-chevron-left",onClick:()=>m(-1)})}),s("div",{className:"title",children:"\u641C\u7D22"})]}),s(F,{newQuery:t,handleQuery:i}),s(x,{show:!t,children:l(W,{children:[s("div",{className:"title",children:"\u70ED\u95E8\u641C\u7D22"}),p()]})}),s(x,{show:t,children:b()}),h?s(k,{}):null]})},O=e=>({hotList:e.search.hotList,songsList:e.search.songsList,enterLoading:e.search.enterLoading}),P=e=>({getHotListDispatch(){e(T())},getResultSongsListDispatch(t){e(j(t))},changeEnterLoadingDispatch(t){e(y(t))}});var M=D(O,P)(z.memo(I));export{M as default};
