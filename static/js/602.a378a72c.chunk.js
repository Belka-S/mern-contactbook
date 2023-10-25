"use strict";(self.webpackChunkmern_phonebook=self.webpackChunkmern_phonebook||[]).push([[602],{602:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var r,o,i,a,s,l,c,u,d=e(9439),p=e(2791),f=e(6990),m=e(9434),h=e(6968),g=e(1452),x=e(6459),b=e(2601),w=e(168),v=e(6444),Z=e(15),y=v.ZP.div(r||(r=(0,w.Z)(["\n  position: relative;\n\n  & #grid:last-of-type {\n    padding-left: 21%;\n\n    @media screen and (width > 768px) {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n    }\n  }\n"]))),k=v.ZP.div(o||(o=(0,w.Z)(["\n  padding-block: 2px;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-column-gap: 20px;\n  text-align: right;\n  align-items: center;\n\n  font-size: 20px;\n  font-weight: 500;\n\n  &:not(:nth-last-of-type(2)) {\n    border-bottom: 1px solid ",";\n  }\n\n  & span {\n    padding-block: 5px;\n    text-align: start;\n\n    &:nth-of-type(2n + 1) {\n      text-align: end;\n      color: ",";\n\n      &::first-letter {\n        text-transform: lowercase;\n      }\n    }\n  }\n"])),Z.n.colors.border,Z.n.colors.placeholder),j=v.ZP.div(i||(i=(0,w.Z)(["\n  position: relative;\n  width: 200px;\n  height: 200px;\n  margin: 12px 0 20px 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Averia Sans Libre', sans-serif;\n  font-size: 72px;\n  font-weight: 700;\n\n  border: 1px solid ",";\n  border-radius: 50%;\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n\n  &::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    ",";\n    width: 198px;\n    height: 198px;\n    color: ",";\n  }\n"])),Z.n.colors.border,Z.n.colors.white,(function(n){var t=n.url;return"url(".concat(t,")")}),(function(n){var t=n.abbr;return'content:"'.concat(t,'"')}),Z.n.colors.placeholder),A=e(3329),z=function(n){var t=n.setIsProfileForm,e=(0,m.I0)(),r=(0,g.aC)().user,o=(0,g.EO)(r.name);return(0,A.jsxs)(y,{children:[(0,A.jsx)(j,{url:r.avatarUrl,abbr:r.avatarUrl?"":o}),b.T6.map((function(n){return r[n]&&(0,A.jsxs)(k,{children:[(0,A.jsxs)("span",{children:[n,":"]}),(0,A.jsx)("span",{children:r[n]})]},n)})),(0,A.jsxs)(f.Z,{mm:"40px",cg:"3vw",gtc:"1fr 1fr 1fr",children:[(0,A.jsx)(h.Z,{onClick:function(){return t(!0)},children:"Edit"}),(0,A.jsx)("div",{}),(0,A.jsx)(h.Z,{onClick:function(){window.confirm("Do you want to delete your profile and data?")&&e((0,x.Rk)())},children:"Delete"})]})]})},P=e(5705),E=(0,v.ZP)(P.l0)(a||(a=(0,w.Z)(["\n  position: relative;\n\n  & .wrapper:not(:nth-last-of-type(2)) {\n    border-bottom: 1px solid ",";\n  }\n\n  & #grid:last-of-type {\n    padding-left: 21%;\n\n    @media screen and (width > 768px) {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n    }\n  }\n"])),Z.n.colors.border),C=v.ZP.label(s||(s=(0,w.Z)(["\n  padding-block: 2px;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-column-gap: 20px;\n  text-align: right;\n  align-items: center;\n\n  color: ",";\n  font-size: 20px;\n  font-weight: 500;\n"])),Z.n.colors.placeholder),I=(0,v.ZP)(P.gN)(l||(l=(0,w.Z)(["\n  text-align: left;\n  background-color: transparent;\n  padding: 5px 0;\n\n  border: 1px solid transparent;\n  outline: transparent;\n  transition: border-color 250ms;\n\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  color: ",";\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus {\n    -webkit-box-shadow: 0 0 0px 1000px transparent inset;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n  }\n"])),Z.n.colors.black,Z.n.colors.hovered),N=(0,v.ZP)(P.Bc)(c||(c=(0,w.Z)(["\n  margin-left: 22%;\n  padding-bottom: 5px;\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n  color: ",";\n"])),Z.n.colors.error),S=(0,v.ZP)(P.gN)(u||(u=(0,w.Z)(["\n  position: relative;\n  width: 200px;\n  height: 200px;\n  margin: 12px 0 20px 3vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Averia Sans Libre', sans-serif;\n  font-size: 72px;\n  font-weight: 700;\n\n  border: 1px solid ",";\n  border-radius: 50%;\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n  cursor: pointer;\n  color: transparent;\n\n  &::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    ",";\n    width: 198px;\n    height: 198px;\n    color: ",";\n  }\n\n  // &::-webkit-file-upload-button\n  &::file-selector-button {\n    display: none;\n  }\n"])),Z.n.colors.border,Z.n.colors.white,(function(n){var t=n.url;return"url(".concat(t,")")}),(function(n){var t=n.abbr;return'content:"'.concat(t,'"')}),Z.n.colors.placeholder),$=function(n){var t=n.setIsProfileForm,e=(0,m.I0)(),r=(0,g.aC)().user,o=(0,g.EO)(r.name);return(0,A.jsx)(P.J9,{initialValues:function(){var n={};return b.T6.forEach((function(t){return n[t]=r[t]})),n}(),validationSchema:"",onSubmit:function(n,r){e((0,x.Mp)(n)),t(!1),r.resetForm()},children:(0,A.jsxs)(E,{children:[(0,A.jsx)(S,{type:"file",name:"avatar",url:r.avatarUrl,abbr:r.avatarUrl?"":o}),b.T6.map((function(n){return(0,A.jsxs)("div",{className:"wrapper",children:[(0,A.jsxs)(C,{children:[n,":",(0,A.jsx)(I,{type:"text",name:n})]}),(0,A.jsx)(N,{name:n,component:"div"})]},n)})),(0,A.jsxs)(f.Z,{mm:"40px",cg:"3vw",gtc:"1fr 1fr 1fr",children:[(0,A.jsx)(h.Z,{type:"submit",children:"Submit"}),(0,A.jsx)(h.Z,{onClick:function(){return t(!1)},children:"Cancel"})]})]})})},L=function(){var n=(0,p.useState)(!1),t=(0,d.Z)(n,2),e=t[0],r=t[1],o=window.innerHeight>600?"calc(100vh - 90px)":"510px";return(0,A.jsxs)(f.Z,{h:o,gtc:"2fr 3fr",children:[(0,A.jsx)("h1",{children:"Profile"}),!e&&(0,A.jsx)(z,{setIsProfileForm:r}),e&&(0,A.jsx)($,{setIsProfileForm:r})]})}},2601:function(n,t,e){e.d(t,{VK:function(){return p},Qs:function(){return f},T6:function(){return m},bO:function(){return r}});var r={};e.r(r),e.d(r,{o4:function(){return d},Hu:function(){return u},xK:function(){return i},W3:function(){return c},fW:function(){return l},A1:function(){return o},Kx:function(){return a},hJ:function(){return s}});var o={name:"NAME",msg:"only letters, numbers, underscores, dashes, spases",pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([_ -][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},i={name:"EMAIL",msg:"test@test.com, test@test.ua",pattern:/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/},a={name:"PHONE",msg:"only digits, spaces, dashes, parentheses, can start with +",pattern:/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/},s={name:"TELEGRAM",msg:"only letters and numbers,  more than five, start with @",pattern:/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/},l={name:"LINKEDIN",msg:"http(s)://linkedin.com",pattern:/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)+\/(([_-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},c={name:"GITHUB",msg:"http(s)://...github",pattern:/^(http(s?):\/\/)?(www\.)?github\.com+\/(([_-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},u={name:"DATE",msg:"dd-mm-yyyy",pattern:/^([0-2^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)((19|20)\d{2}$)/},d={name:"ADDRESS",msg:"only letters, numbers, commas, dashes, spases",pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([ -]|(, )[a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},p=["phone","email","whatsapp","viber","telegram","linkedin","github","address","birthday","notes"],f=["firstName","lastName"].concat(p),m=["name","email","whatsApp","telegram","location","socialLink","birthday","about"]},1452:function(n,t,e){e.d(t,{EO:function(){return s},aC:function(){return r.a},gW:function(){return a}});var r=e(7286),o=e(9434),i=e(8921),a=function(){return{contacts:(0,o.v9)(i.Af),activeContact:(0,o.v9)(i.Pd),filterValue:(0,o.v9)(i.Gd),error:(0,o.v9)(i.zh),isLoading:(0,o.v9)(i.xU)}},s=function(n){return n.replace("-"," ").split(/\s+/).reduce((function(n,t){return n+t.at(0).toUpperCase()}),"").substring(0,3)}}}]);
//# sourceMappingURL=602.a378a72c.chunk.js.map