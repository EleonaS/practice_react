(this.webpackJsonppractice_react=this.webpackJsonppractice_react||[]).push([[0],{44:function(t,n,e){},90:function(t,n,e){"use strict";e.r(n);var c,i,r,o,a,s,l,d=e(0),u=e.n(d),j=e(33),b=e.n(j),h=(e(44),e(3)),f=e(34),p=e(22),O=e(9),g=function(t){return t.map((function(t){return{id:t.id,title:t.title,img:t.backdrop_path,text:t.overview,isWatched:!1}}))},x=e(7),m=e(8),v=m.a.h2(c||(c=Object(x.a)(["\ncolor: tomato;"]))),k=m.a.li(i||(i=Object(x.a)(["\ncursor:pointer;\nheight:400px;\n  &:hover  "," {\n  color: blue;\n  font-size:28px;\n}\n"])),v),w=m.a.div(r||(r=Object(x.a)(["\nposition:fixed;\ntop: 0;\nleft:0;\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items: center;\n\nwidth:100%;\nheight: 100vh;\nbackground-color: gray;\n"]))),y=m.a.span(o||(o=Object(x.a)(["\n  display: block;\n  margin-top: 10px;\n  padding: 5px;\n  background-color: #fff;\n  color: tomato;\n  text-align: center;\n  border: 3px solid black;\n  cursor: pointer;\n"]))),C=e(11),S=e(1),F=function(t){var n=t.title,e=t.img,c=t.id,i=t.isWatched,r=t.onClick,o=(t.text,t.onStatusClick),a=Object(h.h)().url;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(e),alt:n,onClick:function(){return r(e)}}),Object(S.jsx)(v,{children:n}),Object(S.jsx)(C.b,{to:"".concat(a,"/").concat(c),children:"About film"}),Object(S.jsxs)("p",{onClick:function(){return o(c)},children:["Is movie watched:",Object(S.jsx)(y,{children:"".concat(i)})]})]})},E=m.a.ul(a||(a=Object(x.a)(["\nlist-style:none;\ndisplay: grid;\ngrid-template-columns:repeat(3,1fr);\ngap: 30px;\npadding-left: 0;\n\n\n"]))),_=function(t){var n=t.movies,e=t.onClick,c=t.onStatusClick;return Object(S.jsx)(E,{children:n.map((function(t){var n=t.id,i=t.title,r=t.img,o=t.text,a=t.isWatched;return Object(S.jsx)(k,{children:Object(S.jsx)(F,{id:n,title:i,img:r,isWatched:a,text:o,onClick:e,onStatusClick:c})},n)}))})},W=m.a.div(s||(s=Object(x.a)(["\nwidth:1240px;\nmargin-left:auto;\nmargin-right: auto;"]))),I=function(t){var n=t.children;return Object(S.jsx)(W,{children:n})},L=function(t){var n=t.img,e=t.onClick;Object(d.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.addEventListener("keydown",c)}}));var c=function(t){27===t.keyCode&&e()};return Object(S.jsx)(w,{onClick:e,children:Object(S.jsx)("img",{src:"https://image.tmdb.org/t/p/w780/".concat(n),alt:""})})},T=m.a.button(l||(l=Object(x.a)(["\ndisplay: block;\nmargin-left: auto;\nmargin-right: auto;\n  \n  width: 200px;\n  padding: 5px 10px;\n  cursor: pointer;\n  border: 2px solid green;\n  border-radius: 7px;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: black;\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    border-color: gray;\n    color: green;\n    font-weight: 600;\n    background-color: white;\n  }\n"]))),z=function(t){var n=t.onClick;return Object(S.jsx)(T,{type:"button",onClick:n,children:"Load more"})},B=e(39),D=e.n(B),J=function(){return Object(S.jsx)("div",{children:Object(S.jsx)(D.a,{type:"ThreeDots",color:"pink",height:100,width:100,timeout:1e4})})},P=e(21),A=e.n(P),H="https://api.themoviedb.org/3",M="e51fa7aa1819bb081f9c2dbbae1f5e9d";function q(){var t=Object(d.useState)(1),n=Object(O.a)(t,2),e=n[0],c=n[1],i=Object(d.useState)([]),r=Object(O.a)(i,2),o=r[0],a=r[1],s=Object(d.useState)(""),l=Object(O.a)(s,2),u=l[0],j=l[1],b=Object(d.useState)(!1),h=Object(O.a)(b,2),x=h[0],m=h[1];Object(d.useEffect)((function(){m(!0),function(t){return A.a.get(H+"/trending/movie/day"+"?page=".concat(t,"&api_key=").concat(M))}(e).then((function(t){var n=t.data;a((function(t){return[].concat(Object(p.a)(t),Object(p.a)(g(n.results)))}))})).catch((function(t){return console.log(t)})).finally((function(){m(!1),e>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}),[e]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(I,{children:o.length>0&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(_,{movies:o,onClick:function(t){return j(t)},onStatusClick:function(t){var n,e=[],c=Object(f.a)(o);try{for(c.s();!(n=c.n()).done;){var i=n.value;i.id===t?(i.isWatched=!i.isWatched,e.push(i)):e.push(i)}}catch(r){c.e(r)}finally{c.f()}a(e)}}),Object(S.jsx)(z,{onClick:function(){c((function(t){return t+1}))}})]})}),x&&Object(S.jsx)(J,{}),u&&Object(S.jsx)(L,{img:u,onClick:function(){return j("")}})]})}var G=function(){var t=Object(h.g)().filmId,n=Object(d.useState)([]),e=Object(O.a)(n,2),c=e[0],i=e[1];return Object(d.useEffect)((function(){var n;(n=t,A.a.get(H+"/movie/".concat(n,"?api_key=").concat(M))).then((function(t){var n=t.data;return i(n)}))}),[t]),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{children:[Object(S.jsxs)("h1",{children:["Film name: ",c.title]}),Object(S.jsx)("p",{children:c.release_date}),Object(S.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(c.poster_path),alt:c.title}),Object(S.jsx)("p",{children:c.overview})]})})};var K=function(){return Object(S.jsxs)(h.d,{children:[Object(S.jsx)(h.b,{path:"/films",exact:"",children:Object(S.jsx)(q,{})}),Object(S.jsx)(h.b,{path:"/films/:filmId",children:Object(S.jsx)(G,{})}),Object(S.jsx)(h.a,{from:"/",to:"/films"})]})},N=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,91)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;e(t),c(t),i(t),r(t),o(t)}))};b.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(C.a,{children:Object(S.jsx)(K,{})})}),document.getElementById("root")),N()}},[[90,1,2]]]);
//# sourceMappingURL=main.02b1342d.chunk.js.map