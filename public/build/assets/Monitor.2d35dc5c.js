import{N as r}from"./NavLink.ca185112.js";import{A as i}from"./Authenticated.acf47471.js";import{a as e,j as o}from"./app.060b6cec.js";import"./index.esm.557ecb2c.js";function l(t){return e(i,{auth:t.auth,errors:t.errors,children:o("div",{className:"flex flex-col items-center",children:[e("div",{className:"mt-12 font-bold uppercase text-black rounded-full bg-yellow-500 flex items-center text-center justify-center",style:{height:"220px",width:"220px",fontSize:"20px"},children:"Monitoramento da ferida cir\xFArgica"}),o("div",{className:"mt-20 flex flex-col",children:[e(r,{href:route("dashboard.monitor.why"),active:!0,children:"Por qu\xEA devo responder ao question\xE1rio?"}),e(r,{href:route("dashboard.monitor.when"),active:!0,children:"Quando devo responder?"}),e(r,{href:route("dashboard.monitor.resp"),active:!0,children:"Clique aqui para responder"})]})]})})}export{l as default};