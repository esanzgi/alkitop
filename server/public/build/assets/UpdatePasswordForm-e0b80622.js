import{r as p,W as j,j as s}from"./app-90a17816.js";import{T as n,I as c}from"./TextInput-bf6f3626.js";import{I as i}from"./InputLabel-dfd67d3e.js";import{P as g}from"./PrimaryButton-62f17138.js";import{q as v}from"./transition-16d759f6.js";function z({className:d=""}){const u=p.useRef(),l=p.useRef(),{data:e,setData:r,errors:t,put:w,reset:o,processing:x,recentlySuccessful:f}=j({current_password:"",password:"",password_confirmation:""}),h=a=>{a.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:m=>{m.password&&(o("password","password_confirmation"),u.current.focus()),m.current_password&&(o("current_password"),l.current.focus())}})};return s.jsxs("section",{className:d,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Pasahitza eguneratu"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Pasahitza seguru bat erabiliko duzula ziurtatu"})]}),s.jsxs("form",{onSubmit:h,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(i,{htmlFor:"current_password",value:"Oraingo pasahitza",className:"me-2"}),s.jsx(n,{id:"current_password",ref:l,value:e.current_password,onChange:a=>r("current_password",a.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(c,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(i,{htmlFor:"password",value:"Pasahitza berria",className:"me-2"}),s.jsx(n,{id:"password",ref:u,value:e.password,onChange:a=>r("password",a.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(c,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{className:"mb-3",children:[s.jsx(i,{htmlFor:"password_confirmation",value:"Pasahitza berria ziurtatu",className:"me-2"}),s.jsx(n,{id:"password_confirmation",value:e.password_confirmation,onChange:a=>r("password_confirmation",a.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(c,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(g,{disabled:x,children:"Eguneratu"}),s.jsx(v,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Eguneratuta."})})]})]})]})}export{z as default};
