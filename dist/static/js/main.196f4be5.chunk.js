(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports={nav:"NavBar_nav__3rfGn",fixedSpacer:"NavBar_fixedSpacer__2Tcwt"}},136:function(e,t,a){e.exports={app:"App_app__28JOt"}},139:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABsSURBVEhL5c+xDYAwDAVRbxe2YtcwCLHb6AQXSnLSa1C+JWKbznRP6tun5kOrXqPRik2iXzd0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0NDZ0V6IDT3rSHakGdIjU25Z+V8QACJH0J9BFt1IAAAAASUVORK5CYII="},144:function(e,t,a){e.exports=a(367)},149:function(e,t,a){},269:function(e,t,a){e.exports={addStock:"AddStock_addStock__3YD5_",inputForm:"AddStock_inputForm__1oIZy"}},28:function(e,t,a){e.exports={title:"CardHeader_title__13jo6",ticker:"CardHeader_ticker__1Kfvj",price:"CardHeader_price__2utvN",pos:"CardHeader_pos__1G_bg",neg:"CardHeader_neg__2cii3"}},367:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),r=a(99),n=a.n(r),o=(a(149),a(4)),s=a(5),l=a(8),m=a(6),p=a(7),u=a(136),d=a.n(u),h=a(28),E=a.n(h);var b=function(e){var t,a,i=e.stock,r=!0;e.stock.day_change>0?t="$+"+e.stock.day_change:(t="$"+e.stock.day_change,r=!1);var n=!0;return e.stock.change_pct>0?a="+"+e.stock.change_pct+"%":(a=e.stock.change_pct+"%",n=!1),c.a.createElement("div",{className:"row",key:i.symbol},c.a.createElement("div",{className:"col m8 l8"},c.a.createElement("p",{className:"truncate activator ".concat(E.a.title)},i.name),c.a.createElement("p",{className:"".concat(E.a.ticker)},i.symbol)),c.a.createElement("div",{className:"col m4 l4 right-align"},c.a.createElement("p",{className:"".concat(E.a.price)},"$",i.price),c.a.createElement("p",{className:r?E.a.pos:E.a.neg},t),c.a.createElement("p",{className:n?E.a.pos:E.a.neg},a)))},f=a(39),g=a(10),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.symbol,t=this.props.liveChartData.find(function(t){return t[e]}),a=[],i=[];if(void 0!==t){t[e].forEach(function(e){i.push(e.price),a.push(e.time)});var r={labels:a,datasets:[{label:e,data:[].concat(i),backgroundColor:["rgba(173, 216, 230, 0.6"]}]}}var n=void 0!==t?c.a.createElement(f.a,{key:e,data:r,width:100,height:275,options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{displayColors:!1,enabled:!0,bodyFontSize:24,callbacks:{title:function(e){return""},label:function(e){return"$"+e.value}}}}}):c.a.createElement("div",null,"Loading chart...");return c.a.createElement("div",null,n)}}]),t}(i.Component),v=Object(g.b)(function(e){return{liveChartData:e.user.liveChartData}})(k),y=a(15),O=a(14),S=a.n(O),_=(a(269),a(11)),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={newStock:""},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.addStock(a.state.newStock,"add")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(_.Modal,{header:"Add Stock for Tracking",trigger:c.a.createElement(_.Button,null,"Add Stock for Tracking")},c.a.createElement(_.Input,{type:"text",id:"newStock",placeholder:"stock symbol",maxLength:"5",onChange:this.handleChange}),c.a.createElement(_.Button,{waves:"light",onClick:this.handleSubmit},"Submit")))}}]),t}(i.Component),N=Object(g.b)(null,function(e){return{addStock:function(t,a){e(function(e,t){return function(a,i){var c=i().user.uid;a({type:"UPDATING_USER_STOCKLIST"}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/changeUserStockList?uid="+c+"&stock="+e+"&type="+t).then(function(t){a({type:"USER_STOCKS_ADDED",stock:e}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock="+e).then(function(t){a({type:"CHART_DATA_UPDATED",payload:t.data,stocksymbol:e})}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabStockData?stock="+e).then(function(e){a({type:"CARD_DATA_RECEIVED",payload:e.data})})}).catch(function(e){return a({type:"LOGIN_USER_ERROR"})})}}(t,a))}}})(A),j=a(369),D=a(139),C=a.n(D);var w=Object(g.b)(null,function(e){return{deleteStock:function(t,a){e(function(e,t){return function(a,i){var c=i().user.uid;a({type:"DELETING_STOCKS"}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/changeUserStockList?uid="+c+"&stock="+e+"&type="+t).then(function(t){a({type:"USER_STOCKS_DELETED",stock:e})})}}(t,a))}}})(function(e){return c.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){e.deleteStock(e.symbol,"delete")}},c.a.createElement("img",{className:"right",src:C.a,alt:"trashcan"}))}),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleSubmit=function(e,t){a.props.deletePurchase(e,t,"DELETE_PURCHASE")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.stocksPurchased,a=this.props.symbol,i=t[a]?t[a].map(function(t){return c.a.createElement("div",{key:t.id,className:" row grey-text text-darken-4"},c.a.createElement("div",{className:"col s4"},"Date:"),c.a.createElement("div",{className:"col s3"},"Price:"),c.a.createElement("div",{className:"col s3"},"Quantity:"),c.a.createElement("div",{className:"col s4"},t.date),c.a.createElement("div",{className:"col s3"},t.price),c.a.createElement("div",{className:"col s2"},t.quantity),c.a.createElement("div",{className:"col s1"},c.a.createElement(_.Modal,{trigger:c.a.createElement(_.Button,null,"Delete")},c.a.createElement(_.Row,null,c.a.createElement("p",null,"Are you sure you want to delete this stock?"),c.a.createElement(_.Button,{waves:"light",id:t.id,onClick:function(){e.handleSubmit(t.id,a)}},"Submit")))))}):c.a.createElement("div",null,"You don't own any ",a," stock yet, go buy more!!!");return this.props.auth?c.a.createElement("div",null,c.a.createElement("div",{className:"title"},a),i):c.a.createElement(j.a,{to:"/"})}}]),t}(i.Component),R=Object(g.b)(function(e){return{stocksPurchased:e.user.stocksPurchased,auth:e.user.isAuth}},function(e){return{deletePurchase:function(t,a,i){e(function(e,t,a){return function(i,c){i({id:e,symbol:t,type:a});var r=c().user.uid,n=c().user.stocksPurchased;S.a.post("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/updateUserPurchases",{purchase:n,uid:r}).then(function(e){"Successfully Added"===e.data?i({type:"USER_PURCHASES_UPDATED"}):console.log(e)}).catch(function(e){console.log(e)})}}(t,a,i))}}})(U),P=a(17),I=a.n(P),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={symbol:"",date:"",quantity:null,price:null},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.newPurchase(a.state,"ADD_PURCHASE")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(_.Modal,{header:"Purchase New Stocks",trigger:c.a.createElement(_.Button,null,"Click to purchase new Stocks!!!")},c.a.createElement(_.Row,null,c.a.createElement(_.Input,{id:"symbol",placeholder:"Stock Symbol",s:4,label:"Stock Symbol",onChange:this.handleChange}),c.a.createElement(_.Input,{s:5,id:"date",label:"Date Purchased",placeholder:"mm/dd/yyyy",onChange:this.handleChange}),c.a.createElement(_.Input,{s:3,id:"price",label:"price",placeholder:"$price",onChange:this.handleChange}),c.a.createElement(_.Input,{s:2,id:"quantity",label:"Quantity",onChange:this.handleChange}),c.a.createElement(_.Button,{waves:"light",onClick:this.handleSubmit},"Submit"))))}}]),t}(i.Component),L=Object(g.b)(null,function(e){return{newPurchase:function(t,a){e(function(e,t){return function(a,i){a({purchase:e,type:t});var c=i().user.uid,r=i().user.stocksPurchased;S.a.post("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/updateUserPurchases",{purchase:r,uid:c}).then(function(e){"Successfully Added"===e.data?a({type:"USER_PURCHASES_UPDATED"}):console.log(e)}).catch(function(e){console.log(e)})}}(t,a))}}})(T),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.stocks,t=e.length?e.map(function(e){return c.a.createElement("div",{className:"card col s12 m6 l4 waves-effect waves-block waves-light z-depth-0",key:I.a.generate()},c.a.createElement("div",{className:"card medium green lighten-5 hoverable activator"},c.a.createElement("div",{className:"card-content black-text"},c.a.createElement(b,{stock:e}),c.a.createElement(v,{symbol:e.symbol}),c.a.createElement(w,{symbol:e.symbol})),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},c.a.createElement("i",{className:"material-icons right"},"close"),c.a.createElement(R,{symbol:e.symbol})))))}):c.a.createElement("div",null,"Click the Plus Sign to add your first Stock!");return this.props.auth?c.a.createElement("div",{className:"row"},t,c.a.createElement(N,null),c.a.createElement(L,null)):c.a.createElement(j.a,{to:"/"})}}]),t}(i.Component),F=Object(g.b)(function(e){return{stocks:e.user.liveStockData,auth:e.user.isAuth}})(x),G=a(372),B=a(371),H=a(103);a(365);H.initializeApp({apiKey:"AIzaSyD81klt2BJXJs8S7u02rRKkl_148oWevNs",authDomain:"stock-tracker-d5b73.firebaseapp.com",databaseURL:"https://stock-tracker-d5b73.firebaseio.com",projectId:"stock-tracker-d5b73",storageBucket:"stock-tracker-d5b73.appspot.com",messagingSenderId:"580495898045"});var Z=H.auth(),q=a(104),$=a.n(q),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleSignOut=function(){Z.signOut().then(function(){return a.props.signOut()}).catch(function(e){return console.log(e)})},a.handleActive=function(e){e.target.parentElement.parentElement.querySelectorAll("li").forEach(function(e){return e.classList.remove("active")}),"Sign Out"!==e.target.innerHTML&&e.target.parentElement.classList.add("active")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.auth?c.a.createElement("div",{onClick:this.handleActive},c.a.createElement(G.a,{to:"/stocks",className:"brand-logo"},"Stock Tracker"),c.a.createElement("ul",{className:"right"},c.a.createElement("li",{id:"NavSignedInActive"},c.a.createElement(G.a,{to:"/stocks"},"Stocks")),c.a.createElement("li",null,c.a.createElement(G.a,{to:"/overview"},"Overview")),c.a.createElement("li",null,c.a.createElement(G.a,{to:"/settings"},"Settings")),c.a.createElement("li",null,c.a.createElement(G.a,{to:"/",onClick:this.handleSignOut},"Sign Out")))):c.a.createElement("div",{onClick:this.handleActive},c.a.createElement(G.a,{to:"/",className:"brand-logo"},"Stock Tracker"),c.a.createElement("ul",{className:"right"},c.a.createElement("li",{className:"active"},c.a.createElement(G.a,{to:"/"},"Sign In")),c.a.createElement("li",null,c.a.createElement(G.a,{to:"/signup"},"Sign Up")),c.a.createElement("li",null,c.a.createElement(G.a,{to:"/preview"},"Preview"))));return c.a.createElement("div",{className:"".concat($.a.fixedSpacer)},c.a.createElement("nav",{className:"nav-wrapper green lighten-1 ".concat($.a.nav)},c.a.createElement("div",{className:"container"},e)))}}]),t}(i.Component),z=Object(g.b)(function(e){return{auth:e.user.isAuth}},function(e){return{signOut:function(){e({type:"LOGOUT_USER"})}}})(Object(B.a)(K)),V=function(e){return function(t,a){t({type:"LOGIN_USER_SENT"}),S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabUserData?uid="+e).then(function(a){t({type:"CARD_DATA_REQUESTED"}),t({type:"LOGIN_USER_FULFILLED",payload:a.data,uid:e}),a.data.stocks.map(function(e){S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabStockData?stock="+e).then(function(e){t({type:"CARD_DATA_RECEIVED",payload:e.data})})}),a.data.stocks.map(function(e){S.a.get("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/grabInterDay?stock="+e).then(function(a){t({type:"CHART_DATA_UPDATED",payload:a.data,stocksymbol:e})})})}).catch(function(e){return t({type:"LOGIN_USER_ERROR"})})}},Q=a(51),W=a.n(Q),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),Z.signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){e.user&&a.props.login(e.user.uid)}).catch(function(e){console.log(e.code,e.message)})},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.id,e.target.value))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.props.auth.isAuth&&this.props.history.push("/stocks")}},{key:"render",value:function(){return c.a.createElement("div",{className:W.a.signIn},c.a.createElement("div",{className:"container ".concat(W.a.container)},c.a.createElement("form",{className:"white ".concat(W.a.form),onSubmit:this.handleSubmit},c.a.createElement("h3",{className:"grey-text text-darken-3 center"},"Sign In"),c.a.createElement("div",{className:"input-field container"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field container"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:W.a.btnDiv},c.a.createElement("button",{className:"btn red lighten-1 center-align"},"Login")))))}}]),t}(i.Component),M=Object(g.b)(function(e){return{auth:e.user}},function(e){return{login:function(t){e(V(t))}}})(J),Y=a(52),X=a.n(Y),ee=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:"",firstName:"",lastName:""},a.handleSubmit=function(e){e.preventDefault(),Z.createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){if(e.user){var t={firstName:a.state.firstName,lastName:a.state.lastName,email:a.state.email,uid:e.user.uid};a.props.createNewUser(t)}}).catch(function(e){console.log(e.code,e.message)})},a.handleChange=function(e){a.setState(Object(y.a)({},e.target.id,e.target.value))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.props.auth.isAuth&&this.props.history.push("/stocks")}},{key:"render",value:function(){return c.a.createElement("div",{className:X.a.signUp},c.a.createElement("div",{className:"container ".concat(X.a.container)},c.a.createElement("form",{className:"white ".concat(X.a.form),onSubmit:this.handleSubmit},c.a.createElement("h3",{className:"grey-text text-darken-3 center"},"Sign Up"),c.a.createElement("div",{className:"input-field container"},c.a.createElement("label",{htmlFor:"firstName"},"First Name"),c.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange,required:!0})),c.a.createElement("div",{className:"input-field container"},c.a.createElement("label",{htmlFor:"lastName"},"Last Name"),c.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field container"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field container"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:X.a.btnDiv},c.a.createElement("button",{className:"btn red lighten-1"},"Create")))))}}]),t}(i.Component),te=Object(g.b)(function(e){return{auth:e.user}},function(e){return{createNewUser:function(t){e(function(e){return function(t,a){t({type:"CREATING_NEW_USER"}),S.a.post("https://us-central1-stock-tracker-d5b73.cloudfunctions.net/createNewUser",{firstName:e.firstName,lastName:e.lastName,email:e.email,uid:e.uid}).then(function(a){"Document successfully written!"===a.data?(t({type:"NEW_USER_CREATED"}),t({type:"LOGIN_USER_FULFILLED",uid:e.uid,payload:{stocks:[]}})):console.log(a)}).catch(function(e){console.log(e)})}}(t))},login:function(t){e(V(t))}}})(ee),ae=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={data:[{AAPL:[{time:"09:30",price:"185.89"},{time:"09:35",price:"186.71"},{price:"186.71",time:"09:40"},{time:"09:45",price:"187.08"},{price:"187.27",time:"09:50"},{price:"187.35",time:"09:55"},{time:"10:00",price:"187.32"},{time:"10:05",price:"187.52"},{price:"187.93",time:"10:10"},{price:"187.70",time:"10:15"},{price:"188.16",time:"10:20"},{price:"188.01",time:"10:25"},{time:"10:30",price:"188.33"},{price:"188.04",time:"10:35"},{time:"10:40",price:"187.84"},{price:"188.10",time:"10:45"},{price:"188.10",time:"10:50"},{price:"188.21",time:"10:55"},{price:"188.22",time:"11:00"},{price:"187.95",time:"11:05"},{time:"11:10",price:"187.87"},{time:"11:15",price:"187.87"},{price:"187.74",time:"11:20"},{time:"11:25",price:"187.40"},{time:"11:30",price:"187.61"},{time:"11:35",price:"187.31"},{time:"11:40",price:"187.33"},{price:"187.20",time:"11:45"},{price:"187.46",time:"11:50"},{time:"11:55",price:"187.54"},{price:"187.57",time:"12:00"},{price:"187.43",time:"12:05"},{time:"12:10",price:"187.53"},{time:"12:15",price:"187.59"},{time:"12:20",price:"187.23"},{price:"187.37",time:"12:25"},{price:"187.28",time:"12:30"},{time:"12:35",price:"187.13"},{time:"12:40",price:"187.46"},{price:"187.59",time:"12:45"},{time:"12:50",price:"187.55"},{price:"187.52",time:"12:55"},{price:"187.40",time:"13:00"},{price:"187.39",time:"13:05"},{time:"13:10",price:"187.59"},{price:"187.61",time:"13:15"},{time:"13:20",price:"187.63"},{time:"13:25",price:"187.70"},{price:"187.81",time:"13:30"},{price:"187.85",time:"13:35"},{price:"187.84",time:"13:40"},{price:"187.96",time:"13:45"},{price:"187.90",time:"13:50"},{time:"13:55",price:"188.02"},{time:"14:00",price:"188.09"},{price:"188.18",time:"14:05"},{time:"14:10",price:"188.05"},{price:"188.03",time:"14:15"},{price:"188.09",time:"14:20"},{price:"187.95",time:"14:25"},{price:"187.82",time:"14:30"},{price:"187.80",time:"14:35"},{time:"14:40",price:"187.83"},{time:"14:45",price:"187.78"},{time:"14:50",price:"187.94"},{price:"187.88",time:"14:55"},{price:"187.97",time:"15:00"},{time:"15:03",price:"187.98"}]},{GOOG:[{time:"09:30",price:"1182.47"},{time:"09:35",price:"1183.26"},{price:"1181.55",time:"09:40"},{price:"1179.50",time:"09:45"},{price:"1182.85",time:"09:50"},{price:"1181.99",time:"09:55"},{price:"1186.04",time:"10:00"},{price:"1186.24",time:"10:05"},{price:"1189.95",time:"10:10"},{price:"1188.04",time:"10:15"},{price:"1187.72",time:"10:20"},{price:"1187.00",time:"10:25"},{price:"1185.95",time:"10:30"},{time:"10:35",price:"1184.31"},{time:"10:40",price:"1184.59"},{price:"1185.40",time:"10:45"},{time:"10:50",price:"1185.69"},{price:"1187.14",time:"10:55"},{time:"11:00",price:"1187.18"},{price:"1187.39",time:"11:05"},{time:"11:10",price:"1186.83"},{price:"1185.77",time:"11:15"},{price:"1184.69",time:"11:20"},{price:"1182.55",time:"11:25"},{price:"1183.89",time:"11:30"},{time:"11:35",price:"1183.08"},{time:"11:40",price:"1181.97"},{price:"1183.03",time:"11:45"},{time:"11:50",price:"1182.32"},{price:"1180.20",time:"11:55"},{time:"12:00",price:"1180.71"},{time:"12:05",price:"1180.22"},{price:"1179.36",time:"12:10"},{time:"12:15",price:"1180.21"},{time:"12:20",price:"1177.55"},{price:"1178.29",time:"12:25"},{price:"1179.95",time:"12:30"},{price:"1179.47",time:"12:35"},{time:"12:40",price:"1180.26"},{time:"12:45",price:"1180.25"},{price:"1180.83",time:"12:50"},{time:"12:55",price:"1181.25"},{price:"1181.01",time:"13:00"},{price:"1182.00",time:"13:05"},{price:"1182.88",time:"13:10"},{time:"13:15",price:"1181.54"},{price:"1180.51",time:"13:20"},{price:"1181.71",time:"13:25"},{time:"13:30",price:"1181.69"},{time:"13:35",price:"1181.75"},{time:"13:40",price:"1182.31"},{price:"1183.56",time:"13:45"},{price:"1183.50",time:"13:50"},{price:"1183.90",time:"13:55"},{price:"1185.22",time:"14:00"},{price:"1184.43",time:"14:05"},{price:"1184.82",time:"14:10"},{time:"14:15",price:"1184.92"},{price:"1186.23",time:"14:20"},{price:"1185.46",time:"14:25"},{price:"1185.59",time:"14:30"},{price:"1185.60",time:"14:35"},{price:"1186.88",time:"14:40"},{price:"1186.49",time:"14:45"},{price:"1186.66",time:"14:50"},{time:"14:55",price:"1185.02"},{time:"15:00",price:"1184.91"},{price:"1184.57",time:"15:02"}]},{TSLA:[{time:"09:30",price:"276.00"},{price:"276.64",time:"09:35"},{time:"09:40",price:"276.51"},{time:"09:45",price:"276.85"},{time:"09:50",price:"275.20"},{time:"09:55",price:"273.35"},{time:"10:00",price:"272.52"},{price:"271.96",time:"10:05"},{price:"271.75",time:"10:10"},{price:"271.28",time:"10:15"},{time:"10:20",price:"271.54"},{time:"10:25",price:"268.93"},{price:"267.49",time:"10:30"},{time:"10:35",price:"268.89"},{price:"269.42",time:"10:40"},{time:"10:45",price:"267.64"},{time:"10:50",price:"269.57"},{price:"269.66",time:"10:55"},{price:"270.49",time:"11:00"},{price:"270.26",time:"11:05"},{time:"11:10",price:"269.82"},{time:"11:15",price:"270.04"},{price:"271.16",time:"11:20"},{price:"270.38",time:"11:25"},{time:"11:30",price:"270.11"},{time:"11:35",price:"269.22"},{price:"269.82",time:"11:40"},{price:"269.94",time:"11:45"},{time:"11:50",price:"270.29"},{time:"11:55",price:"269.53"},{price:"269.59",time:"12:00"},{time:"12:05",price:"269.80"},{price:"270.06",time:"12:10"},{price:"270.32",time:"12:15"},{time:"12:20",price:"269.82"},{time:"12:25",price:"270.04"},{time:"12:30",price:"270.01"},{price:"269.17",time:"12:35"},{price:"268.86",time:"12:40"},{price:"270.59",time:"12:45"},{time:"12:50",price:"269.80"},{price:"269.84",time:"12:55"},{time:"13:00",price:"269.56"},{time:"13:05",price:"269.27"},{price:"269.10",time:"13:10"},{time:"13:15",price:"268.30"},{price:"268.49",time:"13:20"},{price:"268.98",time:"13:25"},{time:"13:30",price:"268.47"},{time:"13:35",price:"269.00"},{price:"268.96",time:"13:40"},{time:"13:45",price:"269.13"},{time:"13:50",price:"269.13"},{time:"13:55",price:"269.86"},{price:"269.58",time:"14:00"},{time:"14:05",price:"269.60"},{price:"270.22",time:"14:10"},{price:"269.96",time:"14:15"},{time:"14:20",price:"270.50"},{time:"14:25",price:"270.20"},{time:"14:30",price:"270.24"},{price:"269.29",time:"14:35"},{price:"269.46",time:"14:40"},{time:"14:45",price:"269.92"},{price:"270.06",time:"14:50"},{price:"269.85",time:"14:55"},{time:"15:00",price:"270.23"},{time:"15:03",price:"270.24"}]},{FB:[{time:"09:30",price:"163.49"},{time:"09:35",price:"161.96"},{time:"09:40",price:"160.94"},{price:"161.04",time:"09:45"},{price:"161.22",time:"09:50"},{price:"161.74",time:"09:55"},{price:"162.18",time:"10:00"},{price:"162.18",time:"10:05"},{price:"162.85",time:"10:10"},{price:"162.57",time:"10:15"},{price:"162.81",time:"10:20"},{time:"10:25",price:"162.97"},{time:"10:30",price:"162.82"},{time:"10:35",price:"162.40"},{price:"162.35",time:"10:40"},{price:"162.10",time:"10:45"},{time:"10:50",price:"162.08"},{price:"162.19",time:"10:55"},{time:"11:00",price:"162.17"},{price:"161.80",time:"11:05"},{price:"161.91",time:"11:10"},{price:"161.62",time:"11:15"},{price:"161.56",time:"11:20"},{price:"161.43",time:"11:25"},{price:"161.76",time:"11:30"},{price:"161.52",time:"11:35"},{time:"11:40",price:"161.21"},{time:"11:45",price:"161.28"},{time:"11:50",price:"161.35"},{price:"161.32",time:"11:55"},{price:"161.33",time:"12:00"},{time:"12:05",price:"161.15"},{price:"161.21",time:"12:10"},{time:"12:15",price:"161.33"},{time:"12:20",price:"161.07"},{time:"12:25",price:"161.09"},{time:"12:30",price:"161.21"},{price:"161.08",time:"12:35"},{time:"12:40",price:"161.05"},{price:"161.00",time:"12:45"},{time:"12:50",price:"160.78"},{price:"160.63",time:"12:55"},{time:"13:00",price:"160.37"},{time:"13:05",price:"160.13"},{price:"160.32",time:"13:10"},{price:"159.94",time:"13:15"},{time:"13:20",price:"159.55"},{price:"159.97",time:"13:25"},{price:"159.98",time:"13:30"},{time:"13:35",price:"160.31"},{time:"13:40",price:"160.40"},{time:"13:45",price:"160.32"},{price:"160.07",time:"13:50"},{time:"13:55",price:"160.03"},{time:"14:00",price:"160.17"},{price:"160.48",time:"14:05"},{time:"14:10",price:"160.39"},{price:"160.42",time:"14:15"},{price:"160.50",time:"14:20"},{time:"14:25",price:"160.45"},{time:"14:30",price:"160.10"},{time:"14:35",price:"160.25"},{time:"14:40",price:"160.81"},{price:"160.82",time:"14:45"},{price:"160.60",time:"14:50"},{time:"14:55",price:"160.31"},{price:"160.29",time:"15:00"},{price:"160.22",time:"15:05"},{price:"160.11",time:"15:10"},{price:"160.08",time:"15:15"},{time:"15:20",price:"160.10"},{time:"15:25",price:"160.17"},{time:"15:30",price:"160.22"},{price:"160.07",time:"15:35"},{price:"160.11",time:"15:40"},{time:"15:45",price:"160.00"},{price:"160.11",time:"15:50"},{time:"15:55",price:"160.12"}]},{AMZN:[{price:"1712.70",time:"09:30"},{time:"09:35",price:"1721.00"},{time:"09:40",price:"1721.50"},{price:"1723.50",time:"09:45"},{time:"09:50",price:"1725.33"},{time:"09:55",price:"1728.54"},{time:"10:00",price:"1733.00"},{price:"1734.10",time:"10:05"},{time:"10:10",price:"1735.95"},{price:"1735.30",time:"10:15"},{time:"10:20",price:"1738.52"},{price:"1738.65",time:"10:25"},{price:"1739.29",time:"10:30"},{price:"1737.63",time:"10:35"},{price:"1737.69",time:"10:40"},{time:"10:45",price:"1739.81"},{time:"10:50",price:"1743.10"},{price:"1744.77",time:"10:55"},{price:"1746.60",time:"11:00"},{time:"11:05",price:"1746.54"},{price:"1746.19",time:"11:10"},{price:"1746.30",time:"11:15"},{time:"11:20",price:"1745.56"},{price:"1739.32",time:"11:25"},{price:"1739.20",time:"11:30"},{time:"11:35",price:"1734.96"},{time:"11:40",price:"1737.53"},{time:"11:45",price:"1739.05"},{time:"11:50",price:"1739.95"},{time:"11:55",price:"1739.69"},{time:"12:00",price:"1738.61"},{price:"1737.22",time:"12:05"},{price:"1737.45",time:"12:10"},{time:"12:15",price:"1739.50"},{time:"12:20",price:"1736.60"},{price:"1737.84",time:"12:25"},{time:"12:30",price:"1739.01"},{time:"12:35",price:"1737.92"},{price:"1737.82",time:"12:40"},{price:"1738.57",time:"12:45"},{time:"12:50",price:"1739.71"},{time:"12:55",price:"1739.60"},{time:"13:00",price:"1739.79"},{time:"13:05",price:"1739.62"},{price:"1739.50",time:"13:10"},{price:"1739.74",time:"13:15"},{price:"1739.99",time:"13:20"},{price:"1739.63",time:"13:25"},{price:"1739.63",time:"13:30"},{price:"1738.84",time:"13:35"},{time:"13:40",price:"1744.80"},{time:"13:45",price:"1746.48"},{price:"1745.70",time:"13:50"},{time:"13:55",price:"1743.38"},{price:"1743.55",time:"14:00"},{price:"1744.70",time:"14:05"},{price:"1743.94",time:"14:10"},{time:"14:15",price:"1744.89"},{price:"1747.45",time:"14:20"},{price:"1747.90",time:"14:25"},{price:"1748.31",time:"14:30"},{price:"1748.43",time:"14:35"},{price:"1749.68",time:"14:40"},{price:"1748.44",time:"14:45"},{price:"1747.82",time:"14:50"},{time:"14:55",price:"1749.49"},{time:"15:00",price:"1749.34"},{time:"15:05",price:"1748.96"},{time:"15:10",price:"1748.38"},{price:"1746.70",time:"15:15"},{price:"1745.62",time:"15:20"},{price:"1745.00",time:"15:25"},{time:"15:30",price:"1744.43"},{price:"1744.80",time:"15:35"},{time:"15:40",price:"1742.17"},{price:"1743.94",time:"15:45"},{price:"1744.21",time:"15:50"},{time:"15:55",price:"1742.15"}]}]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.symbol,t=this.state.data.find(function(t){return t[e]}),a=[],i=[];if(void 0!==t){t[e].forEach(function(e){i.push(e.price),a.push(e.time)});var r={labels:a,datasets:[{label:e,data:[].concat(i),backgroundColor:["rgba(173, 216, 230, 0.6"]}]}}var n=void 0!==t?c.a.createElement(f.a,{key:e,data:r,height:275,options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{displayColors:!1,enabled:!0,bodyFontSize:24,callbacks:{title:function(e){return""},label:function(e){return"$"+e.value}}}}}):c.a.createElement("div",null,"Loading chart...");return c.a.createElement("div",null,n)}}]),t}(i.Component),ie=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={stocks:[{price:"1185.49",change_pct:"0.09",day_change:"1.03",symbol:"GOOG",name:"Alphabet Inc Class C"},{day_change:"1.82",symbol:"AAPL",name:"Apple Inc.",price:"187.94",change_pct:"0.98"},{price:"270.20",change_pct:"-1.90",day_change:"-5.23",symbol:"TSLA",name:"Tesla Inc"},{price:"1025.75",change_pct:"-3.75",day_change:"-15.95",symbol:"FB",name:"Facebook Inc"},{price:"1652.36",change_pct:"2.23",day_change:"16.57",symbol:"AMZN",name:"Amazon"}]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.stocks.map(function(e){return c.a.createElement("div",{className:"col s12 m6 l4",key:I.a.generate()},c.a.createElement("div",{className:"card medium green lighten-5 hoverable"},c.a.createElement("div",{className:"card-content black-text"},c.a.createElement(b,{stock:e}),c.a.createElement(ae,{symbol:e.symbol}))))});return c.a.createElement("div",{className:"row"},e)}}]),t}(i.Component),ce=a(20);var re=function(e){var t=e.data.stocks,a=e.data.stocksPurchased,i=e.data.liveStockData,r=t.map(function(e){var t=0;return a[e]?(a[e].map(function(a){return t+=i.find(function(t){return t.symbol===e}).price*a.quantity}),Number(t.toFixed(2))):t}),n=function(e){for(var t=[],a=0;a<e;a++)t.push("#".concat(Math.floor(16777215*Math.random()).toString(16)));return t},o={labels:Object(ce.a)(t),datasets:[{data:Object(ce.a)(r),backgroundColor:Object(ce.a)(n(t.length)),hoverBackgroundColor:Object(ce.a)(n(t.length))}]};return c.a.createElement("div",{className:"col s6 grey lighten-5"},c.a.createElement("h4",{className:"center-align"},"Portfilio Breakdown"),c.a.createElement(f.b,{data:o,options:{legend:{display:!1,position:"bottom"},tooltips:{displayColors:!1,enabled:!0,bodyFontSize:24,callbacks:{label:function(e){return""},title:function(e,t){return"".concat(t.labels[e[0].index]," :  $").concat(t.datasets[0].data[e[0].index])}}},title:{display:"The Title",text:"Portfolio Breakdown",fontSize:25}}}))};var ne=function(e){var t=e.stock,a=e.data.stocksPurchased,i=e.data.liveStockData.find(function(e){return e.symbol===t}).price,r=a[t]?a[t].map(function(e){var t=(e.price*e.quantity).toFixed(2),a=(i*e.quantity).toFixed(2),r=a-t>0?"+$".concat((a-t).toFixed(2)):"-$".concat((a-t).toFixed(2)),n=a-t>0?"+".concat((a/t*100).toFixed(2),"%"):"-".concat((a/t*100).toFixed(2),"%");return c.a.createElement("tr",{key:I.a.generate()},c.a.createElement("td",null,e.date),c.a.createElement("td",null,e.price),c.a.createElement("td",null,e.quantity),c.a.createElement("td",null,"$".concat(t)),c.a.createElement("td",null,"$".concat(a)),c.a.createElement("td",null,r),c.a.createElement("td",null,n))}):c.a.createElement("tr",null,c.a.createElement("td",null,"Go to Stocks page and add purchases to see stats here"));return c.a.createElement("div",{key:I.a.generate()},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Date"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Quantity"),c.a.createElement("th",null,"Cost"),c.a.createElement("th",null,"Value"),c.a.createElement("th",null,"Gain/Loss $"),c.a.createElement("th",null,"Gain/Loss %"))),c.a.createElement("tbody",null,r)))};var oe=function(e){var t=e.data.stocks.map(function(t){return c.a.createElement(_.CollapsibleItem,{header:t,icon:"attach_money",key:I.a.generate()},c.a.createElement(ne,{data:e.data,stock:t}))});return c.a.createElement(_.Collapsible,{key:I.a.generate()},t)},se=0,le=0,me=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row container"},c.a.createElement("div",{className:"col grey lighten-5 s6"},c.a.createElement("h2",{className:"center-align"},"Overview Stats"),c.a.createElement("h5",{className:"center-align"},"Portfolio Cost: ",function(e){var t=0;for(var a in e.stocksPurchased)e.stocksPurchased[a].map(function(e){return t+=e.price*e.quantity});return"$"+(se=Number(t).toFixed(2))}(this.props)),c.a.createElement("h5",{className:"center-align"},"Portfolio Value: ",function(e){var t=e.liveStockData.reduce(function(e,t){return e[t.symbol]=t.price,e},{}),a=0;for(var i in e.stocksPurchased)e.stocksPurchased[i].map(function(e){return a+=t[i]*e.quantity});return"$"+(le=Number(a).toFixed(2))}(this.props)),c.a.createElement("h5",{className:"center-align"},"Gain/Loss: ","$"+Number(le-se).toFixed(2)),c.a.createElement("h5",{className:"center-align"},"Pct: ",le/se?Number(le/se*100).toFixed(2)+"%":"0%")),c.a.createElement(re,{data:this.props}),c.a.createElement(oe,{data:this.props}))}}]),t}(i.Component),pe=Object(g.b)(function(e){return{stocks:e.user.stocks,liveStockData:e.user.liveStockData,stocksPurchased:e.user.stocksPurchased}})(me),ue=a(368),de=a(370),he=a(140),Ee=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(ue.a,null,c.a.createElement("div",{className:d.a.app},c.a.createElement(z,null),c.a.createElement(de.a,null,c.a.createElement(he.a,{exact:!0,path:"/",component:M}),c.a.createElement(he.a,{exact:!0,path:"/stocks",component:F}),c.a.createElement(he.a,{path:"/signup",component:te}),c.a.createElement(he.a,{path:"/preview",component:ie}),c.a.createElement(he.a,{path:"/overview",component:pe}),c.a.createElement(he.a,{path:"/stocks/:stock_symbol",component:R}))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(50),fe=a(9),ge={user:{status:"logged Out",isAuth:!1,uid:"",stocks:[],liveStockData:[],stocksPurchased:{},liveChartData:[]}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;if("CONSOLE_LOG"===t.type&&console.log("logged to the console"),"LOGIN_USER_SENT"===t.type)return Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{status:"pending"})});if("LOGIN_USER_FULFILLED"===t.type)return Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{status:"logged In",isAuth:!0,uid:t.uid,stocks:t.payload.stocks,stocksPurchased:t.payload.PurchasedStock})});if("ADD_STOCK"===t.type)return Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{stocks:[].concat(Object(ce.a)(e.user.stocks),[t.chart])})});if("LOGIN_USER_ERROR"===t.type)return e;if("LOGOUT_USER"===t.type)return ge;if("CARD_DATA_REQUESTED"===t.type)return e;if("CREATING_NEW_USER"===t.type)return e;if("NEW_USER_CREATED"===t.type)return e;if("CARD_DATA_RECEIVED"===t.type)return Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{liveStockData:[].concat(Object(ce.a)(e.user.liveStockData),[t.payload])})});if("UPDATING_USER_STOCKLIST"===t.type)return e;if("USER_STOCKS_ADDED"===t.type)return Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{stocks:[].concat(Object(ce.a)(e.user.stocks),[t.stock])})});if("DELETING_STOCKS"===t.type)return e;if("USER_STOCKS_DELETED"===t.type){var a=e.user.stocks.filter(function(e){return e!==t.stock}),i=e.user.liveStockData.filter(function(e){return e.symbol!==t.stock}),c=e.user.liveChartData.filter(function(e){return void 0===e[t.stock]});return Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{liveStockData:i,stocks:a,liveChartData:c})})}if("CHART_DATA_UPDATED"===t.type){var r=Object(y.a)({},t.stocksymbol,t.payload);return Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{liveChartData:[].concat(Object(ce.a)(e.user.liveChartData),[r])})})}if("ADD_PURCHASE"===t.type){var n=t.purchase;return e.user.stocksPurchased[n.symbol]?Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{stocksPurchased:Object(fe.a)({},e.user.stocksPurchased,Object(y.a)({},n.symbol,[].concat(Object(ce.a)(e.user.stocksPurchased[n.symbol]),[{date:n.date,price:n.price,quantity:n.quantity,id:I.a.generate()}])))})}):Object(fe.a)({},e,{user:Object(fe.a)({},e.user,{stocksPurchased:Object(fe.a)({},e.user.stocksPurchased,Object(y.a)({},n.symbol,[{date:n.date,price:n.price,quantity:n.quantity,id:I.a.generate()}]))})})}if("DELETE_PURCHASE"===t.type){var o=t.symbol,s=t.id,l=e.user.stocksPurchased[o].filter(function(e){return e.id!==s});return console.log(l),{user:Object(fe.a)({},e.user,{stocksPurchased:Object(fe.a)({},e.user.stocksPurchased,Object(y.a)({},o,l))})}}return e},ve=a(142),ye=a.n(ve),Oe=a(143),Se=Object(be.c)(ke,Object(be.a)(Oe.a,ye.a));n.a.render(c.a.createElement(g.a,{store:Se},c.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports={signIn:"SignIn_signIn__1C46Y",container:"SignIn_container__1sc1X",fadein:"SignIn_fadein__2t0f3",form:"SignIn_form__ozZNL",btnDiv:"SignIn_btnDiv__3jDE4"}},52:function(e,t,a){e.exports={signUp:"SignUp_signUp__1Bnn_",container:"SignUp_container__2Bzav",fadein:"SignUp_fadein__2r8sc",form:"SignUp_form__95gRC",btnDiv:"SignUp_btnDiv__GV14G"}}},[[144,1,2]]]);
//# sourceMappingURL=main.196f4be5.chunk.js.map