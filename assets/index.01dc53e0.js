import{R as v,i as b,_ as A,k as M,s as w,l as j,m as G,n as U,f as z,r as L,u as X,j as f,e as S,L as H}from"./index.8c1acd97.js";function O(n,i){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},O(n,i)}function $(n,i){n.prototype=Object.create(i.prototype),n.prototype.constructor=n,O(n,i)}function V(n,i){return n.classList?!!i&&n.classList.contains(i):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+i+" ")!==-1}function W(n,i){n.classList?n.classList.add(i):V(n,i)||(typeof n.className=="string"?n.className=n.className+" "+i:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+i))}function D(n,i){return n.replace(new RegExp("(^|\\s)"+i+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function F(n,i){n.classList?n.classList.remove(i):typeof n.className=="string"?n.className=D(n.className,i):n.setAttribute("class",D(n.className&&n.className.baseVal||"",i))}var y={disabled:!1},P=v.createContext(null),I=function(i){return i.scrollTop},k="unmounted",E="exited",g="entering",N="entered",R="exiting",h=function(n){$(i,n);function i(t,r){var e;e=n.call(this,t,r)||this;var a=r,s=a&&!a.isMounting?t.enter:t.appear,o;return e.appearStatus=null,t.in?s?(o=E,e.appearStatus=g):o=N:t.unmountOnExit||t.mountOnEnter?o=k:o=E,e.state={status:o},e.nextCallback=null,e}i.getDerivedStateFromProps=function(r,e){var a=r.in;return a&&e.status===k?{status:E}:null};var p=i.prototype;return p.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},p.componentDidUpdate=function(r){var e=null;if(r!==this.props){var a=this.state.status;this.props.in?a!==g&&a!==N&&(e=g):(a===g||a===N)&&(e=R)}this.updateStatus(!1,e)},p.componentWillUnmount=function(){this.cancelNextCallback()},p.getTimeouts=function(){var r=this.props.timeout,e,a,s;return e=a=s=r,r!=null&&typeof r!="number"&&(e=r.exit,a=r.enter,s=r.appear!==void 0?r.appear:a),{exit:e,enter:a,appear:s}},p.updateStatus=function(r,e){if(r===void 0&&(r=!1),e!==null)if(this.cancelNextCallback(),e===g){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this);a&&I(a)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:k})},p.performEnter=function(r){var e=this,a=this.props.enter,s=this.context?this.context.isMounting:r,o=this.props.nodeRef?[s]:[b.findDOMNode(this),s],l=o[0],c=o[1],u=this.getTimeouts(),d=s?u.appear:u.enter;if(!r&&!a||y.disabled){this.safeSetState({status:N},function(){e.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:g},function(){e.props.onEntering(l,c),e.onTransitionEnd(d,function(){e.safeSetState({status:N},function(){e.props.onEntered(l,c)})})})},p.performExit=function(){var r=this,e=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:b.findDOMNode(this);if(!e||y.disabled){this.safeSetState({status:E},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:R},function(){r.props.onExiting(s),r.onTransitionEnd(a.exit,function(){r.safeSetState({status:E},function(){r.props.onExited(s)})})})},p.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},p.safeSetState=function(r,e){e=this.setNextCallback(e),this.setState(r,e)},p.setNextCallback=function(r){var e=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,e.nextCallback=null,r(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},p.onTransitionEnd=function(r,e){this.setNextCallback(e);var a=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],l=o[0],c=o[1];this.props.addEndListener(l,c)}r!=null&&setTimeout(this.nextCallback,r)},p.render=function(){var r=this.state.status;if(r===k)return null;var e=this.props,a=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var s=A(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return v.createElement(P.Provider,{value:null},typeof a=="function"?a(r,s):v.cloneElement(v.Children.only(a),s))},i}(v.Component);h.contextType=P;h.propTypes={};function C(){}h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};h.UNMOUNTED=k;h.EXITED=E;h.ENTERING=g;h.ENTERED=N;h.EXITING=R;var q=h,K=function(i,p){return i&&p&&p.split(" ").forEach(function(t){return W(i,t)})},T=function(i,p){return i&&p&&p.split(" ").forEach(function(t){return F(i,t)})},_=function(n){$(i,n);function i(){for(var t,r=arguments.length,e=new Array(r),a=0;a<r;a++)e[a]=arguments[a];return t=n.call.apply(n,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(s,o){var l=t.resolveArguments(s,o),c=l[0],u=l[1];t.removeClasses(c,"exit"),t.addClass(c,u?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(s,o)},t.onEntering=function(s,o){var l=t.resolveArguments(s,o),c=l[0],u=l[1],d=u?"appear":"enter";t.addClass(c,d,"active"),t.props.onEntering&&t.props.onEntering(s,o)},t.onEntered=function(s,o){var l=t.resolveArguments(s,o),c=l[0],u=l[1],d=u?"appear":"enter";t.removeClasses(c,d),t.addClass(c,d,"done"),t.props.onEntered&&t.props.onEntered(s,o)},t.onExit=function(s){var o=t.resolveArguments(s),l=o[0];t.removeClasses(l,"appear"),t.removeClasses(l,"enter"),t.addClass(l,"exit","base"),t.props.onExit&&t.props.onExit(s)},t.onExiting=function(s){var o=t.resolveArguments(s),l=o[0];t.addClass(l,"exit","active"),t.props.onExiting&&t.props.onExiting(s)},t.onExited=function(s){var o=t.resolveArguments(s),l=o[0];t.removeClasses(l,"exit"),t.addClass(l,"exit","done"),t.props.onExited&&t.props.onExited(s)},t.resolveArguments=function(s,o){return t.props.nodeRef?[t.props.nodeRef.current,s]:[s,o]},t.getClassNames=function(s){var o=t.props.classNames,l=typeof o=="string",c=l&&o?o+"-":"",u=l?""+c+s:o[s],d=l?u+"-active":o[s+"Active"],x=l?u+"-done":o[s+"Done"];return{baseClassName:u,activeClassName:d,doneClassName:x}},t}var p=i.prototype;return p.addClass=function(r,e,a){var s=this.getClassNames(e)[a+"ClassName"],o=this.getClassNames("enter"),l=o.doneClassName;e==="appear"&&a==="done"&&l&&(s+=" "+l),a==="active"&&r&&I(r),s&&(this.appliedClasses[e][a]=s,K(r,s))},p.removeClasses=function(r,e){var a=this.appliedClasses[e],s=a.base,o=a.active,l=a.done;this.appliedClasses[e]={},s&&T(r,s),o&&T(r,o),l&&T(r,l)},p.render=function(){var r=this.props;r.classNames;var e=A(r,["classNames"]);return v.createElement(q,M({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},i}(v.Component);_.defaultProps={classNames:""};_.propTypes={};var B=_;const J=w.div`
    z-index: 99;
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 6rem;
    background-color: white;
    &.show-enter,&.show-appear {
        /* 初始状态 */
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.show-enter-active, &.show-apply-active {
        /* 进入之后的状态 */
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.show-exit {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
    &.show-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .suggest {
        width: 100%;
        padding-top: 2.5rem;
        padding-left: 0.5rem;
        font-weight: 700;
        font-size: 0.9rem;
        color: #333;
    }
    .hot {
        width: 100%;
        padding-left: 0.5rem;
        padding-top: 0.5rem;
        font-weight: 700;
        font-size: 0.9rem;
        color: #333;
    }
    .header {
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        background-color: white;
        padding: 0.25rem 0.5rem;
        z-index: 99;
        & > span {
            line-height: 1.5rem;
            color: black;
            font-size: 1rem;
            &.i {
                font-size: 25px;
            }
        }
    }
`,Q=w.ul`
    width: 100%;
    margin-top: 0.5rem;
    padding: 0 0.25rem;
    display: ${n=>n.suggestRank?"flex":""};
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background: white;
    width: 100%;
`,Y=w.li`
    background: rgb(98 119 192 / 4%);
    display: ${n=>n.tracks.length?"flex":""};
    margin: 0.5rem 0;
    /* border-bottom: 1px solid #666; */
    .img_wrapper {
        width: ${n=>n.tracks.length?"27vw":"28vw"};
        height: ${n=>n.tracks.length?"27vw":"28vw"};
        position: relative;
        img {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
    }
`,Z=w.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5rem 0.5rem;
    
`,tt=n=>({type:G,data:n}),et=n=>({type:U,data:n}),nt=()=>n=>{j().then(i=>{let p=i&&i.list;n(tt(p)),n(et(!1))})};function st(n){const{rankList:i,enterLoading:p}=n,{getRankListDispatch:t}=n,[r,e]=L.exports.useState(!1),a=X();L.exports.useEffect(()=>{t()},[]),L.exports.useEffect(()=>{e(!0)},[]);const s=()=>{e(!1)};let o=i.slice(0,3),l=i.slice(3);const c=(d,x)=>f(Q,{suggestRank:x,children:d.map(m=>S(Y,{tracks:m.tracks,children:[f("div",{className:"img_wrapper",children:f("img",{src:m.coverImgUrl,alt:""})}),u(m.tracks)]},m.id))}),u=d=>d.length?f(Z,{children:d.map((x,m)=>S("li",{children:[m+1,". ",x.first," - ",x.second]},m))}):null;return f(B,{in:r,timeout:300,appear:!0,classNames:"show",unmountOnExit:!0,onExited:()=>a(-1),children:S(J,{children:[S("div",{className:"header",children:[f("span",{children:f("i",{className:"fa fa-chevron-left",onClick:()=>s()})}),f("span",{className:"title",children:"\u6392\u884C\u699C"}),f("span",{onClick:()=>a("/search"),children:f("i",{className:"fa fa-search"})})]}),f("h1",{className:"suggest",children:"\u63A8\u8350"}),c(o),f("h1",{className:"hot",children:"\u70ED\u95E8"}),c(l,!0),p?f(H,{}):null]})})}const rt=n=>({rankList:n.rank.rankList,enterLoading:n.rank.enterLoading}),at=n=>({getRankListDispatch(){n(nt())}});var ot=z(rt,at)(v.memo(st));export{ot as default};
