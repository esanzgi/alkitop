import{u as d,r as n,j as e}from"./app-90a17816.js";import{A as c}from"./AdminMenu-d038a140.js";import{H as l}from"./Header-dc5f5bb6.js";import"./index.es-e2752bc1.js";import"./NavItem-3ef645da.js";import"./logotxuria-896ba0d6.js";function p({user:t,ratings:r}){const{login:i}=d();return n.useEffect(()=>{i(t)},[]),i(t),e.jsxs("div",{children:[e.jsx(l,{user:t}),e.jsx(c,{}),e.jsxs("table",{className:"table table-bordered table-hover",children:[e.jsx("thead",{className:"thead-dark",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"User ID"}),e.jsx("th",{scope:"col",children:"Product ID"}),e.jsx("th",{scope:"col",children:"Title"}),e.jsx("th",{scope:"col",children:"Review"}),e.jsx("th",{scope:"col",children:"Rating"})]})}),e.jsx("tbody",{children:r.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id_user}),e.jsx("td",{children:s.id_rating}),e.jsx("td",{children:s.title}),e.jsx("td",{children:s.review}),e.jsx("td",{children:s.rating}),e.jsx("td",{children:e.jsxs("form",{action:"/admin/iritziak/restore",method:"post",children:[e.jsx("input",{type:"hidden",id:"id_rating",name:"id_rating",value:s.id_rating}),e.jsx("input",{type:"submit",className:"btn btn-success ",value:"Berreskuratu"})]})})]},s.id))})]})]})}export{p as default};