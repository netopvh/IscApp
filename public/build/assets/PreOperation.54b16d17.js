import{N as r}from"./NavLink.d9fbc48e.js";import{A as a}from"./Authenticated.8b958b41.js";import{a as e,j as i}from"./app.d1b13d36.js";import"./index.esm.0d47b1a2.js";function c(t){return e(a,{auth:t.auth,errors:t.errors,children:i("div",{className:"flex flex-col items-center",children:[e("div",{className:"mt-2 font-bold text-black rounded-full bg-yellow-600 flex items-center text-center justify-center",style:{height:"160px",width:"160px",fontSize:"20px"},children:"Pr\xE9 Operat\xF3rio"}),i("div",{className:"mt-20 flex flex-col",children:[e(r,{href:route("dashboard.pre.risk"),active:!0,children:"Risco Cir\xFArgico?"}),e(r,{href:route("dashboard.pre.before"),active:!0,children:"Antes da Cirurgia"}),e(r,{href:route("dashboard.pre.daily"),active:!0,children:"No dia da Cirurgia"})]})]})})}export{c as default};