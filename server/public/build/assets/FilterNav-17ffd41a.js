import{W as o,r as t,j as s}from"./app-90a17816.js";import{a as r}from"./constants-778ff7d1.js";import{F as i,i as m,j as x,k as d,l as f,m as g,n as j}from"./index.es-e2752bc1.js";const u=[{icon:x,text:"Bizikletak"},{icon:d,text:"Motorrak"},{icon:f,text:"Kotxeak"},{icon:g,text:"Elurra"},{icon:j,text:"Musika"}];function v(){const{get:l}=o(),e=t.useId(),n=a=>{console.log("CATEGORY",a),l(`/products/category/${a}`)};return s.jsx("nav",{className:"row",children:s.jsxs("ul",{className:"d-flex align-items-center justify-content-evenly mt-2 nav-icons-div",children:[u.map((a,c)=>s.jsx(p,{icon:a.icon,text:a.text,handleClick:n},c)),s.jsxs("li",{id:e,className:"d-inline-flex flex-column align-items-center pb-1 categorias-trigger nav-icons",children:[s.jsx(i,{icon:m,className:"fs-3 mb-1"}),s.jsx("span",{className:"fs-6",children:"Kategoriak"})]}),s.jsx("div",{className:"collapsed-categories bg-light rounded-3 ",children:s.jsx("ul",{className:"row list-unstyled",children:r.map((a,c)=>s.jsx("li",{onClick:()=>n(a),className:"col-6 col-sm-4 col-lg-3 my-2",children:s.jsx("span",{className:"allCategories",children:a})},c))})})]})})}function p({icon:l,text:e,handleClick:n}){return s.jsxs("li",{onClick:()=>n(e),className:"d-inline-flex flex-column align-items-center pb-1 nav-icons",children:[s.jsx(i,{icon:l,className:"fs-3 mb-1"}),s.jsx("span",{className:"fs-6",children:e})]})}export{v as F};