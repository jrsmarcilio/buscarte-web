(this.webpackJsonpbuscarte_redux=this.webpackJsonpbuscarte_redux||[]).push([[0],{178:function(n,e){n.exports=function(n){var e=n.toLowerCase().replace(/(?:^|\s)\S/g,(function(n){return n.toUpperCase()})),t=e.split(" "),i=t[0]+" "+t[1];return 1===t.length?e:t[1].split("").length<=3?(t[1]=t[1].toLowerCase(),t.join(" ")):i}},415:function(n,e,t){"use strict";t.r(e);var i,r,o,a,c,s,l,d,p,x,b,j,h=t(1),u=t.n(h),f=t(36),g=t.n(f),m=(t(193),t(5)),O={colors:{background:"#F5FAFE",text:"#FFFFFF",primary:"#5786b6",light:"#89b6e8",dark:"#0A223D"}},w=t(6),y=Object(m.b)(i||(i=Object(w.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n body {\n  background-color: #fafafa;\n  -webkit-font-smooth: antialiased;\n }\n\n html, body, #root {\n   height: 100%;\n }\n\n * {\n   margin: 0;\n   padding: 0;\n   outline: 0;\n   box-sizing: border-box;\n }\nbody, input, button {\n  font-family: Roboto, sans-serif;\n}\n"]))),v=t(28),k=t(10),z=t(25),C=t.n(z),A=t(37),N=t(20),E=t(177),F=t.n(E).a.create({baseURL:"https://buscarte-server.herokuapp.com/"}),S=m.c.div(r||(r=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n  margin-top: 45px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  h3 {\n    font-family: Poly;\n    font-size: 36px;\n    line-height: 43px;\n\n    text-align: center;\n\n    color: #333333;\n\n    span {\n      display: inline-block;\n      border-bottom: 1px solid #0052cc;\n      padding-bottom: 2px;\n    }\n  }\n"]))),_=m.c.div(o||(o=Object(w.a)(["\n  width: 45%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n\n  button {\n    padding: 9px;\n    font-size: 18px;\n    cursor: pointer;\n\n    background: transparent;\n    border: none;\n    text-decoration: none;\n    text-align: center;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n\n    :hover {\n      font-weight: bold;\n      color: #0052cc;\n    }\n\n    :focus {\n      font-weight: bold;\n      color: rgb(0, 82, 204);\n\n      border-bottom: 1px solid #0052cc;\n      font-size: 18px;\n      font-family: Poly;\n    }\n  }\n"]))),P=m.c.div(a||(a=Object(w.a)(["\n  overflow-y: scroll;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 7px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    border-radius: 6px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background: rgba(0, 0, 0, 0.3);\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  width: 69vw;\n  height: 75vh;\n\n  position: relative;\n\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n\n  margin-top: 20px;\n  padding: 30px;\n\n  background: #eee;\n\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n\n\n  a {\n    text-decoration: none;\n    color: #000;\n  }\n"]))),G=m.c.div(c||(c=Object(w.a)(["\n  width: 240px;\n  height: 240px;\n\n  margin: 5px;\n\n  background: #fff;\n  border-radius: 4px;\n\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\n  .img-holder {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      position: absolute;\n      width: 150px;\n      height: auto;\n    }\n  }\n\n  aside {\n    display: flex;\n    flex-flow: column wrap;\n  }\n\n  :hover {\n    background: #E1EDFF;\n    cursor: pointer;\n    border: 1px solid #0052cc;\n  }\n"]))),I=m.c.div(s||(s=Object(w.a)(["\n  margin-left: 15px;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #919191;\n  border: 4px solid #eeeeee;\n"]))),T=m.c.aside(l||(l=Object(w.a)(["\n  display: inline-block;\n  border-bottom: 1.5px solid #0052cc;\n  padding: 2px;\n  font-size: 18px;\n\n  font-family: Poly;\n"]))),M=t(178),L=t.n(M),B=t(2),R=function(n){var e=n.artistas,t=Object(h.useState)([]),i=Object(N.a)(t,2),r=i[0],o=i[1],a=Object(h.useState)("Todos"),c=Object(N.a)(a,2),s=c[0],l=c[1];return Object(h.useEffect)((function(){o(e)}),[e]),Object(h.useEffect)((function(){var n=e.filter((function(n){return n.Artista_categorium.Categorium.titulo==="".concat(s)}));o("Todos"===s?e:n)}),[s]),Object(B.jsxs)(S,{children:[Object(B.jsx)("h3",{children:Object(B.jsx)("span",{children:"Artistas"})}),Object(B.jsxs)(_,{children:[Object(B.jsx)("button",{onClick:function(){return l("Todos")},children:" Todos "}),Object(B.jsx)("button",{onClick:function(){return l("Artista")},children:" Artistas "}),Object(B.jsx)("button",{onClick:function(){return l("Pintor")},children:" Pintores "}),Object(B.jsx)("button",{onClick:function(){return l("Escultor")},children:" Escultores "}),Object(B.jsx)("button",{onClick:function(){return l("Grafiteiro")},children:" Grafiteiros "}),Object(B.jsx)("button",{onClick:function(){return l("Ceramista")},children:" Ceramistas "}),Object(B.jsx)("button",{onClick:function(){return l("Gravurista")},children:" Gravuristas "}),Object(B.jsx)("button",{onClick:function(){return l("Muralista")},children:" Muralistas "}),Object(B.jsx)("button",{onClick:function(){return l("Poeta")},children:" Poetas "})]}),Object(B.jsx)(P,{children:r.map((function(n){return Object(B.jsx)(v.b,{to:{pathname:"/artistas/".concat(n.id_artista)},children:Object(B.jsxs)(G,{children:[n.foto?Object(B.jsx)("div",{className:"img-holder",children:Object(B.jsx)("img",{src:n.foto,alt:"Foto de perfil do artista ".concat(n.nome)})}):Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(I,{})}),Object(B.jsxs)("aside",{children:[Object(B.jsx)("span",{children:n.Artista_categorium&&n.Artista_categorium.Categorium?n.Artista_categorium.Categorium.titulo:"Artista"}),Object(B.jsx)(T,{children:Object(B.jsx)("strong",{children:L()(n.nome)})})]})]})})}))})]})},q=Object(h.memo)(R),D=t(418),J=t(419),U=t(181),Z=t(420),H=t.p+"static/media/Logo.2f2c1da9.svg",K=t.p+"static/media/loupe.fc6d805a.svg",Y=m.c.div(d||(d=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n\n  height: 60px;\n  width: 100%;\n  margin: auto;\n\n  background-color: #fafafa;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n\n  nav {\n    width: 67%;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    width: 150px;\n    display: flex;\n    margin: auto;\n    justify-content: center;\n  }\n\n  form {\n    button {\n      width: 70px;\n      height: 30px;\n      display: flex;\n      margin: auto;\n      justify-content: center;\n      font-size: 12px;\n      color: transparent;\n      background: url(",") no-repeat content-box padding-box center;\n    }\n\n    input {\n      width: 150px;\n      height: 30px;\n      ::placeholder {\n        font-size: 12px;\n      }\n    }\n  }\n\n  @media (max-width: 800px) {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n\n    img {\n      width: 150px;\n      display: flex;\n      margin: auto;\n      justify-content: center;\n    }\n\n    form {\n      button {\n        width: 60px;\n        height: 30px;\n        display: flex;\n        margin: auto;\n        justify-content: center;\n        font-size: 12px;\n      }\n\n      input {\n        width: 150px;\n        height: 30px;\n        ::placeholder {\n          font-size: 12px;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 576px) {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n\n    img {\n      width: 100px;\n      display: flex;\n      margin: auto;\n      justify-content: center;\n    }\n\n    form {\n      button {\n        width: 50px;\n        height: 30px;\n        display: flex;\n        margin: auto;\n        justify-content: center;\n        font-size: 9px;\n        color: transparent;\n        background: url(",") no-repeat content-box padding-box center;\n      }\n\n      input {\n        width: 90px;\n        height: 30px;\n\n        ::placeholder {\n          font-size: 9px;\n        }\n      }\n    }\n\n    @media (max-width: 375px) {\n      display: flex;\n      margin: auto;\n      justify-content: center;\n\n      img {\n        width: 80px;\n        display: flex;\n        margin: auto;\n        justify-content: center;\n      }\n\n      form {\n        button {\n          width: 30px;\n          height: 20px;\n          display: flex;\n          margin: auto;\n          justify-content: center;\n          font-size: 6px;\n          color: transparent;\n          background: url(",") no-repeat content-box padding-box center;\n        }\n\n        input {\n          width: 70px;\n          height: 20px;\n\n          ::placeholder {\n            font-size: 7px;\n          }\n        }\n      }\n    }\n  }\n"])),K,K,K),Q=function(){return Object(B.jsx)(Y,{children:Object(B.jsxs)(D.a,{bg:"light",expand:"lg",className:"d-flex",children:[Object(B.jsxs)(D.a.Brand,{href:"/",children:[Object(B.jsx)("img",{src:H,height:"30",className:"d-inline-block align-top",alt:"Buscarte logo"})," "]}),Object(B.jsxs)(J.a,{className:"d-flex",children:[Object(B.jsx)(U.a,{type:"text",placeholder:"Pesquisa Buscarte",className:"mr-2"})," ",Object(B.jsx)(Z.a,{variant:"outline-dark",children:"Pesquisar"})]})]})})},V=m.c.section(p||(p=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 25vh;\n\n  img {\n    border-radius: 5px;\n    width: 100%;\n    height: auto;\n\n    position: absolute;\n    object-fit: cover;\n    image-rendering: auto;\n\n    align-items: center;\n    \n  }\n\n  .sombreamento {\n    width: 100vw;\n    height: 25vh;\n\n    position: absolute;\n    z-index: 1;\n    background: rgba(10, 34, 61, 0.5);\n  }\n\n  .slides {\n    /* max-width: 1360px; */\n    width: 100%;\n    height: 100%;\n    position: relative;\n    /* border-radius: 50px; */\n  }\n\n  .active {\n    display: inline-block;\n  }\n\n  .inactive {\n    display: none;\n  }\n"]))),W=m.c.div(x||(x=Object(w.a)(["\n  width: 100%;\n  position: absolute;\n  display: flex;\n\n  justify-content: center;\n  align-items: flex-end;\n  bottom: 20px;\n\n  .dot {\n    cursor: pointer;\n    height: 0.5rem;\n    width: 0.5rem;\n    margin: 0 5px;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 50%;\n    display: inline-block;\n    z-index: +1;\n  }\n\n  .active-dot,\n  .dot:hover {\n    background-color: #fff;\n  }\n"]))),X=m.c.div(b||(b=Object(w.a)(["\n  span {\n    width: 3rem;\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .prev,\n  .next {\n    cursor: pointer;\n    position: absolute;\n    padding: 1rem;\n    top: 38%;\n    margin-top: --3rem;\n    z-index: +1;\n    color: #fff;\n  }\n\n  .prev:hover,\n  .next:hover {\n    color: white;\n    transition: all 0.5s ease-in;\n    background-color: rgba(0, 0, 0, 0.6);\n    border-radius: 100%;\n  }\n\n  .prev {\n    left: 2%;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  .next {\n    right: 2%;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n"]))),$=m.c.div(j||(j=Object(w.a)(["\n  width: 100%;\n  height: 25vh;\n  position: relative;\n  overflow: hidden;\n\n  justify-content: flex-start;\n  align-items: center;\n\n"]))),nn=function(n){return Object(B.jsxs)(X,{children:[Object(B.jsx)("span",{className:"prev",onClick:n.prevSlide,children:" \u276e "}),Object(B.jsx)("span",{className:"next",onClick:n.nextSlide,children:" \u276f "})]})},en=t.p+"static/media/slide01-50.2ea5e756.jpg",tn=t.p+"static/media/slide02-50.617d4dde.jpg",rn=t.p+"static/media/slide03-50.dcd877c1.jpg",on=[{title:"First Slide",description:"This is the First Slider of our Carousel",urls:"".concat(en)},{title:"Second Slide",description:"This is the second Slider of our Carousel",urls:"".concat(tn)},{title:"Third Slide",description:"This is the third Slider of our Carousel",urls:"".concat(rn)}];var an,cn,sn,ln,dn,pn,xn,bn,jn,hn,un,fn,gn,mn,On,wn,yn,vn=function(n){return Object(B.jsx)(W,{children:on.map((function(e,t){return Object(B.jsx)("span",{className:"".concat(n.activeIndex===t?"dot active-dot":"dot"),onClick:function(e){return n.onClick(e.target.value=t)}},t)}))})},kn=function(n){return Object(B.jsx)(V,{children:on.map((function(e,t){return Object(B.jsxs)("div",{className:t===n.activeIndex?"slides active":"inactive",children:[Object(B.jsx)("span",{className:"sombreamento"}),Object(B.jsx)("img",{src:e.urls,alt:""})]},t)}))})},zn=on.length-1,Cn=function(){var n=Object(h.useState)(0),e=Object(N.a)(n,2),t=e[0],i=e[1];return Object(h.useEffect)((function(){var n=setInterval((function(){i(t===zn?0:t+1)}),3e3);return function(){return clearInterval(n)}}),[t]),Object(B.jsxs)($,{children:[Object(B.jsx)(kn,{activeIndex:t}),Object(B.jsx)(nn,{prevSlide:function(){return i(t<1?zn:t-1)},nextSlide:function(){return i(t===zn?0:t+1)}}),Object(B.jsx)(vn,{activeIndex:t,onClick:function(n){return i(n)}})]})},An=t(30),Nn=function(n){var e=n.latitude,t=n.longitude,i={lat:e,lng:t},r=Object(An.withScriptjs)(Object(An.withGoogleMap)((function(n){return Object(B.jsx)(An.GoogleMap,{defaultZoom:18,defaultCenter:{lat:e,lng:t},children:Object(B.jsx)(An.Marker,{position:i})})})));return Object(B.jsx)(r,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyC3bP0tG9rhAjx36eKw05uoo2qZ9LeGB9s&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(B.jsx)("div",{style:{height:450,width:740,opacity:1,transition:"opacity 500ms ease-in"}}),containerElement:Object(B.jsx)("div",{style:{height:450,width:740,opacity:1,transition:"opacity 500ms ease-in"}}),mapElement:Object(B.jsx)("div",{style:{height:450,width:740,borderRadius:8,opacity:1,transition:"opacity 500ms ease-in"}})})},En=Object(h.memo)(Nn),Fn=m.c.div(an||(an=Object(w.a)(["\n  margin-top: 45px;\n\n  h3 {\n    font-family: Poly;\n    font-size: 36px;\n    line-height: 43px;\n\n    text-align: center;\n\n    color: #333333;\n\n    span {\n      display: inline-block;\n      border-bottom: 1px solid #0052cc;\n      padding-bottom: 2px;\n    }\n  }\n"]))),Sn=m.c.div(cn||(cn=Object(w.a)(["\n  width: 70%;\n\n  display: flex;\n  justify-content: space-between;\n  margin: 38px auto;\n"]))),_n=m.c.div(sn||(sn=Object(w.a)(["\n  width: 740px;\n  height: 450px;\n\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n"]))),Pn=m.c.div(ln||(ln=Object(w.a)(["\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 7px;\n  }\n\n  ::-webkit-scrollbar-track {\n    border-radius: 6px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background: rgba(0, 0, 0, 0.3);\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  width: 550px;\n  height: 450px;\n\n  background: #eee;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n"]))),Gn=m.c.div(dn||(dn=Object(w.a)(['\n  width: 100%;\n  height: 130px;\n\n  margin: 10px 10px 0 10px;\n  padding-left: 20px;\n\n  background: #fff;\n  border-radius: 4px;\n\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\n  .btn-atelie {\n    z-index: +5;\n  }\n\n  .text-holder {\n    width: 270px;\n    padding: 20px;\n\n    aside {\n      font-size: 18px;\n    }\n\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: flex-start;\n  }\n\n  .img-holder {\n    width: 90px;\n    height: 90px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      border: 4px solid #eeeeee;\n      position: absolute;\n      width: 100px;\n      height: auto;\n    }\n  }\n\n  a {\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n\n    text-decoration: none;\n    background: #5786b6;\n    width: 130px;\n    height: 30px;\n\n    border-radius: 8px 0 0 8px;\n    color: #fff;\n\n    font-size: 14px;\n    font-weight: bold;\n\n    :hover {\n      cursor: pointer;\n      background: #225986;\n    }\n  }\n\n  :hover {\n    background: #e1edff;\n    cursor: url(\'data:image/svg+xml;utf8,<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>\'),\n      auto;\n    border: 1px solid #0052cc;\n  }\n']))),In=m.c.div(pn||(pn=Object(w.a)(["\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n  background: #919191;\n  border: 4px solid #eeeeee;\n"]))),Tn=function(){var n=Object(h.useState)(-8.11208),e=Object(N.a)(n,2),t=e[0],i=e[1],r=Object(h.useState)(-35.0154),o=Object(N.a)(r,2),a=o[0],c=o[1],s=Object(h.useState)([]),l=Object(N.a)(s,2),d=l[0],p=l[1];Object(h.useEffect)((function(){function n(){return(n=Object(A.a)(C.a.mark((function n(){var e;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.get("/atelie");case 2:if(null!==(e=n.sent).data){n.next=5;break}return n.abrupt("return",console.error(new Error));case 5:p(e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(h.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(n){i(n.coords.latitude),c(n.coords.longitude)}))}),[]);return Object(B.jsxs)(Fn,{children:[Object(B.jsx)("h3",{children:Object(B.jsx)("span",{children:"Ateli\xeas nas proximidades"})}),Object(B.jsxs)(Sn,{children:[Object(B.jsx)(_n,{children:Object(B.jsx)(En,{latitude:t,longitude:a})}),Object(B.jsx)(Pn,{children:d.map((function(n){return Object(B.jsxs)(Gn,{onClick:function(e){return t=n.latitude,r=n.longitude,i(t),void c(r);var t,r},children:[Object(B.jsxs)("aside",{style:{display:"flex",alignItems:"center"},children:[Object(B.jsx)("div",{className:"img-holder",children:n.Artista_foto_atelie?Object(B.jsx)("img",{src:n.Artista_foto_atelie.Foto_atelie.descricao,alt:"Foto de perfil do Ateli\xea ".concat(n.name)}):Object(B.jsx)(In,{})}),Object(B.jsxs)("div",{className:"text-holder",children:[Object(B.jsx)("strong",{children:n.nome}),Object(B.jsx)("span",{children:"".concat(n.rua,", ").concat(n.numero,", ").concat(n.bairro)})]})]}),Object(B.jsx)(v.b,{className:"btn-atelie",to:{pathname:"/atelie/".concat(n.id_atelie)},children:"Acessar Perfil"})]},n.id_atelie)}))})]})]})},Mn=Object(h.memo)(Tn),Ln=m.c.div(xn||(xn=Object(w.a)(["\n  width: 100%;\n  height: 948px;\n\n  /* #00d8e0 */\n\n  /* border Image = 6px solid #eee */\n"]))),Bn=function(){var n=Object(h.useState)([]),e=Object(N.a)(n,2),t=e[0],i=e[1];return Object(h.useEffect)((function(){function n(){return(n=Object(A.a)(C.a.mark((function n(){var e;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.get("/artistas");case 2:if(null!==(e=n.sent).data){n.next=5;break}return n.abrupt("return",console.error(new Error));case 5:i(e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(Ln,{children:[Object(B.jsx)(Q,{}),Object(B.jsx)(Cn,{}),Object(B.jsx)(Mn,{})]}),Object(B.jsx)(Ln,{children:Object(B.jsx)(q,{artistas:t})})]})},Rn=Object(h.memo)(Bn),qn=m.c.div(bn||(bn=Object(w.a)(["\n  h3 {\n    font-family: Poly;\n    font-size: 36px;\n    line-height: 43px;\n\n    text-align: center;\n\n    color: #333333;\n\n    span {\n      display: inline-block;\n      border-bottom: 1px solid #0052cc;\n      padding-bottom: 2px;\n    }\n  }\n"]))),Dn=function(n){var e=n.title;return Object(B.jsx)(qn,{children:Object(B.jsx)("h3",{children:Object(B.jsx)("span",{children:e})})})},Jn=m.c.div(jn||(jn=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n\n  border-radius: 8px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n"]))),Un=m.c.div(hn||(hn=Object(w.a)(["\n  width: 30%;\n  height: 85%;\n  margin: 20px;\n\n  background: #fff;\n  border-radius: 4px;\n\n  display: flex;\n  flex-flow: row wrap;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n"]))),Zn=m.c.div(un||(un=Object(w.a)(["\n  width: 60%;\n  height: 85%;\n\n  margin: 20px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n"]))),Hn=m.c.div(fn||(fn=Object(w.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-items: center;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\n  .info-img-nome {\n    justify-content: center;\n    align-items: center;\n  }\n\n  .img-holder {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      position: absolute;\n      width: 150px;\n      height: auto;\n    }\n  }\n\n  h3 {\n    text-align: center;\n\n    margin-top: 10px;\n    font-size: 28px;\n  }\n\n  aside {\n    display: flex;\n    flex-flow: column wrap;\n  }\n"]))),Kn=(m.c.div(gn||(gn=Object(w.a)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: space-around;\n\n  .img-holder {\n    margin: 0 auto;\n    width: 150px;\n    height: 150px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      position: absolute;\n      width: 150px;\n      height: auto;\n    }\n  }\n\n  h3 {\n    text-align: center;\n\n    margin-top: 10px;\n    font-size: 28px;\n  }\n\n  aside {\n    display: flex;\n    flex-flow: column wrap;\n  }\n\n  .aside-ArtItem {\n    span {\n      margin-top: 15px;\n    }\n  }\n"]))),m.c.div(mn||(mn=Object(w.a)(["\n  margin-left: 15px;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #919191;\n  border: 4px solid #eeeeee;\n"])))),Yn=(m.c.aside(On||(On=Object(w.a)(["\n  display: inline-block;\n  border-bottom: 1.5px solid #0052cc;\n  padding: 2px;\n  font-size: 18px;\n\n  font-family: Poly;\n"]))),m.c.div(wn||(wn=Object(w.a)(["\n  width: 60%;\n  height: 85%;\n\n  margin: 20px;\n\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: flex-start;\n\n  background: #fff;\n  border-radius: 4px;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\n  aside {\n    width: 90%;\n    padding: 30px;\n    margin: 0 auto;\n  }\n  span {\n    font-size: 21px;\n    padding: 30px;\n  }\n"]))),m.c.div(yn||(yn=Object(w.a)(["\n  width: 67vw;\n  height: 70vh;\n\n  display: flex;\n  justify-content: space-between;\n  /* flex-direction: row; */\n\n  font-family: Poly;\n  font-style: normal;\n  font-weight: normal;\n\n  aside {\n    width: 38.7vh;\n    height: 100%;\n\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n\n    .perfil-content {\n      width: 100%;\n      height: 39vh;\n\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      flex-direction: column;\n    }\n\n    .img-holder {\n      margin-top: 25px;\n      width: 200px;\n      height: 200px;\n      position: relative;\n      overflow: hidden;\n      border-radius: 100%;\n      border: 4px solid #225986;\n\n      img {\n        position: absolute;\n        width: 250px;\n        height: auto;\n      }\n    }\n\n    .nome-holder {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: column;\n      text-align: center;\n\n      span {\n        font-size: 21px;\n        color: #225986;\n      }\n\n      strong {\n        width: 240px;\n        margin-top: 5px;\n        font-size: 26px;\n        color: #225986;\n      }\n    }\n\n    .divider-hr {\n      width: 200px;\n      height: 2px;\n\n      background: #bdbdbd;\n    }\n\n    .perfil-links {\n      width: 100%;\n      height: 31vh;\n\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-start;\n      text-align: start;\n      flex-direction: column;\n\n      padding: 20px 50px;\n\n      a {\n        text-decoration: none;\n        font-size: 21px;\n        color: #225986;\n        padding: 8px 20px;\n        margin-top: 5px;\n\n        :hover {\n          background: #e1edff;\n          cursor: pointer;\n          border: 1px solid #0052cc;\n          border-radius: 4px;\n        }\n      }\n\n      svg {\n        margin-right: 10px;\n        color: #225986;\n        font-size: 26px;\n      }\n    }\n  }\n\n  article {\n    width: 920px;\n    height: 100%;\n\n    .sobre-content {\n      width: 100%;\n      height: 37vh;\n\n      display: flex;\n      flex-wrap: wrap;\n\n      padding: 50px;\n\n      h3 {\n        font-size: 36px;\n        color: #0a223d;\n      }\n      span {\n        color: #0a223d;\n        font-size: 24px;\n        padding: -50px;\n      }\n    }\n\n    .infor-content {\n      /* width: 100%; */\n      height: 33vh;\n\n      padding-left: 50px;\n\n      display: flex;\n      justify-content: flex-start;\n      flex-wrap: wrap;\n\n      .titulo-items {\n        justify-content: flex-start;\n\n        span {\n          margin-bottom: 20px;\n          font-weight: bold;\n          font-size: 18px;\n        }\n      }\n\n      .infor-items {\n        justify-content: flex-start;\n        span {\n          margin-bottom: 20px;\n          font-size: 18px;\n        }\n      }\n\n      .info-end {\n        width: 300px;\n        flex-wrap: wrap;\n      }\n    }\n  }\n"])))),Qn=function(n){var e=n.latitude,t=n.longitude,i={lat:e,lng:t},r=Object(An.withScriptjs)(Object(An.withGoogleMap)((function(n){return Object(B.jsx)(An.GoogleMap,{defaultZoom:18,defaultCenter:{lat:e,lng:t},children:Object(B.jsx)(An.Marker,{position:i})})})));return Object(B.jsx)(r,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyC3bP0tG9rhAjx36eKw05uoo2qZ9LeGB9s&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(B.jsx)("div",{style:{height:"100%",width:"100%",transition:"all 1s ease-in"}}),containerElement:Object(B.jsx)("div",{style:{height:"100%",width:"100%"}}),mapElement:Object(B.jsx)("div",{style:{height:"100%",width:"100%",borderRadius:8}})})},Vn=Object(h.memo)(Qn);var Wn,Xn,$n=function(n){var e=n.atelie;return Object(B.jsxs)(Jn,{children:[Object(B.jsx)(Un,{children:Object(B.jsxs)(Hn,{children:[Object(B.jsxs)("aside",{className:"info-img-nome",children:[e.Artista_foto_atelie?Object(B.jsx)(B.Fragment,{children:e.Artista_foto_atelie.Foto_atelie&&Object(B.jsx)("div",{className:"img-holder",children:Object(B.jsx)("img",{src:e.Artista_foto_atelie.Foto_atelie.descricao,alt:""})})}):Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(Kn,{})}),Object(B.jsx)("aside",{style:{width:200},children:Object(B.jsx)(Dn,{title:e.nome})})]}),Object(B.jsxs)("aside",{children:[Object(B.jsx)("strong",{children:"Endere\xe7o: "}),Object(B.jsx)("span",{children:"".concat(e.rua,", ").concat(e.numero," - ").concat(e.bairro,",")}),Object(B.jsxs)("span",{children:["Jaboat\xe3o dos Guararapes - PE, ",e.cep]}),Object(B.jsx)("strong",{style:{marginTop:10},children:"Complemento: "}),Object(B.jsx)("span",{children:e.complemento?e.complemento:"N\xe3o Informado"}),Object(B.jsxs)("span",{style:{marginTop:10},children:[Object(B.jsx)("strong",{children:"Latitude: "}),e.latitude]}),Object(B.jsxs)("span",{children:[Object(B.jsx)("strong",{children:"Longitude: "}),e.longitude]})]})]})}),Object(B.jsx)(Zn,{children:Object(B.jsx)(Vn,{latitude:e.latitude,longitude:e.longitude})})]})},ne=m.c.div(Wn||(Wn=Object(w.a)(["\n  width: 100%;\n  height: 1700px;\n  margin-top: 30px;\n\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n\n  h3 {\n    font-family: Poly;\n    font-size: 36px;\n    line-height: 43px;\n\n    text-align: center;\n\n    color: #333333;\n\n    span {\n      display: inline-block;\n      border-bottom: 1px solid #0052cc;\n      padding-bottom: 2px;\n    }\n  }\n"]))),ee=m.c.div(Xn||(Xn=Object(w.a)(["\n  width: 67vw;\n  height: 70vh;\n  margin-top: 30px;\n  margin-bottom: 80px;\n  background: #E9ECEF;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),te=function(n){var e=Object(h.useState)([]),t=Object(N.a)(e,2),i=t[0],r=t[1];return Object(h.useEffect)((function(){function e(){return(e=Object(A.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get(n.location.pathname);case 2:t=e.sent,r(t?t.data:[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Q,{}),Object(B.jsxs)(ne,{children:[Object(B.jsx)(Dn,{title:"Ateli\xea de Artes"}),Object(B.jsx)(ee,{children:Object(B.jsx)($n,{atelie:i})})]})]})},ie=Object(h.memo)(te),re=t(184),oe=t(185),ae=t(187),ce=t(186);var se=function(n){var e=n.artista;return Object(B.jsxs)(Yn,{children:[Object(B.jsxs)("aside",{children:[Object(B.jsxs)("div",{className:"perfil-content",children:[Object(B.jsx)("div",{className:"img-holder",children:e.foto?Object(B.jsx)("img",{src:e.foto,alt:"Foto de perfil do artista ".concat(e.nome)}):Object(B.jsx)(Kn,{})}),Object(B.jsxs)("div",{className:"nome-holder",children:[Object(B.jsx)("span",{children:e.Artista_categorium&&e.Artista_categorium.Categorium?e.Artista_categorium.Categorium.titulo:"Artista"}),Object(B.jsx)("strong",{children:e.nome})]}),Object(B.jsx)("span",{className:"divider-hr"})]}),Object(B.jsxs)("div",{className:"perfil-links",children:[Object(B.jsxs)(v.b,{to:"/fb",children:[Object(B.jsx)(re.a,{}),"Acessar Facebook"]}),Object(B.jsxs)(v.b,{to:"/instagram",children:[Object(B.jsx)(oe.a,{}),"Acessar Instagram"]}),Object(B.jsxs)(v.b,{to:"/site",children:[Object(B.jsx)(ce.a,{}),"Acessar Site"]}),Object(B.jsxs)(v.b,{to:"/blog",children:[Object(B.jsx)(ae.a,{}),"Acessar Blog"]})]})]}),Object(B.jsxs)("article",{children:[Object(B.jsxs)("div",{className:"sobre-content",children:[Object(B.jsx)("h3",{children:"Sobre o Artista"}),Object(B.jsx)("span",{children:e.descricao})]}),Object(B.jsxs)("div",{className:"infor-content",children:[Object(B.jsxs)("aside",{className:"titulo-items",children:[Object(B.jsx)("span",{children:"Nascimento"}),Object(B.jsx)("span",{children:"E-mail"}),Object(B.jsx)("span",{children:"Telefone"}),Object(B.jsx)("span",{children:"Celular"}),Object(B.jsx)("span",{children:"Endere\xe7o"})]}),Object(B.jsxs)("aside",{className:"infor-items",children:[Object(B.jsx)("span",{children:e.data_nascimento?"".concat(e.data_nascimento," (").concat((new Date).getFullYear()-new Date(e.data_nascimento).getFullYear()," anos)"):"N\xe3o informado"}),Object(B.jsx)("span",{children:e.email||"N\xe3o informado"}),Object(B.jsx)("span",{children:e.fone1||"N\xe3o informado"}),Object(B.jsx)("span",{children:e.fone2||"N\xe3o informado"}),Object(B.jsx)("span",{className:"info-end",children:"\n\t\t\t\t\t\t\t \t\t".concat(e.rua||"N\xe3o informado",", ").concat(e.numero||"s/n",",\n\t\t\t\t\t\t\t\t\t").concat(e.bairro," - Jaboat\xe3o dos Guararapes - PE,\n\t\t\t\t\t\t\t\t\t").concat(e.cep)})]})]})]})]})},le=function(n){var e=Object(h.useState)([]),t=Object(N.a)(e,2),i=t[0],r=t[1];return Object(h.useEffect)((function(){function e(){return(e=Object(A.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.scroll(0,0),e.next=3,F.get(n.location.pathname);case 3:t=e.sent,r(t?t.data:[]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Q,{}),Object(B.jsxs)(ne,{children:[Object(B.jsx)(Dn,{title:"Artista"}),Object(B.jsx)(ee,{children:Object(B.jsx)(se,{artista:i})}),Object(B.jsx)(Dn,{title:"Obras do Artista",style:{marginTop:50}})]})]})},de=Object(h.memo)(le),pe=function(){return Object(B.jsx)(v.a,{children:Object(B.jsxs)(k.c,{children:[Object(B.jsx)(k.a,{exact:!0,path:"/",component:Rn}),Object(B.jsx)(k.a,{path:"/atelie/:id",component:ie}),Object(B.jsx)(k.a,{path:"/artistas/:id",component:de})]})})},xe=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsxs)(m.a,{theme:O,children:[Object(B.jsx)(y,{}),Object(B.jsx)(pe,{})]})})},be=Object(h.memo)(xe);g.a.render(Object(B.jsx)(u.a.StrictMode,{children:Object(B.jsx)(be,{})}),document.getElementById("root"))}},[[415,1,2]]]);
//# sourceMappingURL=main.0305c805.chunk.js.map