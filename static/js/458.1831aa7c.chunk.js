"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[458],{6815:function(n,e,t){t.d(e,{Fg:function(){return g},H:function(){return v},HC:function(){return h},NZ:function(){return d},PP:function(){return l},aV:function(){return x}});var r,a,c,u,o,i,s=t(168),p=t(5706),f=t(1087),l=p.Z.section(r||(r=(0,s.Z)(["\n  padding-right: 40px;\n  padding-left: 40px;\n"]))),d=p.Z.h2(a||(a=(0,s.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n  color: grey;\n"]))),x=p.Z.ul(c||(c=(0,s.Z)(["\n  list-style: disc;\n  color: #0c6aad;\n"]))),h=p.Z.li(u||(u=(0,s.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),g=(0,p.Z)(f.rU)(o||(o=(0,s.Z)(["\n  font-size: 20px;\n  color: #0c6aad;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: blue;\n    border-bottom: 1px solid blue;\n  }\n"]))),v=p.Z.h4(i||(i=(0,s.Z)(["\n  color: #000;\n"])))},5458:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,c,u=t(5861),o=t(9439),i=t(4687),s=t.n(i),p=t(2791),f=t(1087),l=t(7689),d=t(695),x=t(4390),h=t(168),g=t(5706),v=g.Z.form(r||(r=(0,h.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),m=g.Z.input(a||(a=(0,h.Z)(["\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 8px;\n  margin-right: 15px;\n  font-size: 16px;\n"]))),b=g.Z.button(c||(c=(0,h.Z)(["\n  padding: 6px 15px;\n  color: #fff;\n  background-color: #2196f3;\n  border: 0;\n  border-radius: 3px;\n\n  font-size: 16px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #188ce8;\n  }\n"]))),Z=t(184),y=function(n){var e=n.onSubmit;return(0,Z.jsxs)(v,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,r=t.elements.query.value;""!==r.trim()?(e(r),t.reset()):alert("Enter a search query!")},children:[(0,Z.jsx)(m,{name:"query",type:"text",placeholder:"Search movies"}),(0,Z.jsx)(b,{type:"submit",children:"Search"})]})},k=t(6815),w=function(){var n=(0,p.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,f.lr)(),c=(0,o.Z)(a,2),i=c[0],h=c[1],g=(0,p.useState)(null),v=(0,o.Z)(g,2),m=v[0],b=v[1],w=(0,p.useState)("idle"),j=(0,o.Z)(w,2),S=j[0],_=j[1],q=(0,l.TH)();(0,p.useEffect)((function(){var n,e=null!==(n=i.get("query"))&&void 0!==n?n:"";if(e){_("pending");var t=function(){var n=(0,u.Z)(s().mark((function n(){var t,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.E3)(e);case 3:t=n.sent,a=t.results,r(a),_("resolved"),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(0),b(n.t0),_("rejected");case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();t()}}),[i]);return(0,Z.jsx)("main",{children:(0,Z.jsxs)(k.PP,{children:[(0,Z.jsx)(y,{onSubmit:function(n){h({query:n}),r([]),b(null),_("idle")}}),"pending"===S&&(0,Z.jsx)(d.Z,{}),"rejected"===S&&(0,Z.jsx)("h3",{children:m.message}),"resolved"===S&&(0,Z.jsxs)(k.aV,{children:[t&&0===t.length&&(0,Z.jsx)(k.H,{children:"Nothing was found for this query."}),t.map((function(n){var e=n.id,t=n.title;return(0,Z.jsx)(k.HC,{children:(0,Z.jsx)(k.Fg,{to:"/movies/".concat(e),state:{from:q},children:t})},e)}))]})]})})}},4390:function(n,e,t){t.d(e,{E3:function(){return p},Hx:function(){return d},Mc:function(){return f},_k:function(){return s},uV:function(){return l}});var r=t(5861),a=t(4687),c=t.n(a),u=t(1243),o="https://api.themoviedb.org/3",i="404ca53f902a08bf3140e0fd0ad0a560",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=458.1831aa7c.chunk.js.map