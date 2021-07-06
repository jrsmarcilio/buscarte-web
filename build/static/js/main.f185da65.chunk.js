(this.webpackJsonpbuscarte_redux=this.webpackJsonpbuscarte_redux||[]).push([[0],{177:function(n,t){n.exports=function(n){var t=n.toLowerCase().replace(/(?:^|\s)\S/g,(function(n){return n.toUpperCase()})),e=t.split(" "),r=e[0]+" "+e[1];return 1===e.length?t:e[1].split("").length<=3?(e[1]=e[1].toLowerCase(),e.join(" ")):r}},411:function(n,t,e){"use strict";e.r(t);var r,i,a,c,o,s,l,d,p,b,x,u,j=e(0),h=e.n(j),g=e(32),m=e.n(g),f=(e(189),e(6)),O={colors:{background:"#F5FAFE",text:"#FFFFFF",primary:"#5786b6",light:"#89b6e8",dark:"#0A223D"}},A=e(7),w=Object(f.b)(r||(r=Object(A.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n body {\n  background-color: #fafafa;\n  -webkit-font-smooth: antialiased;\n }\n\n html, body, #root {\n   height: 100%;\n }\n\n * {\n   margin: 0;\n   padding: 0;\n   outline: 0;\n   box-sizing: border-box;\n }\nbody, input, button {\n  font-family: Roboto, sans-serif;\n}\n"]))),k=e(74),v=e(9),y=e(44),S=e.n(y),N=e(73),V=e(25),E=e(176),z=e.n(E).a.create({baseURL:"https://buscarte-server.herokuapp.com/"}),q=f.c.div(i||(i=Object(A.a)(["\n  width: 100%;\n  height: 100%;\n  margin-top: 45px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  h3 {\n    font-family: Poly;\n    font-size: 36px;\n    line-height: 43px;\n\n    text-align: center;\n\n    color: #333333;\n\n    span {\n      display: inline-block;\n      border-bottom: 1px solid #0052cc;\n      padding-bottom: 2px;\n    }\n  }\n"]))),C=f.c.div(a||(a=Object(A.a)(["\n  width: 45%;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n\n  button {\n    padding: 9px;\n    font-size: 18px;\n    cursor: pointer;\n\n    background: transparent;\n    border: none;\n    text-decoration: none;\n    text-align: center;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n\n    :hover {\n      font-weight: bold;\n      color: #0052cc;\n    }\n\n    :focus {\n      font-weight: bold;\n      color: rgb(0, 82, 204);\n\n      border-bottom: 1px solid #0052cc;\n      font-size: 18px;\n      font-family: Poly;\n    }\n  }\n"]))),R=f.c.div(c||(c=Object(A.a)(["\n  overflow-y: scroll;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 7px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    border-radius: 6px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background: rgba(0, 0, 0, 0.3);\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  width: 69vw;\n  height: 75vh;\n\n  position: relative;\n\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n\n  margin-top: 20px;\n  padding: 30px;\n\n  background: #eee;\n\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n"]))),M=f.c.div(o||(o=Object(A.a)(["\n  width: 240px;\n  height: 240px;\n\n  margin: 5px;\n\n  background: #fff;\n  border-radius: 4px;\n\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: space-around;\n  align-items: center;\n  text-align: center;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\n  .img-holder {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      position: absolute;\n      width: 150px;\n      height: auto;\n    }\n  }\n\n  aside {\n    display: flex;\n    flex-flow: column wrap;\n  }\n\n  :hover {\n    background: #E1EDFF;\n    cursor: pointer;\n    border: 1px solid #0052cc;\n  }\n"]))),W=f.c.div(s||(s=Object(A.a)(["\n  margin-left: 15px;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #919191;\n  border: 4px solid #eeeeee;\n"]))),T=f.c.aside(l||(l=Object(A.a)(["\n  display: inline-block;\n  border-bottom: 1.5px solid #0052cc;\n  padding: 2px;\n  font-size: 18px;\n\n  font-family: Poly;\n"]))),B=e(177),U=e.n(B),G=e(1),I=function(n){var t=n.artistas,e=Object(j.useState)(t),r=Object(V.a)(e,2),i=r[0],a=r[1],c=Object(j.useState)("Todos"),o=Object(V.a)(c,2),s=o[0],l=o[1];return Object(j.useEffect)((function(){a(t)}),[]),Object(j.useEffect)((function(){var n=t.filter((function(n){return n.Artista_categorium.Categorium.titulo==="".concat(s)}));a("Todos"===s?t:n)}),[s]),Object(G.jsxs)(q,{children:[Object(G.jsx)("h3",{children:Object(G.jsx)("span",{children:"Artistas"})}),Object(G.jsxs)(C,{children:[Object(G.jsx)("button",{onClick:function(){return l("Todos")},children:" Todos "}),Object(G.jsx)("button",{onClick:function(){return l("Artista")},children:" Artistas "}),Object(G.jsx)("button",{onClick:function(){return l("Pintor")},children:" Pintores "}),Object(G.jsx)("button",{onClick:function(){return l("Escultor")},children:" Escultores "}),Object(G.jsx)("button",{onClick:function(){return l("Grafiteiro")},children:" Grafiteiros "}),Object(G.jsx)("button",{onClick:function(){return l("Ceramista")},children:" Ceramistas "}),Object(G.jsx)("button",{onClick:function(){return l("Gravurista")},children:" Gravuristas "}),Object(G.jsx)("button",{onClick:function(){return l("Muralista")},children:" Muralistas "}),Object(G.jsx)("button",{onClick:function(){return l("Poeta")},children:" Poetas "})]}),Object(G.jsx)(R,{children:i.map((function(n){return Object(G.jsxs)(M,{children:[n.foto?Object(G.jsx)("div",{className:"img-holder",children:Object(G.jsx)("img",{src:n.foto,alt:"Foto de perfil do artista ".concat(n.nome)})}):Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(W,{})}),Object(G.jsxs)("aside",{children:[Object(G.jsx)("span",{children:n.Artista_categorium&&n.Artista_categorium.Categorium?n.Artista_categorium.Categorium.titulo:"Artista"}),Object(G.jsx)(T,{children:Object(G.jsx)("strong",{children:U()(n.nome)})})]})]})}))})]})},Y=e(415),F=e(416),Q=e(180),D=e(417),H=e.p+"static/media/Logo.2f2c1da9.svg",J=e.p+"static/media/loupe.fc6d805a.svg",L=f.c.div(d||(d=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n\n  height: 60px;\n  width: 100%;\n  margin: auto;\n\n  background-color: #fafafa;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n\n  nav {\n    width: 67%;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    width: 150px;\n    display: flex;\n    margin: auto;\n    justify-content: center;\n  }\n\n  form {\n    button {\n      width: 70px;\n      height: 30px;\n      display: flex;\n      margin: auto;\n      justify-content: center;\n      font-size: 12px;\n      color: transparent;\n      background: url(",") no-repeat content-box padding-box center;\n    }\n\n    input {\n      width: 150px;\n      height: 30px;\n      ::placeholder {\n        font-size: 12px;\n      }\n    }\n  }\n\n  @media (max-width: 800px) {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n\n    img {\n      width: 150px;\n      display: flex;\n      margin: auto;\n      justify-content: center;\n    }\n\n    form {\n      button {\n        width: 60px;\n        height: 30px;\n        display: flex;\n        margin: auto;\n        justify-content: center;\n        font-size: 12px;\n      }\n\n      input {\n        width: 150px;\n        height: 30px;\n        ::placeholder {\n          font-size: 12px;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 576px) {\n    display: flex;\n    margin: auto;\n    justify-content: center;\n\n    img {\n      width: 100px;\n      display: flex;\n      margin: auto;\n      justify-content: center;\n    }\n\n    form {\n      button {\n        width: 50px;\n        height: 30px;\n        display: flex;\n        margin: auto;\n        justify-content: center;\n        font-size: 9px;\n        color: transparent;\n        background: url(",") no-repeat content-box padding-box center;\n      }\n\n      input {\n        width: 90px;\n        height: 30px;\n\n        ::placeholder {\n          font-size: 9px;\n        }\n      }\n    }\n\n    @media (max-width: 375px) {\n      display: flex;\n      margin: auto;\n      justify-content: center;\n\n      img {\n        width: 80px;\n        display: flex;\n        margin: auto;\n        justify-content: center;\n      }\n\n      form {\n        button {\n          width: 30px;\n          height: 20px;\n          display: flex;\n          margin: auto;\n          justify-content: center;\n          font-size: 6px;\n          color: transparent;\n          background: url(",") no-repeat content-box padding-box center;\n        }\n\n        input {\n          width: 70px;\n          height: 20px;\n\n          ::placeholder {\n            font-size: 7px;\n          }\n        }\n      }\n    }\n  }\n"])),J,J,J),X=function(){return Object(G.jsx)(L,{children:Object(G.jsxs)(Y.a,{bg:"light",expand:"lg",className:"d-flex",children:[Object(G.jsxs)(Y.a.Brand,{href:"#home",children:[Object(G.jsx)("img",{src:H,height:"30",className:"d-inline-block align-top",alt:"Buscarte logo"})," "]}),Object(G.jsxs)(F.a,{className:"d-flex",children:[Object(G.jsx)(Q.a,{type:"text",placeholder:"Pesquisa Buscarte",className:"mr-2"})," ",Object(G.jsx)(D.a,{variant:"outline-dark",children:"Pesquisar"})]})]})})},K=f.c.section(p||(p=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  /* padding: 20px; */\n\n\n  img {\n    border-radius: 5px;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    object-fit: cover;\n  }\n\n  .slides {\n    /* max-width: 1360px; */\n    height: 25vh;\n    width: 100%;\n    position: relative;\n    border-radius: 50px;\n  }\n\n  .active {\n    display: inline-block;\n  }\n\n  .inactive {\n    display: none;\n  }\n\n  h3,\n  p {\n    width: 100%;\n    height: 100%;\n    color: white;\n    text-align: center;\n    top: 50%;\n    z-index: 9;\n  }\n\n  p {\n    top: 70%;\n  }\n"]))),P=f.c.div(b||(b=Object(A.a)(["\n  width: 100%;\n  position: absolute;\n  display: flex;\n  bottom: 35%;\n  justify-content: center;\n  z-index: 200;\n\n  .dot {\n    cursor: pointer;\n    height: 0.5rem;\n    width: 0.5rem;\n    margin: 0 5px;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  .active-dot,\n  .dot:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n"]))),Z=f.c.div(x||(x=Object(A.a)(["\n  .prev,\n  .next {\n    cursor: pointer;\n    position: absolute;\n    top: 30%;\n    width: auto;\n    padding: 1rem;\n    margin-top: --3rem;\n    color: #fff;\n  }\n\n  .prev:hover,\n  .next:hover {\n    color: white;\n    transition: all 0.5s ease-in;\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n\n  .prev {\n    left: 2%;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  .next {\n    right: 2%;\n    border-radius: 100%;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n"]))),_=f.c.div(u||(u=Object(A.a)(["\n  width: 100%;\n  height: 25vh;\n  position: relative;\n  margin: auto;\n  overflow: hidden;\n"]))),$=function(n){return Object(G.jsxs)(Z,{children:[Object(G.jsx)("span",{className:"prev",onClick:n.prevSlide,children:" \u276e "}),Object(G.jsx)("span",{className:"next",onClick:n.nextSlide,children:" \u276f "})]})},nn=e.p+"static/media/biblioteca.9944bee8.jpg",tn=e.p+"static/media/cinema.facb3f62.jpg",en=e.p+"static/media/maracane.dad777b9.jpg",rn=e.p+"static/media/montes.63d9d6fe.jpg",an=[{title:"First Slide",description:"This is the First Slider of our Carousel",urls:"".concat("data:image/jpeg;base64,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")},{title:"Second Slide",description:"This is the second Slider of our Carousel",urls:"".concat(nn)},{title:"Third Slide",description:"This is the third Slider of our Carousel",urls:"".concat(en)},{title:"Forth Slide",description:"This is the forth Slider of our Carousel",urls:"".concat(tn)},{title:"Fifth Slide",description:"This is the fifth Slider of our Carousel",urls:"".concat(rn)}];var cn,on,sn,ln,dn,pn,bn,xn,un,jn,hn,gn,mn=function(n){return Object(G.jsx)(P,{children:an.map((function(t,e){return Object(G.jsx)("span",{className:"".concat(n.activeIndex===e?"dot active-dot":"dot"),onClick:function(t){return n.onClick(t.target.value=e)}},e)}))})},fn=function(n){return Object(G.jsx)(K,{children:an.map((function(t,e){return Object(G.jsx)("div",{className:e===n.activeIndex?"slides active":"inactive",children:Object(G.jsx)("img",{src:t.urls,alt:""})},e)}))})},On=an.length-1,An=function(){var n=Object(j.useState)(0),t=Object(V.a)(n,2),e=t[0],r=t[1];return Object(j.useEffect)((function(){var n=setInterval((function(){r(e===On?0:e+1)}),3e3);return function(){return clearInterval(n)}}),[e]),Object(G.jsxs)(_,{children:[Object(G.jsx)(fn,{activeIndex:e}),Object(G.jsx)($,{prevSlide:function(){return r(e<1?On:e-1)},nextSlide:function(){return r(e===On?0:e+1)}}),Object(G.jsx)(mn,{activeIndex:e,onClick:function(n){return r(n)}})]})},wn=e(53),kn=function(n){var t=n.latitude,e=n.longitude,r={lat:t,lng:e},i=Object(wn.withScriptjs)(Object(wn.withGoogleMap)((function(n){return Object(G.jsx)(wn.GoogleMap,{defaultZoom:18,defaultCenter:{lat:t,lng:e},children:Object(G.jsx)(wn.Marker,{position:r})})})));return Object(G.jsx)(i,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyC3bP0tG9rhAjx36eKw05uoo2qZ9LeGB9s&v=3.exp&libraries=geometry,drawing,places",loadingElement:Object(G.jsx)("div",{style:{height:450,width:740,transition:"all 1s ease-in"}}),containerElement:Object(G.jsx)("div",{style:{height:450,width:740}}),mapElement:Object(G.jsx)("div",{style:{height:450,width:740,borderRadius:8}})})},vn=Object(j.memo)(kn),yn=f.c.div(cn||(cn=Object(A.a)(["\n  margin-top: 45px;\n\n  h3 {\n    font-family: Poly;\n    font-size: 36px;\n    line-height: 43px;\n\n    text-align: center;\n\n    color: #333333;\n\n    span {\n      display: inline-block;\n      border-bottom: 1px solid #0052cc;\n      padding-bottom: 2px;\n    }\n  }\n"]))),Sn=f.c.div(on||(on=Object(A.a)(["\n  width: 70%;\n\n  display: flex;\n  justify-content: space-between;\n  margin: 38px auto;\n"]))),Nn=f.c.div(sn||(sn=Object(A.a)(["\n  width: 740px;\n  height: 450px;\n\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n"]))),Vn=f.c.div(ln||(ln=Object(A.a)(["\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 7px;\n  }\n\n  ::-webkit-scrollbar-track {\n    border-radius: 6px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 6px;\n    background: rgba(0, 0, 0, 0.3);\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  width: 550px;\n  height: 450px;\n\n  background: #eee;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n"]))),En=f.c.div(dn||(dn=Object(A.a)(["\n  width: 100%;\n  height: 130px;\n\n  margin: 10px 10px 0 10px;\n  padding-left: 20px;\n\n  background: #fff;\n  border-radius: 4px;\n\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,\n    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;\n\n  .text-holder {\n    width: 270px;\n    padding: 20px;\n\n    aside {\n      font-size: 18px;\n    }\n\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: flex-start;\n  }\n\n  .img-holder {\n    width: 90px;\n    height: 90px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      border: 4px solid #eeeeee;\n      position: absolute;\n      width: 100px;\n      height: auto;\n    }\n  }\n\n  a {\n    display: flex;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n\n    text-decoration: none;\n    background: #5786b6;\n    width: 130px;\n    height: 30px;\n\n    border-radius: 8px 0 0 8px;\n    color: #fff;\n\n    font-size: 14px;\n    font-weight: bold;\n  }\n  \n  :hover {\n    background: #e1edff;\n    cursor: pointer;\n    border: 1px solid #0052cc;\n  }\n"]))),zn=f.c.div(pn||(pn=Object(A.a)(["\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n  background: #919191;\n  border: 4px solid #eeeeee;\n"]))),qn=function(){var n=Object(j.useState)(0),t=Object(V.a)(n,2),e=t[0],r=t[1],i=Object(j.useState)(0),a=Object(V.a)(i,2),c=a[0],o=a[1],s=Object(j.useState)([]),l=Object(V.a)(s,2),d=l[0],p=l[1];Object(j.useEffect)((function(){function n(){return(n=Object(N.a)(S.a.mark((function n(){var t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z.get("/atelie");case 2:if(null!==(t=n.sent).data){n.next=5;break}return n.abrupt("return",console.error(new Error));case 5:p(t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(j.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(n){r(n.coords.latitude),o(n.coords.longitude)}))}),[]);return Object(G.jsxs)(yn,{children:[Object(G.jsx)("h3",{children:Object(G.jsx)("span",{children:"Ateli\xeas nas proximidades"})}),Object(G.jsxs)(Sn,{children:[Object(G.jsx)(Nn,{children:Object(G.jsx)(vn,{latitude:e,longitude:c})}),Object(G.jsx)(Vn,{children:d.map((function(n){return Object(G.jsxs)(En,{onClick:function(t){return e=n.latitude,i=n.longitude,r(e),void o(i);var e,i},children:[Object(G.jsxs)("aside",{style:{display:"flex",alignItems:"center"},children:[Object(G.jsx)("div",{className:"img-holder",children:n.Artista_foto_atelie?Object(G.jsx)("img",{src:n.Artista_foto_atelie.Foto_atelie.descricao,alt:"Foto de perfil do Ateli\xea ".concat(n.name)}):Object(G.jsx)(zn,{})}),Object(G.jsxs)("div",{className:"text-holder",children:[Object(G.jsx)("strong",{children:n.nome}),Object(G.jsx)("span",{children:"".concat(n.rua,", ").concat(n.numero,", ").concat(n.bairro)})]})]}),Object(G.jsx)(k.b,{to:{pathname:"/atelies/".concat(n.nome),atelie:n},children:"Acessar Perfil"})]},n.id_atelie)}))})]})]})},Cn=Object(j.memo)(qn),Rn=f.c.div(bn||(bn=Object(A.a)(["\n  width: 100%;\n  height: 948px;\n\n  /* #00d8e0 */\n\n  /* border Image = 6px solid #eee */\n"]))),Mn=function(){var n=Object(j.useState)([]),t=Object(V.a)(n,2),e=t[0],r=t[1];return Object(j.useEffect)((function(){function n(){return(n=Object(N.a)(S.a.mark((function n(){var t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z.get("/artistas");case 2:if(null!==(t=n.sent).data){n.next=5;break}return n.abrupt("return",console.error(new Error));case 5:r(t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(Rn,{children:[Object(G.jsx)(X,{}),Object(G.jsx)(An,{}),Object(G.jsx)(Cn,{})]}),Object(G.jsx)(Rn,{children:Object(G.jsx)(I,{artistas:e})})]})},Wn=Object(j.memo)(Mn),Tn=e(183),Bn=f.c.div(xn||(xn=Object(A.a)(["\n\n"]))),Un=f.c.div(un||(un=Object(A.a)(["\n  width: 1140px;\n  height: 564px;\n\n  margin-top: 45px;\n  padding: 30px 15px;\n\n  border-radius: 10px;\n  background: #e9ecef;\n"]))),Gn=f.c.div(jn||(jn=Object(A.a)(["\n    padding: 10px;\n  img {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n\n    border: 6px solid #eeeeee;\n  }\n"]))),In=f.c.div(hn||(hn=Object(A.a)(["\n  margin-top: 20px;\n\n  svg {\n    font-size: 18px;\n  }\n\n  a {\n    text-decoration: none;\n    font-size: 16px;\n\n    color: red;\n\n    :hover {\n      font-size: 16.5px;\n      color: black;\n    }\n  }\n\n"]))),Yn=f.c.div(gn||(gn=Object(A.a)(["\n    margin-left: 15px;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    background: #919191;\n    border: 6px solid #eeeeee;\n"]))),Fn=function(n){var t=n.props.location.atelie;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X,{}),Object(G.jsxs)(Bn,{children:[Object(G.jsx)("h3",{children:Object(G.jsx)("span",{children:"Ateli\xeas"})}),Object(G.jsx)(Un,{className:"container-fluid",children:Object(G.jsx)("section",{className:"col-md-12",children:Object(G.jsxs)("div",{className:"row",children:[Object(G.jsxs)("div",{className:"col-md-12 col-lg-3 d-block",style:{position:"relative",display:"flex",margin:"0 auto",textAlign:"center",justifyContent:"center",alignItems:"center"},children:[Object(G.jsx)(Gn,{children:t.Artista_foto_atelie?Object(G.jsx)(G.Fragment,{children:t.Artista_foto_atelie.Foto_atelie&&Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("img",{src:t.Artista_foto_atelie.Foto_atelie.descricao,alt:""})})}):Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(Yn,{})})}),Object(G.jsx)("h2",{children:t.nome}),Object(G.jsxs)(In,{children:[Object(G.jsxs)("span",{children:[Object(G.jsx)("strong",{children:"Endere\xe7o: "})," ","".concat(t.rua,", ").concat(t.numero," - ").concat(t.bairro,", Jaboat\xe3o dos Guararapes - PE, ").concat(t.cep)]}),Object(G.jsx)("hr",{}),Object(G.jsxs)("a",{href:"https://instagram/".concat(t.instagram),children:[Object(G.jsx)(Tn.a,{})," Acessar Perfil"]})]})]}),Object(G.jsx)("div",{className:"col-md-8 p-3",style:{marginRight:50},children:Object(G.jsx)(vn,{latitude:t.latitude,longitude:t.longitude})})]})})})]})]})},Qn=Object(j.memo)(Fn),Dn=function(){return Object(G.jsx)(k.a,{children:Object(G.jsxs)(v.c,{children:[Object(G.jsx)(v.a,{exact:!0,path:"/",component:Wn}),Object(G.jsx)(v.a,{path:"/atelies/:nome",component:Qn})]})})},Hn=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)(f.a,{theme:O,children:[Object(G.jsx)(w,{}),Object(G.jsx)(Dn,{})]})})},Jn=Object(j.memo)(Hn);m.a.render(Object(G.jsx)(h.a.StrictMode,{children:Object(G.jsx)(Jn,{})}),document.getElementById("root"))}},[[411,1,2]]]);
//# sourceMappingURL=main.f185da65.chunk.js.map