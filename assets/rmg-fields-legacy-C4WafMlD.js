System.register(["./chakra-legacy-cMMHz91Y.js","./react-legacy-DU2QtADs.js","./index-legacy-CIjuO3H9.js"],(function(e,a){"use strict";var n,r,i,t,l,s,o,u,d,c,h;return{setters:[e=>{n=e.a3,r=e.j,i=e.c,t=e.F,l=e.aR},e=>{s=e.r},e=>{o=e.j,u=e.m,d=e.n,c=e.o,h=e.i}],execute:function(){e("R",(function(e){var n=e.fields,i=e.noLabel,p=e.minW;return r.jsx(t,{wrap:"wrap",children:n.map((function(e,n){if(e.hidden)return r.jsx(s.Fragment,{},n);var t=e.minW||p,v="full"===t;return r.jsx(o,{className:v?"mw-full":"",label:e.label,flex:v?void 0:1,minW:v?void 0:t,noLabel:i,oneLine:e.oneLine,helper:e.helper,errorMessage:e.errorMessage,children:function(e){switch(e.type){case"input":return r.jsx(h,{placeholder:e.placeholder,defaultValue:e.value,type:e.variant,validator:e.validator,onDebouncedChange:e.onChange,delay:e.debouncedDelay,optionList:e.optionList,isDisabled:e.isDisabled});case"output":return r.jsx(a,{noWrap:e.noWrap,children:e.value});case"textarea":return r.jsx(c,{placeholder:e.placeholder,defaultValue:e.value,onDebouncedChange:e.onChange,isDisabled:e.isDisabled});case"slider":return r.jsx(d,{defaultValue:e.value,min:e.min,max:e.max,step:e.step,onThrottledChange:e.onChange,leftIcon:e.leftIcon,rightIcon:e.rightIcon,isDisabled:e.isDisabled});case"select":return r.jsx(u,{defaultValue:e.value,onChange:function(a){var n,r=a.target.value;return null===(n=e.onChange)||void 0===n?void 0:n.call(e,"number"==typeof e.value?Number(r):r.toString())},options:e.options,disabledOptions:e.disabledOptions,isInvalid:e.isInvalid,isDisabled:e.isDisabled});case"switch":return r.jsx(l,{isChecked:e.isChecked,isDisabled:e.isDisabled,onChange:function(a){var n,r=a.target.checked;return null===(n=e.onChange)||void 0===n?void 0:n.call(e,r)}});case"custom":return e.component;default:return r.jsx("div",{})}}(e)},n)}))})}));var a=function(e){var a=e.children,t=e.noWrap,l=n("RmgOutput",{noWrap:t});return r.jsx(i.output,{sx:l,children:a})}}}}));
