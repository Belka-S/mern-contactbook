"use strict";(self.webpackChunkmern_contactbook=self.webpackChunkmern_contactbook||[]).push([[530],{1530:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var s=r(9439),t=r(2791),i=r(5183),u=r(5705),a=r(9434),c=r(1839),o=r(8877),l=r(2916),d=r(7032),j=r(6459),f=r(2797),h=r(7775),x=r(3329),p={name:"",email:"",password:""},m=function(e){var n=e.setIsVerify,r=(0,a.I0)(),i=(0,t.useState)("password"),m=(0,s.Z)(i,2),v=m[0],g=m[1],k=function(e){var n=e.values,r=e.errors,s=e.key,t=!n[s]&&"noValue",i=r[s]?"error":"success";return t||i},b=function(e){var n=e.errors,r=e.values,s=Object.keys(n).length;return Object.keys(r).some((function(e){return!r[e]}))||s};return(0,x.jsx)(u.J9,{initialValues:p,validationSchema:f.if,onSubmit:function(e,s){r((0,j.yY)(e)).unwrap().then((function(e){return n(!e.result.user.verifiedEmail)})).catch((function(e){return console.log(e)})),s.resetForm()},children:function(e){var n=e.values,r=e.errors;return(0,x.jsxs)(h.l0,{children:[(0,x.jsxs)(h.pG,{children:[(0,x.jsx)("h2",{children:"Sign up"}),(0,x.jsx)(c.Z,{to:"/signin",children:"Have an account?"})]}),Object.keys(p).map((function(e){return(0,x.jsxs)(t.Fragment,{children:[(0,x.jsxs)(h.__,{children:[e.at(0).toUpperCase()+e.substring(1)+":",(0,x.jsx)("pre",{children:" "}),(0,x.jsx)(h.CV,{name:e,component:"span"})]}),(0,x.jsxs)(h.jJ,{children:[(0,x.jsx)(h.gN,{type:"password"===e?v:e,name:e,validation:k({values:n,errors:r,key:e})}),"password"===e&&(0,x.jsx)(l.Z,{toggle:v,setToggle:g}),n[e]&&r[e]&&(0,x.jsx)(h.Pz,{}),n[e]&&!r[e]&&(0,x.jsx)(h.tm,{})]})]},e)})),(0,x.jsx)(o.Z,{disabled:b({values:n,errors:r}),children:"Sign up"}),(0,x.jsx)(d.Z,{})]})}})},v=r(936),g=r(192),k=r(1452),b=function(){var e=(0,t.useState)(!1),n=(0,s.Z)(e,2),r=n[0],u=n[1],a=(0,k.aC)().user;return(0,x.jsxs)(i.Z,{w:"400px",h:"100vh",p:"0",d:"flex",fd:"column",jc:"center",children:[(0,x.jsx)(m,{setIsVerify:u}),r&&(0,x.jsx)(v.Z,{onClick:function(){return u(!r)},children:(0,x.jsx)(g.Z,{userEmail:a.email})})]})}}}]);
//# sourceMappingURL=530.4a4516fa.chunk.js.map