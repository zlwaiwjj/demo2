import{d as b}from"./index-e24b4c59.js";import{a as z,b as H,c as u,d as M}from"./index-55efa545.js";import{u as N}from"./hooks-57129334.js";import{h,r as s,a as T,a3 as o,j as w,v as B,x as n,l,B as d,D as i,u as e,C as I}from"./runtime-core.esm-bundler-1f6332ae.js";import"./vue.runtime.esm-bundler-7c6ab200.js";import"./runtime-dom.esm-bundler-7421a035.js";import"./vue-i18n.runtime.esm-bundler-789c3ea9.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-18a7c2fd.js";import"./index-27e55737.js";import"./multiTags-9a5f9fae.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-82e8a5de.js";import"./index-70a76fbd.js";import"./index-e84875e6.js";const D={width:24,height:24,body:'<path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8v2h5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H8v6h5v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H7a1 1 0 0 1-1-1V8H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z"/>'},P=D,R={class:"card-header"},q={class:"font-medium"},S=h({name:"MenuTree"}),te=h({...S,setup(j){const p=s(""),_=s({value:"uniqueId",children:"children"}),m=s(),f=b(z().wholeMenus,!0),c=T(()=>M(f)),v=H(c.value),x=t=>{m.value.filter(t)},V=(t,a)=>u(a.meta.title).indexOf(t)!==-1;return(t,a)=>{const k=o("el-link"),y=o("el-input"),C=o("el-tree-v2"),g=o("el-card");return w(),B(g,null,{header:n(()=>[l("div",R,[l("span",q,[d(" 菜单树结构（采用element-plus的 "),i(k,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:e(N)(e(P)),style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:n(()=>[d(" Tree V2 ")]),_:1},8,["icon"]),d(" 组件并支持国际化） ")])])]),default:n(()=>[i(y,{class:"mb-4",modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=r=>p.value=r),placeholder:"请输入关键字查找",clearable:"",onInput:x},null,8,["modelValue"]),i(C,{ref_key:"treeRef",ref:m,data:e(c),props:_.value,"show-checkbox":"",height:500,"filter-method":V,"default-expanded-keys":e(v)},{default:n(({data:r})=>[l("span",null,I(e(u)(r.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}});export{te as default};
