import{u as d,r as n,j as t}from"./app-90a17816.js";import{A as o}from"./AdminMenu-d038a140.js";import{H as a}from"./Header-dc5f5bb6.js";import"./index.es-e2752bc1.js";import"./NavItem-3ef645da.js";import"./logotxuria-896ba0d6.js";function p({user:s,products:r}){const{login:i}=d();return n.useEffect(()=>{i(s)},[]),i(s),t.jsxs("div",{children:[t.jsx(a,{user:s}),t.jsx(o,{}),t.jsxs("table",{className:"table table-striped",children:[t.jsxs("tr",{children:[t.jsx("th",{children:"ID"}),t.jsx("th",{children:"Name"}),t.jsx("th",{children:"description"}),t.jsx("th",{children:"isEco"}),t.jsx("th",{children:"location"})]}),r.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:e.id_product}),t.jsx("td",{children:e.name}),t.jsx("td",{children:e.description}),t.jsx("td",{children:e.isEco}),t.jsx("td",{children:e.location}),t.jsx("td",{children:t.jsxs("form",{action:"/admin/produktuak/berreskuratu",method:"post",children:[t.jsx("input",{type:"hidden",value:e.id_product,name:"id_product"}),t.jsx("input",{type:"submit",value:"Berreskuratu"})]})})]}))]})]})}export{p as default};