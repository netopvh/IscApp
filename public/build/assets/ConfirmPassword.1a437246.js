import{u as l,r as c,j as r,a as s,H as u}from"./app.d1b13d36.js";import{B as p}from"./Button.57bf200a.js";import{G as f}from"./Guest.f7ad5f42.js";import{I as w,a as h}from"./InputError.f6398052.js";import{L as g}from"./Label.b9d7f208.js";import"./index.esm.0d47b1a2.js";function I(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});c.exports.useEffect(()=>()=>{i("password")},[]);const d=a=>{t(a.target.name,a.target.value)};return r(f,{children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),r("form",{onSubmit:a=>{a.preventDefault(),o(route("password.confirm"))},children:[r("div",{className:"mt-4",children:[s(g,{forInput:"password",value:"Password"}),s(w,{type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(h,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(p,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{I as default};