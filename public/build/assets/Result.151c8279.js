import{A as o}from"./Authenticated.574d1fbb.js";import{a as e,j as l}from"./app.b72dc135.js";import"./index.esm.7327c26a.js";function h(i){const{entry:s,images:t,auth:d,errors:c}=i;return e(o,{auth:d,errors:c,children:l("div",{className:"mt-4 mb-16 flex flex-col",children:[e("div",{className:"uppercase font-bold text-lg border-b border-b-gray-800",children:"Respostas do Question\xE1rio"}),e("div",{className:"flex flex-col mt-4 w-full",children:s.answers.map((r,a)=>l("div",{children:[l("div",{className:"py-2 font-bold",children:[a+1,". ",r.question.content]}),e("div",{children:r.value})]}))}),l("div",{className:"flex flex-col mt-2 w-full",children:[e("div",{className:"py-2 font-bold",children:"10. Imagem da ferida cir\xFArgica"}),e("div",{children:t.map((r,a)=>e("div",{children:e("img",{src:"/storage/"+r.path,alt:"Image 1"})},a))})]})]})})}export{h as default};