(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{177:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(29),o=n.n(c),r=(n(148),n(149),n(5)),s=n(6),l=n(10),j=n(9),b=n(15),h=n(27),u=n(286),p=n(290),d=n(288),x=n(291),O=n(289),m=n(280),f=n(127),g=n.n(f),v=n(287),y=n(285),C=n(284),k=n(279),w=n(282),S=n(1),M=["Accueil","Proximite","NewProducts"],P=["Compte","Favoris","Panier","Infos"],I=function(){var e=a.useState(null),t=Object(b.a)(e,2),n=t[0],i=t[1],c=a.useState(null),o=Object(b.a)(c,2),r=o[0],s=o[1],l=function(){i(null)};return Object(S.jsx)(u.a,{position:"fixed",style:{backgroundColor:"darkseagreen"},children:Object(S.jsx)(v.a,{maxWidth:"xl",children:Object(S.jsxs)(d.a,{disableGutters:!0,children:[Object(S.jsx)(O.a,{variant:"h6",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:Object(S.jsx)(h.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"Yecoom"})}),Object(S.jsxs)(p.a,{sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:[Object(S.jsx)(x.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit",children:Object(S.jsx)(g.a,{})}),Object(S.jsx)(m.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:l,sx:{display:{xs:"block",md:"none"}},children:M.map((function(e){return Object(S.jsx)(w.a,{onClick:l,children:Object(S.jsx)(h.b,{style:{textDecoration:"none"},to:"/".concat(e.toLowerCase()),children:e})},e)}))})]}),Object(S.jsx)(O.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:Object(S.jsx)(h.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"Yecoom"})}),Object(S.jsx)(p.a,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:M.map((function(e){return Object(S.jsx)(C.a,{onClick:l,sx:{my:2,color:"white",display:"block"},children:Object(S.jsx)(h.b,{style:{textDecoration:"none",color:"white"},to:"/".concat(e.toLowerCase()),children:e})},e)}))}),Object(S.jsxs)(p.a,{sx:{flexGrow:0},children:[Object(S.jsx)(k.a,{title:"Open settings",children:Object(S.jsx)(x.a,{onClick:function(e){s(e.currentTarget)},sx:{p:0},children:Object(S.jsx)(y.a,{alt:"Remy Sharp",src:"https://cache.cosmopolitan.fr/data/photo/w1000_ci/53/femme-belle-peau-visage.jpg "})})}),Object(S.jsx)(m.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(r),onClose:function(){s(null)},children:P.map((function(e){return Object(S.jsx)(w.a,{onClick:l,children:Object(S.jsx)(h.b,{style:{textDecoration:"none"},to:"/".concat(e.toLowerCase()),children:e})},e)}))})]})]})})})},F=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(I,{}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{})]})}}]),n}(a.Component),D=F;var N=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(D,{})})},z=n(38),B=(n(177),n(47)),E={width:"90%",height:"400px",margin:"5%"},T=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={lat:null,lng:null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition(function(e){var t=e.coords.latitude,n=e.coords.longitude;this.setState({center:{lat:t,lng:n}})}.bind(this))}},{key:"render",value:function(){return Object(S.jsx)(B.b,{googleMapsApiKey:"AIzaSyDSQ9NeiM6g-CT1RtGzp4tbMewAHhXJhEQ",children:Object(S.jsx)(B.a,{mapContainerStyle:E,center:this.state.center,zoom:11,children:Object(S.jsx)(S.Fragment,{})})})}}]),n}(a.Component),A=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("h2",{children:"\xc0 Proximit\xe9"}),Object(S.jsx)(T,{})]})})}}]),n}(a.Component),G=A,L=n(23),W=n(45),R=n.n(W),q=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:"",file:null},a.onFormSubmit=a.onFormSubmit.bind(Object(L.a)(a)),a.onNameChange=a.onNameChange.bind(Object(L.a)(a)),a.onEmailChange=a.onEmailChange.bind(Object(L.a)(a)),a.onPasswordChange=a.onPasswordChange.bind(Object(L.a)(a)),a.onChange=a.onChange.bind(Object(L.a)(a)),a}return Object(s.a)(n,[{key:"onFormSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("username",this.state.username),t.append("email",this.state.email),t.append("password",this.state.password),t.append("myImage",this.state.file);R.a.post("http://localhost:5000/api/clients/",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){alert("The file is successfully uploaded")})).catch((function(e){}))}},{key:"onNameChange",value:function(e){this.setState({username:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"render",value:function(){return Object(S.jsx)("div",{className:"container",style:{textAlign:"center"},children:Object(S.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(S.jsx)("h1",{children:"Inscription"}),Object(S.jsx)("input",{type:"text",name:"username",onChange:this.onNameChange,placeholder:"name"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"text",name:"email",onChange:this.onEmailChange,placeholder:"email"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"password",name:"password",onChange:this.onPasswordChange,placeholder:"password"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"file",name:"myImage",onChange:this.onChange}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("button",{type:"submit",children:"Upload"})]})})}}]),n}(i.a.Component),J=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(q,{}),Object(S.jsx)(h.b,{to:"/compte/register",children:"S'inscrire"})]})}}]),n}(i.a.Component),Q=J,_=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={file:null,title:"",price:"",description:""},a.onFormSubmit=a.onFormSubmit.bind(Object(L.a)(a)),a.onTitleChange=a.onTitleChange.bind(Object(L.a)(a)),a.onPriceChange=a.onPriceChange.bind(Object(L.a)(a)),a.onDescriptionChange=a.onDescriptionChange.bind(Object(L.a)(a)),a.onChange=a.onChange.bind(Object(L.a)(a)),a}return Object(s.a)(n,[{key:"onFormSubmit",value:function(e){e.preventDefault();var t=new FormData;t.append("Imguser",this.state.file),t.append("title",this.state.title),t.append("price",this.state.price),t.append("description",this.state.description);R.a.post("http://localhost:5000/api/products",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){alert("The file is successfully uploaded")})).catch((function(e){}))}},{key:"onChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"onTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"onPriceChange",value:function(e){this.setState({price:e.target.value})}},{key:"onDescriptionChange",value:function(e){this.setState({description:e.target.value})}},{key:"render",value:function(){return Object(S.jsx)("div",{style:{textAlign:"center"},children:Object(S.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(S.jsx)("h1",{children:"File Upload"}),Object(S.jsx)("label",{children:" Title: "}),Object(S.jsx)("input",{type:"text",name:"title",onChange:this.onTitleChange})," ",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{children:" Price: "}),Object(S.jsx)("input",{type:"text",name:"price",onChange:this.onPriceChange})," ",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{children:" Description: "}),Object(S.jsx)("input",{type:"text",name:"description",onChange:this.onDescriptionChange})," ",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("label",{children:" Image: "}),Object(S.jsx)("input",{type:"file",name:"myImage",onChange:this.onChange}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("button",{type:"submit",children:"Envoyer"})]})})}}]),n}(i.a.Component),U=n(11),H=n(7),K=n(281),X=[{url:"https://www.parc-gatinais-francais.fr/wp-content/uploads/2015/09/Ferme-de-Moigny5.jpg",title:"Exploitation",width:"50%"},{url:"https://bio-c-bon.eu/sites/default/files/module/bio_push/conseils/lait.png",title:"Produits",width:"50%"}],Y=Object(H.a)(K.a)((function(e){var t,n=e.theme;return t={position:"relative",height:200},Object(U.a)(t,n.breakpoints.down("sm"),{width:"100% !important",height:100}),Object(U.a)(t,"&:hover, &.Mui-focusVisible",{zIndex:1,"& .MuiImageBackdrop-root":{opacity:.15},"& .MuiImageMarked-root":{opacity:0},"& .MuiTypography-root":{border:"4px solid currentColor"}}),t})),V=Object(H.a)("span")({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"}),$=Object(H.a)("span")((function(e){return{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.common.white}})),Z=Object(H.a)("span")((function(e){var t=e.theme;return{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:t.palette.common.black,opacity:.4,transition:t.transitions.create("opacity")}})),ee=Object(H.a)("span")((function(e){var t=e.theme;return{height:3,width:18,backgroundColor:t.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:t.transitions.create("opacity")}}));function te(){return Object(S.jsx)(p.a,{sx:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%"},children:X.map((function(e){return Object(S.jsxs)(Y,{focusRipple:!0,style:{width:e.width},children:[Object(S.jsx)(V,{style:{backgroundImage:"url(".concat(e.url,")")}}),Object(S.jsx)(Z,{className:"MuiImageBackdrop-root"}),Object(S.jsx)($,{children:Object(S.jsxs)(O.a,{component:"span",variant:"subtitle1",color:"inherit",sx:{position:"relative",p:4,pt:2,pb:function(e){return"calc(".concat(e.spacing(1)," + 6px)")}},children:[e.title,Object(S.jsx)(ee,{className:"MuiImageMarked-root"})]})})]},e.title)}))})}var ne=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={id:a.props.match.params.id,data:[],loading:!0,error:null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;R.a.get("http://localhost:5000/api/products/".concat(this.props.match.params.id)).then((function(t){e.setState({data:t.data,loading:!1}),console.log(e.state.data)})).catch((function(t){e.setState({error:t,loading:!1})}))}},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(h.b,{to:"/",children:Object(S.jsx)(C.a,{variant:"contained",disableElevation:!0,children:"Retour"})}),Object(S.jsx)("div",{children:this.state.loading?Object(S.jsx)("div",{children:"Loading..."}):Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:this.state.data.name}),Object(S.jsx)("p",{children:this.state.data.description}),Object(S.jsx)(te,{})]},this.state.data._id)})]})}}]),n}(a.Component),ae=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{children:"ddd"})}}]),n}(a.Component),ie=ae;function ce(){var e=a.useState(null),t=Object(b.a)(e,2),n=t[0],i=t[1],c=Boolean(n),o=function(){i(null)};return Object(S.jsxs)("div",{children:[Object(S.jsxs)(C.a,{id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":c?"true":void 0,onClick:function(e){i(e.currentTarget)},children:[Object(S.jsx)(y.a,{src:"https://cdn.w600.comps.canstockphoto.fr/champs-ma%C3%AFs-images-sous-licence_csp51390454.jpg",alt:""}),Object(S.jsx)("h6",{style:{marginLeft:10},children:"Ferme les vaches"})]}),Object(S.jsxs)(m.a,{id:"basic-menu",anchorEl:n,open:c,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(S.jsx)(w.a,{onClick:o,children:"Soci\xe9t\xe9"}),Object(S.jsx)(w.a,{onClick:o,children:"Adresse"}),Object(S.jsx)(w.a,{onClick:o,children:"Infos"})]})]})}var oe=n(32),re=n(283),se=n(96),le=n.n(se),je=n(97),be=n.n(je),he=n(128),ue=n.n(he),pe=n(129),de=Object(pe.autoPlay)(ue.a),xe=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"},{label:"Go\u010d, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}];var Oe=function(){var e=Object(oe.a)(),t=a.useState(0),n=Object(b.a)(t,2),i=n[0],c=n[1],o=xe.length;return Object(S.jsxs)(p.a,{children:[Object(S.jsx)(de,{axis:"rtl"===e.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){c(e)},enableMouseEvents:!0,children:xe.map((function(e,t){return Object(S.jsx)("div",{children:Math.abs(i-t)<=2?Object(S.jsx)(p.a,{component:"img",sx:{height:300,display:"block",overflow:"hidden",width:"80%%"},src:e.imgPath,alt:e.label}):null},e.label)}))}),Object(S.jsx)(re.a,{steps:o,position:"static",activeStep:i,nextButton:Object(S.jsxs)(C.a,{size:"small",onClick:function(){c((function(e){return e+1}))},disabled:i===o-1,children:["Next","rtl"===e.direction?Object(S.jsx)(le.a,{}):Object(S.jsx)(be.a,{})]}),backButton:Object(S.jsxs)(C.a,{size:"small",onClick:function(){c((function(e){return e-1}))},disabled:0===i,children:["rtl"===e.direction?Object(S.jsx)(be.a,{}):Object(S.jsx)(le.a,{}),"Back"]})})]})},me={height:"200px",border:"1px solid black",borderRadius:"5px",boxShadow:"0px 0px 5px black",backgroundColor:"white",width:"98%",marginLeft:"1%"},fe={lat:-3.745,lng:-38.523},ge=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(S.jsx)(B.b,{googleMapsApiKey:"AIzaSyDSQ9NeiM6g-CT1RtGzp4tbMewAHhXJhEQ",children:Object(S.jsx)(B.a,{mapContainerStyle:me,center:fe,zoom:12,children:Object(S.jsx)(S.Fragment,{})})})}}]),n}(a.Component),ve=ge,ye=(n(233),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(ce,{}),Object(S.jsx)(te,{}),Object(S.jsx)(Oe,{}),Object(S.jsx)(ve,{})]})})}}]),n}(a.Component)),Ce=ye,ke=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(z.d,{children:[Object(S.jsx)(z.b,{exact:!0,path:"/",render:function(){return Object(S.jsx)(i.a.Fragment,{children:Object(S.jsx)(Ce,{})})}}),Object(S.jsx)(z.b,{exact:!0,path:"/products/:id",component:ne}),Object(S.jsx)(z.b,{exact:!0,path:"/proximite",component:G}),Object(S.jsx)(z.b,{path:"/profil",component:ie}),Object(S.jsx)(z.b,{exact:!0,path:"/maps",component:G}),Object(S.jsx)(z.b,{exact:!0,path:"/compte",component:Q}),Object(S.jsx)(z.b,{exact:!0,path:"/compte/register",component:q}),Object(S.jsx)(z.b,{exact:!0,path:"/newproducts",component:_}),Object(S.jsx)(z.a,{to:"/"})]})})}}]),n}(a.Component),we=ke;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(N,{}),Object(S.jsx)(we,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[234,1,2]]]);
//# sourceMappingURL=main.9685b058.chunk.js.map