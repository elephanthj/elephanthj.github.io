import{c as V,Y as y,t as g,d as A,ah as T,a as C,aa as M,w as N}from"./_plugin-vue_export-helper-bbba385e.js";import{F as _,e as x}from"./index-16e70b89.js";const[I,O]=V("form"),Y={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:y,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:g,showErrorMessage:g,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var j=A({name:I,props:Y,emits:["submit","failed"],setup(i,{emit:r,slots:c}){const{children:s,linkChildren:v}=T(_),o=e=>e?s.filter(t=>e.includes(t.name)):s,p=e=>new Promise((t,n)=>{const l=[];o(e).reduce((w,E)=>w.then(()=>{if(!l.length)return E.validate().then(h=>{h&&l.push(h)})}),Promise.resolve()).then(()=>{l.length?n(l):t()})}),b=e=>new Promise((t,n)=>{const l=o(e);Promise.all(l.map(a=>a.validate())).then(a=>{a=a.filter(Boolean),a.length?n(a):t()})}),B=e=>{const t=s.find(n=>n.name===e);return t?new Promise((n,l)=>{t.validate().then(a=>{a?l(a):n()})}):Promise.reject()},d=e=>typeof e=="string"?B(e):i.validateFirst?p(e):b(e),F=e=>{typeof e=="string"&&(e=[e]),o(e).forEach(n=>{n.resetValidation()})},P=()=>s.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),u=(e,t)=>{s.some(n=>n.name===e?(n.$el.scrollIntoView(t),!0):!1)},f=()=>s.reduce((e,t)=>(t.name!==void 0&&(e[t.name]=t.formValue.value),e),{}),m=()=>{const e=f();d().then(()=>r("submit",e)).catch(t=>{r("failed",{values:e,errors:t}),i.scrollToError&&t[0].name&&u(t[0].name)})},S=e=>{M(e),m()};return v({props:i}),x({submit:m,validate:d,getValues:f,scrollToField:u,resetValidation:F,getValidationStatus:P}),()=>{var e;return C("form",{class:O(),onSubmit:S},[(e=c.default)==null?void 0:e.call(c)])}}});const D=N(j);export{D as F};
