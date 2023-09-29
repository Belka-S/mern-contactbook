"use strict";(self.webpackChunkmern_phonebook=self.webpackChunkmern_phonebook||[]).push([[589],{6990:function(n,e,t){t.d(e,{Z:function(){return u}});var r,o=t(2007),i=t.n(o),a=t(168),s=t(6444),c=t(15),d=s.ZP.button(r||(r=(0,a.Z)(["\n  padding: 2px 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: 500;\n  font-size: 12px;\n\n  @media screen and (width >= 768px) {\n    padding: 4px 10px;\n    font-size: 14px;\n  }\n\n  color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  background-color: ",";\n  transition: border-color 250ms, background-color 250ms, color 250ms;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    border-color: ",";\n    background-color: ",";\n  }\n\n  &:disabled {\n    cursor: auto;\n    color: ",";\n    border-color: ",";\n    background-color: ",";\n  }\n"])),c.n.colors.black,c.n.colors.border,c.n.borderRadius.s,c.n.colors.white,c.n.colors.hovered,c.n.colors.hovered,c.n.colors.ligthBlue,c.n.colors.border,c.n.colors.border,c.n.colors.white),l=t(3329),p=function(n){var e=n.onClick,t=n.type,r=n.disabled,o=n.children;return(0,l.jsx)(d,{onClick:e,type:t,disabled:r,children:o})},u=p;p.propTepes={onClick:i().func,type:i().string,disabled:i().bool,children:i().oneOfType([i().string,i().node])}},7589:function(n,e,t){t.r(e),t.d(e,{default:function(){return gn}});var r,o,i,a,s,c,d,l,p,u,f=t(9439),h=t(2791),m=t(7286),x=t(9434),g=t(8921),v=function(){return{contacts:(0,x.v9)(g.Af),activeContact:(0,x.v9)(g.Pd),filterValue:(0,x.v9)(g.Gd),error:(0,x.v9)(g.zh),isLoading:(0,x.v9)(g.xU)}},b=t(4005),w=t(168),j=t(6444),Z=j.ZP.div(r||(r=(0,w.Z)(["\n  margin: ",";\n  padding: ",";\n  /* max-width: 1280px; */\n  display: grid;\n  justify-content: center;\n\n  grid-template-columns: repeat(\n    auto-fit,\n    minmax(",", 1fr)\n  );\n\n  grid-row-gap: ",";\n  grid-column-gap: ",";\n\n  @media screen and (width >= 768px) {\n    height: ",";\n    grid-template-columns: ",";\n  }\n"])),(function(n){return n.m}),(function(n){return n.p}),(function(n){var e=n.mm;return void 0===e?"300px":e}),(function(n){var e=n.rg;return void 0===e?"10px":e}),(function(n){var e=n.cg;return void 0===e?"40px":e}),(function(n){return n.h}),(function(n){return n.gtc})),y=t(3329),k=function(n){var e=n.h,t=n.m,r=n.p,o=n.rg,i=n.cg,a=n.mm,s=n.gtc,c=n.children;return(0,y.jsx)(Z,{id:"grid",h:e,m:t,p:r,rg:o,cg:i,mm:a,gtc:s,children:c})},z=t(9119),C=t(9126),N=t(15),_="30px",F="14px",S=j.ZP.div(o||(o=(0,w.Z)(["\n  width: 100%;\n  position: relative;\n  display: inline-block;\n\n  input {\n    width: 100%;\n    height: ",";\n    padding-inline: ",";\n\n    border: 1px solid ",";\n    border-radius: ",";\n    outline: transparent;\n    transition: border-color 250ms;\n\n    &:hover,\n    &:focus {\n      border-color: ",";\n    }\n\n    &::placeholder {\n      width: fit-content;\n      position: absolute;\n      left: 50%;\n      transform: translateX(-50%);\n      transition: left 300ms, transform 300ms;\n      font-size: ",";\n    }\n\n    &:focus::placeholder {\n      left: 0;\n      transform: translateX(",");\n    }\n\n    & + svg {\n      position: absolute;\n      top: 50%;\n      left: calc(50% - 2.5 * ",");\n      transform: translate(-50%, -50%);\n      transition: left 300ms, transform 300ms, fill 300ms;\n      cursor: text;\n    }\n\n    &:focus + svg,\n    &:not(:placeholder-shown) + svg {\n      left: calc("," * 0.55);\n      fill: ",";\n    }\n  }\n"])),_,_,N.n.colors.border,N.n.borderRadius.s,N.n.colors.hovered,F,_,F,_,N.n.colors.accent),L=j.ZP.button(i||(i=(0,w.Z)(["\n  width: 18px;\n  height: 18px;\n\n  position: absolute;\n  top: 50%;\n  right: calc("," * 0.55);\n\n  transform: translate(50%, -50%);\n  border: 1px solid transparent;\n  border-radius: 50%;\n  background-color: ",";\n  color: ",";\n  font-weight: 700;\n  font-size: 12px;\n"])),_,N.n.colors.border,N.n.colors.white),P=t(6263),E=function(){var n=(0,x.v9)(g.Gd),e=(0,x.I0)(),t=function(n){return e((0,P.hL)(n.target.value))};return(0,y.jsxs)(S,{children:[(0,y.jsx)("input",{type:"text",name:"filter",placeholder:"Search",value:n,onChange:t}),(0,y.jsx)(C.dVI,{size:"16",onClick:function(n){return n.target.previousElementSibling.focus()}}),n&&(0,y.jsx)(L,{onClick:t,children:"\u2715"})]})},A=j.ZP.ul(a||(a=(0,w.Z)(["\n  width: 100%;\n  margin-top: 10px;\n  padding: 0;\n  display: inline-flex;\n  flex-direction: column;\n\n  font-weight: 500;\n  counter-reset: section;\n  list-style-type: none;\n\n  li {\n    display: inline-flex;\n    padding: 3px 6px 1px;\n\n    gap: 5px;\n    cursor: pointer;\n    transition: color 250ms;\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n\n    &::before {\n      counter-increment: section;\n      content: counters(section, '.') '.';\n    }\n  }\n\n  & .active {\n    background-color: ",";\n    color: ",";\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n  }\n"])),N.n.colors.hovered,N.n.colors.accent,N.n.colors.white,N.n.colors.white),B=t(7612),R=function(){var n=(0,x.I0)(),e=v(),t=e.contacts,r=e.activeContact,o=e.filterValue;(0,h.useEffect)((function(){n((0,B.VC)())}),[n]),(0,h.useEffect)((function(){var e,o,i=document.querySelector("li[data-id].active");null===(e=i)||void 0===e||e.classList.remove("active"),(i=document.querySelector('li[data-id="'.concat(null===r||void 0===r?void 0:r._id,'"]')))||(i=document.querySelector("li[data-id]")),null===(o=i)||void 0===o||o.classList.add("active");var a=t.find((function(n){return n._id===i.dataset.id}));n((0,P.BL)(a))}),[r,t,n]);var i=t.filter((function(n){var e=o.toLowerCase();return n.firstName.toLowerCase().includes(e)||n.lastName.toLowerCase().includes(e)})),a=function(e){var r=e.target.dataset.id,o=t.find((function(n){return n._id===r}));n((0,P.BL)(o))};return(0,y.jsx)(A,{children:i.map((function(n){return(0,y.jsxs)("li",{"data-id":n._id,onClick:a,children:[n.firstName," ",n.lastName]},n._id)}))})},O=t(1545),W=t(3524),q=j.ZP.div(s||(s=(0,w.Z)(["\n  margin-bottom: 15px;\n  margin-left: 21%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 10px;\n\n  & a {\n    padding: 3px;\n    width: 26px;\n    height: 26px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 50%;\n    border: 1px solid ",";\n    background-color: ",";\n    transition: border-color 250ms, background-color 250ms;\n\n    &:hover,\n    &:focus {\n      cursor: pointer;\n      border-color: ",";\n      background-color: ",";\n    }\n\n    & svg {\n      fill: ",";\n    }\n  }\n"])),N.n.colors.border,N.n.colors.white,N.n.colors.hovered,N.n.colors.ligthBlue,N.n.colors.hovered),I=j.ZP.ul(c||(c=(0,w.Z)(["\n  margin-bottom: 10px;\n\n  list-style: none;\n  font-size: 12px;\n\n  @media screen and (width >= 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (width >= 1280px) {\n    font-size: 16px;\n  }\n\n  & li {\n    padding-block: 5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-column-gap: 20px;\n    grid-template-areas: 'key value value value value';\n\n    & span {\n      &:nth-of-type(1) {\n        grid-area: key;\n        text-align: right;\n\n        color: ",";\n\n        @media screen and (width < 768px) {\n          letter-spacing: -1px;\n        }\n      }\n      &:nth-of-type(2) {\n        grid-area: value;\n        text-align: left;\n      }\n    }\n\n    &:not(:last-of-type) {\n      border-bottom: 1px solid ",";\n    }\n  }\n\n  & + div {\n    padding-left: 21%;\n\n    @media screen and (width > 768px) {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n    }\n  }\n"])),N.n.colors.placeholder,N.n.colors.border),$=(t(5514),["phone","email","whatsapp","viber","telegram","linkedin","github","address","birthday","notes"]),V=["firstName","lastName"].concat($),G="Only letters, numbers, underscores, dashes, spases",D=/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([_ -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]*)*$/,H="Pattern: test@test.com, test@test.ua",M=/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,T="Only digits, spaces, dashes, parentheses, can start with +",X=/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,K="Only letters, more than five, start with @",U=/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/,J="Starts with https://linkedin.com",Y=/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,Q="Starts with https://...github",nn=/^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/,en="Pattern: dd-mm-yyyy",tn=/^([0-2^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)((19|20)\d{2}$)/,rn="Only letters, more than two",on=/[a-zA-Z]\w{1}/,an=t(6990),sn=function(n){var e=n.triggerForm,t=(0,x.I0)(),r=v().activeContact,o={phone:{href:"tel:".concat(null===r||void 0===r?void 0:r.phone),icon:(0,y.jsx)(C.SPk,{size:"14"})},email:{href:"mailto:".concat(null===r||void 0===r?void 0:r.email),icon:(0,y.jsx)(C.lZw,{size:"14"})},whatsapp:{href:"https://wa.me/".concat(null===r||void 0===r?void 0:r.whatsapp),icon:(0,y.jsx)(C.RGt,{size:"14"})},viber:{href:"viber://chat?number:+".concat(null===r||void 0===r?void 0:r.viber),icon:(0,y.jsx)(O.i86,{size:"20"})},telegram:{href:"https://t.me/".concat(null===r||void 0===r?void 0:r.telegram.replace("@","")),icon:(0,y.jsx)(O.Gke,{size:"16"})},linkedin:{href:null===r||void 0===r?void 0:r.linkedin,icon:(0,y.jsx)(O.KCg,{size:"20"})},github:{href:null===r||void 0===r?void 0:r.github,icon:(0,y.jsx)(C.rFR,{size:"16"})},address:{href:(null===r||void 0===r?void 0:r.address)&&"https://www.google.com/maps/search/"+"".concat(null===r||void 0===r?void 0:r.address.split(/\s+/).join("+")),icon:(0,y.jsx)(W.jCW,{size:"16"})}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(q,{children:r&&Object.keys(o).map((function(n){return r[n]&&(0,y.jsx)("a",{href:o[n].href,target:"_blank",rel:"noreferrer",children:o[n].icon},o[n].href)}))}),(0,y.jsx)(I,{children:r&&Object.keys(r).map((function(n){return $.includes(n)&&r[n]&&(0,y.jsxs)("li",{children:[(0,y.jsx)("span",{children:"".concat(n)}),(0,y.jsx)("span",{children:"".concat(r[n])})]},n)}))}),(0,y.jsxs)(k,{mm:"40px",cg:"3vw",children:[(0,y.jsx)(an.Z,{onClick:function(){return e("add")},children:"Add"}),(0,y.jsx)(an.Z,{disabled:!r,onClick:function(){return e("edit")},children:"Edit"}),(0,y.jsx)(an.Z,{disabled:!r,onClick:function(){t((0,B.xX)(r._id)),t((0,P.BL)(null))},children:"Delete"})]})]})},cn=t(1413),dn=t(5705),ln=t(6727),pn=(0,j.ZP)(dn.Bc)(d||(d=(0,w.Z)(["\n  margin-left: 21%;\n  padding-bottom: 5px;\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n  color: ",";\n"])),N.n.colors.failed),un=(0,j.ZP)(dn.l0)(l||(l=(0,w.Z)(["\n  position: relative;\n  font-size: 12px;\n\n  @media screen and (width >= 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (width >= 1280px) {\n    font-size: 16px;\n  }\n\n  & #grid {\n    padding-left: 21%;\n\n    @media screen and (width > 768px) {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n    }\n  }\n  /* dynamic input width */\n  & #firstN,\n  & #lastN,\n  span {\n    font-size: 16px;\n    font-weight: 700;\n\n    @media screen and (width >= 768px) {\n      font-size: 18px;\n    }\n\n    @media screen and (width >= 1280px) {\n      font-size: 20px;\n    }\n\n    &::placeholder {\n      color: ",";\n    }\n\n    &:first-of-type {\n      margin: 0 0 10px 21%;\n    }\n  }\n\n  & #firstN {\n    width: ",";\n  }\n\n  & #lastN {\n    width: ",";\n  }\n\n  & .wrapper:not(:last-of-type) {\n    border-bottom: 1px solid ",";\n  }\n\n  & span {\n    position: absolute;\n    left: -100%;\n    bottom: -100%;\n    color: transparent;\n  }\n"])),N.n.colors.placeholder,(function(n){var e=n.fnw;return"".concat(e,"px")}),(function(n){var e=n.lnw;return"".concat(e,"px")}),N.n.colors.border),fn=j.ZP.label(p||(p=(0,w.Z)(["\n  padding-block: 2px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-template-areas: 'key value value value value';\n  grid-area: key;\n  text-align: right;\n  align-items: center;\n\n  color: ",";\n  font-size: 12px;\n\n  @media screen and (width >= 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (width >= 1280px) {\n    font-size: 16px;\n  }\n\n  @media screen and (width < 768px) {\n    letter-spacing: -1px;\n  }\n"])),N.n.colors.placeholder),hn=(0,j.ZP)(dn.gN)(u||(u=(0,w.Z)(["\n  padding-block: 3px;\n  grid-area: value;\n  text-align: left;\n  background-color: transparent;\n\n  border: 1px solid transparent;\n  outline: transparent;\n  font-size: 12px;\n  transition: border-color 250ms;\n\n  @media screen and (width >= 768px) {\n    font-size: 14px;\n  }\n\n  @media screen and (width >= 1280px) {\n    font-size: 16px;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: ",";\n  }\n"])),N.n.colors.hovered),mn=(0,ln.Ry)().shape({firstName:(0,ln.Z_)().matches(D,G).required("Required"),lastName:(0,ln.Z_)().matches(D,G),phone:(0,ln.Z_)().matches(X,T).required("Required"),email:(0,ln.Z_)().matches(M,H),whatsapp:(0,ln.Z_)().matches(X,T),viber:(0,ln.Z_)().matches(X,T),telegram:(0,ln.Z_)().matches(U,K),linkedin:(0,ln.Z_)().matches(Y,J),github:(0,ln.Z_)().matches(nn,Q),address:(0,ln.Z_)().matches(on,rn),birthday:(0,ln.Z_)().matches(tn,en),notes:(0,ln.Z_)()}),xn=function(n){var e=n.triggerForm,t=n.isContactForm,r=(0,x.I0)(),o=v(),i=o.contacts,a=o.activeContact,s=(0,h.useState)({firstWidth:75,lastWidth:100}),c=(0,f.Z)(s,2),d=c[0],l=c[1];return(0,y.jsx)(dn.J9,{initialValues:function(n){var e={};return V.forEach((function(t){return e[t]="edit"===n?a[t]:""})),e}(t),validationSchema:mn,validateOnBlur:"true",onSubmit:function(n,o){var s=n.firstName;if(i.some((function(n){return n.firstName.toLowerCase()===s.toLowerCase()}))&&"add"===t)return alert("".concat(s," is already in contacts!"));r("add"===t?(0,B.je)(n):(0,B.KY)({id:a._id,contact:n})),e(!1),o.resetForm()},children:(0,y.jsxs)(un,{onChange:function(n){var e=n.target,t=e.name,r=e.value,o=e.placeholder,i=document.querySelector("span");i.innerHTML=r||o;var a=function(n){return n.getBoundingClientRect().width+15};"firstName"===t&&l((function(n){return(0,cn.Z)((0,cn.Z)({},n),{},{firstWidth:a(i)})})),"lastName"===t&&l((function(n){return(0,cn.Z)((0,cn.Z)({},n),{},{lastWidth:a(i)})}))},fnw:d.firstWidth,lnw:d.lastWidth,children:[(0,y.jsx)(pn,{name:"firstName",component:"div"}),(0,y.jsx)(pn,{name:"lastName",component:"div"}),(0,y.jsx)(hn,{id:"firstN",type:"text",name:"firstName",placeholder:"Name"}),(0,y.jsx)(hn,{id:"lastN",type:"text",name:"lastName",placeholder:"Surname"}),$.map((function(n){return(0,y.jsxs)("div",{className:"wrapper",children:[(0,y.jsxs)(fn,{children:[n,(0,y.jsx)(hn,{type:"text",name:n})]}),(0,y.jsx)(pn,{name:n,component:"div"})]},n)})),(0,y.jsx)("span",{}),(0,y.jsxs)(k,{mm:"40px",cg:"3vw",gtc:"1fr 1fr 1fr",children:[(0,y.jsx)(an.Z,{type:"submit",children:"Submit"}),(0,y.jsx)(an.Z,{type:"button",onClick:function(){return e(!1)},children:"Cancel"})]})]})})},gn=function(){var n=(0,h.useState)(!1),e=(0,f.Z)(n,2),t=e[0],r=e[1],o=(0,h.useState)(!1),i=(0,f.Z)(o,2),a=i[0],s=i[1],c=(0,m.a)().userId,d=v(),l=d.activeContact,p=d.isLoading,u=p||c!==(null===l||void 0===l?void 0:l.owner)?"":"".concat(null===l||void 0===l?void 0:l.firstName," ").concat(null===l||void 0===l?void 0:l.lastName),x=window.innerHeight>500?"calc(100vh - 90px)":"410px",g=document.querySelector("header");(0,h.useEffect)((function(){return window.addEventListener("resize",(function(n){r((null===g||void 0===g?void 0:g.clientWidth)<=300)})),function(){window.removeEventListener("resize",(function(n){r((null===g||void 0===g?void 0:g.clientWidth)<=300)}))}}),[g]);var w=function(n){s(n)};return(0,y.jsxs)(k,{h:x,gtc:"4fr 6fr",children:[(0,y.jsxs)(z.Z,{pi:"0",children:[(0,y.jsx)(E,{})," ",(0,y.jsx)("br",{}),(0,y.jsx)(R,{})]}),a&&(0,y.jsx)(xn,{triggerForm:w,isContactForm:a}),!a&&!t&&(0,y.jsx)(z.Z,{pi:"0",mt:"0 0 10px 21%",t2:u,children:!p&&(0,y.jsx)(sn,{triggerForm:w})}),p&&(0,y.jsx)(b.Z,{})]})}},15:function(n,e,t){t.d(e,{n:function(){return r}});var r=Object.freeze({colors:{background:"#F7F6F9",accent:"#206bdd",hovered:"#2374ef",black:"#343434",white:"#FFFFFF",ligthBlue:"#E3F3FF",failed:"#E74A3B",saccess:"#019595",canceled:"#E5EDFA",border:"#b1b1b1",placeholder:"#5c5858"},fontSizes:{micro:"10px",xs:"12px",s:"14px",m:"16px",l:"18px",xl:"20px",xxl:"24px",xxxl:"32px"},fontWeight:{r:400,m:500,sb:600,b:700},breakpoints:{xs:"320px",s:"375px",m:"768px",l:"1280px"},animations:{cubicBezier:"cubic-bezier(0, 0.5, 1.3, 2)",duration:"250ms"},shadows:{authHeading:"0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)",authButton:"4px 2px 16px rgba(136, 165, 191, 0.48)"},toastify:{theme:"light"},borderRadius:{s:"5px",m:"10px",l:"15px"},modalBackdropcolors:{black:"rgba(23, 24, 32, 0.5)",grey:"rgba(103, 103, 103, 0.5)"},backgroundImages:{}})},5514:function(n,e,t){t.d(e,{g:function(){return r}});var r=Object.freeze({EMAIL:"email",PASSWORD:"password",USERNAME:"username"})}}]);
//# sourceMappingURL=589.e94cb8eb.chunk.js.map