import{g as xn,r as b,m as K,s as Ht,j as Yt}from"./app-90a17816.js";var Ba={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(i=r(i,a(s)))}return i}function a(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var s in i)e.call(i,s)&&i[s]&&(o=r(o,s));return o}function r(i,o){return o?i?i+" "+o:i+o:i}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Ba);var Br=Ba.exports;const Vr=xn(Br);function Qe(){return Qe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Qe.apply(this,arguments)}function Va(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Jn(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function Xr(t){var e=Gr(t,"string");return typeof e=="symbol"?e:String(e)}function Gr(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function qr(t,e,n){var a=b.useRef(t!==void 0),r=b.useState(e),i=r[0],o=r[1],s=t!==void 0,f=a.current;return a.current=s,!s&&f&&i!==e&&o(e),[s?t:i,b.useCallback(function(l){for(var c=arguments.length,u=new Array(c>1?c-1:0),m=1;m<c;m++)u[m-1]=arguments[m];n&&n.apply(void 0,[l].concat(u)),o(l)},[n])]}function Gf(t,e){return Object.keys(e).reduce(function(n,a){var r,i=n,o=i[Jn(a)],s=i[a],f=Va(i,[Jn(a),a].map(Xr)),l=e[a],c=qr(s,o,t[l]),u=c[0],m=c[1];return Qe({},f,(r={},r[a]=u,r[l]=m,r))},t)}function Je(t,e){return Je=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,r){return a.__proto__=r,a},Je(t,e)}function Kr(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Je(t,e)}const Zr=["xxl","xl","lg","md","sm","xs"],Qr="xs",Re=b.createContext({prefixes:{},breakpoints:Zr,minBreakpoint:Qr});function qf(t,e){const{prefixes:n}=b.useContext(Re);return t||n[e]||e}function Kf(){const{breakpoints:t}=b.useContext(Re);return t}function Zf(){const{minBreakpoint:t}=b.useContext(Re);return t}function Qf(){const{dir:t}=b.useContext(Re);return t==="rtl"}function wn(t){return t&&t.ownerDocument||document}function Jr(t){var e=wn(t);return e&&e.defaultView||window}function ti(t,e){return Jr(t).getComputedStyle(t,e)}var ei=/([A-Z])/g;function ni(t){return t.replace(ei,"-$1").toLowerCase()}var ai=/^ms-/;function me(t){return ni(t).replace(ai,"-ms-")}var ri=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function ii(t){return!!(t&&ri.test(t))}function Xa(t,e){var n="",a="";if(typeof e=="string")return t.style.getPropertyValue(me(e))||ti(t).getPropertyValue(me(e));Object.keys(e).forEach(function(r){var i=e[r];!i&&i!==0?t.style.removeProperty(me(r)):ii(r)?a+=r+"("+i+") ":n+=me(r)+": "+i+";"}),a&&(n+="transform: "+a+";"),t.style.cssText+=";"+n}var Ga={exports:{}},oi="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",si=oi,fi=si;function qa(){}function Ka(){}Ka.resetWarningCache=qa;var ci=function(){function t(a,r,i,o,s,f){if(f!==fi){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ka,resetWarningCache:qa};return n.PropTypes=n,n};Ga.exports=ci();var li=Ga.exports;const S=xn(li),ta={disabled:!1},Za=K.createContext(null);var ui=function(e){return e.scrollTop},Wt="unmounted",ht="exited",it="entering",bt="entered",tn="exiting",et=function(t){Kr(e,t);function e(a,r){var i;i=t.call(this,a,r)||this;var o=r,s=o&&!o.isMounting?a.enter:a.appear,f;return i.appearStatus=null,a.in?s?(f=ht,i.appearStatus=it):f=bt:a.unmountOnExit||a.mountOnEnter?f=Wt:f=ht,i.state={status:f},i.nextCallback=null,i}e.getDerivedStateFromProps=function(r,i){var o=r.in;return o&&i.status===Wt?{status:ht}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(r){var i=null;if(r!==this.props){var o=this.state.status;this.props.in?o!==it&&o!==bt&&(i=it):(o===it||o===bt)&&(i=tn)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var r=this.props.timeout,i,o,s;return i=o=s=r,r!=null&&typeof r!="number"&&(i=r.exit,o=r.enter,s=r.appear!==void 0?r.appear:o),{exit:i,enter:o,appear:s}},n.updateStatus=function(r,i){if(r===void 0&&(r=!1),i!==null)if(this.cancelNextCallback(),i===it){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Ht.findDOMNode(this);o&&ui(o)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ht&&this.setState({status:Wt})},n.performEnter=function(r){var i=this,o=this.props.enter,s=this.context?this.context.isMounting:r,f=this.props.nodeRef?[s]:[Ht.findDOMNode(this),s],l=f[0],c=f[1],u=this.getTimeouts(),m=s?u.appear:u.enter;if(!r&&!o||ta.disabled){this.safeSetState({status:bt},function(){i.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:it},function(){i.props.onEntering(l,c),i.onTransitionEnd(m,function(){i.safeSetState({status:bt},function(){i.props.onEntered(l,c)})})})},n.performExit=function(){var r=this,i=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:Ht.findDOMNode(this);if(!i||ta.disabled){this.safeSetState({status:ht},function(){r.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:tn},function(){r.props.onExiting(s),r.onTransitionEnd(o.exit,function(){r.safeSetState({status:ht},function(){r.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(r,i){i=this.setNextCallback(i),this.setState(r,i)},n.setNextCallback=function(r){var i=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,i.nextCallback=null,r(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(r,i){this.setNextCallback(i);var o=this.props.nodeRef?this.props.nodeRef.current:Ht.findDOMNode(this),s=r==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],l=f[0],c=f[1];this.props.addEndListener(l,c)}r!=null&&setTimeout(this.nextCallback,r)},n.render=function(){var r=this.state.status;if(r===Wt)return null;var i=this.props,o=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=Va(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return K.createElement(Za.Provider,{value:null},typeof o=="function"?o(r,s):K.cloneElement(K.Children.only(o),s))},e}(K.Component);et.contextType=Za;et.propTypes={};function St(){}et.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:St,onEntering:St,onEntered:St,onExit:St,onExiting:St,onExited:St};et.UNMOUNTED=Wt;et.EXITED=ht;et.ENTERING=it;et.ENTERED=bt;et.EXITING=tn;const di=et,kn=!!(typeof window<"u"&&window.document&&window.document.createElement);var en=!1,nn=!1;try{var Ye={get passive(){return en=!0},get once(){return nn=en=!0}};kn&&(window.addEventListener("test",Ye,Ye),window.removeEventListener("test",Ye,!0))}catch{}function mi(t,e,n,a){if(a&&typeof a!="boolean"&&!nn){var r=a.once,i=a.capture,o=n;!nn&&r&&(o=n.__once||function s(f){this.removeEventListener(e,s,i),n.call(this,f)},n.__once=o),t.addEventListener(e,o,en?a:i)}t.addEventListener(e,n,a)}function pi(t,e,n,a){var r=a&&typeof a!="boolean"?a.capture:a;t.removeEventListener(e,n,r),n.__once&&t.removeEventListener(e,n.__once,r)}function Ct(t,e,n,a){return mi(t,e,n,a),function(){pi(t,e,n,a)}}function vi(t,e,n,a){if(n===void 0&&(n=!1),a===void 0&&(a=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(e,n,a),t.dispatchEvent(r)}}function gi(t){var e=Xa(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function hi(t,e,n){n===void 0&&(n=5);var a=!1,r=setTimeout(function(){a||vi(t,"transitionend",!0)},e+n),i=Ct(t,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(r),i()}}function bi(t,e,n,a){n==null&&(n=gi(t)||0);var r=hi(t,n,a),i=Ct(t,"transitionend",e);return function(){r(),i()}}function ea(t,e){const n=Xa(t,e)||"",a=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*a}function yi(t,e){const n=ea(t,"transitionDuration"),a=ea(t,"transitionDelay"),r=bi(t,i=>{i.target===t&&(r(),e(i))},n+a)}function xi(t){t.offsetHeight}const na=t=>!t||typeof t=="function"?t:e=>{t.current=e};function wi(t,e){const n=na(t),a=na(e);return r=>{n&&n(r),a&&a(r)}}function On(t,e){return b.useMemo(()=>wi(t,e),[t,e])}function ki(t){return t&&"setState"in t?Ht.findDOMNode(t):t??null}const Oi=K.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:a,onExiting:r,onExited:i,addEndListener:o,children:s,childRef:f,...l},c)=>{const u=b.useRef(null),m=On(u,f),d=A=>{m(ki(A))},v=A=>C=>{A&&u.current&&A(u.current,C)},y=b.useCallback(v(t),[t]),p=b.useCallback(v(e),[e]),O=b.useCallback(v(n),[n]),x=b.useCallback(v(a),[a]),E=b.useCallback(v(r),[r]),w=b.useCallback(v(i),[i]),k=b.useCallback(v(o),[o]);return Yt.jsx(di,{ref:c,...l,onEnter:y,onEntered:O,onEntering:p,onExit:x,onExited:w,onExiting:E,addEndListener:k,nodeRef:u,children:typeof s=="function"?(A,C)=>s(A,{...C,ref:d}):K.cloneElement(s,{ref:d})})}),Ei=Oi;function Ai(t){const e=b.useRef(t);return b.useEffect(()=>{e.current=t},[t]),e}function Ce(t){const e=Ai(t);return b.useCallback(function(...n){return e.current&&e.current(...n)},[e])}function Jf(){return b.useState(null)}function Si(){const t=b.useRef(!0),e=b.useRef(()=>t.current);return b.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}const Ci=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",Pi=typeof document<"u",aa=Pi||Ci?b.useLayoutEffect:b.useEffect,Ti={[it]:"show",[bt]:"show"},Qa=b.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:a,...r},i)=>{const o={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...r},s=b.useCallback((f,l)=>{xi(f),a==null||a(f,l)},[a]);return Yt.jsx(Ei,{ref:i,addEndListener:yi,...o,onEnter:s,childRef:e.ref,children:(f,l)=>b.cloneElement(e,{...l,className:Vr("fade",t,e.props.className,Ti[f],n[f])})})});Qa.displayName="Fade";const tc=Qa;function Ni(t){const e=b.useRef(t);return e.current=t,e}function ec(t){const e=Ni(t);b.useEffect(()=>()=>e.current(),[])}var ra=Object.prototype.hasOwnProperty;function ia(t,e,n){for(n of t.keys())if(Bt(n,e))return n}function Bt(t,e){var n,a,r;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((a=t.length)===e.length)for(;a--&&Bt(t[a],e[a]););return a===-1}if(n===Set){if(t.size!==e.size)return!1;for(a of t)if(r=a,r&&typeof r=="object"&&(r=ia(e,r),!r)||!e.has(r))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(a of t)if(r=a[0],r&&typeof r=="object"&&(r=ia(e,r),!r)||!Bt(a[1],e.get(r)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((a=t.byteLength)===e.byteLength)for(;a--&&t.getInt8(a)===e.getInt8(a););return a===-1}if(ArrayBuffer.isView(t)){if((a=t.byteLength)===e.byteLength)for(;a--&&t[a]===e[a];);return a===-1}if(!n||typeof t=="object"){a=0;for(n in t)if(ra.call(t,n)&&++a&&!ra.call(e,n)||!(n in e)||!Bt(t[n],e[n]))return!1;return Object.keys(e).length===a}}return t!==t&&e!==e}function Mi(t){const e=Si();return[t[0],b.useCallback(n=>{if(e())return t[1](n)},[e,t[1]])]}var j="top",W="bottom",U="right",z="left",En="auto",ae=[j,W,U,z],Lt="start",Kt="end",Li="clippingParents",Ja="viewport",Ft="popper",Ri="reference",oa=ae.reduce(function(t,e){return t.concat([e+"-"+Lt,e+"-"+Kt])},[]),tr=[].concat(ae,[En]).reduce(function(t,e){return t.concat([e,e+"-"+Lt,e+"-"+Kt])},[]),Ii="beforeRead",_i="read",Di="afterRead",ji="beforeMain",zi="main",$i="afterMain",Fi="beforeWrite",Hi="write",Wi="afterWrite",Ui=[Ii,_i,Di,ji,zi,$i,Fi,Hi,Wi];function G(t){return t.split("-")[0]}function F(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function kt(t){var e=F(t).Element;return t instanceof e||t instanceof Element}function q(t){var e=F(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function An(t){if(typeof ShadowRoot>"u")return!1;var e=F(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var wt=Math.max,Pe=Math.min,Rt=Math.round;function an(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function er(){return!/^((?!chrome|android).)*safari/i.test(an())}function It(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var a=t.getBoundingClientRect(),r=1,i=1;e&&q(t)&&(r=t.offsetWidth>0&&Rt(a.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Rt(a.height)/t.offsetHeight||1);var o=kt(t)?F(t):window,s=o.visualViewport,f=!er()&&n,l=(a.left+(f&&s?s.offsetLeft:0))/r,c=(a.top+(f&&s?s.offsetTop:0))/i,u=a.width/r,m=a.height/i;return{width:u,height:m,top:c,right:l+u,bottom:c+m,left:l,x:l,y:c}}function Sn(t){var e=It(t),n=t.offsetWidth,a=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-a)<=1&&(a=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:a}}function nr(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&An(n)){var a=e;do{if(a&&t.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function st(t){return t?(t.nodeName||"").toLowerCase():null}function Z(t){return F(t).getComputedStyle(t)}function Yi(t){return["table","td","th"].indexOf(st(t))>=0}function ut(t){return((kt(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ie(t){return st(t)==="html"?t:t.assignedSlot||t.parentNode||(An(t)?t.host:null)||ut(t)}function sa(t){return!q(t)||Z(t).position==="fixed"?null:t.offsetParent}function Bi(t){var e=/firefox/i.test(an()),n=/Trident/i.test(an());if(n&&q(t)){var a=Z(t);if(a.position==="fixed")return null}var r=Ie(t);for(An(r)&&(r=r.host);q(r)&&["html","body"].indexOf(st(r))<0;){var i=Z(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function re(t){for(var e=F(t),n=sa(t);n&&Yi(n)&&Z(n).position==="static";)n=sa(n);return n&&(st(n)==="html"||st(n)==="body"&&Z(n).position==="static")?e:n||Bi(t)||e}function Cn(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Vt(t,e,n){return wt(t,Pe(e,n))}function Vi(t,e,n){var a=Vt(t,e,n);return a>n?n:a}function ar(){return{top:0,right:0,bottom:0,left:0}}function rr(t){return Object.assign({},ar(),t)}function ir(t,e){return e.reduce(function(n,a){return n[a]=t,n},{})}var Xi=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,rr(typeof e!="number"?e:ir(e,ae))};function Gi(t){var e,n=t.state,a=t.name,r=t.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,s=G(n.placement),f=Cn(s),l=[z,U].indexOf(s)>=0,c=l?"height":"width";if(!(!i||!o)){var u=Xi(r.padding,n),m=Sn(i),d=f==="y"?j:z,v=f==="y"?W:U,y=n.rects.reference[c]+n.rects.reference[f]-o[f]-n.rects.popper[c],p=o[f]-n.rects.reference[f],O=re(i),x=O?f==="y"?O.clientHeight||0:O.clientWidth||0:0,E=y/2-p/2,w=u[d],k=x-m[c]-u[v],A=x/2-m[c]/2+E,C=Vt(w,A,k),L=f;n.modifiersData[a]=(e={},e[L]=C,e.centerOffset=C-A,e)}}function qi(t){var e=t.state,n=t.options,a=n.element,r=a===void 0?"[data-popper-arrow]":a;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||nr(e.elements.popper,r)&&(e.elements.arrow=r))}const Ki={name:"arrow",enabled:!0,phase:"main",fn:Gi,effect:qi,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function _t(t){return t.split("-")[1]}var Zi={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Qi(t,e){var n=t.x,a=t.y,r=e.devicePixelRatio||1;return{x:Rt(n*r)/r||0,y:Rt(a*r)/r||0}}function fa(t){var e,n=t.popper,a=t.popperRect,r=t.placement,i=t.variation,o=t.offsets,s=t.position,f=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,u=t.isFixed,m=o.x,d=m===void 0?0:m,v=o.y,y=v===void 0?0:v,p=typeof c=="function"?c({x:d,y}):{x:d,y};d=p.x,y=p.y;var O=o.hasOwnProperty("x"),x=o.hasOwnProperty("y"),E=z,w=j,k=window;if(l){var A=re(n),C="clientHeight",L="clientWidth";if(A===F(n)&&(A=ut(n),Z(A).position!=="static"&&s==="absolute"&&(C="scrollHeight",L="scrollWidth")),A=A,r===j||(r===z||r===U)&&i===Kt){w=W;var P=u&&A===k&&k.visualViewport?k.visualViewport.height:A[C];y-=P-a.height,y*=f?1:-1}if(r===z||(r===j||r===W)&&i===Kt){E=U;var R=u&&A===k&&k.visualViewport?k.visualViewport.width:A[L];d-=R-a.width,d*=f?1:-1}}var _=Object.assign({position:s},l&&Zi),Y=c===!0?Qi({x:d,y},F(n)):{x:d,y};if(d=Y.x,y=Y.y,f){var D;return Object.assign({},_,(D={},D[w]=x?"0":"",D[E]=O?"0":"",D.transform=(k.devicePixelRatio||1)<=1?"translate("+d+"px, "+y+"px)":"translate3d("+d+"px, "+y+"px, 0)",D))}return Object.assign({},_,(e={},e[w]=x?y+"px":"",e[E]=O?d+"px":"",e.transform="",e))}function Ji(t){var e=t.state,n=t.options,a=n.gpuAcceleration,r=a===void 0?!0:a,i=n.adaptive,o=i===void 0?!0:i,s=n.roundOffsets,f=s===void 0?!0:s,l={placement:G(e.placement),variation:_t(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,fa(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:f})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,fa(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const to={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ji,data:{}};var pe={passive:!0};function eo(t){var e=t.state,n=t.instance,a=t.options,r=a.scroll,i=r===void 0?!0:r,o=a.resize,s=o===void 0?!0:o,f=F(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(c){c.addEventListener("scroll",n.update,pe)}),s&&f.addEventListener("resize",n.update,pe),function(){i&&l.forEach(function(c){c.removeEventListener("scroll",n.update,pe)}),s&&f.removeEventListener("resize",n.update,pe)}}const no={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:eo,data:{}};var ao={left:"right",right:"left",bottom:"top",top:"bottom"};function Ee(t){return t.replace(/left|right|bottom|top/g,function(e){return ao[e]})}var ro={start:"end",end:"start"};function ca(t){return t.replace(/start|end/g,function(e){return ro[e]})}function Pn(t){var e=F(t),n=e.pageXOffset,a=e.pageYOffset;return{scrollLeft:n,scrollTop:a}}function Tn(t){return It(ut(t)).left+Pn(t).scrollLeft}function io(t,e){var n=F(t),a=ut(t),r=n.visualViewport,i=a.clientWidth,o=a.clientHeight,s=0,f=0;if(r){i=r.width,o=r.height;var l=er();(l||!l&&e==="fixed")&&(s=r.offsetLeft,f=r.offsetTop)}return{width:i,height:o,x:s+Tn(t),y:f}}function oo(t){var e,n=ut(t),a=Pn(t),r=(e=t.ownerDocument)==null?void 0:e.body,i=wt(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=wt(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-a.scrollLeft+Tn(t),f=-a.scrollTop;return Z(r||n).direction==="rtl"&&(s+=wt(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:s,y:f}}function Nn(t){var e=Z(t),n=e.overflow,a=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+a)}function or(t){return["html","body","#document"].indexOf(st(t))>=0?t.ownerDocument.body:q(t)&&Nn(t)?t:or(Ie(t))}function Xt(t,e){var n;e===void 0&&(e=[]);var a=or(t),r=a===((n=t.ownerDocument)==null?void 0:n.body),i=F(a),o=r?[i].concat(i.visualViewport||[],Nn(a)?a:[]):a,s=e.concat(o);return r?s:s.concat(Xt(Ie(o)))}function rn(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function so(t,e){var n=It(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function la(t,e,n){return e===Ja?rn(io(t,n)):kt(e)?so(e,n):rn(oo(ut(t)))}function fo(t){var e=Xt(Ie(t)),n=["absolute","fixed"].indexOf(Z(t).position)>=0,a=n&&q(t)?re(t):t;return kt(a)?e.filter(function(r){return kt(r)&&nr(r,a)&&st(r)!=="body"}):[]}function co(t,e,n,a){var r=e==="clippingParents"?fo(t):[].concat(e),i=[].concat(r,[n]),o=i[0],s=i.reduce(function(f,l){var c=la(t,l,a);return f.top=wt(c.top,f.top),f.right=Pe(c.right,f.right),f.bottom=Pe(c.bottom,f.bottom),f.left=wt(c.left,f.left),f},la(t,o,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function sr(t){var e=t.reference,n=t.element,a=t.placement,r=a?G(a):null,i=a?_t(a):null,o=e.x+e.width/2-n.width/2,s=e.y+e.height/2-n.height/2,f;switch(r){case j:f={x:o,y:e.y-n.height};break;case W:f={x:o,y:e.y+e.height};break;case U:f={x:e.x+e.width,y:s};break;case z:f={x:e.x-n.width,y:s};break;default:f={x:e.x,y:e.y}}var l=r?Cn(r):null;if(l!=null){var c=l==="y"?"height":"width";switch(i){case Lt:f[l]=f[l]-(e[c]/2-n[c]/2);break;case Kt:f[l]=f[l]+(e[c]/2-n[c]/2);break}}return f}function Zt(t,e){e===void 0&&(e={});var n=e,a=n.placement,r=a===void 0?t.placement:a,i=n.strategy,o=i===void 0?t.strategy:i,s=n.boundary,f=s===void 0?Li:s,l=n.rootBoundary,c=l===void 0?Ja:l,u=n.elementContext,m=u===void 0?Ft:u,d=n.altBoundary,v=d===void 0?!1:d,y=n.padding,p=y===void 0?0:y,O=rr(typeof p!="number"?p:ir(p,ae)),x=m===Ft?Ri:Ft,E=t.rects.popper,w=t.elements[v?x:m],k=co(kt(w)?w:w.contextElement||ut(t.elements.popper),f,c,o),A=It(t.elements.reference),C=sr({reference:A,element:E,strategy:"absolute",placement:r}),L=rn(Object.assign({},E,C)),P=m===Ft?L:A,R={top:k.top-P.top+O.top,bottom:P.bottom-k.bottom+O.bottom,left:k.left-P.left+O.left,right:P.right-k.right+O.right},_=t.modifiersData.offset;if(m===Ft&&_){var Y=_[r];Object.keys(R).forEach(function(D){var dt=[U,W].indexOf(D)>=0?1:-1,mt=[j,W].indexOf(D)>=0?"y":"x";R[D]+=Y[mt]*dt})}return R}function lo(t,e){e===void 0&&(e={});var n=e,a=n.placement,r=n.boundary,i=n.rootBoundary,o=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,l=f===void 0?tr:f,c=_t(a),u=c?s?oa:oa.filter(function(v){return _t(v)===c}):ae,m=u.filter(function(v){return l.indexOf(v)>=0});m.length===0&&(m=u);var d=m.reduce(function(v,y){return v[y]=Zt(t,{placement:y,boundary:r,rootBoundary:i,padding:o})[G(y)],v},{});return Object.keys(d).sort(function(v,y){return d[v]-d[y]})}function uo(t){if(G(t)===En)return[];var e=Ee(t);return[ca(t),e,ca(e)]}function mo(t){var e=t.state,n=t.options,a=t.name;if(!e.modifiersData[a]._skip){for(var r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,s=o===void 0?!0:o,f=n.fallbackPlacements,l=n.padding,c=n.boundary,u=n.rootBoundary,m=n.altBoundary,d=n.flipVariations,v=d===void 0?!0:d,y=n.allowedAutoPlacements,p=e.options.placement,O=G(p),x=O===p,E=f||(x||!v?[Ee(p)]:uo(p)),w=[p].concat(E).reduce(function(At,at){return At.concat(G(at)===En?lo(e,{placement:at,boundary:c,rootBoundary:u,padding:l,flipVariations:v,allowedAutoPlacements:y}):at)},[]),k=e.rects.reference,A=e.rects.popper,C=new Map,L=!0,P=w[0],R=0;R<w.length;R++){var _=w[R],Y=G(_),D=_t(_)===Lt,dt=[j,W].indexOf(Y)>=0,mt=dt?"width":"height",$=Zt(e,{placement:_,boundary:c,rootBoundary:u,altBoundary:m,padding:l}),B=dt?D?U:z:D?W:j;k[mt]>A[mt]&&(B=Ee(B));var fe=Ee(B),pt=[];if(i&&pt.push($[Y]<=0),s&&pt.push($[B]<=0,$[fe]<=0),pt.every(function(At){return At})){P=_,L=!1;break}C.set(_,pt)}if(L)for(var ce=v?3:1,Fe=function(at){var $t=w.find(function(ue){var vt=C.get(ue);if(vt)return vt.slice(0,at).every(function(He){return He})});if($t)return P=$t,"break"},zt=ce;zt>0;zt--){var le=Fe(zt);if(le==="break")break}e.placement!==P&&(e.modifiersData[a]._skip=!0,e.placement=P,e.reset=!0)}}const po={name:"flip",enabled:!0,phase:"main",fn:mo,requiresIfExists:["offset"],data:{_skip:!1}};function ua(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function da(t){return[j,U,W,z].some(function(e){return t[e]>=0})}function vo(t){var e=t.state,n=t.name,a=e.rects.reference,r=e.rects.popper,i=e.modifiersData.preventOverflow,o=Zt(e,{elementContext:"reference"}),s=Zt(e,{altBoundary:!0}),f=ua(o,a),l=ua(s,r,i),c=da(f),u=da(l);e.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:u},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}const go={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:vo};function ho(t,e,n){var a=G(t),r=[z,j].indexOf(a)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=i[0],s=i[1];return o=o||0,s=(s||0)*r,[z,U].indexOf(a)>=0?{x:s,y:o}:{x:o,y:s}}function bo(t){var e=t.state,n=t.options,a=t.name,r=n.offset,i=r===void 0?[0,0]:r,o=tr.reduce(function(c,u){return c[u]=ho(u,e.rects,i),c},{}),s=o[e.placement],f=s.x,l=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=f,e.modifiersData.popperOffsets.y+=l),e.modifiersData[a]=o}const yo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:bo};function xo(t){var e=t.state,n=t.name;e.modifiersData[n]=sr({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const wo={name:"popperOffsets",enabled:!0,phase:"read",fn:xo,data:{}};function ko(t){return t==="x"?"y":"x"}function Oo(t){var e=t.state,n=t.options,a=t.name,r=n.mainAxis,i=r===void 0?!0:r,o=n.altAxis,s=o===void 0?!1:o,f=n.boundary,l=n.rootBoundary,c=n.altBoundary,u=n.padding,m=n.tether,d=m===void 0?!0:m,v=n.tetherOffset,y=v===void 0?0:v,p=Zt(e,{boundary:f,rootBoundary:l,padding:u,altBoundary:c}),O=G(e.placement),x=_t(e.placement),E=!x,w=Cn(O),k=ko(w),A=e.modifiersData.popperOffsets,C=e.rects.reference,L=e.rects.popper,P=typeof y=="function"?y(Object.assign({},e.rects,{placement:e.placement})):y,R=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),_=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Y={x:0,y:0};if(A){if(i){var D,dt=w==="y"?j:z,mt=w==="y"?W:U,$=w==="y"?"height":"width",B=A[w],fe=B+p[dt],pt=B-p[mt],ce=d?-L[$]/2:0,Fe=x===Lt?C[$]:L[$],zt=x===Lt?-L[$]:-C[$],le=e.elements.arrow,At=d&&le?Sn(le):{width:0,height:0},at=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ar(),$t=at[dt],ue=at[mt],vt=Vt(0,C[$],At[$]),He=E?C[$]/2-ce-vt-$t-R.mainAxis:Fe-vt-$t-R.mainAxis,$r=E?-C[$]/2+ce+vt+ue+R.mainAxis:zt+vt+ue+R.mainAxis,We=e.elements.arrow&&re(e.elements.arrow),Fr=We?w==="y"?We.clientTop||0:We.clientLeft||0:0,Yn=(D=_==null?void 0:_[w])!=null?D:0,Hr=B+He-Yn-Fr,Wr=B+$r-Yn,Bn=Vt(d?Pe(fe,Hr):fe,B,d?wt(pt,Wr):pt);A[w]=Bn,Y[w]=Bn-B}if(s){var Vn,Ur=w==="x"?j:z,Yr=w==="x"?W:U,gt=A[k],de=k==="y"?"height":"width",Xn=gt+p[Ur],Gn=gt-p[Yr],Ue=[j,z].indexOf(O)!==-1,qn=(Vn=_==null?void 0:_[k])!=null?Vn:0,Kn=Ue?Xn:gt-C[de]-L[de]-qn+R.altAxis,Zn=Ue?gt+C[de]+L[de]-qn-R.altAxis:Gn,Qn=d&&Ue?Vi(Kn,gt,Zn):Vt(d?Kn:Xn,gt,d?Zn:Gn);A[k]=Qn,Y[k]=Qn-gt}e.modifiersData[a]=Y}}const Eo={name:"preventOverflow",enabled:!0,phase:"main",fn:Oo,requiresIfExists:["offset"]};function Ao(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function So(t){return t===F(t)||!q(t)?Pn(t):Ao(t)}function Co(t){var e=t.getBoundingClientRect(),n=Rt(e.width)/t.offsetWidth||1,a=Rt(e.height)/t.offsetHeight||1;return n!==1||a!==1}function Po(t,e,n){n===void 0&&(n=!1);var a=q(e),r=q(e)&&Co(e),i=ut(e),o=It(t,r,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(a||!a&&!n)&&((st(e)!=="body"||Nn(i))&&(s=So(e)),q(e)?(f=It(e,!0),f.x+=e.clientLeft,f.y+=e.clientTop):i&&(f.x=Tn(i))),{x:o.left+s.scrollLeft-f.x,y:o.top+s.scrollTop-f.y,width:o.width,height:o.height}}function To(t){var e=new Map,n=new Set,a=[];t.forEach(function(i){e.set(i.name,i)});function r(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(s){if(!n.has(s)){var f=e.get(s);f&&r(f)}}),a.push(i)}return t.forEach(function(i){n.has(i.name)||r(i)}),a}function No(t){var e=To(t);return Ui.reduce(function(n,a){return n.concat(e.filter(function(r){return r.phase===a}))},[])}function Mo(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function Lo(t){var e=t.reduce(function(n,a){var r=n[a.name];return n[a.name]=r?Object.assign({},r,a,{options:Object.assign({},r.options,a.options),data:Object.assign({},r.data,a.data)}):a,n},{});return Object.keys(e).map(function(n){return e[n]})}var ma={placement:"bottom",modifiers:[],strategy:"absolute"};function pa(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function Ro(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,a=n===void 0?[]:n,r=e.defaultOptions,i=r===void 0?ma:r;return function(s,f,l){l===void 0&&(l=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ma,i),modifiersData:{},elements:{reference:s,popper:f},attributes:{},styles:{}},u=[],m=!1,d={state:c,setOptions:function(O){var x=typeof O=="function"?O(c.options):O;y(),c.options=Object.assign({},i,c.options,x),c.scrollParents={reference:kt(s)?Xt(s):s.contextElement?Xt(s.contextElement):[],popper:Xt(f)};var E=No(Lo([].concat(a,c.options.modifiers)));return c.orderedModifiers=E.filter(function(w){return w.enabled}),v(),d.update()},forceUpdate:function(){if(!m){var O=c.elements,x=O.reference,E=O.popper;if(pa(x,E)){c.rects={reference:Po(x,re(E),c.options.strategy==="fixed"),popper:Sn(E)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(R){return c.modifiersData[R.name]=Object.assign({},R.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var k=c.orderedModifiers[w],A=k.fn,C=k.options,L=C===void 0?{}:C,P=k.name;typeof A=="function"&&(c=A({state:c,options:L,name:P,instance:d})||c)}}}},update:Mo(function(){return new Promise(function(p){d.forceUpdate(),p(c)})}),destroy:function(){y(),m=!0}};if(!pa(s,f))return d;d.setOptions(l).then(function(p){!m&&l.onFirstUpdate&&l.onFirstUpdate(p)});function v(){c.orderedModifiers.forEach(function(p){var O=p.name,x=p.options,E=x===void 0?{}:x,w=p.effect;if(typeof w=="function"){var k=w({state:c,name:O,instance:d,options:E}),A=function(){};u.push(k||A)}})}function y(){u.forEach(function(p){return p()}),u=[]}return d}}const Io=Ro({defaultModifiers:[go,wo,to,no,yo,po,Eo,Ki]}),_o=["enabled","placement","strategy","modifiers"];function Do(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const jo={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},zo={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:t})=>()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const a=(e.getAttribute("aria-describedby")||"").split(",").filter(r=>r.trim()!==n.id);a.length?e.setAttribute("aria-describedby",a.join(",")):e.removeAttribute("aria-describedby")}},fn:({state:t})=>{var e;const{popper:n,reference:a}=t.elements,r=(e=n.getAttribute("role"))==null?void 0:e.toLowerCase();if(n.id&&r==="tooltip"&&"setAttribute"in a){const i=a.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(n.id)!==-1)return;a.setAttribute("aria-describedby",i?`${i},${n.id}`:n.id)}}},$o=[];function nc(t,e,n={}){let{enabled:a=!0,placement:r="bottom",strategy:i="absolute",modifiers:o=$o}=n,s=Do(n,_o);const f=b.useRef(o),l=b.useRef(),c=b.useCallback(()=>{var p;(p=l.current)==null||p.update()},[]),u=b.useCallback(()=>{var p;(p=l.current)==null||p.forceUpdate()},[]),[m,d]=Mi(b.useState({placement:r,update:c,forceUpdate:u,attributes:{},styles:{popper:{},arrow:{}}})),v=b.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:p})=>{const O={},x={};Object.keys(p.elements).forEach(E=>{O[E]=p.styles[E],x[E]=p.attributes[E]}),d({state:p,styles:O,attributes:x,update:c,forceUpdate:u,placement:p.placement})}}),[c,u,d]),y=b.useMemo(()=>(Bt(f.current,o)||(f.current=o),f.current),[o]);return b.useEffect(()=>{!l.current||!a||l.current.setOptions({placement:r,strategy:i,modifiers:[...y,v,jo]})},[i,r,v,a,y]),b.useEffect(()=>{if(!(!a||t==null||e==null))return l.current=Io(t,e,Object.assign({},s,{placement:r,strategy:i,modifiers:[...y,zo,v]})),()=>{l.current!=null&&(l.current.destroy(),l.current=void 0,d(p=>Object.assign({},p,{attributes:{},styles:{popper:{}}})))}},[a,t,e]),m}function va(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}var Fo=function(){},Ho=Fo;const Wo=xn(Ho),ga=()=>{};function Uo(t){return t.button===0}function Yo(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Be=t=>t&&("current"in t?t.current:t),ha={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function ac(t,e=ga,{disabled:n,clickTrigger:a="click"}={}){const r=b.useRef(!1),i=b.useRef(!1),o=b.useCallback(l=>{const c=Be(t);Wo(!!c,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),r.current=!c||Yo(l)||!Uo(l)||!!va(c,l.target)||i.current,i.current=!1},[t]),s=Ce(l=>{const c=Be(t);c&&va(c,l.target)&&(i.current=!0)}),f=Ce(l=>{r.current||e(l)});b.useEffect(()=>{var l,c;if(n||t==null)return;const u=wn(Be(t)),m=u.defaultView||window;let d=(l=m.event)!=null?l:(c=m.parent)==null?void 0:c.event,v=null;ha[a]&&(v=Ct(u,ha[a],s,!0));const y=Ct(u,a,o,!0),p=Ct(u,a,x=>{if(x===d){d=void 0;return}f(x)});let O=[];return"ontouchstart"in u.documentElement&&(O=[].slice.call(u.body.children).map(x=>Ct(x,"mousemove",ga))),()=>{v==null||v(),y(),p(),O.forEach(x=>x())}},[t,n,a,o,s,f])}function Bo(t){const e={};return Array.isArray(t)?(t==null||t.forEach(n=>{e[n.name]=n}),e):t||e}function Vo(t={}){return Array.isArray(t)?t:Object.keys(t).map(e=>(t[e].name=e,t[e]))}function rc({enabled:t,enableEvents:e,placement:n,flip:a,offset:r,fixed:i,containerPadding:o,arrowElement:s,popperConfig:f={}}){var l,c,u,m,d;const v=Bo(f.modifiers);return Object.assign({},f,{placement:n,enabled:t,strategy:i?"fixed":f.strategy,modifiers:Vo(Object.assign({},v,{eventListeners:{enabled:e,options:(l=v.eventListeners)==null?void 0:l.options},preventOverflow:Object.assign({},v.preventOverflow,{options:o?Object.assign({padding:o},(c=v.preventOverflow)==null?void 0:c.options):(u=v.preventOverflow)==null?void 0:u.options}),offset:{options:Object.assign({offset:r},(m=v.offset)==null?void 0:m.options)},arrow:Object.assign({},v.arrow,{enabled:!!s,options:Object.assign({},(d=v.arrow)==null?void 0:d.options,{element:s})}),flip:Object.assign({enabled:!!a},v.flip)}))})}const fr=b.createContext(kn?window:void 0);fr.Provider;function Xo(){return b.useContext(fr)}const Ve=(t,e)=>kn?t==null?(e||wn()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function ic(t,e){const n=Xo(),[a,r]=b.useState(()=>Ve(t,n==null?void 0:n.document));if(!a){const i=Ve(t);i&&r(i)}return b.useEffect(()=>{e&&a&&e(a)},[e,a]),b.useEffect(()=>{const i=Ve(t);i!==a&&r(i)},[t,a]),a}function Go({children:t,in:e,onExited:n,mountOnEnter:a,unmountOnExit:r}){const i=b.useRef(null),o=b.useRef(e),s=Ce(n);b.useEffect(()=>{e?o.current=!0:s(i.current)},[e,s]);const f=On(i,t.ref),l=b.cloneElement(t,{ref:f});return e?l:r||!o.current&&a?null:l}function qo({in:t,onTransition:e}){const n=b.useRef(null),a=b.useRef(!0),r=Ce(e);return aa(()=>{if(!n.current)return;let i=!1;return r({in:t,element:n.current,initial:a.current,isStale:()=>i}),()=>{i=!0}},[t,r]),aa(()=>(a.current=!1,()=>{a.current=!0}),[]),n}function Ko({children:t,in:e,onExited:n,onEntered:a,transition:r}){const[i,o]=b.useState(!e);e&&i&&o(!1);const s=qo({in:!!e,onTransition:l=>{const c=()=>{l.isStale()||(l.in?a==null||a(l.element,l.initial):(o(!0),n==null||n(l.element)))};Promise.resolve(r(l)).then(c,u=>{throw l.in||o(!0),u})}}),f=On(s,t.ref);return i&&!e?null:b.cloneElement(t,{ref:f})}function oc(t,e,n){return t?Yt.jsx(t,Object.assign({},n)):e?Yt.jsx(Ko,Object.assign({},n,{transition:e})):Yt.jsx(Go,Object.assign({},n))}function sc(t){return t.code==="Escape"||t.keyCode===27}function fc(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}var Zo={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},cc=Zo,lc={prefix:"fas",iconName:"motorcycle",icon:[640,512,[127949],"f21c","M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H459.6c-7.5 0-14.7 2.6-20.5 7.4L391.7 78.9l-14-26c-7-12.9-20.5-21-35.2-21H280zM462.7 311.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},uc={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},Qo={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},dc=Qo,mc={prefix:"fas",iconName:"bicycle",icon:[640,512,[128690],"f206","M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"]},pc={prefix:"fas",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]},vc={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},gc={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},hc={prefix:"fas",iconName:"person-skiing",icon:[512,512,[9975,"skiing"],"f7c9","M380.7 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM2.7 268.9c6.1-11.8 20.6-16.3 32.4-10.2L232.7 361.3l46.2-69.2-75.1-75.1c-14.6-14.6-20.4-33.9-18.4-52.1l108.8 52 39.3 39.3c16.2 16.2 18.7 41.5 6 60.6L289.8 391l128.7 66.8c13.6 7.1 29.8 7.2 43.6 .3l15.2-7.6c11.9-5.9 26.3-1.1 32.2 10.7s1.1 26.3-10.7 32.2l-15.2 7.6c-27.5 13.7-59.9 13.5-87.2-.7L12.9 301.3C1.2 295.2-3.4 280.7 2.7 268.9zM118.9 65.6L137 74.2l8.7-17.4c4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5l-8.5 16.9 54.7 26.2c1.5-.7 3.1-1.4 4.7-2.1l83.4-33.4c34.2-13.7 72.8 4.2 84.5 39.2l17.1 51.2 52.1 26.1c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-58.1-29c-11.4-5.7-20-15.7-24.1-27.8l-5.8-17.3-27.3 12.1-6.8 3-6.7-3.2L151.5 116.7l-9.2 18.4c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l9-18-17.6-8.4c-8-3.8-11.3-13.4-7.5-21.3s13.4-11.3 21.3-7.5z"]},bc={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]},yc={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},xc={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},wc={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},kc={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Oc={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Jo={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ec=Jo,Ac={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Sc={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Cc={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Pc={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]},Tc={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};function ba(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ba(Object(n),!0).forEach(function(a){I(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ba(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Te(t){"@babel/helpers - typeof";return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Te(t)}function ts(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ya(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function es(t,e,n){return e&&ya(t.prototype,e),n&&ya(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Mn(t,e){return as(t)||is(t,e)||cr(t,e)||ss()}function ie(t){return ns(t)||rs(t)||cr(t)||os()}function ns(t){if(Array.isArray(t))return on(t)}function as(t){if(Array.isArray(t))return t}function rs(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function is(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function cr(t,e){if(t){if(typeof t=="string")return on(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return on(t,e)}}function on(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function os(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ss(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xa=function(){},Ln={},lr={},ur=null,dr={mark:xa,measure:xa};try{typeof window<"u"&&(Ln=window),typeof document<"u"&&(lr=document),typeof MutationObserver<"u"&&(ur=MutationObserver),typeof performance<"u"&&(dr=performance)}catch{}var fs=Ln.navigator||{},wa=fs.userAgent,ka=wa===void 0?"":wa,ft=Ln,N=lr,Oa=ur,ve=dr;ft.document;var nt=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",mr=~ka.indexOf("MSIE")||~ka.indexOf("Trident/"),ge,he,be,ye,xe,Q="___FONT_AWESOME___",sn=16,pr="fa",vr="svg-inline--fa",Ot="data-fa-i2svg",fn="data-fa-pseudo-element",cs="data-fa-pseudo-element-pending",Rn="data-prefix",In="data-icon",Ea="fontawesome-i2svg",ls="async",us=["HTML","HEAD","STYLE","SCRIPT"],gr=function(){try{return!0}catch{return!1}}(),T="classic",M="sharp",_n=[T,M];function oe(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[T]}})}var Qt=oe((ge={},I(ge,T,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),I(ge,M,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ge)),Jt=oe((he={},I(he,T,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),I(he,M,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),he)),te=oe((be={},I(be,T,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),I(be,M,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),be)),ds=oe((ye={},I(ye,T,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),I(ye,M,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ye)),ms=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,hr="fa-layers-text",ps=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vs=oe((xe={},I(xe,T,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),I(xe,M,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xe)),br=[1,2,3,4,5,6,7,8,9,10],gs=br.concat([11,12,13,14,15,16,17,18,19,20]),hs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ee=new Set;Object.keys(Jt[T]).map(ee.add.bind(ee));Object.keys(Jt[M]).map(ee.add.bind(ee));var bs=[].concat(_n,ie(ee),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yt.GROUP,yt.SWAP_OPACITY,yt.PRIMARY,yt.SECONDARY]).concat(br.map(function(t){return"".concat(t,"x")})).concat(gs.map(function(t){return"w-".concat(t)})),Gt=ft.FontAwesomeConfig||{};function ys(t){var e=N.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xs(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(N&&typeof N.querySelector=="function"){var ws=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ws.forEach(function(t){var e=Mn(t,2),n=e[0],a=e[1],r=xs(ys(n));r!=null&&(Gt[a]=r)})}var yr={styleDefault:"solid",familyDefault:"classic",cssPrefix:pr,replacementClass:vr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gt.familyPrefix&&(Gt.cssPrefix=Gt.familyPrefix);var Dt=g(g({},yr),Gt);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var h={};Object.keys(yr).forEach(function(t){Object.defineProperty(h,t,{enumerable:!0,set:function(n){Dt[t]=n,qt.forEach(function(a){return a(h)})},get:function(){return Dt[t]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(e){Dt.cssPrefix=e,qt.forEach(function(n){return n(h)})},get:function(){return Dt.cssPrefix}});ft.FontAwesomeConfig=h;var qt=[];function ks(t){return qt.push(t),function(){qt.splice(qt.indexOf(t),1)}}var rt=sn,X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Os(t){if(!(!t||!nt)){var e=N.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=N.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return N.head.insertBefore(e,a),t}}var Es="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ne(){for(var t=12,e="";t-- >0;)e+=Es[Math.random()*62|0];return e}function jt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Dn(t){return t.classList?jt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function xr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function As(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(xr(t[n]),'" ')},"").trim()}function _e(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function jn(t){return t.size!==X.size||t.x!==X.x||t.y!==X.y||t.rotate!==X.rotate||t.flipX||t.flipY}function Ss(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Cs(t){var e=t.transform,n=t.width,a=n===void 0?sn:n,r=t.height,i=r===void 0?sn:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&mr?f+="translate(".concat(e.x/rt-a/2,"em, ").concat(e.y/rt-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/rt,"em), calc(-50% + ").concat(e.y/rt,"em)) "):f+="translate(".concat(e.x/rt,"em, ").concat(e.y/rt,"em) "),f+="scale(".concat(e.size/rt*(e.flipX?-1:1),", ").concat(e.size/rt*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Ps=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wr(){var t=pr,e=vr,n=h.cssPrefix,a=h.replacementClass,r=Ps;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Aa=!1;function Xe(){h.autoAddCss&&!Aa&&(Os(wr()),Aa=!0)}var Ts={mixout:function(){return{dom:{css:wr,insertCss:Xe}}},hooks:function(){return{beforeDOMElementCreation:function(){Xe()},beforeI2svg:function(){Xe()}}}},J=ft||{};J[Q]||(J[Q]={});J[Q].styles||(J[Q].styles={});J[Q].hooks||(J[Q].hooks={});J[Q].shims||(J[Q].shims=[]);var V=J[Q],kr=[],Ns=function t(){N.removeEventListener("DOMContentLoaded",t),Ne=1,kr.map(function(e){return e()})},Ne=!1;nt&&(Ne=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Ne||N.addEventListener("DOMContentLoaded",Ns));function Ms(t){nt&&(Ne?setTimeout(t,0):kr.push(t))}function se(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?xr(t):"<".concat(e," ").concat(As(a),">").concat(i.map(se).join(""),"</").concat(e,">")}function Sa(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ls=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Ge=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Ls(n,r):n,f,l,c;for(a===void 0?(f=1,c=e[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,e[l],l,e);return c};function Rs(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function cn(t){var e=Rs(t);return e.length===1?e[0].toString(16):null}function Is(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ca(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function ln(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ca(e);typeof V.hooks.addPack=="function"&&!r?V.hooks.addPack(t,Ca(e)):V.styles[t]=g(g({},V.styles[t]||{}),i),t==="fas"&&ln("fa",e)}var we,ke,Oe,Pt=V.styles,_s=V.shims,Ds=(we={},I(we,T,Object.values(te[T])),I(we,M,Object.values(te[M])),we),zn=null,Or={},Er={},Ar={},Sr={},Cr={},js=(ke={},I(ke,T,Object.keys(Qt[T])),I(ke,M,Object.keys(Qt[M])),ke);function zs(t){return~bs.indexOf(t)}function $s(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!zs(r)?r:null}var Pr=function(){var e=function(i){return Ge(Pt,function(o,s,f){return o[f]=Ge(s,i,{}),o},{})};Or=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Er=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Cr=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in Pt||h.autoFetchSvg,a=Ge(_s,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Ar=a.names,Sr=a.unicodes,zn=De(h.styleDefault,{family:h.familyDefault})};ks(function(t){zn=De(t.styleDefault,{family:h.familyDefault})});Pr();function $n(t,e){return(Or[t]||{})[e]}function Fs(t,e){return(Er[t]||{})[e]}function xt(t,e){return(Cr[t]||{})[e]}function Tr(t){return Ar[t]||{prefix:null,iconName:null}}function Hs(t){var e=Sr[t],n=$n("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ct(){return zn}var Fn=function(){return{prefix:null,iconName:null,rest:[]}};function De(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?T:n,r=Qt[a][t],i=Jt[a][t]||Jt[a][r],o=t in V.styles?t:null;return i||o||null}var Pa=(Oe={},I(Oe,T,Object.keys(te[T])),I(Oe,M,Object.keys(te[M])),Oe);function je(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},I(e,T,"".concat(h.cssPrefix,"-").concat(T)),I(e,M,"".concat(h.cssPrefix,"-").concat(M)),e),o=null,s=T;(t.includes(i[T])||t.some(function(l){return Pa[T].includes(l)}))&&(s=T),(t.includes(i[M])||t.some(function(l){return Pa[M].includes(l)}))&&(s=M);var f=t.reduce(function(l,c){var u=$s(h.cssPrefix,c);if(Pt[c]?(c=Ds[s].includes(c)?ds[s][c]:c,o=c,l.prefix=c):js[s].indexOf(c)>-1?(o=c,l.prefix=De(c,{family:s})):u?l.iconName=u:c!==h.replacementClass&&c!==i[T]&&c!==i[M]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var m=o==="fa"?Tr(l.iconName):{},d=xt(l.prefix,l.iconName);m.prefix&&(o=null),l.iconName=m.iconName||d||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!Pt.far&&Pt.fas&&!h.autoFetchSvg&&(l.prefix="fas")}return l},Fn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===M&&(Pt.fass||h.autoFetchSvg)&&(f.prefix="fass",f.iconName=xt(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=ct()||"fas"),f}var Ws=function(){function t(){ts(this,t),this.definitions={}}return es(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=g(g({},n.definitions[s]||{}),o[s]),ln(s,o[s]);var f=te[T][s];f&&ln(f,o[s]),Pr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=l)}),n[s][f]=l}),n}}]),t}(),Ta=[],Tt={},Mt={},Us=Object.keys(Mt);function Ys(t,e){var n=e.mixoutsTo;return Ta=t,Tt={},Object.keys(Mt).forEach(function(a){Us.indexOf(a)===-1&&delete Mt[a]}),Ta.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Te(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Tt[o]||(Tt[o]=[]),Tt[o].push(i[o])})}a.provides&&a.provides(Mt)}),n}function un(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Tt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function Et(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Tt[t]||[];r.forEach(function(i){i.apply(null,n)})}function tt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Mt[t]?Mt[t].apply(null,e):void 0}function dn(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ct();if(e)return e=xt(n,e)||e,Sa(Nr.definitions,n,e)||Sa(V.styles,n,e)}var Nr=new Ws,Bs=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,Et("noAuto")},Vs={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?(Et("beforeI2svg",e),tt("pseudoElements2svg",e),tt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,Ms(function(){Gs({autoReplaceSvgRoot:n}),Et("watch",e)})}},Xs={icon:function(e){if(e===null)return null;if(Te(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:xt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=De(e[0]);return{prefix:a,iconName:xt(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(h.cssPrefix,"-"))>-1||e.match(ms))){var r=je(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||ct(),iconName:xt(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=ct();return{prefix:i,iconName:xt(i,e)||e}}}},H={noAuto:Bs,config:h,dom:Vs,parse:Xs,library:Nr,findIconDefinition:dn,toHtml:se},Gs=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?N:n;(Object.keys(V.styles).length>0||h.autoFetchSvg)&&nt&&h.autoReplaceSvg&&H.dom.i2svg({node:a})};function ze(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return se(a)})}}),Object.defineProperty(t,"node",{get:function(){if(nt){var a=N.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function qs(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(jn(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=_e(g(g({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ks(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(h.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},r),{},{id:o}),children:a}]}]}function Hn(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,u=t.extra,m=t.watchable,d=m===void 0?!1:m,v=a.found?a:n,y=v.width,p=v.height,O=r==="fak",x=[h.replacementClass,i?"".concat(h.cssPrefix,"-").concat(i):""].filter(function(P){return u.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(u.classes).join(" "),E={children:[],attributes:g(g({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(p)})},w=O&&!~u.classes.indexOf("fa-fw")?{width:"".concat(y/p*16*.0625,"em")}:{};d&&(E.attributes[Ot]=""),f&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||ne())},children:[f]}),delete E.attributes.title);var k=g(g({},E),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:g(g({},w),u.styles)}),A=a.found&&n.found?tt("generateAbstractMask",k)||{children:[],attributes:{}}:tt("generateAbstractIcon",k)||{children:[],attributes:{}},C=A.children,L=A.attributes;return k.children=C,k.attributes=L,s?Ks(k):qs(k)}function Na(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=g(g(g({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[Ot]="");var c=g({},o.styles);jn(r)&&(c.transform=Cs({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var u=_e(c);u.length>0&&(l.style=u);var m=[];return m.push({tag:"span",attributes:l,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Zs(t){var e=t.content,n=t.title,a=t.extra,r=g(g(g({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=_e(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qe=V.styles;function mn(t){var e=t[0],n=t[1],a=t.slice(4),r=Mn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(yt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(yt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(yt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Qs={found:!1,width:512,height:512};function Js(t,e){!gr&&!h.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function pn(t,e){var n=e;return e==="fa"&&h.styleDefault!==null&&(e=ct()),new Promise(function(a,r){if(tt("missingIconAbstract"),n==="fa"){var i=Tr(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&qe[e]&&qe[e][t]){var o=qe[e][t];return a(mn(o))}Js(t,e),a(g(g({},Qs),{},{icon:h.showMissingIcons&&t?tt("missingIconAbstract")||{}:{}}))})}var Ma=function(){},vn=h.measurePerformance&&ve&&ve.mark&&ve.measure?ve:{mark:Ma,measure:Ma},Ut='FA "6.5.1"',tf=function(e){return vn.mark("".concat(Ut," ").concat(e," begins")),function(){return Mr(e)}},Mr=function(e){vn.mark("".concat(Ut," ").concat(e," ends")),vn.measure("".concat(Ut," ").concat(e),"".concat(Ut," ").concat(e," begins"),"".concat(Ut," ").concat(e," ends"))},Wn={begin:tf,end:Mr},Ae=function(){};function La(t){var e=t.getAttribute?t.getAttribute(Ot):null;return typeof e=="string"}function ef(t){var e=t.getAttribute?t.getAttribute(Rn):null,n=t.getAttribute?t.getAttribute(In):null;return e&&n}function nf(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(h.replacementClass)}function af(){if(h.autoReplaceSvg===!0)return Se.replace;var t=Se[h.autoReplaceSvg];return t||Se.replace}function rf(t){return N.createElementNS("http://www.w3.org/2000/svg",t)}function of(t){return N.createElement(t)}function Lr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?rf:of:n;if(typeof t=="string")return N.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Lr(o,{ceFn:a}))}),r}function sf(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Se={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Lr(r),n)}),n.getAttribute(Ot)===null&&h.keepOriginalSource){var a=N.createComment(sf(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Dn(n).indexOf(h.replacementClass))return Se.replace(e);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===h.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return se(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function Ra(t){t()}function Rr(t,e){var n=typeof e=="function"?e:Ae;if(t.length===0)n();else{var a=Ra;h.mutateApproach===ls&&(a=ft.requestAnimationFrame||Ra),a(function(){var r=af(),i=Wn.begin("mutate");t.map(r),i(),n()})}}var Un=!1;function Ir(){Un=!0}function gn(){Un=!1}var Me=null;function Ia(t){if(Oa&&h.observeMutations){var e=t.treeCallback,n=e===void 0?Ae:e,a=t.nodeCallback,r=a===void 0?Ae:a,i=t.pseudoElementsCallback,o=i===void 0?Ae:i,s=t.observeMutationsRoot,f=s===void 0?N:s;Me=new Oa(function(l){if(!Un){var c=ct();jt(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!La(u.addedNodes[0])&&(h.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&h.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&La(u.target)&&~hs.indexOf(u.attributeName))if(u.attributeName==="class"&&ef(u.target)){var m=je(Dn(u.target)),d=m.prefix,v=m.iconName;u.target.setAttribute(Rn,d||c),v&&u.target.setAttribute(In,v)}else nf(u.target)&&r(u.target)})}}),nt&&Me.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ff(){Me&&Me.disconnect()}function cf(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function lf(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=je(Dn(t));return r.prefix||(r.prefix=ct()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Fs(r.prefix,t.innerText)||$n(r.prefix,cn(t.innerText))),!r.iconName&&h.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function uf(t){var e=jt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return h.autoA11y&&(n?e["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(a||ne()):(e["aria-hidden"]="true",e.focusable="false")),e}function df(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _a(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=lf(t),a=n.iconName,r=n.prefix,i=n.rest,o=uf(t),s=un("parseNodeAttributes",{},t),f=e.styleParser?cf(t):[];return g({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:X,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var mf=V.styles;function _r(t){var e=h.autoReplaceSvg==="nest"?_a(t,{styleParser:!1}):_a(t);return~e.extra.classes.indexOf(hr)?tt("generateLayersText",t,e):tt("generateSvgReplacementMutation",t,e)}var lt=new Set;_n.map(function(t){lt.add("fa-".concat(t))});Object.keys(Qt[T]).map(lt.add.bind(lt));Object.keys(Qt[M]).map(lt.add.bind(lt));lt=ie(lt);function Da(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=N.documentElement.classList,a=function(u){return n.add("".concat(Ea,"-").concat(u))},r=function(u){return n.remove("".concat(Ea,"-").concat(u))},i=h.autoFetchSvg?lt:_n.map(function(c){return"fa-".concat(c)}).concat(Object.keys(mf));i.includes("fa")||i.push("fa");var o=[".".concat(hr,":not([").concat(Ot,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=jt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Wn.begin("onTree"),l=s.reduce(function(c,u){try{var m=_r(u);m&&c.push(m)}catch(d){gr||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise(function(c,u){Promise.all(l).then(function(m){Rr(m,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(m){f(),u(m)})})}function pf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_r(t).then(function(n){n&&Rr([n],e)})}function vf(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:dn(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:dn(r||{})),t(a,g(g({},n),{},{mask:r}))}}var gf=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?X:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,u=n.title,m=u===void 0?null:u,d=n.titleId,v=d===void 0?null:d,y=n.classes,p=y===void 0?[]:y,O=n.attributes,x=O===void 0?{}:O,E=n.styles,w=E===void 0?{}:E;if(e){var k=e.prefix,A=e.iconName,C=e.icon;return ze(g({type:"icon"},e),function(){return Et("beforeDOMElementCreation",{iconDefinition:e,params:n}),h.autoA11y&&(m?x["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(v||ne()):(x["aria-hidden"]="true",x.focusable="false")),Hn({icons:{main:mn(C),mask:f?mn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:A,transform:g(g({},X),r),symbol:o,title:m,maskId:c,titleId:v,extra:{attributes:x,styles:w,classes:p}})})}},hf={mixout:function(){return{icon:vf(gf)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Da,n.nodeCallback=pf,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?N:a,i=n.callback,o=i===void 0?function(){}:i;return Da(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,u=a.maskId,m=a.extra;return new Promise(function(d,v){Promise.all([pn(r,s),c.iconName?pn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var p=Mn(y,2),O=p[0],x=p[1];d([n,Hn({icons:{main:O,mask:x},prefix:s,iconName:r,transform:f,symbol:l,maskId:u,title:i,titleId:o,extra:m,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=_e(s);f.length>0&&(r.style=f);var l;return jn(o)&&(l=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},bf={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return ze({type:"layer"},function(){Et("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(ie(i)).join(" ")},children:o}]})}}}},yf={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,u=c===void 0?{}:c;return ze({type:"counter",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:a}),Zs({content:n.toString(),title:i,extra:{attributes:l,styles:u,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(ie(s))}})})}}}},xf={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?X:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,u=c===void 0?{}:c,m=a.styles,d=m===void 0?{}:m;return ze({type:"text",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:a}),Na({content:n,transform:g(g({},X),i),title:s,extra:{attributes:u,styles:d,classes:["".concat(h.cssPrefix,"-layers-text")].concat(ie(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(mr){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return h.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Na({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},wf=new RegExp('"',"ug"),ja=[1105920,1112319];function kf(t){var e=t.replace(wf,""),n=Is(e,0),a=n>=ja[0]&&n<=ja[1],r=e.length===2?e[0]===e[1]:!1;return{value:cn(r?e[0]:e),isSecondary:a||r}}function za(t,e){var n="".concat(cs).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=jt(t.children),o=i.filter(function(C){return C.getAttribute(fn)===e})[0],s=ft.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(ps),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),m=~["Sharp"].indexOf(f[2])?M:T,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Jt[m][f[2].toLowerCase()]:vs[m][l],v=kf(u),y=v.value,p=v.isSecondary,O=f[0].startsWith("FontAwesome"),x=$n(d,y),E=x;if(O){var w=Hs(y);w.iconName&&w.prefix&&(x=w.iconName,d=w.prefix)}if(x&&!p&&(!o||o.getAttribute(Rn)!==d||o.getAttribute(In)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var k=df(),A=k.extra;A.attributes[fn]=e,pn(x,d).then(function(C){var L=Hn(g(g({},k),{},{icons:{main:C,mask:Fn()},prefix:d,iconName:E,extra:A,watchable:!0})),P=N.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=L.map(function(R){return se(R)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Of(t){return Promise.all([za(t,"::before"),za(t,"::after")])}function Ef(t){return t.parentNode!==document.head&&!~us.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function $a(t){if(nt)return new Promise(function(e,n){var a=jt(t.querySelectorAll("*")).filter(Ef).map(Of),r=Wn.begin("searchPseudoElements");Ir(),Promise.all(a).then(function(){r(),gn(),e()}).catch(function(){r(),gn(),n()})})}var Af={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$a,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?N:a;h.searchPseudoElements&&$a(r)}}},Fa=!1,Sf={mixout:function(){return{dom:{unwatch:function(){Ir(),Fa=!0}}}},hooks:function(){return{bootstrap:function(){Ia(un("mutationObserverCallbacks",{}))},noAuto:function(){ff()},watch:function(n){var a=n.observeMutationsRoot;Fa?gn():Ia(un("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ha=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Cf={mixout:function(){return{parse:{transform:function(n){return Ha(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ha(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(l," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},d={outer:s,inner:u,path:m};return{tag:"g",attributes:g({},d.outer),children:[{tag:"g",attributes:g({},d.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:g(g({},a.icon.attributes),d.path)}]}]}}}},Ke={x:0,y:0,width:"100%",height:"100%"};function Wa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Pf(t){return t.tag==="g"?t.children:[t]}var Tf={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?je(r.split(" ").map(function(o){return o.trim()})):Fn();return i.prefix||(i.prefix=ct()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,u=o.width,m=o.icon,d=Ss({transform:f,containerWidth:u,iconWidth:l}),v={tag:"rect",attributes:g(g({},Ke),{},{fill:"white"})},y=c.children?{children:c.children.map(Wa)}:{},p={tag:"g",attributes:g({},d.inner),children:[Wa(g({tag:c.tag,attributes:g(g({},c.attributes),d.path)},y))]},O={tag:"g",attributes:g({},d.outer),children:[p]},x="mask-".concat(s||ne()),E="clip-".concat(s||ne()),w={tag:"mask",attributes:g(g({},Ke),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,O]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Pf(m)},w]};return a.push(k,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(x,")")},Ke)}),{children:a,attributes:r}}}},Nf={provides:function(e){var n=!1;ft.matchMedia&&(n=ft.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:g(g({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=g(g({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:g(g({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:g(g({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:g(g({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:g(g({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:g(g({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Mf={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Lf=[Ts,hf,bf,yf,xf,Af,Sf,Cf,Tf,Nf,Mf];Ys(Lf,{mixoutsTo:H});H.noAuto;H.config;H.library;H.dom;var hn=H.parse;H.findIconDefinition;H.toHtml;var Rf=H.icon;H.layer;H.text;H.counter;function Ua(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ua(Object(n),!0).forEach(function(a){Nt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ua(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Le(t){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Le(t)}function Nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function If(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function _f(t,e){if(t==null)return{};var n=If(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function bn(t){return Df(t)||jf(t)||zf(t)||$f()}function Df(t){if(Array.isArray(t))return yn(t)}function jf(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zf(t,e){if(t){if(typeof t=="string")return yn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yn(t,e)}}function yn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function $f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ff(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,u=t.pulse,m=t.fixedWidth,d=t.inverse,v=t.border,y=t.listItem,p=t.flip,O=t.size,x=t.rotation,E=t.pull,w=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":m,"fa-inverse":d,"fa-border":v,"fa-li":y,"fa-flip":p===!0,"fa-flip-horizontal":p==="horizontal"||p==="both","fa-flip-vertical":p==="vertical"||p==="both"},Nt(e,"fa-".concat(O),typeof O<"u"&&O!==null),Nt(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),Nt(e,"fa-pull-".concat(E),typeof E<"u"&&E!==null),Nt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(k){return w[k]?k:null}).filter(function(k){return k})}function Hf(t){return t=t-0,t===t}function Dr(t){return Hf(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Wf=["style"];function Uf(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Yf(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Dr(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Uf(r)]=i:e[r]=i,e},{})}function jr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return jr(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var c=e.attributes[l];switch(l){case"class":f.attrs.className=c,delete e.attributes.class;break;case"style":f.attrs.style=Yf(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[Dr(l)]=c}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=_f(n,Wf);return r.attrs.style=ot(ot({},r.attrs.style),o),t.apply(void 0,[e.tag,ot(ot({},r.attrs),s)].concat(bn(a)))}var zr=!1;try{zr=!0}catch{}function Bf(){if(!zr&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ya(t){if(t&&Le(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(hn.icon)return hn.icon(t);if(t===null)return null;if(t&&Le(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ze(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Nt({},t,e):{}}var $e=K.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Ya(n),c=Ze("classes",[].concat(bn(Ff(t)),bn(i.split(" ")))),u=Ze("transform",typeof t.transform=="string"?hn.transform(t.transform):t.transform),m=Ze("mask",Ya(a)),d=Rf(l,ot(ot(ot(ot({},c),u),m),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!d)return Bf("Could not find icon",l),null;var v=d.abstract,y={ref:e};return Object.keys(t).forEach(function(p){$e.defaultProps.hasOwnProperty(p)||(y[p]=t[p])}),Vf(v[0],y)});$e.displayName="FontAwesomeIcon";$e.propTypes={beat:S.bool,border:S.bool,beatFade:S.bool,bounce:S.bool,className:S.string,fade:S.bool,flash:S.bool,mask:S.oneOfType([S.object,S.array,S.string]),maskId:S.string,fixedWidth:S.bool,inverse:S.bool,flip:S.oneOf([!0,!1,"horizontal","vertical","both"]),icon:S.oneOfType([S.object,S.array,S.string]),listItem:S.bool,pull:S.oneOf(["right","left"]),pulse:S.bool,rotation:S.oneOf([0,90,180,270]),shake:S.bool,size:S.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:S.bool,spinPulse:S.bool,spinReverse:S.bool,symbol:S.oneOfType([S.bool,S.string]),title:S.string,titleId:S.string,transform:S.oneOfType([S.string,S.object]),swapOpacity:S.bool};$e.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Vf=jr.bind(null,K.createElement);export{Be as $,ac as A,Xo as B,mi as C,aa as D,Qf as E,$e as F,kn as G,wn as H,Xa as I,ic as J,Si as K,Ct as L,va as M,ec as N,sc as O,S as P,oc as Q,fc as R,pi as S,tc as T,bi as U,Ec as V,Ac as W,cc as X,yc as Y,Br as Z,Je as _,Oc as a,ki as a0,qr as a1,Cc as a2,Sc as a3,bc as b,xc as c,pc as d,dc as e,Tc as f,gc as g,wc as h,uc as i,mc as j,lc as k,kc as l,hc as m,Pc as n,qf as o,li as p,Ce as q,Vr as r,Gf as s,vc as t,On as u,Kf as v,Zf as w,Jf as x,nc as y,rc as z};
