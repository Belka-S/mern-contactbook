"use strict";(self.webpackChunkmern_phonebook=self.webpackChunkmern_phonebook||[]).push([[786],{5786:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,i,o,a,s,c,l,d,u,p=t(9439),f=t(2791),m=t(7286),h=t(9434),x=t(8921),g=function(){return{contacts:(0,h.v9)(x.Af),activeContact:(0,h.v9)(x.Pd),filterValue:(0,h.v9)(x.Gd),error:(0,h.v9)(x.zh),isLoading:(0,h.v9)(x.xU)}},v=t(4005),b=t(323),w=t(9119),Z=t(9126),j=t(168),y=t(6444),z=t(15),k="30px",E="14px",N=y.ZP.div(r||(r=(0,j.Z)(["\n  width: 100%;\n  position: relative;\n  display: inline-block;\n\n  input {\n    width: 100%;\n    height: ",";\n    padding-inline: ",";\n\n    border: 1px solid ",";\n    border-radius: ",";\n    outline: transparent;\n    transition: border-color 250ms;\n\n    &:hover,\n    &:focus {\n      border-color: ",";\n    }\n\n    &::placeholder {\n      width: fit-content;\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n      transition: left 300ms, transform 300ms;\n      font-size: ",";\n    }\n\n    &:focus::placeholder {\n      left: 0;\n      transform: translateX(",");\n    }\n\n    & + svg {\n      position: absolute;\n      top: 50%;\n      left: calc(50% - 2.5 * ",");\n      transform: translate(-50%, -50%);\n      transition: left 300ms, transform 300ms, fill 300ms;\n      cursor: text;\n    }\n\n    &:focus + svg,\n    &:not(:placeholder-shown) + svg {\n      left: calc("," * 0.55);\n      fill: ",";\n    }\n  }\n"])),k,k,z.n.colors.border,z.n.radius.s,z.n.colors.hovered,E,k,E,k,z.n.colors.accent),_=y.ZP.button(i||(i=(0,j.Z)(["\n  width: 18px;\n  height: 18px;\n\n  position: absolute;\n  top: 50%;\n  right: calc("," * 0.55);\n\n  transform: translate(50%, -50%);\n  border: 1px solid transparent;\n  border-radius: 50%;\n  background-color: ",";\n  color: ",";\n  font-weight: 700;\n  font-size: 12px;\n"])),k,z.n.colors.border,z.n.colors.white),C=t(6263),A=t(3329),S=function(){var n=(0,h.v9)(x.Gd),e=(0,h.I0)(),t=function(n){return e((0,C.hL)(n.target.value))};return(0,A.jsxs)(N,{children:[(0,A.jsx)("input",{type:"text",name:"filter",placeholder:"Search",value:n,onChange:t}),(0,A.jsx)(Z.dVI,{size:"16",onClick:function(n){return n.target.previousElementSibling.focus()}}),n&&(0,A.jsx)(_,{onClick:t,children:"\u2715"})]})},L=y.ZP.ul(o||(o=(0,j.Z)(["\n  width: 100%;\n  margin-top: 10px;\n  padding: 0;\n  display: inline-flex;\n  flex-direction: column;\n\n  font-weight: 500;\n  counter-reset: section;\n  list-style-type: none;\n\n  li {\n    display: inline-flex;\n    padding: 3px 6px 1px;\n\n    gap: 5px;\n    cursor: pointer;\n    transition: color 250ms;\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n\n    &::before {\n      counter-increment: section;\n      content: counters(section, '.') '.';\n    }\n  }\n\n  & .active {\n    background-color: ",";\n    color: ",";\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n  }\n"])),z.n.colors.hovered,z.n.colors.accent,z.n.colors.white,z.n.colors.white),q=t(7612),K=function(){var n=(0,h.I0)(),e=g(),t=e.contacts,r=e.activeContact,i=e.filterValue;(0,f.useEffect)((function(){n((0,q.VC)())}),[n]),(0,f.useEffect)((function(){var e,i,o=document.querySelector("li[data-id].active");null===(e=o)||void 0===e||e.classList.remove("active"),null===(i=o=r?document.querySelector('li[data-id="'.concat(r._id,'"]')):document.querySelector("li[data-id]"))||void 0===i||i.classList.add("active");var a=o?t.find((function(n){return n._id===o.dataset.id})):null;n((0,C.BL)(a))}),[r,t,n]);var o=t.filter((function(n){var e=i.toLowerCase();return n.firstName.toLowerCase().includes(e)||n.lastName.toLowerCase().includes(e)})),a=function(e){var r=e.target.dataset.id,i=t.find((function(n){return n._id===r}));n((0,C.BL)(i))};return(0,A.jsx)(L,{children:o.map((function(n){return(0,A.jsxs)("li",{"data-id":n._id,onClick:a,children:[n.firstName," ",n.lastName]},n._id)}))})},P=t(1545),R=t(3524),W=y.ZP.div(a||(a=(0,j.Z)(["\n  margin-bottom: 15px;\n  margin-left: 21%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 10px;\n\n  & a {\n    padding: 3px;\n    width: 26px;\n    height: 26px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 50%;\n    border: 1px solid ",";\n    background-color: ",";\n    transition: border-color 250ms, background-color 250ms;\n\n    &:hover,\n    &:focus {\n      cursor: pointer;\n      border-color: ",";\n      background-color: ",";\n    }\n\n    & svg {\n      fill: ",";\n    }\n  }\n"])),z.n.colors.border,z.n.colors.white,z.n.colors.hovered,z.n.colors.ligthBlue,z.n.colors.hovered),F=y.ZP.ul(s||(s=(0,j.Z)(["\n  margin-bottom: 10px;\n\n  list-style: none;\n  font-size: 12px;\n\n  @media screen and (width >= 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (width >= 1280px) {\n    font-size: 16px;\n  }\n\n  & li {\n    padding-block: 5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-column-gap: 20px;\n    grid-template-areas: 'key value value value value';\n\n    & span {\n      &:nth-of-type(1) {\n        grid-area: key;\n        text-align: right;\n\n        color: ",";\n\n        @media screen and (width < 768px) {\n          letter-spacing: -1px;\n        }\n      }\n      &:nth-of-type(2) {\n        grid-area: value;\n        text-align: left;\n      }\n    }\n\n    &:not(:last-of-type) {\n      border-bottom: 1px solid ",";\n    }\n  }\n\n  & + div {\n    padding-left: 21%;\n\n    @media screen and (width >= 768px) {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n    }\n  }\n"])),z.n.colors.placeholder,z.n.colors.border),$=t(608),H=t(6990),I=function(n){var e=n.triggerForm,t=(0,h.I0)(),r=g().activeContact,i={phone:{href:"tel:".concat(null===r||void 0===r?void 0:r.phone),icon:(0,A.jsx)(Z.SPk,{size:"14"})},email:{href:"mailto:".concat(null===r||void 0===r?void 0:r.email),icon:(0,A.jsx)(Z.lZw,{size:"14"})},whatsapp:{href:"https://wa.me/".concat(null===r||void 0===r?void 0:r.whatsapp),icon:(0,A.jsx)(Z.RGt,{size:"14"})},viber:{href:"viber://chat?number:+".concat(null===r||void 0===r?void 0:r.viber),icon:(0,A.jsx)(P.i86,{size:"20"})},telegram:{href:"https://t.me/".concat(null===r||void 0===r?void 0:r.telegram.replace("@","")),icon:(0,A.jsx)(P.Gke,{size:"16"})},linkedin:{href:null===r||void 0===r?void 0:r.linkedin,icon:(0,A.jsx)(P.KCg,{size:"20"})},github:{href:null===r||void 0===r?void 0:r.github,icon:(0,A.jsx)(Z.rFR,{size:"16"})},address:{href:(null===r||void 0===r?void 0:r.address)&&"https://www.google.com/maps/search/"+"".concat(null===r||void 0===r?void 0:r.address.split(/\s+/).join("+")),icon:(0,A.jsx)(R.jCW,{size:"16"})}};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(W,{children:r&&Object.keys(i).map((function(n){return r[n]&&(0,A.jsx)("a",{href:i[n].href,target:"_blank",rel:"noreferrer",children:i[n].icon},i[n].href)}))}),(0,A.jsx)(F,{children:r&&Object.keys(r).map((function(n){return $.u9.includes(n)&&r[n]&&(0,A.jsxs)("li",{children:[(0,A.jsx)("span",{children:"".concat(n)}),(0,A.jsx)("span",{children:"".concat(r[n])})]},n)}))}),(0,A.jsxs)(b.Z,{mm:"40px",cg:"3vw",children:[(0,A.jsx)(H.Z,{onClick:function(){return e("add")},children:"Add"}),(0,A.jsx)(H.Z,{disabled:!r,onClick:function(){return e("edit")},children:"Edit"}),(0,A.jsx)(H.Z,{disabled:!r,onClick:function(){t((0,q.xX)(r._id))},children:"Delete"})]})]})},M=t(4942),B=t(1413),G=t(5705),O=(0,y.ZP)(G.Bc)(c||(c=(0,j.Z)(["\n  margin-left: 21%;\n  padding-bottom: 5px;\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n  color: ",";\n"])),z.n.colors.failed),V=(0,y.ZP)(G.l0)(l||(l=(0,j.Z)(["\n  position: relative;\n  font-size: 12px;\n\n  @media screen and (width >= 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (width >= 1280px) {\n    font-size: 16px;\n  }\n\n  & #grid {\n    padding-left: 21%;\n\n    @media screen and (width > 768px) {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n    }\n  }\n\n  /* dynamic input width */\n  & #first,\n  & #last,\n  span {\n    padding: 0;\n    font-size: 16px;\n    font-weight: 700;\n    font-family: 'Montserrat', sans-serif;\n\n    @media screen and (width >= 768px) {\n      font-size: 20px;\n    }\n\n    @media screen and (width >= 1280px) {\n      font-size: 26px;\n    }\n\n    &::placeholder {\n      color: ",";\n    }\n\n    &:first-of-type {\n      margin: 0 0 10px 21%;\n    }\n  }\n\n  & #first {\n    width: ",";\n  }\n\n  & #last {\n    width: ",";\n  }\n\n  & .wrapper:not(:last-of-type) {\n    border-bottom: 1px solid ",";\n  }\n\n  & span {\n    position: absolute;\n    left: 100%;\n    bottom: 0;\n    color: transparent;\n  }\n"])),z.n.colors.placeholder,(function(n){var e=n.fnw;return"".concat(e,"px")}),(function(n){var e=n.lnw;return"".concat(e,"px")}),z.n.colors.border),D=y.ZP.label(d||(d=(0,j.Z)(["\n  padding-block: 2px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-template-areas: 'key value value value value';\n  grid-area: key;\n  text-align: right;\n  align-items: center;\n\n  color: ",";\n  font-size: 12px;\n\n  @media screen and (width >= 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (width >= 1280px) {\n    font-size: 16px;\n  }\n\n  @media screen and (width < 768px) {\n    letter-spacing: -1px;\n  }\n"])),z.n.colors.placeholder),J=(0,y.ZP)(G.gN)(u||(u=(0,j.Z)(["\n  padding-block: 3px;\n  grid-area: value;\n  text-align: left;\n  background-color: transparent;\n\n  border: 1px solid transparent;\n  outline: transparent;\n  font-size: 12px;\n  transition: border-color 250ms;\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus {\n    -webkit-box-shadow: 0 0 0px 1000px transparent inset;\n  }\n\n  @media screen and (width >= 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (width >= 1280px) {\n    font-size: 16px;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n  }\n"])),z.n.colors.hovered),T=t(2797),X={},U=function(n){var e=n.triggerForm,t=n.isContactForm,r=(0,h.I0)(),i=g(),o=i.contacts,a=i.activeContact,s=(0,f.useState)({firstName:null,lastName:null}),c=(0,p.Z)(s,2),l=c[0],d=c[1],u=document.querySelector("span"),m=function(n){return n.getBoundingClientRect().width+8};(0,f.useEffect)((function(){var n=X.firstName,e=X.lastName,t=document.querySelector(".first-name"),r=document.querySelector(".last-name");t.innerHTML=n||"Name",r.innerHTML=e||"Surname",d((function(n){return(0,B.Z)((0,B.Z)({},n),{},{firstName:m(t)})})),d((function(n){return(0,B.Z)((0,B.Z)({},n),{},{lastName:m(r)})}))}),[]);var x;return(0,A.jsx)(G.J9,{initialValues:(x=t,$.GZ.forEach((function(n){return X[n]="edit"===x?a[n]:""})),X),validationSchema:T.OD,onSubmit:function(n,i){var s=n.firstName;if(o.some((function(n){return n.firstName.toLowerCase()===s.toLowerCase()}))&&"add"===t)return alert("".concat(s," is already in contacts!"));r("add"===t?(0,q.je)(n):(0,q.KY)({id:a._id,contact:n})),e(!1),i.resetForm()},children:(0,A.jsxs)(V,{onChange:function(n){var e=n.target,t=e.name,r=e.value,i=e.placeholder;u.innerHTML=r||i,d((function(n){return(0,B.Z)((0,B.Z)({},n),{},(0,M.Z)({},t,m(u)))}))},fnw:l.firstName,lnw:l.lastName,children:[(0,A.jsx)(O,{name:"firstName",component:"div"}),(0,A.jsx)(O,{name:"lastName",component:"div"}),(0,A.jsx)(J,{id:"first",type:"text",name:"firstName",placeholder:"Name"}),(0,A.jsx)(J,{id:"last",type:"text",name:"lastName",placeholder:"Surname"}),$.u9.map((function(n){return(0,A.jsxs)("div",{className:"wrapper",children:[(0,A.jsxs)(D,{children:[n,(0,A.jsx)(J,{type:"text",name:n})]}),(0,A.jsx)(O,{name:n,component:"div"})]},n)})),(0,A.jsxs)(b.Z,{mm:"40px",cg:"3vw",gtc:"1fr 1fr 1fr",children:[(0,A.jsx)(H.Z,{type:"submit",children:"Save"}),(0,A.jsx)(H.Z,{type:"button",onClick:function(){return e(!1)},children:"Cancel"})]}),(0,A.jsx)("span",{}),(0,A.jsx)("span",{className:"first-name"}),(0,A.jsx)("span",{className:"last-name"})]})})},Y=function(){var n=(0,f.useState)(!1),e=(0,p.Z)(n,2),t=e[0],r=e[1],i=(0,f.useState)(!1),o=(0,p.Z)(i,2),a=o[0],s=o[1],c=(0,m.a)().userId,l=g(),d=l.activeContact,u=l.isLoading,h=u||c!==(null===d||void 0===d?void 0:d.owner)?"":"".concat(null===d||void 0===d?void 0:d.firstName," ").concat(null===d||void 0===d?void 0:d.lastName),x=window.innerHeight>600?"calc(100vh - 90px)":"510px",Z=document.querySelector("header");(0,f.useEffect)((function(){return window.addEventListener("resize",(function(n){r((null===Z||void 0===Z?void 0:Z.clientWidth)<=300)})),function(){window.removeEventListener("resize",(function(n){r((null===Z||void 0===Z?void 0:Z.clientWidth)<=300)}))}}),[Z]);var j=function(n){s(n)};return(0,A.jsxs)(b.Z,{h:x,gtc:"4fr 6fr",children:[(0,A.jsxs)(w.Z,{p:"0",children:[(0,A.jsx)(S,{})," ",(0,A.jsx)("br",{}),(0,A.jsx)(K,{})]}),a&&(0,A.jsx)(U,{triggerForm:j,isContactForm:a}),!a&&!t&&(0,A.jsx)(w.Z,{p:"0",mt:"0 0 10px 21%",t2:h,children:!u&&(0,A.jsx)(I,{triggerForm:j})}),u&&(0,A.jsx)(v.Z,{})]})}},608:function(n,e,t){t.d(e,{o4:function(){return p},Hu:function(){return u},xK:function(){return a},GZ:function(){return i},W3:function(){return d},fW:function(){return l},A1:function(){return o},Kx:function(){return s},u9:function(){return r},hJ:function(){return c}});Object.freeze({EMAIL:"email",PASSWORD:"password",USERNAME:"username"});var r=["phone","email","whatsapp","viber","telegram","linkedin","github","address","birthday","notes"],i=["firstName","lastName"].concat(r),o={msg:"only letters, numbers, underscores, dashes, spases",regExp:/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([_ -][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},a={msg:"test@test.com, test@test.ua",regExp:/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/},s={msg:"only digits, spaces, dashes, parentheses, can start with +",regExp:/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/},c={msg:"only letters and numbers,  more than five, start with @",regExp:/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/},l={msg:"https://linkedin.com",regExp:/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)+\/(([_-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},d={msg:"https://...github",regExp:/^(http(s?):\/\/)?(www\.)?github\.com+\/(([_-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/},u={msg:"dd-mm-yyyy",regExp:/^([0-2^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)((19|20)\d{2}$)/},p={msg:"only letters, numbers, commas, dashes, spases",regExp:/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([ -]|(, )[a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/}},2797:function(n,e,t){t.d(e,{OD:function(){return d},M7:function(){return l},if:function(){return c}});var r=t(6727),i=t(608),o=(0,r.Z_)().min(4,"is too short").matches(i.A1.regExp,i.A1.msg).required("is required"),a=(0,r.Z_)().matches(i.xK.regExp,i.xK.msg).required("is required"),s=(0,r.Z_)().min(4,"is too short").required("is required"),c=(0,r.Ry)().shape({name:o,email:a,password:s}),l=(0,r.Ry)().shape({email:a,password:s}),d=(0,r.Ry)().shape({firstName:(0,r.Z_)().matches(i.A1.regExp,i.A1.msg).required("Required"),lastName:(0,r.Z_)().matches(i.A1.regExp,i.A1.msg),phone:(0,r.Z_)().matches(i.Kx.regExp,i.Kx.msg).required("Required"),email:(0,r.Z_)().matches(i.xK.regExp,i.xK.msg),whatsapp:(0,r.Z_)().matches(i.Kx.regExp,i.Kx.msg),viber:(0,r.Z_)().matches(i.Kx.regExp,i.Kx.msg),telegram:(0,r.Z_)().matches(i.hJ.regExp,i.hJ.msg),linkedin:(0,r.Z_)().matches(i.fW.regExp,i.fW.msg),github:(0,r.Z_)().matches(i.W3.regExp,i.W3.msg),address:(0,r.Z_)().matches(i.o4.regExp,i.o4.msg),birthday:(0,r.Z_)().matches(i.Hu.regExp,i.Hu.msg),notes:(0,r.Z_)()})}}]);
//# sourceMappingURL=786.e1012561.chunk.js.map