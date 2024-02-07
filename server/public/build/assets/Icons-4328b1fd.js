import{r as i,s as re,j as a,d as ae}from"./app-90a17816.js";import{D as A,b as ie}from"./constants-778ff7d1.js";import{K as le,N as ce,A as de,q as K,O as ue,H as fe,$ as he,L as me,x as B,u as S,J as H,y as pe,z as ve,Q as ge,o as F,r as P,E as W,R as I,D as ye,T as L,a0 as U,P as xe,a1 as we,M as Re,F as V,a2 as Ee,a3 as Oe}from"./index.es-e2752bc1.js";const $=2**31-1;function q(e,t,o){const n=o-Date.now();e.current=n<=$?setTimeout(t,n):setTimeout(()=>q(e,t,o),$)}function Te(){const e=le(),t=i.useRef();return ce(()=>clearTimeout(t.current)),i.useMemo(()=>{const o=()=>clearTimeout(t.current);function n(s,r=0){e()&&(o(),r<=$?t.current=setTimeout(s,r):q(t,s,Date.now()+r))}return{set:n,clear:o,handleRef:t}},[])}const Ce=()=>{};function je(e,t,{disabled:o,clickTrigger:n}={}){const s=t||Ce;de(e,s,{disabled:o,clickTrigger:n});const r=K(c=>{ue(c)&&s(c)});i.useEffect(()=>{if(o||e==null)return;const c=fe(he(e));let u=(c.defaultView||window).event;const f=me(c,"keyup",m=>{if(m===u){u=void 0;return}r(m)});return()=>{f()}},[e,o,r])}const J=i.forwardRef((e,t)=>{const{flip:o,offset:n,placement:s,containerPadding:r,popperConfig:c={},transition:u,runTransition:f}=e,[m,y]=B(),[x,w]=B(),p=S(y,t),h=H(e.container),O=H(e.target),[l,v]=i.useState(!e.show),d=pe(O,m,ve({placement:s,enableEvents:!!e.show,containerPadding:r||5,flip:o,offset:n,arrowElement:x,popperConfig:c}));e.show&&l&&v(!1);const T=(...D)=>{v(!0),e.onExited&&e.onExited(...D)},C=e.show||!l;if(je(m,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!C)return null;const{onExit:b,onExiting:R,onEnter:E,onEntering:k,onEntered:_}=e;let N=e.children(Object.assign({},d.attributes.popper,{style:d.styles.popper,ref:p}),{popper:d,placement:s,show:!!e.show,arrowProps:Object.assign({},d.attributes.arrow,{style:d.styles.arrow,ref:w})});return N=ge(u,f,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:N,onExit:b,onExiting:R,onExited:T,onEnter:E,onEntering:k,onEntered:_}),h?re.createPortal(N,h):null});J.displayName="Overlay";const be=J,Q=i.forwardRef(({className:e,bsPrefix:t,as:o="div",...n},s)=>(t=F(t,"popover-header"),a.jsx(o,{ref:s,className:P(e,t),...n})));Q.displayName="PopoverHeader";const ke=Q,X=i.forwardRef(({className:e,bsPrefix:t,as:o="div",...n},s)=>(t=F(t,"popover-body"),a.jsx(o,{ref:s,className:P(e,t),...n})));X.displayName="PopoverBody";const Y=X;function G(e,t){let o=e;return e==="left"?o=t?"end":"start":e==="right"&&(o=t?"start":"end"),o}function Z(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Fe=i.forwardRef(({bsPrefix:e,placement:t="right",className:o,style:n,children:s,body:r,arrowProps:c,hasDoneInitialMeasure:u,popper:f,show:m,...y},x)=>{const w=F(e,"popover"),p=W(),[h]=(t==null?void 0:t.split("-"))||[],O=G(h,p);let l=n;return m&&!u&&(l={...n,...Z(f==null?void 0:f.strategy)}),a.jsxs("div",{ref:x,role:"tooltip",style:l,"x-placement":h,className:P(o,w,h&&`bs-popover-${O}`),...y,children:[a.jsx("div",{className:"popover-arrow",...c}),r?a.jsx(Y,{children:s}):s]})}),Ne=Object.assign(Fe,{Header:ke,Body:Y,POPPER_OFFSET:[0,8]}),ee=i.forwardRef(({bsPrefix:e,placement:t="right",className:o,style:n,children:s,arrowProps:r,hasDoneInitialMeasure:c,popper:u,show:f,...m},y)=>{e=F(e,"tooltip");const x=W(),[w]=(t==null?void 0:t.split("-"))||[],p=G(w,x);let h=n;return f&&!c&&(h={...n,...Z(u==null?void 0:u.strategy)}),a.jsxs("div",{ref:y,style:h,role:"tooltip","x-placement":w,className:P(o,e,`bs-tooltip-${p}`),...m,children:[a.jsx("div",{className:"tooltip-arrow",...r}),a.jsx("div",{className:`${e}-inner`,children:s})]})});ee.displayName="Tooltip";const te=Object.assign(ee,{TOOLTIP_OFFSET:[0,6]});function Pe(e){const t=i.useRef(null),o=F(void 0,"popover"),n=F(void 0,"tooltip"),s=i.useMemo(()=>({name:"offset",options:{offset:()=>{if(e)return e;if(t.current){if(I(t.current,o))return Ne.POPPER_OFFSET;if(I(t.current,n))return te.TOOLTIP_OFFSET}return[0,0]}}}),[e,o,n]);return[t,[s]]}function _e(e,t){const{ref:o}=e,{ref:n}=t;e.ref=o.__wrapped||(o.__wrapped=s=>o(U(s))),t.ref=n.__wrapped||(n.__wrapped=s=>n(U(s)))}const oe=i.forwardRef(({children:e,transition:t=L,popperConfig:o={},rootClose:n=!1,placement:s="top",show:r=!1,...c},u)=>{const f=i.useRef({}),[m,y]=i.useState(null),[x,w]=Pe(c.offset),p=S(u,x),h=t===!0?L:t||void 0,O=K(l=>{y(l),o==null||o.onFirstUpdate==null||o.onFirstUpdate(l)});return ye(()=>{m&&c.target&&(f.current.scheduleUpdate==null||f.current.scheduleUpdate())},[m,c.target]),i.useEffect(()=>{r||y(null)},[r]),a.jsx(be,{...c,ref:p,popperConfig:{...o,modifiers:w.concat(o.modifiers||[]),onFirstUpdate:O},transition:h,rootClose:n,placement:s,show:r,children:(l,{arrowProps:v,popper:d,show:T})=>{var C,b;_e(l,v);const R=d==null?void 0:d.placement,E=Object.assign(f.current,{state:d==null?void 0:d.state,scheduleUpdate:d==null?void 0:d.update,placement:R,outOfBoundaries:(d==null||(C=d.state)==null||(b=C.modifiersData.hide)==null?void 0:b.isReferenceHidden)||!1,strategy:o.strategy}),k=!!m;return typeof e=="function"?e({...l,placement:R,show:T,...!t&&T&&{className:"show"},popper:E,arrowProps:v,hasDoneInitialMeasure:k}):i.cloneElement(e,{...l,placement:R,arrowProps:v,popper:E,hasDoneInitialMeasure:k,className:P(e.props.className,!t&&T&&"show"),style:{...e.props.style,...l.style}})}})});oe.displayName="Overlay";const De=oe;function Me(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function z(e,t,o){const[n]=t,s=n.currentTarget,r=n.relatedTarget||n.nativeEvent[o];(!r||r!==s)&&!Re(s,r)&&e(...t)}xe.oneOf(["click","hover","focus"]);const Ue=({trigger:e=["hover","focus"],overlay:t,children:o,popperConfig:n={},show:s,defaultShow:r=!1,onToggle:c,delay:u,placement:f,flip:m=f&&f.indexOf("auto")!==-1,...y})=>{const x=i.useRef(null),w=S(x,o.ref),p=Te(),h=i.useRef(""),[O,l]=we(s,r,c),v=Me(u),{onFocus:d,onBlur:T,onClick:C}=typeof o!="function"?i.Children.only(o).props:{},b=g=>{w(U(g))},R=i.useCallback(()=>{if(p.clear(),h.current="show",!v.show){l(!0);return}p.set(()=>{h.current==="show"&&l(!0)},v.show)},[v.show,l,p]),E=i.useCallback(()=>{if(p.clear(),h.current="hide",!v.hide){l(!1);return}p.set(()=>{h.current==="hide"&&l(!1)},v.hide)},[v.hide,l,p]),k=i.useCallback((...g)=>{R(),d==null||d(...g)},[R,d]),_=i.useCallback((...g)=>{E(),T==null||T(...g)},[E,T]),N=i.useCallback((...g)=>{l(!O),C==null||C(...g)},[C,l,O]),D=i.useCallback((...g)=>{z(R,g,"fromElement")},[R]),se=i.useCallback((...g)=>{z(E,g,"toElement")},[E]),M=e==null?[]:[].concat(e),j={ref:b};return M.indexOf("click")!==-1&&(j.onClick=N),M.indexOf("focus")!==-1&&(j.onFocus=k,j.onBlur=_),M.indexOf("hover")!==-1&&(j.onMouseOver=D,j.onMouseOut=se),a.jsxs(a.Fragment,{children:[typeof o=="function"?o(j):i.cloneElement(o,j),a.jsx(De,{...y,show:O,onHide:E,flip:m,placement:f,popperConfig:n,target:x.current,children:t})]})},$e=Ue,He=({handleOpenModal:e})=>a.jsxs("div",{className:"btn btn-success",style:{display:"flex",alignItems:"center"},onClick:e,children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:"16",width:"16",stroke:"currentcolor",strokeWidth:"3",fill:"none",style:{overflow:"visible"},children:a.jsx("path",{d:"M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"})}),a.jsx("span",{className:"ms-2",children:"Filtros"})]}),Ie=({className:e,style:t,onClick:o})=>a.jsx("div",{className:e,style:{...t,display:"block"},onClick:o,children:a.jsx(V,{icon:Ee,style:{color:"black",fontSize:"24px"}})}),Le=({className:e,style:t,onClick:o})=>a.jsx("div",{className:e,style:{...t,display:"block"},onClick:o,children:a.jsx(V,{icon:Oe,style:{color:"black",fontSize:"24px"}})}),ze=({user:e,width:t,height:o,enableTooltip:n=!0,enableLink:s=!0})=>{const r=(e==null?void 0:e.profileImage)||(e==null?void 0:e.profile_image)||A;if(r||(r=A),console.log("AVATAR",r),console.log("User",e),!e)return null;const c="Perfila ikusi",u=()=>a.jsx("div",{className:"d-flex align-items-center justify-content-center border-success rounded-circle overflow-hidden pointer-at",style:{width:`${t}px`,height:`${o}px`},children:a.jsx("img",{src:ie+r,alt:"Imagen de perfil",className:"img-fluid rounded-circle"})});return a.jsx(a.Fragment,{children:n?a.jsx(ne,{text:c,placement:"bottom",bgColor:"bg-success",children:s?a.jsx(ae,{href:`/users/profile/${e.idUser}`,children:u()}):u()}):u()})},ne=({text:e,placement:t,delay:o,bgColor:n,children:s})=>{const r=a.jsx(te,{id:`tooltip-${t}`,style:{backgroundColor:n},children:e});return a.jsx($e,{placement:t,overlay:r,delay:o,children:s},t)};ne.defaultProps={text:"Default Tooltip Text",placement:"bottom",delay:{show:600,hide:100},bgColor:"dark"};export{ne as A,He as F,Ie as N,Le as P,ze as U};