(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,i){e.exports={app:"App_app__28JOt"}},129:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABsSURBVEhL5c+xDYAwDAVRbxe2YtcwCLHb6AQXSnLSa1C+JWKbznRP6tun5kOrXqPRik2iXzd0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0V6IDT3rSHakGdIjU25Z+V8QACJH0J9BFt1IAAAAASUVORK5CYII="},133:function(e,t,i){e.exports=i(318)},138:function(e,t,i){},139:function(e,t,i){e.exports={cards:"Cards_cards__4x8GE",card:"Cards_card__1VKg6",addStock:"Cards_addStock__3ipaV"}},23:function(e,t,i){e.exports={title:"CardHeader_title__13jo6",ticker:"CardHeader_ticker__1Kfvj",price:"CardHeader_price__2utvN",pos:"CardHeader_pos__1G_bg",neg:"CardHeader_neg__2cii3"}},318:function(e,t,i){"use strict";i.r(t);var c=i(0),a=i.n(c),r=i(125),n=i.n(r),m=(i(138),i(4)),p=i(5),s=i(7),o=i(6),l=i(8),u=i(126),d=i.n(u),h=(i(139),i(23)),E=i.n(h);var f=function(e){var t,i,c=e.stock,r=!0;e.stock.day_change>0?t="$+"+e.stock.day_change:(t="$"+e.stock.day_change,r=!1);var n=!0;return e.stock.change_pct>0?i="+"+e.stock.change_pct+"%":(i=e.stock.change_pct+"%",n=!1),console.log(t),a.a.createElement("div",{className:"row",key:c.symbol},a.a.createElement("div",{className:"col m8 l8"},a.a.createElement("p",{className:"truncate activator ".concat(E.a.title)},c.name),a.a.createElement("p",{className:"".concat(E.a.ticker)},c.symbol)),a.a.createElement("div",{className:"col m4 l4 right-align"},a.a.createElement("p",{className:"".concat(E.a.price)},"$",c.price),a.a.createElement("p",{className:r?E.a.pos:E.a.neg},t),a.a.createElement("p",{className:n?E.a.pos:E.a.neg},i)))},b=i(63),g=i(9),v=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.symbol,t=this.props.liveChartData.find(function(t){return t[e]}),i=[],c=[];if(void 0!==t){t[e].forEach(function(e){c.push(e.price),i.push(e.time)});var r={labels:i,datasets:[{label:e,data:[].concat(c),backgroundColor:["rgba(173, 216, 230, 0.6"]}]}}var n=void 0!==t?a.a.createElement(b.a,{key:e,data:r,width:100,height:50,options:{}}):a.a.createElement("div",null,"Loading chart...");return a.a.createElement("div",null,n)}}]),t}(c.Component),k=Object(g.b)(function(e){return{liveChartData:e.user.liveChartData}})(v),_=i(17),y=i(11),O=i(15),S=i.n(O),A=i(93),N=i.n(A),D=function(e){function t(){var e,i;Object(m.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(i=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).state={isClicked:!1,newStock:""},i.handleClick=function(){i.setState(Object(y.a)({},i.state,{isClicked:!0}))},i.handleChange=function(e){i.setState(Object(_.a)({},e.target.id,e.target.value))},i.handleSubmit=function(e){e.preventDefault(),i.props.addStock(i.state.newStock,"add"),i.setState(Object(y.a)({},i.state,{isClicked:!1}))},i}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.isClicked?a.a.createElement("form",{className:N.a.inputForm,onSubmit:this.handleSubmit},a.a.createElement("label",{htmlFor:"newStock"},"Stock Symbol"),a.a.createElement("input",{type:"text",id:"newStock",maxLength:"5",onChange:this.handleChange}),a.a.createElement("button",null,"Add Stock")):a.a.createElement("div",null);return a.a.createElement("div",{className:N.a.addStock,onClick:this.handleClick},e)}}]),t}(c.Component),C=Object(g.b)(null,function(e){return{addStock:function(t,i){e(function(e,t){return function(i,c){var a=c().user.uid;i({type:"UPDATING_USER_STOCKLIST"}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/changeUserStockList?uid="+a+"&stock="+e+"&type="+t).then(function(t){i({type:"USER_STOCKS_ADDED",stock:e}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock="+e).then(function(t){i({type:"CHART_DATA_UPDATED",payload:t.data,stocksymbol:e})}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabStockData?stock="+e).then(function(e){i({type:"CARD_DATA_RECEIVED",payload:e.data})})}).catch(function(e){return i({type:"LOGIN_USER_ERROR"})})}}(t,i))}}})(D),j=i(320),w=i(129),U=i.n(w);var R=Object(g.b)(null,function(e){return{deleteStock:function(t,i){e(function(e,t){return function(i,c){var a=c().user.uid;i({type:"DELETING_STOCKS"}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/changeUserStockList?uid="+a+"&stock="+e+"&type="+t).then(function(t){i({type:"USER_STOCKS_DELETED",stock:e})})}}(t,i))}}})(function(e){return a.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){e.deleteStock(e.symbol,"delete")}},a.a.createElement("img",{className:"right",src:U.a,alt:"trashcan"}))}),I=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.stocksPurchased,t=this.props.symbol,i=e[t]?e[t].map(function(e){return a.a.createElement("div",{key:e.id},a.a.createElement("span",{className:"card-title"},e.symbol),a.a.createElement("p",null,e.date),a.a.createElement("p",null,e.price),a.a.createElement("p",null,e.quantity))}):a.a.createElement("div",null,"You don't own any ",t," stock yet, go buy more!!!");return this.props.auth?a.a.createElement("div",{className:"card-reveal"},i):a.a.createElement(j.a,{to:"/"})}}]),t}(c.Component),T=Object(g.b)(function(e){return{stocksPurchased:e.user.stocksPurchased,auth:e.user.isAuth}})(I),L=i(65),G=i.n(L),x=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.stocks,t=e.length?e.map(function(e){return a.a.createElement("div",{className:"col s12 m6 l4",key:G.a.generate()},a.a.createElement("div",{className:"card medium green lighten-5 hoverable"},a.a.createElement("div",{className:"card-content black-text"},a.a.createElement(f,{stock:e}),a.a.createElement(k,{symbol:e.symbol}),a.a.createElement(R,{symbol:e.symbol}),a.a.createElement(T,{symbol:e.symbol}))))}):a.a.createElement("div",null,"Click the Plus Sign to add your first Stock!");return this.props.auth?a.a.createElement("div",{className:"row"},t,a.a.createElement(C,null)):a.a.createElement(j.a,{to:"/"})}}]),t}(c.Component),F=Object(g.b)(function(e){return{stocks:e.user.liveStockData,auth:e.user.isAuth}})(x),P=i(322),Z=i(94);i(316);Z.initializeApp({apiKey:"AIzaSyD81klt2BJXJs8S7u02rRKkl_148oWevNs",authDomain:"stock-tracker-d5b73.firebaseapp.com",databaseURL:"https://stock-tracker-d5b73.firebaseio.com",projectId:"stock-tracker-d5b73",storageBucket:"stock-tracker-d5b73.appspot.com",messagingSenderId:"580495898045"});var B=Z.auth(),K=i(95),H=i.n(K),V=function(e){function t(){var e,i;Object(m.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(i=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).handleSignOut=function(){B.signOut().then(function(){return i.props.signOut()}).catch(function(e){return console.log(e)})},i.handleActive=function(e){e.target.parentElement.parentElement.querySelectorAll("li").forEach(function(e){return e.classList.remove("active")}),"Sign Out"!==e.target.innerHTML&&e.target.parentElement.classList.add("active")},i}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.auth?a.a.createElement("div",{onClick:this.handleActive},a.a.createElement(P.a,{to:"/stocks",className:"brand-logo"},"Stock Tracker"),a.a.createElement("ul",{className:"right"},a.a.createElement("li",{id:"NavSignedInActive"},a.a.createElement(P.a,{to:"/stocks"},"Stocks")),a.a.createElement("li",null,a.a.createElement(P.a,{to:"/overview"},"Overview")),a.a.createElement("li",null,a.a.createElement(P.a,{to:"/settings"},"Settings")),a.a.createElement("li",null,a.a.createElement(P.a,{to:"/",onClick:this.handleSignOut},"Sign Out")))):a.a.createElement("div",{onClick:this.handleActive},a.a.createElement(P.a,{to:"/",className:"brand-logo"},"Stock Tracker"),a.a.createElement("ul",{className:"right"},a.a.createElement("li",{className:"active"},a.a.createElement(P.a,{to:"/"},"Sign In")),a.a.createElement("li",null,a.a.createElement(P.a,{to:"/signup"},"Sign Up")),a.a.createElement("li",null,a.a.createElement(P.a,{to:"/preview"},"Preview"))));return a.a.createElement("div",{className:"".concat(H.a.fixedSpacer)},a.a.createElement("nav",{className:"nav-wrapper green lighten-1 ".concat(H.a.nav)},a.a.createElement("div",{className:"container"},e)))}}]),t}(c.Component),W=Object(g.b)(function(e){return{auth:e.user.isAuth}},function(e){return{signOut:function(){e({type:"LOGOUT_USER"})}}})(V),q=function(e){return function(t,i){t({type:"LOGIN_USER_SENT"}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabUserData?uid="+e).then(function(i){t({type:"CARD_DATA_REQUESTED"}),i.data.stocks.map(function(e){S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabStockData?stock="+e).then(function(e){t({type:"CARD_DATA_RECEIVED",payload:e.data})})}),i.data.stocks.map(function(e){S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock="+e).then(function(i){t({type:"CHART_DATA_UPDATED",payload:i.data,stocksymbol:e})})}),t({type:"LOGIN_USER_FULFILLED",payload:i.data,uid:e})}).catch(function(e){return t({type:"LOGIN_USER_ERROR"})})}},J=i(42),Y=i.n(J),z=function(e){function t(){var e,i;Object(m.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(i=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).state={email:"",password:""},i.handleSubmit=function(e){e.preventDefault(),B.signInWithEmailAndPassword(i.state.email,i.state.password).then(function(e){e.user&&(i.props.login(e.user.uid),document.getElementById("NavSignedInActive").classList.add("active"))}).catch(function(e){console.log(e.code,e.message)})},i.handleChange=function(e){i.setState(Object(_.a)({},e.target.id,e.target.value))},i}return Object(l.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){this.props.auth.isAuth&&this.props.history.push("/stocks")}},{key:"render",value:function(){return a.a.createElement("div",{className:Y.a.signIn},a.a.createElement("div",{className:"container ".concat(Y.a.container)},a.a.createElement("form",{className:"white ".concat(Y.a.form),onSubmit:this.handleSubmit},a.a.createElement("h3",{className:"grey-text text-darken-3 center"},"Sign In"),a.a.createElement("div",{className:"input-field container"},a.a.createElement("label",{htmlFor:"email"},"Email"),a.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),a.a.createElement("div",{className:"input-field container"},a.a.createElement("label",{htmlFor:"password"},"Password"),a.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),a.a.createElement("div",{className:Y.a.btnDiv},a.a.createElement("button",{className:"btn red lighten-1 center-align"},"Login")))))}}]),t}(c.Component),Q=Object(g.b)(function(e){return{auth:e.user}},function(e){return{login:function(t){e(q(t))}}})(z),X=i(43),M=i.n(X),$=function(e){function t(){var e,i;Object(m.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(i=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).state={email:"",password:"",firstName:"",lastName:""},i.handleSubmit=function(e){e.preventDefault(),B.createUserWithEmailAndPassword(i.state.email,i.state.password).then(function(e){if(e.user){var t={firstName:i.state.firstName,lastName:i.state.lastName,email:i.state.email,uid:e.user.uid};i.props.createNewUser(t)}}).catch(function(e){console.log(e.code,e.message)})},i.handleChange=function(e){i.setState(Object(_.a)({},e.target.id,e.target.value))},i}return Object(l.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){this.props.auth.isAuth&&this.props.history.push("/stocks")}},{key:"render",value:function(){return a.a.createElement("div",{className:M.a.signUp},a.a.createElement("div",{className:"container ".concat(M.a.container)},a.a.createElement("form",{className:"white ".concat(M.a.form),onSubmit:this.handleSubmit},a.a.createElement("h3",{className:"grey-text text-darken-3 center"},"Sign Up"),a.a.createElement("div",{className:"input-field container"},a.a.createElement("label",{htmlFor:"firstName"},"First Name"),a.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange,required:!0})),a.a.createElement("div",{className:"input-field container"},a.a.createElement("label",{htmlFor:"lastName"},"Last Name"),a.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),a.a.createElement("div",{className:"input-field container"},a.a.createElement("label",{htmlFor:"email"},"Email"),a.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),a.a.createElement("div",{className:"input-field container"},a.a.createElement("label",{htmlFor:"password"},"Password"),a.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),a.a.createElement("div",{className:M.a.btnDiv},a.a.createElement("button",{className:"btn red lighten-1"},"Create")))))}}]),t}(c.Component),ee=Object(g.b)(function(e){return{auth:e.user}},function(e){return{createNewUser:function(t){e(function(e){return function(t,i){t({type:"CREATING_NEW_USER"}),S.a.post("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/createNewUser",{firstName:e.firstName,lastName:e.lastName,email:e.email,uid:e.uid}).then(function(i){"Document successfully written!"===i.data?(t({type:"NEW_USER_CREATED"}),t({type:"LOGIN_USER_FULFILLED",uid:e.uid,payload:{stocks:[]}})):console.log(i)}).catch(function(e){console.log(e)})}}(t))},login:function(t){e(q(t))}}})($),te=function(e){function t(){var e,i;Object(m.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(i=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).state={data:[{AAPL:[{time:"09:30",price:"185.89"},{time:"09:35",price:"186.71"},{price:"186.71",time:"09:40"},{time:"09:45",price:"187.08"},{price:"187.27",time:"09:50"},{price:"187.35",time:"09:55"},{time:"10:00",price:"187.32"},{time:"10:05",price:"187.52"},{price:"187.93",time:"10:10"},{price:"187.70",time:"10:15"},{price:"188.16",time:"10:20"},{price:"188.01",time:"10:25"},{time:"10:30",price:"188.33"},{price:"188.04",time:"10:35"},{time:"10:40",price:"187.84"},{price:"188.10",time:"10:45"},{price:"188.10",time:"10:50"},{price:"188.21",time:"10:55"},{price:"188.22",time:"11:00"},{price:"187.95",time:"11:05"},{time:"11:10",price:"187.87"},{time:"11:15",price:"187.87"},{price:"187.74",time:"11:20"},{time:"11:25",price:"187.40"},{time:"11:30",price:"187.61"},{time:"11:35",price:"187.31"},{time:"11:40",price:"187.33"},{price:"187.20",time:"11:45"},{price:"187.46",time:"11:50"},{time:"11:55",price:"187.54"},{price:"187.57",time:"12:00"},{price:"187.43",time:"12:05"},{time:"12:10",price:"187.53"},{time:"12:15",price:"187.59"},{time:"12:20",price:"187.23"},{price:"187.37",time:"12:25"},{price:"187.28",time:"12:30"},{time:"12:35",price:"187.13"},{time:"12:40",price:"187.46"},{price:"187.59",time:"12:45"},{time:"12:50",price:"187.55"},{price:"187.52",time:"12:55"},{price:"187.40",time:"13:00"},{price:"187.39",time:"13:05"},{time:"13:10",price:"187.59"},{price:"187.61",time:"13:15"},{time:"13:20",price:"187.63"},{time:"13:25",price:"187.70"},{price:"187.81",time:"13:30"},{price:"187.85",time:"13:35"},{price:"187.84",time:"13:40"},{price:"187.96",time:"13:45"},{price:"187.90",time:"13:50"},{time:"13:55",price:"188.02"},{time:"14:00",price:"188.09"},{price:"188.18",time:"14:05"},{time:"14:10",price:"188.05"},{price:"188.03",time:"14:15"},{price:"188.09",time:"14:20"},{price:"187.95",time:"14:25"},{price:"187.82",time:"14:30"},{price:"187.80",time:"14:35"},{time:"14:40",price:"187.83"},{time:"14:45",price:"187.78"},{time:"14:50",price:"187.94"},{price:"187.88",time:"14:55"},{price:"187.97",time:"15:00"},{time:"15:03",price:"187.98"}]},{GOOG:[{time:"09:30",price:"1182.47"},{time:"09:35",price:"1183.26"},{price:"1181.55",time:"09:40"},{price:"1179.50",time:"09:45"},{price:"1182.85",time:"09:50"},{price:"1181.99",time:"09:55"},{price:"1186.04",time:"10:00"},{price:"1186.24",time:"10:05"},{price:"1189.95",time:"10:10"},{price:"1188.04",time:"10:15"},{price:"1187.72",time:"10:20"},{price:"1187.00",time:"10:25"},{price:"1185.95",time:"10:30"},{time:"10:35",price:"1184.31"},{time:"10:40",price:"1184.59"},{price:"1185.40",time:"10:45"},{time:"10:50",price:"1185.69"},{price:"1187.14",time:"10:55"},{time:"11:00",price:"1187.18"},{price:"1187.39",time:"11:05"},{time:"11:10",price:"1186.83"},{price:"1185.77",time:"11:15"},{price:"1184.69",time:"11:20"},{price:"1182.55",time:"11:25"},{price:"1183.89",time:"11:30"},{time:"11:35",price:"1183.08"},{time:"11:40",price:"1181.97"},{price:"1183.03",time:"11:45"},{time:"11:50",price:"1182.32"},{price:"1180.20",time:"11:55"},{time:"12:00",price:"1180.71"},{time:"12:05",price:"1180.22"},{price:"1179.36",time:"12:10"},{time:"12:15",price:"1180.21"},{time:"12:20",price:"1177.55"},{price:"1178.29",time:"12:25"},{price:"1179.95",time:"12:30"},{price:"1179.47",time:"12:35"},{time:"12:40",price:"1180.26"},{time:"12:45",price:"1180.25"},{price:"1180.83",time:"12:50"},{time:"12:55",price:"1181.25"},{price:"1181.01",time:"13:00"},{price:"1182.00",time:"13:05"},{price:"1182.88",time:"13:10"},{time:"13:15",price:"1181.54"},{price:"1180.51",time:"13:20"},{price:"1181.71",time:"13:25"},{time:"13:30",price:"1181.69"},{time:"13:35",price:"1181.75"},{time:"13:40",price:"1182.31"},{price:"1183.56",time:"13:45"},{price:"1183.50",time:"13:50"},{price:"1183.90",time:"13:55"},{price:"1185.22",time:"14:00"},{price:"1184.43",time:"14:05"},{price:"1184.82",time:"14:10"},{time:"14:15",price:"1184.92"},{price:"1186.23",time:"14:20"},{price:"1185.46",time:"14:25"},{price:"1185.59",time:"14:30"},{price:"1185.60",time:"14:35"},{price:"1186.88",time:"14:40"},{price:"1186.49",time:"14:45"},{price:"1186.66",time:"14:50"},{time:"14:55",price:"1185.02"},{time:"15:00",price:"1184.91"},{price:"1184.57",time:"15:02"}]},{TSLA:[{time:"09:30",price:"276.00"},{price:"276.64",time:"09:35"},{time:"09:40",price:"276.51"},{time:"09:45",price:"276.85"},{time:"09:50",price:"275.20"},{time:"09:55",price:"273.35"},{time:"10:00",price:"272.52"},{price:"271.96",time:"10:05"},{price:"271.75",time:"10:10"},{price:"271.28",time:"10:15"},{time:"10:20",price:"271.54"},{time:"10:25",price:"268.93"},{price:"267.49",time:"10:30"},{time:"10:35",price:"268.89"},{price:"269.42",time:"10:40"},{time:"10:45",price:"267.64"},{time:"10:50",price:"269.57"},{price:"269.66",time:"10:55"},{price:"270.49",time:"11:00"},{price:"270.26",time:"11:05"},{time:"11:10",price:"269.82"},{time:"11:15",price:"270.04"},{price:"271.16",time:"11:20"},{price:"270.38",time:"11:25"},{time:"11:30",price:"270.11"},{time:"11:35",price:"269.22"},{price:"269.82",time:"11:40"},{price:"269.94",time:"11:45"},{time:"11:50",price:"270.29"},{time:"11:55",price:"269.53"},{price:"269.59",time:"12:00"},{time:"12:05",price:"269.80"},{price:"270.06",time:"12:10"},{price:"270.32",time:"12:15"},{time:"12:20",price:"269.82"},{time:"12:25",price:"270.04"},{time:"12:30",price:"270.01"},{price:"269.17",time:"12:35"},{price:"268.86",time:"12:40"},{price:"270.59",time:"12:45"},{time:"12:50",price:"269.80"},{price:"269.84",time:"12:55"},{time:"13:00",price:"269.56"},{time:"13:05",price:"269.27"},{price:"269.10",time:"13:10"},{time:"13:15",price:"268.30"},{price:"268.49",time:"13:20"},{price:"268.98",time:"13:25"},{time:"13:30",price:"268.47"},{time:"13:35",price:"269.00"},{price:"268.96",time:"13:40"},{time:"13:45",price:"269.13"},{time:"13:50",price:"269.13"},{time:"13:55",price:"269.86"},{price:"269.58",time:"14:00"},{time:"14:05",price:"269.60"},{price:"270.22",time:"14:10"},{price:"269.96",time:"14:15"},{time:"14:20",price:"270.50"},{time:"14:25",price:"270.20"},{time:"14:30",price:"270.24"},{price:"269.29",time:"14:35"},{price:"269.46",time:"14:40"},{time:"14:45",price:"269.92"},{price:"270.06",time:"14:50"},{price:"269.85",time:"14:55"},{time:"15:00",price:"270.23"},{time:"15:03",price:"270.24"}]},{FB:[{time:"09:30",price:"163.49"},{time:"09:35",price:"161.96"},{time:"09:40",price:"160.94"},{price:"161.04",time:"09:45"},{price:"161.22",time:"09:50"},{price:"161.74",time:"09:55"},{price:"162.18",time:"10:00"},{price:"162.18",time:"10:05"},{price:"162.85",time:"10:10"},{price:"162.57",time:"10:15"},{price:"162.81",time:"10:20"},{time:"10:25",price:"162.97"},{time:"10:30",price:"162.82"},{time:"10:35",price:"162.40"},{price:"162.35",time:"10:40"},{price:"162.10",time:"10:45"},{time:"10:50",price:"162.08"},{price:"162.19",time:"10:55"},{time:"11:00",price:"162.17"},{price:"161.80",time:"11:05"},{price:"161.91",time:"11:10"},{price:"161.62",time:"11:15"},{price:"161.56",time:"11:20"},{price:"161.43",time:"11:25"},{price:"161.76",time:"11:30"},{price:"161.52",time:"11:35"},{time:"11:40",price:"161.21"},{time:"11:45",price:"161.28"},{time:"11:50",price:"161.35"},{price:"161.32",time:"11:55"},{price:"161.33",time:"12:00"},{time:"12:05",price:"161.15"},{price:"161.21",time:"12:10"},{time:"12:15",price:"161.33"},{time:"12:20",price:"161.07"},{time:"12:25",price:"161.09"},{time:"12:30",price:"161.21"},{price:"161.08",time:"12:35"},{time:"12:40",price:"161.05"},{price:"161.00",time:"12:45"},{time:"12:50",price:"160.78"},{price:"160.63",time:"12:55"},{time:"13:00",price:"160.37"},{time:"13:05",price:"160.13"},{price:"160.32",time:"13:10"},{price:"159.94",time:"13:15"},{time:"13:20",price:"159.55"},{price:"159.97",time:"13:25"},{price:"159.98",time:"13:30"},{time:"13:35",price:"160.31"},{time:"13:40",price:"160.40"},{time:"13:45",price:"160.32"},{price:"160.07",time:"13:50"},{time:"13:55",price:"160.03"},{time:"14:00",price:"160.17"},{price:"160.48",time:"14:05"},{time:"14:10",price:"160.39"},{price:"160.42",time:"14:15"},{price:"160.50",time:"14:20"},{time:"14:25",price:"160.45"},{time:"14:30",price:"160.10"},{time:"14:35",price:"160.25"},{time:"14:40",price:"160.81"},{price:"160.82",time:"14:45"},{price:"160.60",time:"14:50"},{time:"14:55",price:"160.31"},{price:"160.29",time:"15:00"},{price:"160.22",time:"15:05"},{price:"160.11",time:"15:10"},{price:"160.08",time:"15:15"},{time:"15:20",price:"160.10"},{time:"15:25",price:"160.17"},{time:"15:30",price:"160.22"},{price:"160.07",time:"15:35"},{price:"160.11",time:"15:40"},{time:"15:45",price:"160.00"},{price:"160.11",time:"15:50"},{time:"15:55",price:"160.12"}]},{AMZN:[{price:"1712.70",time:"09:30"},{time:"09:35",price:"1721.00"},{time:"09:40",price:"1721.50"},{price:"1723.50",time:"09:45"},{time:"09:50",price:"1725.33"},{time:"09:55",price:"1728.54"},{time:"10:00",price:"1733.00"},{price:"1734.10",time:"10:05"},{time:"10:10",price:"1735.95"},{price:"1735.30",time:"10:15"},{time:"10:20",price:"1738.52"},{price:"1738.65",time:"10:25"},{price:"1739.29",time:"10:30"},{price:"1737.63",time:"10:35"},{price:"1737.69",time:"10:40"},{time:"10:45",price:"1739.81"},{time:"10:50",price:"1743.10"},{price:"1744.77",time:"10:55"},{price:"1746.60",time:"11:00"},{time:"11:05",price:"1746.54"},{price:"1746.19",time:"11:10"},{price:"1746.30",time:"11:15"},{time:"11:20",price:"1745.56"},{price:"1739.32",time:"11:25"},{price:"1739.20",time:"11:30"},{time:"11:35",price:"1734.96"},{time:"11:40",price:"1737.53"},{time:"11:45",price:"1739.05"},{time:"11:50",price:"1739.95"},{time:"11:55",price:"1739.69"},{time:"12:00",price:"1738.61"},{price:"1737.22",time:"12:05"},{price:"1737.45",time:"12:10"},{time:"12:15",price:"1739.50"},{time:"12:20",price:"1736.60"},{price:"1737.84",time:"12:25"},{time:"12:30",price:"1739.01"},{time:"12:35",price:"1737.92"},{price:"1737.82",time:"12:40"},{price:"1738.57",time:"12:45"},{time:"12:50",price:"1739.71"},{time:"12:55",price:"1739.60"},{time:"13:00",price:"1739.79"},{time:"13:05",price:"1739.62"},{price:"1739.50",time:"13:10"},{price:"1739.74",time:"13:15"},{price:"1739.99",time:"13:20"},{price:"1739.63",time:"13:25"},{price:"1739.63",time:"13:30"},{price:"1738.84",time:"13:35"},{time:"13:40",price:"1744.80"},{time:"13:45",price:"1746.48"},{price:"1745.70",time:"13:50"},{time:"13:55",price:"1743.38"},{price:"1743.55",time:"14:00"},{price:"1744.70",time:"14:05"},{price:"1743.94",time:"14:10"},{time:"14:15",price:"1744.89"},{price:"1747.45",time:"14:20"},{price:"1747.90",time:"14:25"},{price:"1748.31",time:"14:30"},{price:"1748.43",time:"14:35"},{price:"1749.68",time:"14:40"},{price:"1748.44",time:"14:45"},{price:"1747.82",time:"14:50"},{time:"14:55",price:"1749.49"},{time:"15:00",price:"1749.34"},{time:"15:05",price:"1748.96"},{time:"15:10",price:"1748.38"},{price:"1746.70",time:"15:15"},{price:"1745.62",time:"15:20"},{price:"1745.00",time:"15:25"},{time:"15:30",price:"1744.43"},{price:"1744.80",time:"15:35"},{time:"15:40",price:"1742.17"},{price:"1743.94",time:"15:45"},{price:"1744.21",time:"15:50"},{time:"15:55",price:"1742.15"}]}]},i}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.symbol,t=this.state.data.find(function(t){return t[e]}),i=[],c=[];if(void 0!==t){t[e].forEach(function(e){c.push(e.price),i.push(e.time)});var r={labels:i,datasets:[{label:e,data:[].concat(c),backgroundColor:["rgba(173, 216, 230, 0.6"]}]}}var n=void 0!==t?a.a.createElement(b.a,{key:e,data:r,width:100,height:50,options:{}}):a.a.createElement("div",null,"Loading chart...");return a.a.createElement("div",null,n)}}]),t}(c.Component),ie=function(e){function t(){var e,i;Object(m.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(i=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(a)))).state={stocks:[{price:"1185.49",change_pct:"0.09",day_change:"1.03",symbol:"GOOG",name:"Alphabet Inc Class C"},{day_change:"1.82",symbol:"AAPL",name:"Apple Inc.",price:"187.94",change_pct:"0.98"},{price:"270.20",change_pct:"-1.90",day_change:"-5.23",symbol:"TSLA",name:"Tesla Inc"},{price:"1025.75",change_pct:"-3.75",day_change:"-15.95",symbol:"FB",name:"Facebook Inc"},{price:"1652.36",change_pct:"2.23",day_change:"16.57",symbol:"AMZN",name:"Amazon"}]},i}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.stocks.map(function(e){return a.a.createElement("div",{className:"col s12 m6 l4"},a.a.createElement("div",{className:"card medium green lighten-5 hoverable",key:G.a.generate()},a.a.createElement("div",{className:"card-content black-text"},a.a.createElement(f,{stock:e}),a.a.createElement(te,{symbol:e.symbol}))))});return a.a.createElement("div",{className:"row"},e)}}]),t}(c.Component),ce=i(319),ae=i(321),re=i(132),ne=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(ce.a,null,a.a.createElement("div",{className:d.a.app},a.a.createElement(W,null),a.a.createElement(ae.a,null,a.a.createElement(re.a,{exact:!0,path:"/",component:Q}),a.a.createElement(re.a,{exact:!0,path:"/stocks",component:F}),a.a.createElement(re.a,{path:"/signup",component:ee}),a.a.createElement(re.a,{path:"/preview",component:ie}),a.a.createElement(re.a,{path:"/stocks/:stock_symbol",component:T}))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=i(41),pe=i(44),se={user:{status:"logged Out",isAuth:!1,uid:"",stocks:[],liveStockData:[],stocksPurchased:{AAPL:[{date:"1/1/2019",price:"101.85",quantity:"2",id:1},{date:"1/15/2019",price:"105.15",quantity:"1",id:2}],TSLA:[{date:"2/1/2019",price:"311.85",quantity:"1",id:1},{date:"3/15/2019",price:"335.15",quantity:"10",id:2}]},liveChartData:[]}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;if("CONSOLE_LOG"===t.type&&console.log("logged to the console"),"LOGIN_USER_SENT"===t.type)return Object(y.a)({},e,{user:Object(y.a)({},e.user,{status:"pending"})});if("LOGIN_USER_FULFILLED"===t.type)return Object(y.a)({},e,{user:Object(y.a)({},e.user,{status:"logged In",isAuth:!0,uid:t.uid,stocks:t.payload.stocks})});if("ADD_STOCK"===t.type)return Object(y.a)({},e,{user:Object(y.a)({},e.user,{stocks:[].concat(Object(pe.a)(e.user.stocks),[t.chart])})});if("LOGIN_USER_ERROR"===t.type)return e;if("LOGOUT_USER"===t.type)return se;if("CARD_DATA_REQUESTED"===t.type)return e;if("CREATING_NEW_USER"===t.type)return e;if("NEW_USER_CREATED"===t.type)return e;if("CARD_DATA_RECEIVED"===t.type)return Object(y.a)({},e,{user:Object(y.a)({},e.user,{liveStockData:[].concat(Object(pe.a)(e.user.liveStockData),[t.payload])})});if("UPDATING_USER_STOCKLIST"===t.type)return e;if("USER_STOCKS_ADDED"===t.type)return Object(y.a)({},e,{user:Object(y.a)({},e.user,{stocks:[].concat(Object(pe.a)(e.user.stocks),[t.stock])})});if("DELETING_STOCKS"===t.type)return e;if("USER_STOCKS_DELETED"===t.type){var i=e.user.stocks.filter(function(e){return e!==t.stock}),c=e.user.liveStockData.filter(function(e){return e.symbol!==t.stock}),a=e.user.liveChartData.filter(function(e){return void 0===e[t.stock]});return Object(y.a)({},e,{user:Object(y.a)({},e.user,{liveStockData:c,stocks:i,liveChartData:a})})}if("CHART_DATA_UPDATED"===t.type){var r=Object(_.a)({},t.stocksymbol,t.payload);return Object(y.a)({},e,{user:Object(y.a)({},e.user,{liveChartData:[].concat(Object(pe.a)(e.user.liveChartData),[r])})})}return e},le=i(130),ue=i.n(le),de=i(131),he=Object(me.c)(oe,Object(me.a)(de.a,ue.a));n.a.render(a.a.createElement(g.a,{store:he},a.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,i){e.exports={signIn:"SignIn_signIn__1C46Y",container:"SignIn_container__1sc1X",fadein:"SignIn_fadein__2t0f3",form:"SignIn_form__ozZNL",btnDiv:"SignIn_btnDiv__3jDE4"}},43:function(e,t,i){e.exports={signUp:"SignUp_signUp__1Bnn_",container:"SignUp_container__2Bzav",fadein:"SignUp_fadein__2r8sc",form:"SignUp_form__95gRC",btnDiv:"SignUp_btnDiv__GV14G"}},93:function(e,t,i){e.exports={addStock:"AddStock_addStock__3YD5_",inputForm:"AddStock_inputForm__1oIZy"}},95:function(e,t,i){e.exports={nav:"NavBar_nav__3rfGn",fixedSpacer:"NavBar_fixedSpacer__2Tcwt"}}},[[133,1,2]]]);
//# sourceMappingURL=main.68cd2cae.chunk.js.map