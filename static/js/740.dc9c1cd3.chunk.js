"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{740:function(n,e,r){r.r(e),r.d(e,{default:function(){return Q}});var t,a,i,o,s=r(433),c=r(861),p=r(439),l=r(757),u=r.n(l),d=r(87),x=r(791),f=r(534),h=r(218),m=r(168),g=r(924),b=g.ZP.div(t||(t=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 15px;\n"]))),v=g.ZP.form(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 400px;\n  background-color: #f2f2f2;\n  border-radius: 25px;\n  padding: 5px 10px;\n  margin: 20px 0 20px 0;\n"]))),w=g.ZP.input(i||(i=(0,m.Z)(["\n  flex: 1;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  font-size: 16px;\n"]))),Z=g.ZP.button(o||(o=(0,m.Z)(["\n  border: none;\n  background-color: #fce38a;\n  /* color: white; */\n  padding: 8px 15px;\n  border-radius: 25px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n  color: darkgray;\n"]))),y=r(184),j=function(){var n,e=(0,d.lr)(),r=(0,p.Z)(e,2),t=r[0],a=r[1],i=null!==(n=t.get("searchQuery"))&&void 0!==n?n:"";return(0,y.jsx)(b,{children:(0,y.jsxs)(v,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),""!==n.target.elements.searchQuery.value.trim()?(a({searchQuery:n.target.elements.searchQuery.value}),n.currentTarget.reset()):h.ZP.error("You didnt enter anything")},children:[(0,y.jsx)(w,{type:"text",placeholder:"Enter movie name...",name:"searchQuery",defaultValue:i}),(0,y.jsx)(Z,{type:"submit",children:"Search"})]})})},k=r(174),P=r(639),_=r(137),Q=function(){var n=(0,x.useState)([]),e=(0,p.Z)(n,2),r=e[0],t=e[1],a=(0,x.useState)(!1),i=(0,p.Z)(a,2),o=i[0],l=i[1],m=(0,d.lr)(),g=(0,p.Z)(m,1)[0].get("searchQuery");return(0,x.useEffect)((function(){if(g){var n=function(){var n=(0,c.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,(0,f.vw)(g);case 4:if(e=n.sent,t((0,s.Z)(e.results)),e.results.length){n.next=8;break}return n.abrupt("return",h.ZP.error("Sorry, there are no movies matching your search query. Please try again"));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log("Error",n.t0.message);case 13:return n.prev=13,l(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[g]),(0,y.jsxs)("div",{children:[o&&(0,y.jsx)(P.a,{children:(0,y.jsx)(_.NB,{visible:!0,height:"180",width:"180",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}),(0,y.jsx)(j,{}),(0,y.jsx)(k.O,{movies:r})]})}},639:function(n,e,r){r.d(e,{a:function(){return a}});var t=r(184),a=function(n){var e=n.children;return(0,t.jsx)("div",{className:"loader-container",children:e})}},174:function(n,e,r){r.d(e,{O:function(){return b}});var t,a,i,o,s,c=r(689),p=r(168),l=r(87),u=r(924),d=(0,u.ZP)(l.rU)(t||(t=(0,p.Z)(["\n  text-decoration: none;\n  text-align: center;\n"]))),x=u.ZP.ul(a||(a=(0,p.Z)(["\n  list-style-type: none;\n  display: grid;\n  max-width: calc(100vw - 65px);\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  grid-gap: 15px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and (min-width: 768px) {\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));\n    grid-gap: 40px;\n  }\n"]))),f=u.ZP.li(i||(i=(0,p.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  border: 1px solid black;\n  overflow: hidden;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),h=u.ZP.img(o||(o=(0,p.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),m=u.ZP.p(s||(s=(0,p.Z)(["\n  font-size: 12px;\n  font-weight: 700;\n  color: black;\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    font-weight: 700;\n  }\n"]))),g=r(184),b=function(n){var e=n.movies,r=(0,c.TH)();return(0,g.jsx)(x,{children:e.map((function(n){return(0,g.jsx)(f,{children:(0,g.jsxs)(d,{to:"/movies/".concat(n.id),state:{from:r},children:[(0,g.jsx)(h,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://mishanonoo.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_500x750_crop_center.gif",alt:n.title}),(0,g.jsx)(m,{children:n.title})]})},n.id)}))})}}}]);
//# sourceMappingURL=740.dc9c1cd3.chunk.js.map