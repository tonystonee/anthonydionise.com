(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{297:function(t,n,e){"use strict";e.r(n);var o=e(144),r=e.n(o),l={head:function(){return{title:"Anthony Dionise | Github Contributions",meta:[{hid:"description",name:"description",content:"Anthony's Github Contributions and Noteable forks."}]}},data:function(){return{forks:null,contributions:[{name:"DefinleyTyped",link:"https://github.com/DefinitelyTyped/DefinitelyTyped"}]}},mounted:function(){this.$_getForks()},methods:{$_getForks:function(){var t="".concat("https://api.github.com").concat("/users/tonystonee/repos?type=fork"),n=this;r.a.get(t).then(function(t){var e=t.data.filter(function(t){return t.fork&&t.homepage});n.forks=e})}}},c=e(40),h=e(113),f=e.n(h),_=e(108),v=e(109),d=e(102),k=e(103),m=e(100),component=Object(c.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",{staticClass:"px-4 pb-2"},[t._v("\n    Contributions\n  ")]),t._v(" "),e("v-list",{staticClass:"mb-3"},t._l(t.contributions,function(n){return e("v-list-tile",{key:n.name,attrs:{target:"__blank",href:n.link}},[t._v("\n      "+t._s(n.name)+"\n    ")])}),1),t._v(" "),e("h2",{staticClass:"px-4 pb-2"},[t._v("\n    Notable Forks\n  ")]),t._v(" "),t.forks?e("v-list",{staticClass:"mb-3"},t._l(t.forks,function(n){return e("v-list-tile",{key:n.name,attrs:{target:"__blank",href:n.homepage}},[t._v("\n      "+t._s(n.name)+"\n    ")])}),1):e("v-progress-circular",{staticClass:"mx-5",attrs:{size:70,width:7,color:"purple",indeterminate:""}}),t._v(" "),e("v-btn",{attrs:{color:"purple",target:"__blank",href:"https://github.com/tonystonee"}},[t._v("\n    Find Me on Github!\n    "),e("v-icon",{attrs:{right:""}},[t._v("\n      fab fa-github\n    ")])],1)],1)},[],!1,null,null,null);n.default=component.exports;f()(component,{VBtn:_.a,VIcon:v.a,VList:d.a,VListTile:k.a,VProgressCircular:m.a})}}]);