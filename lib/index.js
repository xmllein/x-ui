!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["x-ui"]=n(require("vue")):e["x-ui"]=n(e.Vue)}(self,(e=>(()=>{"use strict";var n={744:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,t]of n)o[e]=t;return o}},789:n=>{n.exports=e}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{t.r(r),t.d(r,{default:()=>p});var e=t(789),n={key:0,class:"x-icon-loading"},o={key:2};const i=(0,e.defineComponent)({name:"XButton",props:{type:{type:String,default:"primary",vaildator:function(e){return["primary","warning","danger","default","info","success"].includes(e)}},icon:{type:String,default:""},disabled:Boolean,loading:Boolean,round:Boolean},emits:["click"],setup:function(n,o){return{classs:(0,e.computed)((function(){return["x-button","x-button--"+n.type,{"is-disabled":n.disabled,"is-loading":n.loading,"is-round":n.round}]})),icon:n.icon,handleClick:function(e){console.log("inner"),o.emit("click",e)}}}});var l=t(744);const c=(0,l.Z)(i,[["render",function(t,r,i,l,c,a){return(0,e.openBlock)(),(0,e.createElementBlock)("button",{class:(0,e.normalizeClass)(t.classs),onClick:r[0]||(r[0]=function(){return t.handleClick&&t.handleClick.apply(t,arguments)})},[t.loading?((0,e.openBlock)(),(0,e.createElementBlock)("i",n)):(0,e.createCommentVNode)("v-if",!0),!t.loading&&t.icon?((0,e.openBlock)(),(0,e.createElementBlock)("i",{key:1,class:(0,e.normalizeClass)(t.icon)},null,2)):(0,e.createCommentVNode)("v-if",!0),t.$slots.default?((0,e.openBlock)(),(0,e.createElementBlock)("span",o,[(0,e.renderSlot)(t.$slots,"default")])):(0,e.createCommentVNode)("v-if",!0)],2)}]]);c.install=function(e){e.component(c.name,c)};const a=c,s=(0,e.defineComponent)({name:"XIcon",props:{name:{type:String,default:""}},setup:function(){return{}}}),u=(0,l.Z)(s,[["render",function(n,o,t,r,i,l){return(0,e.openBlock)(),(0,e.createElementBlock)("i",{class:(0,e.normalizeClass)("x-icon-".concat(n.name))},(0,e.toDisplayString)(n.name),3)}]]);u.install=function(e){e.component(u.name,u)};var d=[a,u];const p={install:function(e){d.forEach((function(n){e.component(n.name,n)}))}}})(),r})()));