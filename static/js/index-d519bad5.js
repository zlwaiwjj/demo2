import{v as h}from"./runtime-dom.esm-bundler-7421a035.js";import F from"./Card-db22dc0f.js";import{g as U}from"./index-55efa545.js";import{m as $}from"./message-ceee817c.js";import{_ as E}from"./DialogForm.vue_vue_type_script_setup_true_lang-593baabd.js";import{u as O}from"./hooks-57129334.js";import{S as q}from"./search-4b9e88d3.js";import{A as R}from"./add-circle-line-5b89a592.js";import{A as X}from"./index-9d8f4bd6.js";import{h as y,r as s,o as G,a3 as l,ad as H,j as i,k as m,l as J,D as o,x as u,B as K,u as v,y as d,F as C,X as Q,A as W,v as Y,I as Z}from"./runtime-core.esm-bundler-1f6332ae.js";import"./more-2-fill-0341ae67.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-e24b4c59.js";import"./vue.runtime.esm-bundler-7c6ab200.js";import"./vue-i18n.runtime.esm-bundler-789c3ea9.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-18a7c2fd.js";import"./index-27e55737.js";import"./multiTags-9a5f9fae.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-82e8a5de.js";import"./index-70a76fbd.js";import"./index-3b260c80.js";import"./style-8cd62612.js";import"./index-17991776.js";import"./index-e84875e6.js";import"./scroll-fff7de09.js";const ee=g=>U.request("post","/getCardList",{data:g}),te={class:"main"},ae={class:"w-full flex justify-between mb-4"},oe=y({name:"ListCard"}),Be=y({...oe,setup(g){const w=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,x={name:"",status:"",description:"",type:"",mark:""},e=s({current:1,pageSize:12,total:0}),p=s([]),f=s(!0),L=async()=>{try{const{data:t}=await ee();p.value=t.list,e.value={...e.value,total:t.list.length}}catch{}finally{setTimeout(()=>{f.value=!1},500)}};G(()=>{L()});const c=s(!1),_=s({...x}),r=s(""),z=t=>{e.value.pageSize=t,e.value.current=1},S=t=>{e.value.current=t},b=t=>{X.confirm(t?`确认删除后${t.name}的所有产品信息将被清空, 且无法恢复`:"","提示",{type:"warning"}).then(()=>{$("删除成功",{type:"success"})}).catch(()=>{})},k=t=>{c.value=!0,Z(()=>{_.value={...t,status:t!=null&&t.isSetup?"1":"0"}})};return(t,n)=>{const I=l("el-button"),A=l("IconifyIconOffline"),D=l("el-icon"),V=l("el-input"),B=l("el-empty"),M=l("el-col"),P=l("el-row"),N=l("el-pagination"),T=H("loading");return i(),m("div",te,[J("div",ae,[o(I,{icon:v(O)(v(R)),onClick:n[0]||(n[0]=a=>c.value=!0)},{default:u(()=>[K(" 新建产品 ")]),_:1},8,["icon"]),o(V,{style:{width:"300px"},modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=a=>r.value=a),placeholder:"请输入产品名称",clearable:""},{suffix:u(()=>[o(D,{class:"el-input__icon"},{default:u(()=>[d(o(A,{icon:v(q)},null,8,["icon"]),[[h,r.value.length===0]])]),_:1})]),_:1},8,["modelValue"])]),d((i(),m("div",{"element-loading-svg":w,"element-loading-svg-view-box":"-10, -10, 50, 50"},[d(o(B,{description:"暂无数据"},null,512),[[h,p.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(a=>a.name.toLowerCase().includes(r.value.toLowerCase())).length===0]]),e.value.total>0?(i(),m(C,{key:0},[o(P,{gutter:16},{default:u(()=>[(i(!0),m(C,null,Q(p.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(a=>a.name.toLowerCase().includes(r.value.toLowerCase())),(a,j)=>(i(),Y(M,{key:j,xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[o(F,{product:a,onDeleteItem:b,onManageProduct:k},null,8,["product"])]),_:2},1024))),128))]),_:1}),o(N,{class:"float-right",currentPage:e.value.current,"onUpdate:currentPage":n[2]||(n[2]=a=>e.value.current=a),"page-size":e.value.pageSize,total:e.value.total,"page-sizes":[12,24,36],background:!0,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:z,onCurrentChange:S},null,8,["currentPage","page-size","total"])],64)):W("",!0)])),[[T,f.value]]),o(E,{visible:c.value,"onUpdate:visible":n[3]||(n[3]=a=>c.value=a),data:_.value},null,8,["visible","data"])])}}});export{Be as default};
