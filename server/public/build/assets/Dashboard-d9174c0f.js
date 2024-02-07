import{r as a,j as e,u as P}from"./app-90a17816.js";import{F as N}from"./Footer-5b20baa8.js";import{D as h,a as y,b,H as z}from"./Header-dc5f5bb6.js";import{P as k}from"./Products-107aaeb8.js";import{P as r}from"./index.es-e2752bc1.js";import"./logotxuria-896ba0d6.js";import"./ProductCard-ef1e8260.js";import"./constants-778ff7d1.js";const p=r.oneOf(["start","end"]),C=r.oneOfType([p,r.shape({sm:p}),r.shape({md:p}),r.shape({lg:p}),r.shape({xl:p}),r.shape({xxl:p}),r.object]),E={id:r.string,href:r.string,onClick:r.func,title:r.node.isRequired,disabled:r.bool,align:C,menuRole:r.string,renderMenuOnMount:r.bool,rootCloseEvent:r.string,menuVariant:r.oneOf(["dark"]),flip:r.bool,bsPrefix:r.string,variant:r.string,size:r.string},j=a.forwardRef(({title:t,children:d,bsPrefix:l,rootCloseEvent:u,variant:c,size:o,menuRole:s,renderMenuOnMount:n,disabled:x,href:f,id:i,menuVariant:m,flip:g,...v},w)=>e.jsxs(h,{ref:w,...v,children:[e.jsx(y,{id:i,href:f,size:o,variant:c,disabled:x,childBsPrefix:l,children:t}),e.jsx(b,{role:s,renderOnMount:n,rootCloseEvent:u,variant:m,flip:g,children:d})]}));j.displayName="DropdownButton";j.propTypes=E;const T=j;function S({user:t}){const[d,l]=a.useState([]),[u,c]=a.useState(!0);return a.useState("all"),a.useEffect(()=>{(async()=>{try{const s=await fetch(`/api/products/user/${t.id_user}`);if(!s.ok)throw new Error(`Error al cargar productos del usuario. Código HTTP: ${s.status}`);const n=await s.json();l(n)}catch(s){console.error(s)}finally{c(!1)}})()},[t.id_user]),e.jsx("div",{className:"w-full",children:u?e.jsx("p",{children:"Produktuak kargatzen..."}):d.length===0?e.jsx("div",{children:e.jsx("p",{className:"text-center h4 p-4",children:"Ez dituzu produkturik alokairuan. Anima zaitez!"})}):e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h1",{className:"align-self-center",children:"Zure Produktuak"}),e.jsx(k,{products:d})]})})}function D({user:t}){const[d,l]=a.useState([]),[u,c]=a.useState(!0);a.useState("all");const[o,s]=a.useState(!1),n=async()=>{try{const i=await fetch(`/api/products/rental/user/${t.id_user}`);if(!i.ok)throw new Error(`Error al cargar productos del usuario. Código HTTP: ${i.status}`);const m=await i.json();l(m)}catch(i){console.error(i)}finally{c(!1)}},x=async()=>{try{const i=await fetch(`/api/products/old/rental/user/${t.id_user}`);if(!i.ok)throw new Error(`Error al cargar productos viejos del usuario. Código HTTP: ${i.status}`);const m=await i.json();l(m)}catch(i){console.error(i)}};a.useEffect(()=>{o?x():n()},[t.id_user,o]);const f=()=>{s(!o)};return e.jsx("div",{className:"w-full",children:u?e.jsx("p",{children:"Produktuak kargatzen..."}):d.length===0?e.jsx("div",{children:e.jsx("p",{className:"text-center h4 p-4",children:"Ez zaude produkturik alokatzen momentu honetan. Anima zaitez!"})}):e.jsxs("div",{className:"px-5 d-flex flex-column ",children:[e.jsx("h1",{className:"text-center",children:"Alokatzen zauden produktuak"}),e.jsxs("div",{className:"align-self-start",children:[e.jsx("input",{type:"checkbox",onChange:f,checked:o}),e.jsx("label",{className:"mx-2",children:"Alokatu dituzun produktuak ere ikusi"})]}),e.jsx(k,{products:d})]})})}function O({user:t}){const[d,l]=a.useState([]),[u,c]=a.useState(!0);return a.useState("all"),a.useEffect(()=>{(async()=>{try{const s=await fetch(`/api/products/favourites/user/${t.id_user}`);if(!s.ok)throw new Error(`Error al cargar productos del usuario. Código HTTP: ${s.status}`);const n=await s.json();l(n)}catch(s){console.error(s)}finally{c(!1)}})()},[t.id_user]),e.jsx("div",{className:"w-full",children:u?e.jsx("p",{children:"Produktuak kargatzen..."}):d.length===0?e.jsx("div",{children:e.jsx("p",{className:"text-center h4 p-4",children:"Ez dituzu produkturik gorde. Anima zaitez!"})}):e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h1",{className:"align-self-center",children:"Gustoko dituzun produktuak"}),e.jsx(k,{products:d})]})})}function B({auth:t,products:d,owner:l}){const{login:u}=P();u(t.user);const[c,o]=a.useState("purchased"),s=x=>{o(x)};let n;switch(c){case"all":n=e.jsx(S,{user:t.user,displayType:c,setDisplayType:o});break;case"favorites":n=e.jsx(O,{user:t.user,displayType:c,setDisplayType:o});break;case"purchased":n=e.jsx(D,{user:t.user,displayType:c,setDisplayType:o});break;default:n=null}return e.jsxs("div",{children:[e.jsx("div",{className:"fixed-top bg-white",children:e.jsx(z,{user:t.user,owner:l})}),e.jsx("div",{className:"py-12 mt-5 pt-5 mx-4",children:e.jsx("div",{className:" sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"py-2 text-gray-900 mx-3 h3",children:"Mila esker izen emateagatik"})})})}),e.jsx("div",{className:"container-fluid mt-4 ms-4",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-3",children:e.jsx(T,{title:"Menu   ",id:"dropdown-menu",children:t.user.id_role===4?e.jsxs(e.Fragment,{children:[e.jsx(h.Item,{onClick:()=>s("all"),children:"Nire produktuak"}),e.jsx(h.Item,{onClick:()=>s("favorites"),children:"Gustokoenak"}),e.jsx(h.Item,{onClick:()=>s("purchased"),children:"Alokatutak"})]}):e.jsxs(e.Fragment,{children:[e.jsx(h.Item,{onClick:()=>s("favorites"),children:"Gustokoenak"}),e.jsx(h.Item,{onClick:()=>s("purchased"),children:"Alokatutak"})]})})}),e.jsx("div",{className:"col-12 mt-3",children:n})]})}),e.jsx("div",{className:"mt-5 pt-5 bg-light border-top",children:e.jsx("div",{className:"container-md",children:e.jsx(N,{})})})]})}export{B as default};