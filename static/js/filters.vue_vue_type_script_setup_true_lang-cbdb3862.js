import{h as _,r as g,a3 as s,j as b,k as v,D as o,x as l,B as n,C as x}from"./runtime-core.esm-bundler-1f6332ae.js";const C=_({__name:"filters",setup(y){const c=g(),d=e=>{const{clearFilter:t}=c.value.getTableRef();t(e)},i=()=>{d(["date"])},m=[{label:"日期",prop:"date",sortable:!0,columnKey:"date",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],filterMethod:(e,t,a)=>{const r=a.property;return t[r]===e}},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"标签",prop:"tag",filters:[{text:"Home",value:"Home"},{text:"Office",value:"Office"}],filterMethod:(e,t)=>t.tag===e,filterPlacement:"bottom-end",slot:"tag"}],p=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Home"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",tag:"Office"}];return(e,t)=>{const a=s("el-button"),r=s("el-tag"),u=s("pure-table");return b(),v("div",null,[o(a,{onClick:i},{default:l(()=>[n("reset date filter")]),_:1}),o(a,{onClick:d},{default:l(()=>[n("reset all filters")]),_:1}),o(u,{ref_key:"tableRef",ref:c,"row-key":"date",data:p,columns:m},{tag:l(({row:f})=>[o(r,{type:f.tag==="Home"?"":"success","disable-transitions":""},{default:l(()=>[n(x(f.tag),1)]),_:2},1032,["type"])]),_:1},512)])}}});export{C as _};
