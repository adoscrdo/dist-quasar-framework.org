(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82,95],{SBuD:function(i,t,s){"use strict";s.r(t);var a=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("q-page",{staticClass:"docs-touch row justify-center",attrs:{padding:""}},[s("div",{staticStyle:{width:"500px","max-width":"90vw"}},[s("p",{staticClass:"caption"},[s("span",{staticClass:"desktop-only"},[i._v("Swipe with your mouse")]),s("span",{staticClass:"mobile-only"},[i._v("Swipe")]),i._v("\n      on the area below to see it in action.\n    ")]),s("div",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe",value:i.handleSwipe,expression:"handleSwipe"}],staticClass:"custom-area row flex-center"},[i.info?s("div",{staticClass:"custom-info"},[s("pre",[i._v(i._s(i.info))])]):s("div",{staticClass:"text-center"},[s("q-icon",{attrs:{name:"arrow_upward"}}),s("div",{staticClass:"row items-center"},[s("q-icon",{attrs:{name:"arrow_back"}}),s("div",[i._v("Swipe in any direction")]),s("q-icon",{attrs:{name:"arrow_forward"}})],1),s("q-icon",{attrs:{name:"arrow_downward"}})],1)]),s("p",{staticClass:"caption"},[i._v("\n      Swipe works both with a mouse or a native touch action.\n      "),s("br"),i._v("You can also capture swipe to certain directions (any) only as you'll see below.\n    ")]),s("p",{staticClass:"caption"},[i._v("Example on capturing only swipe to right:")]),s("div",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.right",value:i.swipeToRight,expression:"swipeToRight",modifiers:{right:!0}}],staticClass:"custom-area row flex-center"},[i.infoRight?s("div",{staticClass:"custom-info"},[s("pre",[i._v(i._s(i.infoRight))])]):s("div",[i._v("\n        Swipe to right only\n        "),s("q-icon",{attrs:{name:"arrow_forward"}})],1)]),s("p",{staticClass:"caption"},[i._v("Example on capturing only swipe up and right:")]),s("div",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.up.right",value:i.swipeToCustom,expression:"swipeToCustom",modifiers:{up:!0,right:!0}}],staticClass:"custom-area row flex-center"},[i.infoCustom?s("div",{staticClass:"custom-info"},[s("pre",[i._v(i._s(i.infoCustom))])]):s("div",{staticClass:"text-center"},[s("q-icon",{attrs:{name:"arrow_upward"}}),s("div",{staticClass:"row items-center"},[s("div",[i._v("Swipe up or right")]),s("q-icon",{attrs:{name:"arrow_forward"}})],1)],1)]),s("p",{staticClass:"caption"},[i._v("For desktops, you can configure to avoid capturing mouse swipes if you wish.")])])])},o=[];a._withStripped=!0;s("mT6g");var e={data:function(){return{info:null,infoRight:null,infoCustom:null}},methods:{handleSwipe:function(i){var t=i.direction,s=i.duration,a=i.distance;i.evt;this.info={direction:t,duration:s,distance:a}},swipeToRight:function(i){var t=i.direction,s=i.duration,a=i.distance;this.infoRight={direction:t,duration:s,distance:a}},swipeToCustom:function(i){var t=i.direction,s=i.duration,a=i.distance;this.infoCustom={direction:t,duration:s,distance:a}}}},n=e,r=s("KHd+"),c=Object(r["a"])(n,a,o,!1,null,null,null);c.options.__file="touch-swipe.vue";t["default"]=c.exports},mT6g:function(i,t,s){}}]);