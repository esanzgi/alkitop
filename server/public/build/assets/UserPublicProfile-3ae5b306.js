import{r as a,j as s,u as l}from"./app-90a17816.js";import{F as d}from"./Footer-5b20baa8.js";import{H as o}from"./Header-dc5f5bb6.js";import{U as n}from"./Icons-4328b1fd.js";import{P as m}from"./ProductCarousel-5b50ea85.js";import"./logotxuria-896ba0d6.js";import"./index.es-e2752bc1.js";import"./constants-778ff7d1.js";import"./index-b67daa84.js";/* empty css              */import"./ProductCard-ef1e8260.js";const h=({user:e})=>{const[i,c]=a.useState([]);return a.useEffect(()=>{(async()=>{try{const r=await fetch(`/api/products/user/${e.id_user}`);if(!r.ok)throw new Error(`Error al cargar productos del usuario. Código HTTP: ${r.status}`);const t=await r.json();c(t)}catch(r){console.error(r)}})()},[e.idUser]),s.jsxs("div",{className:"mt-5",children:[s.jsxs("div",{className:"border-bottom pb-3 d-flex justify-content-between align-items-center",children:[s.jsx("h1",{className:"h1",children:"Perfil publikoa"}),s.jsx("span",{className:"fs-4",children:"E. Mota"})]}),s.jsxs("div",{className:"bg-light rounded-5 p-4 mt-4",children:[s.jsx("div",{className:"row mt-5",children:s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("div",{children:s.jsx(n,{user:e,width:200,height:200,enableTooltip:!1,enableLink:!1})}),s.jsxs("div",{className:"ms-5",children:[s.jsx("h1",{className:"h1",children:e.name}),s.jsx("p",{className:"mt-3 fs-5",children:e.bio})]})]})}),s.jsx("div",{className:"row justify-content-center",children:s.jsx("div",{className:"card bg-light p-4 rounded-5 col-8",children:s.jsxs("div",{className:"mb-4",children:[s.jsx("h3",{className:"card-title mb-3",children:"Información Personal"}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-md-6",children:[s.jsxs("p",{className:"mb-2 fs-6",children:[s.jsx("strong",{children:"País:"})," ",e.country]}),s.jsxs("p",{className:"mb-2 fs-6",children:[s.jsx("strong",{children:"Provincia:"})," ",e.province]}),s.jsxs("p",{className:"mb-2 fs-6",children:[s.jsx("strong",{children:"Ciudad:"})," ",e.city]})]}),s.jsxs("div",{className:"col-md-6",children:[s.jsxs("p",{className:"mb-2 fs-6",children:[s.jsx("strong",{children:"Fecha de Nacimiento:"})," ",e.birthdate]}),s.jsxs("p",{className:"mb-2 fs-6",children:[s.jsx("strong",{children:"Género:"})," ",e.gender]})]})]})]})})})]}),s.jsx("div",{className:"mt-5 border-bottom",children:s.jsx("h1",{className:"h1 pb-2 pt-4",children:"Alokairuko produktuak"})}),s.jsx("div",{className:"mt-5",children:s.jsx(m,{products:i})}),s.jsx("div",{className:"mt-5 border-bottom",children:s.jsx("h1",{className:"h1 pb-2 pt-4",children:"Alokatuak"})}),s.jsx("div",{className:"mt-5 border-bottom",children:s.jsx("h1",{className:"h1 pb-2 pt-4",children:"Iritziak"})})]})};function U({user:e}){return l(),s.jsxs("div",{children:[s.jsx("div",{className:"fixed-top bg-white",children:s.jsx(o,{})}),s.jsx("div",{className:"container-md mt-5 pt-5",children:s.jsx(h,{user:e})}),s.jsx("div",{className:"mt-5 pt-5 bg-light border-top",children:s.jsx("div",{className:"container-md",children:s.jsx(d,{})})})]})}export{U as default};
