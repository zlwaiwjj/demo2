import{S as c}from"./sortable.esm-679e0872.js";import{d as i}from"./index-e24b4c59.js";import{a as b}from"./data-6ba43d89.js";import{r,o as d,I as t}from"./runtime-core.esm-bundler-1f6332ae.js";import"./vue.runtime.esm-bundler-7c6ab200.js";import"./runtime-dom.esm-bundler-7421a035.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";function _(){const p=r(i(b,!0)),e=r([{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}]),l=r([{label:"ID",prop:o=>e.value[o].prop},{label:"日期",prop:o=>e.value[o].prop},{label:"姓名",prop:o=>e.value[o].prop}]),n=o=>{o.preventDefault(),t(()=>{const m=document.querySelector(".el-table__header-wrapper tr");c.create(m,{animation:300,delay:0,onEnd:({newIndex:s,oldIndex:a})=>{const u=e.value[a];e.value.splice(a,1),e.value.splice(s,0,u)}})})};return d(()=>{t(()=>{n(event)})}),{columns:l,dataList:p,columnsDrag:e}}export{_ as useColumns};
