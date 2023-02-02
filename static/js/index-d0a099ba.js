import{useRole as L}from"./hook-9c7b80ab.js";import{R as N,D as P,P as j}from"./refresh-37031de3.js";import{u as i}from"./hooks-57129334.js";import{M as E}from"./more-filled-c44d3178.js";import{d as O}from"./edit-pen-37b5ced2.js";import{S as q}from"./search-4b9e88d3.js";import{d as G}from"./menu-a4fe64fb.js";import{A as H}from"./add-circle-line-5b89a592.js";import{h as v,r as J,a3 as n,j as K,k as Q,D as o,x as l,u as e,B as c,n as k}from"./runtime-core.esm-bundler-1f6332ae.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";import"./message-ceee817c.js";import"./index-e24b4c59.js";import"./vue.runtime.esm-bundler-7c6ab200.js";import"./runtime-dom.esm-bundler-7421a035.js";import"./index-3b260c80.js";import"./style-8cd62612.js";import"./index-70a76fbd.js";import"./index-17991776.js";import"./system-86e9d98d.js";import"./index-55efa545.js";import"./vue-i18n.runtime.esm-bundler-789c3ea9.js";import"./hot-18a7c2fd.js";import"./index-27e55737.js";import"./multiTags-9a5f9fae.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-82e8a5de.js";import"./index-9d8f4bd6.js";import"./scroll-fff7de09.js";import"./epTheme-93edc034.js";import"./index-e84875e6.js";const X={width:24,height:24,body:'<path fill="currentColor" d="M5 12.5c0 .313.461.858 1.53 1.393C7.914 14.585 9.877 15 12 15c2.123 0 4.086-.415 5.47-1.107c1.069-.535 1.53-1.08 1.53-1.393v-2.171C17.35 11.349 14.827 12 12 12s-5.35-.652-7-1.671V12.5zm14 2.829C17.35 16.349 14.827 17 12 17s-5.35-.652-7-1.671V17.5c0 .313.461.858 1.53 1.393C7.914 19.585 9.877 20 12 20c2.123 0 4.086-.415 5.47-1.107c1.069-.535 1.53-1.08 1.53-1.393v-2.171zM3 17.5v-10C3 5.015 7.03 3 12 3s9 2.015 9 4.5v10c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5zm9-7.5c2.123 0 4.086-.415 5.47-1.107C18.539 8.358 19 7.813 19 7.5c0-.313-.461-.858-1.53-1.393C16.086 5.415 14.123 5 12 5c-2.123 0-4.086.415-5.47 1.107C5.461 6.642 5 7.187 5 7.5c0 .313.461.858 1.53 1.393C7.914 9.585 9.877 10 12 10z"/>'},Y=X,Z={class:"main"},ee=v({name:"Role"}),oe=v({...ee,setup(le){const d=J(),{form:p,loading:u,columns:w,dataList:x,pagination:V,buttonClass:_,onSearch:f,resetForm:S,handleUpdate:C,handleDelete:R,handleSizeChange:z,handleCurrentChange:$,handleSelectionChange:D}=L();return(te,a)=>{const g=n("el-input"),m=n("el-form-item"),h=n("el-option"),B=n("el-select"),r=n("el-button"),M=n("el-form"),U=n("el-popconfirm"),b=n("el-dropdown-item"),T=n("el-dropdown-menu"),A=n("el-dropdown"),F=n("pure-table");return K(),Q("div",Z,[o(M,{ref_key:"formRef",ref:d,inline:!0,model:e(p),class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:l(()=>[o(m,{label:"角色名称：",prop:"name"},{default:l(()=>[o(g,{modelValue:e(p).name,"onUpdate:modelValue":a[0]||(a[0]=t=>e(p).name=t),placeholder:"请输入角色名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),o(m,{label:"角色标识：",prop:"code"},{default:l(()=>[o(g,{modelValue:e(p).code,"onUpdate:modelValue":a[1]||(a[1]=t=>e(p).code=t),placeholder:"请输入角色标识",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(m,{label:"状态：",prop:"status"},{default:l(()=>[o(B,{modelValue:e(p).status,"onUpdate:modelValue":a[2]||(a[2]=t=>e(p).status=t),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:l(()=>[o(h,{label:"已开启",value:"1"}),o(h,{label:"已关闭",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(m,null,{default:l(()=>[o(r,{type:"primary",icon:e(i)(e(q)),loading:e(u),onClick:e(f)},{default:l(()=>[c(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(r,{icon:e(i)(e(N)),onClick:a[3]||(a[3]=t=>e(S)(d.value))},{default:l(()=>[c(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(j),{title:"角色列表",onRefresh:e(f)},{buttons:l(()=>[o(r,{type:"primary",icon:e(i)(e(H))},{default:l(()=>[c(" 新增角色 ")]),_:1},8,["icon"])]),default:l(({size:t,checkList:I})=>[o(F,{border:"","align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(u),size:t,data:e(x),columns:e(w),checkList:I,pagination:e(V),paginationSmall:t==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onSelectionChange:e(D),onSizeChange:e(z),onCurrentChange:e($)},{operation:l(({row:s})=>[o(r,{class:"reset-margin",link:"",type:"primary",size:t,icon:e(i)(e(O)),onClick:y=>e(C)(s)},{default:l(()=>[c(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(U,{title:"是否确认删除?"},{reference:l(()=>[o(r,{class:"reset-margin",link:"",type:"primary",size:t,icon:e(i)(e(P)),onClick:y=>e(R)(s)},{default:l(()=>[c(" 删除 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1024),o(A,null,{dropdown:l(()=>[o(T,null,{default:l(()=>[o(b,null,{default:l(()=>[o(r,{class:k(e(_)),link:"",type:"primary",size:t,icon:e(i)(e(G))},{default:l(()=>[c(" 菜单权限 ")]),_:2},1032,["class","size","icon"])]),_:2},1024),o(b,null,{default:l(()=>[o(r,{class:k(e(_)),link:"",type:"primary",size:t,icon:e(i)(e(Y))},{default:l(()=>[c(" 数据权限 ")]),_:2},1032,["class","size","icon"])]),_:2},1024)]),_:2},1024)]),default:l(()=>[o(r,{class:"ml-3 mt-[2px]",link:"",type:"primary",size:t,icon:e(i)(e(E)),onClick:y=>e(C)(s)},null,8,["size","icon","onClick"])]),_:2},1024)]),_:2},1032,["loading","size","data","columns","checkList","pagination","paginationSmall","header-cell-style","onSelectionChange","onSizeChange","onCurrentChange"])]),_:1},8,["onRefresh"])])}}});const Ie=W(oe,[["__scopeId","data-v-65e0870c"]]);export{Ie as default};
