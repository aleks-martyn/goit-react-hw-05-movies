"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{7093:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});var r,a,c,u,i,o,s,p=e(5861),d=e(9439),f=e(4687),l=e.n(f),h=e(2791),x=e(7689),v=e(4390),g=e(695),m=e(168),Z=e(5706),w=Z.Z.div(r||(r=(0,m.Z)(["\n  margin-top: 30px;\n  padding-right: 80px;\n  padding-left: 80px;\n  padding-bottom: 40px;\n"]))),_=Z.Z.h3(a||(a=(0,m.Z)(["\n  text-align: center;\n"]))),k=Z.Z.ul(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  margin-top: 30px;\n  align-items: center;\n"]))),y=Z.Z.li(u||(u=(0,m.Z)(["\n  width: calc((100% - 4 * 40px) / 5);\n  height: 350px;\n  word-wrap: break-word;\n"]))),S=Z.Z.div(i||(i=(0,m.Z)(["\n  margin-top: 20px;\n"]))),j=Z.Z.h4(o||(o=(0,m.Z)(["\n  margin-bottom: 10px;\n"]))),b=Z.Z.p(s||(s=(0,m.Z)(["\n  margin-top: 20px;\n  text-align: center;\n"]))),E=e(184),C=function(){var n=(0,x.UO)().movieId,t=(0,h.useState)([]),e=(0,d.Z)(t,2),r=e[0],a=e[1],c=(0,h.useState)("pending"),u=(0,d.Z)(c,2),i=u[0],o=u[1],s=(0,h.useState)(null),f=(0,d.Z)(s,2),m=f[0],Z=f[1];return(0,h.useEffect)((function(){var t=function(){var n=(0,p.Z)(l().mark((function n(t){var e,r;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.uV)(t);case 3:e=n.sent,r=e.cast,a(r),o("resolved"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),Z(n.t0),o("rejected");case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}();t(n)}),[n]),(0,E.jsxs)(E.Fragment,{children:["pending"===i&&(0,E.jsx)(g.Z,{}),"rejected"===i&&(0,E.jsx)("h3",{children:m.message}),"resolved"===i&&(0,E.jsxs)(w,{children:[(0,E.jsx)(_,{children:"Cast"}),r.length?(0,E.jsx)(k,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,E.jsxs)(y,{children:[e?(0,E.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(e),alt:"".concat(r)}):(0,E.jsx)("img",{src:"https://via.placeholder.com/185x278?text=No+Image",alt:"".concat(r)}),(0,E.jsxs)(S,{children:[(0,E.jsx)(j,{children:r}),(0,E.jsxs)("p",{children:["Character: ",a]})]})]},t)}))}):(0,E.jsx)(b,{children:"We don't have any information about the cast yet."})]})]})}},4390:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return l},Mc:function(){return d},_k:function(){return s},uV:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3",o={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY,s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=93.ee9ce0f6.chunk.js.map