(function(t){function e(e){for(var r,s,o=e[0],l=e[1],u=e[2],m=0,f=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("router-view")],1)],1)},i=[],s={name:"App",data:function(){return{}}},o=s,l=(n("5c0b"),n("2877")),u=n("6544"),c=n.n(u),m=n("7496"),f=n("a75b"),p=Object(l["a"])(o,a,i,!1,null,null,null),h=p.exports;c()(p,{VApp:m["a"],VContent:f["a"]});var d=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-center":""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",[t._v("number-game")])]),n("v-flex",{attrs:{xs12:"","mt-3":""}},[n("router-link",{attrs:{to:{name:"sologame"}}},[n("v-btn",{attrs:{width:"10rem",color:"info"}},[t._v("ソロ")])],1)],1),n("v-flex",{attrs:{xs12:"","mt-3":""}},[n("router-link",{attrs:{to:{name:"multitop"}}},[n("v-btn",{attrs:{width:"10rem",color:"info",disabled:!0}},[t._v("マルチ")])],1),n("br"),t._v("※準備中 ")],1),n("v-flex",{attrs:{xs12:"","mt-3":""}},[n("router-link",{attrs:{to:{name:"history"}}},[n("v-btn",{attrs:{width:"10rem",color:"info"}},[t._v("ソロ履歴")])],1)],1)],1)],1)},b=[],y={},_=y,g=n("8336"),x=n("a523"),w=n("0e8f"),O=n("a722"),j=Object(l["a"])(_,v,b,!1,null,null,null),k=j.exports;c()(j,{VBtn:g["a"],VContainer:x["a"],VFlex:w["a"],VLayout:O["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-center":""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[t.modal?n("Modal",{on:{close:t.closeModal}},[n("p",[t._v(t._s(t.modalMessage))]),n("v-btn",{attrs:{color:"info"},on:{click:t.closeModal}},[t._v("閉じる")])],1):t._e(),n("v-flex",{attrs:{xs12:""}},[n("AlertArea",{attrs:{"alert-type":"info",message:t.infoMessage}}),n("AlertArea",{attrs:{"alert-type":"error",message:t.errorMessage}})],1),n("v-flex",{attrs:{xs12:""}},[n("h1",[t._v("４桁の数字を入力してください")])]),n("v-flex",{attrs:{xs12:"","mt-3":""}},[n("router-link",{attrs:{to:{name:"top"}}},[n("v-btn",{attrs:{width:"10rem",color:"info"},on:{click:t.clear}},[t._v("トップへ")])],1)],1),n("v-flex",{attrs:{xs6:"",sm4:"",md2:"","mt-10":""}},[n("NumberInput",{ref:"numberInput",attrs:{isFinished:t.isFinished},on:{submit:t.submit}})],1),n("v-flex",{attrs:{xs12:"","mt-3":""}},[n("HintList")],1)],1)],1)},H=[],E=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.$store.state.hints,(function(e){return n("HintListItem",t._b({key:e.id},"HintListItem",e,!1))})),1)},$=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v(t._s(t.id)+" : "+t._s(t.num))]),n("span",{staticClass:"ml-5"},[t._v("blow : "+t._s(t.blow))]),n("span",{staticClass:"ml-5"},[t._v("hit : "+t._s(t.hit))])])},C=[],V={props:["id","num","blow","hit"]},P=V,A=Object(l["a"])(P,N,C,!1,null,null,null),L=A.exports,S={components:{HintListItem:L}},F=S,B=Object(l["a"])(F,I,$,!1,null,null,null),T=B.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.message?n("v-alert",{attrs:{border:"left","colored-border":"",type:t.alertType,elevation:"2"}},[t._v(" "+t._s(t.message)+" ")]):t._e()},q=[],W={props:{alertType:{type:String,default:"info",required:!0},message:{type:String,default:"",required:!1}}},z=W,G=n("0798"),J=Object(l["a"])(z,D,q,!1,null,null,null),R=J.exports;c()(J,{VAlert:G["a"]});var Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-text-field",{staticClass:"display-1",attrs:{maxlength:"4",solo:"","single-line":"",disabled:t.isFinished},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.inputNum,callback:function(e){t.inputNum=e},expression:"inputNum"}}),n("v-btn",{attrs:{width:"10rem",color:"info",disabled:t.isFinished},on:{click:t.submit}},[t._v("決定")])],1)},K=[],U={props:{isFinished:{type:Boolean,default:!1}},data:function(){return{inputNum:""}},methods:{submit:function(){this.$emit("submit",this.inputNum)},clear:function(){this.inputNum=""}}},Z=U,Q=n("8654"),X=Object(l["a"])(Z,Y,K,!1,null,null,null),tt=X.exports;c()(X,{VBtn:g["a"],VTextField:Q["a"]});var et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal",appear:""}},[n("div",{staticClass:"modal modal-overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[n("div",{staticClass:"modal-window"},[n("div",{staticClass:"modal-content"},[t._t("default")],2)])])])},nt=[],rt=(n("5ad3"),{}),at=Object(l["a"])(rt,et,nt,!1,null,"47d496a3",null),it=at.exports,st=(n("caad"),n("fb6a"),n("ac1f"),n("2532"),n("1276"),{methods:{makeEnemy:function(){var t=!1,e="";while(!t)e=String(Math.floor(1e4*Math.random())),e=("0000"+e).slice(-4),t=this.checkOnlyNum(e);return e},countBlow:function(t,e){for(var n=0,r=0;r<4;r++)t.includes(e.charAt(r))&&n++;return n},countHit:function(t,e){for(var n=0,r=0;r<4;r++)t.charAt(r)==e.charAt(r)&&n++;return n},makeHint:function(t,e){var n={};return n.num=e,n.blow=this.countBlow(t,e),n.hit=this.countHit(t,e),n},makeInfoMessage:function(t){return"入力："+t.num+",  blow："+t.blow+",  hit："+t.hit},checkInputNum:function(t){return t?4!=t.length?"4文字で入力してください":/\D/g.test(t)?"数字を入力してください":this.checkOnlyNum(t)?"":"同じ数字は一つまでです":"数字を入力してください"},checkOnlyNum:function(t){for(var e=0;e<10;e++)if(t.split(e).length-1>1)return!1;return!0},checkFinish:function(t){return 4==t.hit}}}),ot=n("2f62");function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach((function(e){Object(E["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ct={components:{HintList:T,AlertArea:R,NumberInput:tt,Modal:it},mixins:[st],data:function(){return{hint:{},enemyNum:"",infoMessage:"",errorMessage:"",isFinished:!1,modalMessage:"",modal:!1}},methods:ut({submit:function(t){this.clearMessage(),this.errorMessage=this.checkInputNum(t),this.errorMessage||(this.hint=this.makeHint(this.enemyNum,t),this.infoMessage=this.makeInfoMessage(this.hint),this.addHint(this.hint),this.$refs.numberInput.clear()),this.checkFinish(this.hint)&&(this.isFinished=!0,this.addHistory({answer:this.enemyNum,count:this.hintCount}),this.modalMessage="おめでとう！\n答え："+this.enemyNum+"\n入力回数："+this.hintCount,this.openModal()),this.hint={}},clear:function(){this.clearMessage(),this.clearHint()},clearMessage:function(){this.infoMessage="",this.errorMessage=""},openModal:function(){this.modal=!0},closeModal:function(){this.modal=!1}},Object(ot["b"])(["addHint","clearHint","addHistory"])),created:function(){this.enemyNum=this.makeEnemy()},computed:ut({},Object(ot["c"])(["hintCount"]))},mt=ct,ft=Object(l["a"])(mt,M,H,!1,null,null,null),pt=ft.exports;c()(ft,{VBtn:g["a"],VContainer:x["a"],VFlex:w["a"],VLayout:O["a"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"text-center":""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",[t._v("履歴")])]),n("v-flex",{attrs:{xs12:"","mt-3":""}},[n("router-link",{attrs:{to:{name:"top"}}},[n("v-btn",{attrs:{width:"10rem",color:"info"}},[t._v("トップへ")])],1)],1),n("v-flex",{attrs:{xs12:"","mt-3":""}},[n("HistoryList")],1)],1)],1)},dt=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.$store.state.histories,(function(e){return n("HistoryListItem",t._b({key:e.id},"HistoryListItem",e,!1))})),1)},bt=[],yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v(t._s(t.id)+" : ")]),n("span",{staticClass:"ml-5"},[t._v("答え ： "+t._s(t.answer))]),n("span",{staticClass:"ml-5"},[t._v("入力回数 : "+t._s(t.count))])])},_t=[],gt={props:["id","answer","count"]},xt=gt,wt=Object(l["a"])(xt,yt,_t,!1,null,null,null),Ot=wt.exports,jt={components:{HistoryListItem:Ot}},kt=jt,Mt=Object(l["a"])(kt,vt,bt,!1,null,null,null),Ht=Mt.exports,Et={components:{HistoryList:Ht}},It=Et,$t=Object(l["a"])(It,ht,dt,!1,null,null,null),Nt=$t.exports;c()($t,{VBtn:g["a"],VContainer:x["a"],VFlex:w["a"],VLayout:O["a"]});var Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("MultiTop")])},Vt=[],Pt={},At=Object(l["a"])(Pt,Ct,Vt,!1,null,null,null),Lt=At.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("MultiWait")])},Ft=[],Bt={},Tt=Object(l["a"])(Bt,St,Ft,!1,null,null,null),Dt=Tt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("MultiGame")])},Wt=[],zt={},Gt=Object(l["a"])(zt,qt,Wt,!1,null,null,null),Jt=Gt.exports;r["a"].use(d["a"]);var Rt=new d["a"]({mode:"history",base:"",routes:[{path:"/",name:"top",component:k},{path:"/sologame",name:"sologame",component:pt},{path:"/history",name:"history",component:Nt},{path:"/multitop",name:"multitop",component:Lt},{path:"/multiwait",name:"multiwait",component:Dt},{path:"/multigame",name:"multigame",component:Jt}]});r["a"].use(ot["a"]);var Yt=new ot["a"].Store({state:{hints:[],histories:[]},mutations:{addHint:function(t,e){e.id=t.hints.length+1,t.hints.push(e)},clearHint:function(t){t.hints=[]},addHistory:function(t,e){e.id=t.histories.length+1,t.histories.push(e)}},actions:{addHint:function(t,e){var n=t.commit;n("addHint",e)},clearHint:function(t){var e=t.commit;e("clearHint")},addHistory:function(t,e){var n=t.commit;n("addHistory",e)}},getters:{hintCount:function(t){return t.hints?t.hints.length:0}}}),Kt=n("f309");r["a"].use(Kt["a"]);var Ut=new Kt["a"]({icons:{iconfont:"mdi"}}),Zt=n("8aa5"),Qt=n.n(Zt);r["a"].config.productionTip=!1;var Xt={apiKey:"AIzaSyCSEWy48qaEmutbavBhrcrpWiI6x0hDsNY",authDomain:"number-game-3b7b4.firebaseapp.com",databaseURL:"https://number-game-3b7b4.firebaseio.com",projectId:"number-game-3b7b4",storageBucket:"number-game-3b7b4.appspot.com",messagingSenderId:"1087258322294",appId:"1:1087258322294:web:e13504ef5619a5ad2d0657",measurementId:"G-TZEY4MRB8P"};Qt.a.initializeApp(Xt),Qt.a.analytics(),new r["a"]({router:Rt,store:Yt,vuetify:Ut,render:function(t){return t(h)}}).$mount("#app")},"5ad3":function(t,e,n){"use strict";var r=n("c7e0"),a=n.n(r);a.a},"5c0b":function(t,e,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(t,e,n){},c7e0:function(t,e,n){}});
//# sourceMappingURL=app.5c7e30e2.js.map