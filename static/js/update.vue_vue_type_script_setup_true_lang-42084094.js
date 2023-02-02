import{u as B}from"./vue-i18n.runtime.esm-bundler-789c3ea9.js";import{M as i}from"./motion-4c285644.js";import{m as $}from"./message-ceee817c.js";import{u as w,a as D}from"./verifyCode-99b1a263.js";import{c as g,$ as y,o as E}from"./index-55efa545.js";import{u as f}from"./hooks-57129334.js";import{d as C}from"./lock-fill-bf46ba8d.js";import{d as N}from"./iphone-bcaa848c.js";import{h as S,r as h,J as T,a3 as m,j as z,v as F,x as a,D as o,u as e,l as I,B as V,C as v}from"./runtime-core.esm-bundler-1f6332ae.js";const j={class:"w-full flex justify-between"},W=S({__name:"update",setup(M){const{t:n}=B(),u=h(!1),r=T({phone:"",verifyCode:"",password:"",repeatPassword:""}),c=h(),{isDisabled:b,text:x}=w(),R=[{validator:(p,l,s)=>{l===""?s(new Error(g(y("login.passwordSureReg")))):r.password!==l?s(new Error(g(y("login.passwordDifferentReg")))):s()},trigger:"blur"}],k=async p=>{u.value=!0,p&&await p.validate((l,s)=>{if(l)setTimeout(()=>{$(g(y("login.passwordUpdateReg")),{type:"success"}),u.value=!1},2e3);else return u.value=!1,s})};function U(){w().end(),E().SET_CURRENTPAGE(0)}return(p,l)=>{const s=m("el-input"),d=m("el-form-item"),_=m("el-button"),P=m("el-form");return z(),F(P,{ref_key:"ruleFormRef",ref:c,model:r,rules:e(D),size:"large"},{default:a(()=>[o(e(i),null,{default:a(()=>[o(d,{prop:"phone"},{default:a(()=>[o(s,{clearable:"",modelValue:r.phone,"onUpdate:modelValue":l[0]||(l[0]=t=>r.phone=t),placeholder:e(n)("login.phone"),"prefix-icon":e(f)(e(N))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(i),{delay:100},{default:a(()=>[o(d,{prop:"verifyCode"},{default:a(()=>[I("div",j,[o(s,{clearable:"",modelValue:r.verifyCode,"onUpdate:modelValue":l[1]||(l[1]=t=>r.verifyCode=t),placeholder:e(n)("login.smsVerifyCode"),"prefix-icon":e(f)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),o(_,{disabled:e(b),class:"ml-2",onClick:l[2]||(l[2]=t=>e(w)().start(c.value,"phone"))},{default:a(()=>[V(v(e(x).length>0?e(x)+e(n)("login.info"):e(n)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),o(e(i),{delay:150},{default:a(()=>[o(d,{prop:"password"},{default:a(()=>[o(s,{clearable:"","show-password":"",modelValue:r.password,"onUpdate:modelValue":l[3]||(l[3]=t=>r.password=t),placeholder:e(n)("login.password"),"prefix-icon":e(f)(e(C))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(i),{delay:200},{default:a(()=>[o(d,{rules:R,prop:"repeatPassword"},{default:a(()=>[o(s,{clearable:"","show-password":"",modelValue:r.repeatPassword,"onUpdate:modelValue":l[4]||(l[4]=t=>r.repeatPassword=t),placeholder:e(n)("login.sure"),"prefix-icon":e(f)(e(C))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),o(e(i),{delay:250},{default:a(()=>[o(d,null,{default:a(()=>[o(_,{class:"w-full",size:"default",type:"primary",loading:u.value,onClick:l[5]||(l[5]=t=>k(c.value))},{default:a(()=>[V(v(e(n)("login.definite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),o(e(i),{delay:300},{default:a(()=>[o(d,null,{default:a(()=>[o(_,{class:"w-full",size:"default",onClick:U},{default:a(()=>[V(v(e(n)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{W as _};
