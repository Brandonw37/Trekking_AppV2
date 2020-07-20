(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{168:function(e,t,a){e.exports=a(394)},173:function(e,t,a){},174:function(e,t,a){e.exports=a.p+"static/media/nature.b3571d3c.jpg"},175:function(e,t,a){e.exports=a.p+"static/media/trek.b699d890.png"},176:function(e,t,a){e.exports=a.p+"static/media/layout.49d51588.svg"},39:function(e,t,a){e.exports=a.p+"static/media/Group 3.40da0614.svg"},394:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),o=a(69),c=a.n(o),i=(a(173),a(21)),s=(a(174),a(175),a(2)),u=(a(176),a(17)),m=function(){var e=Object(l.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(s.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("h1",null,"We design & create ",r.a.createElement("br",null)," trekking trips."),r.a.createElement("p",null,"Get away from the hustle and bustle of city life, explore what the nature has to offer. Trekking Team will let you know the destination, packing list. So jet off and explore nature! "),r.a.createElement(u.b,{to:"/Login"},"Explore now")),r.a.createElement("img",{style:{width:"100%",height:"auto",opacity:"0.3"},src:"https://cdn.dribbble.com/users/1355613/screenshots/6441984/landscape.jpg"})),r.a.createElement("main",null,r.a.createElement("section",{className:"services"},r.a.createElement("h2",null,"Why you should go on a trekking trip with Trekker?"),r.a.createElement("div",{className:"service-container"},r.a.createElement("div",{className:"services-card service-one"}),r.a.createElement("div",{className:"service-description"},r.a.createElement("h3",null,"Reconnect with nature"),r.a.createElement("div",null,"Trekker makes it easy to plan out your next outdoor adventure by giving you all the tools you need through a click of a button."))),r.a.createElement("div",{className:"service-container"},r.a.createElement("div",{className:"services-card service-two"}),r.a.createElement("div",{className:"service-description"},r.a.createElement("h3",null,"Know what to pack"),r.a.createElement("div",null,"Trekker cuts the hassle and prepares your backpack for you. So you can never leave unprepared!"))),r.a.createElement("div",{className:"service-container"},r.a.createElement("div",{className:"services-card service-three"}),r.a.createElement("div",{className:"service-description"},r.a.createElement("h3",null,"Navigate Trails like a pro"),r.a.createElement("div",null,"Trekker lets you see local trails around you and can even view points of interests and rest stops. ")))),r.a.createElement("section",null,r.a.createElement("h2",null,"Join our newsletter to get the latest trends."),r.a.createElement("form",{className:"newsletter",onSubmit:function(e){if(e.preventDefault(),""!==a){var t=new Date,n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();o.push("/thanks/".concat(a),n)}}},r.a.createElement("input",{type:"email",placeholder:"Your email goes here",onChange:function(e){return n(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Join Now!"})))))},p=a(98),h=a.n(p),d=a(165),g=function(){var e=Object(s.f)(),t=Object(l.useState)(""),a=Object(i.a)(t,2),n=a[0],o=a[1],c=Object(l.useState)(""),u=Object(i.a)(c,2),m=u[0],p=u[1],g=Object(l.useState)(""),E=Object(i.a)(g,2),f=E[0],y=E[1],v=function(){var e=Object(d.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={title:n,content:m,contactEmail:f},console.log("sending email",a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"back",onClick:function(){e.goBack()}}," \u2190 Go Back"),r.a.createElement("form",{className:"contact",onSubmit:v},r.a.createElement("h2",null,"Feel free to drop a message and we will get back to you shortly!"),r.a.createElement("label",{htmlFor:"title"},"Message Title: "),r.a.createElement("input",{type:"text",name:"title",onChange:function(e){return o(e.target.value)}}),r.a.createElement("label",{htmlFor:"content"},"Message Content: "),r.a.createElement("textarea",{name:"content",onChange:function(e){return p(e.target.value)}}),r.a.createElement("label",{htmlFor:"email"},"Contact Email: "),r.a.createElement("input",{type:"email",name:"email",onChange:function(e){return y(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Send Message"})))},E=a(44),f=[{featureType:"water",elementType:"geometry",stylers:[{color:"#004358"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#009900"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#008000"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#003300"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#003300"},{lightness:-20}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#003300"},{lightness:-17}]},{elementType:"labels.text.stroke",stylers:[{color:"#ffffff"},{visibility:"on"},{weight:.9}]},{elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"simplified"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#D3D3D3"},{lightness:-10}]},{},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#D3D3D3"},{weight:.7}]}],y={lat:33.518589,lng:-86.810356};navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){y={lat:e.coords.latitude,lng:e.coords.longitude}})),fetch("https://www.hikingproject.com/data/get-trails?lat=".concat(y.lat,"&lon=").concat(y.lng,"&maxDistance=20&key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_TRAIL_API_KEY)).then((function(e){return e.json()})).then((function(e){return n=e})).then((function(){return console.log(n)}));var v=Object(E.withScriptjs)(Object(E.withGoogleMap)((function(){var e=Object(l.useState)(null),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(l.useEffect)((function(){var e=function(e){"Escape"===e.key&&o(null)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),r.a.createElement(E.GoogleMap,{defaultZoom:10,defaultCenter:y,defaultOptions:{styles:f}},n.trails.map((function(e){return r.a.createElement(E.Marker,{key:e.id,position:{lat:e.latitude,lng:e.longitude},onClick:function(){o(e)},icon:{url:e.imgMedium,scaledSize:new window.google.maps.Size(35,35)}})})),a&&r.a.createElement(E.InfoWindow,{onCloseClick:function(){o(null)},position:{lat:a.latitude,lng:a.longitude}},r.a.createElement("div",null,r.a.createElement("h3",null,a.name),r.a.createElement("p",null,a.summary),r.a.createElement("p",null,"difficulty: ",a.difficulty),r.a.createElement("p",null,"length: ",a.length," miles"),r.a.createElement("p",null,a.stars,"/5"))))})));function b(){return r.a.createElement("div",{style:{width:"100vw",height:"100vh"}},r.a.createElement(v,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GOOGLE_MAPS_API_KEY),loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}var w=function(){var e=Object(s.f)(),t=Object(s.g)().name;return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"thanks"},r.a.createElement("p",null,"Thanks ",r.a.createElement("strong",null,t,"!!")),r.a.createElement("p",null,"You joined ",r.a.createElement("strong",null,e.location.state)),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Talk soon "))))},k=a(37),O=a(38),S=a(42),T=a(41),j=a(39),C=a.n(j),x=a(40),N=a.n(x),P=function(e){Object(S.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={weight:"",BPday:"",results:{}},e.handleChange1=function(t){e.setState({weight:t.target.value})},e.handleChange2=function(t){e.setState({BPday:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),N.a.post("http://localhost:8080/api/v1/packer",{weight:e.state.weight,BPday:e.state.BPday}).then((function(t){e.results=t.data,alert("Your Backpack should be "+e.results+" LBS"),console.log(e.state.weight),console.log(e.results)}))},e}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h1",null,"Trekker Packer"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"How are you trekking?"),r.a.createElement("select",null,r.a.createElement("option",{selected:!0,value:"backpacking"},"Backpacking"),r.a.createElement("option",{value:"hiking"},"Hiking")),r.a.createElement("h3",null,"How much do you weigh in lb?"),r.a.createElement("input",{type:"number",weight:"weight",onChange:this.handleChange1}),r.a.createElement("h3",null,"How many days do you plan to hike?"),r.a.createElement("input",{type:"number",min:"1",max:"5",BPday:"BPday",onChange:this.handleChange2}),r.a.createElement("button",{className:"submit-btn",type:"submit"},"Submit")),r.a.createElement("img",{src:C.a,alt:""}))}}]),a}(r.a.Component),_=function(e){Object(S.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",results:{}},e.handleChange1=function(t){e.setState({email:t.target.value})},e.handleChange2=function(t){e.setState({password:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),N.a.post("http://localhost:8080/api/v1/Login",{email:e.state.email,password:e.state.password}).then((function(t){e.results=t.data,1==e.results.success?(alert(e.state.email+" you are logged in!"),console.log(e.state.email),console.log(e.results),e.props.history.push("/Packing")):alert(e.results.message)}))},e}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contact"},r.a.createElement("h1",null,"Trekker Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Login User"),r.a.createElement("h3",null,"Login Email"),r.a.createElement("input",{type:"text",email:"email",onChange:this.handleChange1}),r.a.createElement("h3",null,"Login Password"),r.a.createElement("input",{type:"text",password:"password",onChange:this.handleChange2}),r.a.createElement("button",{className:"submit-btn",type:"submit"},"Submit")),r.a.createElement(u.b,{to:"/Register"},"Sign Up?"),r.a.createElement("img",{src:C.a,alt:""})))}}]),a}(r.a.Component),D=function(e){Object(S.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:"",results:{}},e.handleChange1=function(t){e.setState({email:t.target.value})},e.handleChange2=function(t){e.setState({password:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),N.a.post("http://localhost:8080/api/v1/Register",{email:e.state.email,password:e.state.password}).then((function(t){e.results=t.data,console.log(e.results.success),1==e.results.success?(alert(e.state.email+" Thank you for signing up!"),console.log(e.state.email),console.log(e.results),e.props.history.push("/Packing")):alert(e.results.message)}))},e}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h1",null,"Trekker Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Sign up today and get ready for a once-in-a-lifetime adventure!"),r.a.createElement("h3",null,"Input Email"),r.a.createElement("input",{type:"text",email:"email",onChange:this.handleChange1}),r.a.createElement("h3",null,"Input Password"),r.a.createElement("input",{type:"text",password:"password",onChange:this.handleChange2}),r.a.createElement("button",{className:"submit-btn",type:"submit"},"Submit")),r.a.createElement("img",{src:C.a,alt:""}))}}]),a}(r.a.Component),L=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:m}),r.a.createElement(s.a,{exact:!0,path:"/contact",component:g}),r.a.createElement(s.a,{exact:!0,path:"/map",component:b}),r.a.createElement(s.a,{exact:!0,path:"/thanks/:name",component:w}),r.a.createElement(s.a,{exact:!0,path:"/packing",component:P}),r.a.createElement(s.a,{exact:!0,path:"/Login",component:_}),r.a.createElement(s.a,{exact:!0,path:"/Register",component:D}))};var B=function(){var e,t=Object(s.f)(),a=Object(l.useState)(""),n=Object(i.a)(a,2),o=n[0],c=n[1];return window.addEventListener("load",(function(){"/contact"===window.location.pathname&&c(window.location.pathname)})),Object(l.useEffect)((function(){t.listen((function(e){c(e.name)}))}),[]),"/contact"!==o&&(e=r.a.createElement("li",null,r.a.createElement(u.b,{to:"/contact"},"Contact Me"))),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Trekker"))),r.a.createElement("ul",null,e)),r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[168,1,2]]]);
//# sourceMappingURL=main.677cb00b.chunk.js.map