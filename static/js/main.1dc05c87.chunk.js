(this["webpackJsonpmodule-5-team-2"]=this["webpackJsonpmodule-5-team-2"]||[]).push([[0],{192:function(e,n,t){e.exports=t.p+"static/media/Logo.bece3765.svg"},197:function(e,n,t){e.exports=t.p+"static/media/lens.addcea54.svg"},208:function(e,n,t){e.exports=t.p+"static/media/arrow.b2e47c0a.svg"},238:function(e,n,t){e.exports=t(480)},243:function(e,n,t){},480:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(51),i=t.n(o),c=t(12),l=t(13),u=t(15),s=t(14),p=t(5),m=(t(243),t(25)),f=t(192),d=t.n(f),h=t(6);function b(){var e=Object(p.a)(['\n  position: sticky;\n  top: 0;\n  background-color: white;\n  padding: 30px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  ul {\n    display: flex;\n    justify-content: space-around;\n    list-style: none;\n    width: 30%;\n  }\n  a {\n    text-decoration: none;\n    color: #000000;\n    font-family: "Roboto", sans-serif;\n    padding: 8px;\n  }\n  a:hover {\n    color: #FFDC40;\n    border-bottom: 1px solid #000000;\n    margin-bottom: -1px;\n  }\n']);return b=function(){return e},e}function g(){var e=Object(p.a)(["\n  font-size: 36px;\n  margin-right: 47%;\n  span {\n    font-size: 15px;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(p.a)(['\n  width: 100%;\n  background-color: #833ae0;\n  position: fixed;\n  bottom: 0;\n  padding: 15px 0 15px 30px;\n  font-family: "Roboto", sans-serif;\n  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.15);\n  div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    p {\n      font-size: 22px;\n      line-height: 24px;\n      letter-spacing: 0.03em;\n      color: #ffdc40;\n    }\n  }\n']);return v=function(){return e},e}var x=h.a.div(v()),y=h.a.p(g()),j=h.a.div(b()),w=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement("ul",null,r.a.createElement(m.c,{to:"/Account",activeStyle:{color:"blueviolet",borderBottom:"1px solid #833ae0",marginBottom:"-1px"}},r.a.createElement("li",null,"Account")),r.a.createElement(m.c,{to:"/Stock",activeStyle:{color:"blueviolet",borderBottom:"1px solid #833ae0",marginBottom:"-1px"}},r.a.createElement("li",null,"Stock"))),r.a.createElement("img",{src:d.a,alt:"Logo"}))}}]),t}(r.a.Component);function E(){var e=Object(p.a)(["\n&,\n&:before,\n&:after {  \n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: "," 1.8s infinite ease-in-out;\n  animation: "," 1.8s infinite ease-in-out;\n}\n  color: #ffffff;\n  font-size: 5px;\n  margin: -30px auto 0 auto;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n&:before,\n&:after {\n  content: '';\n  position: absolute;\n  top: 0;\n}\n&::before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n&:after {\n  left: 3.5em;\n}\n"]);return E=function(){return e},e}function O(){var e=Object(p.a)(["\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n"]);return O=function(){return e},e}var k=Object(h.b)(O()),S=h.a.span(E(),k,k),C=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={},e.numberAfterDot=function(e){return e?(e=Number(e).toFixed(2),"."+(e+="").substring(e.indexOf(".")+1).substring(0,2)):null},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(x,null,r.a.createElement("div",null,r.a.createElement("p",null,"Balance:"),e.props.loadingBalance?[r.a.createElement(S,{key:"lg"}," ")]:[r.a.createElement(y,{key:"balance"},Math.trunc(e.props.balanceVal),r.a.createElement("span",null,e.numberAfterDot(e.props.balanceVal),"$"))]))}}]),t}(r.a.Component),D=t(33);function P(){var e=Object(p.a)(["\n  font-size: 0.7em;\n"]);return P=function(){return e},e}function B(){var e=Object(p.a)(["\n  width: 20%;\n  text-align: left;\n  color: ",";\n"]);return B=function(){return e},e}function z(){var e=Object(p.a)(["\n  width: 15%;\n  text-align: right;\n"]);return z=function(){return e},e}function A(){var e=Object(p.a)(["\n  font-family: monospace;\n  width: 7%;\n  color: grey;\n  font-size: x-small;\n  vertical-align: baseline;\n"]);return A=function(){return e},e}function F(){var e=Object(p.a)(["\n  width: 20%;\n"]);return F=function(){return e},e}function I(){var e=Object(p.a)(["\n  font-family: monospace;\n  width: 3%;\n  color: grey;\n  font-size: x-small;\n  vertical-align: baseline;\n"]);return I=function(){return e},e}function M(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: baseline;\n  width: 100%;\n"]);return M=function(){return e},e}function T(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n\n  height: 70px;\n  padding: 15px 10px;\n  border-bottom: 0.5px dashed lightgrey;\n  &:hover {\n    background-color: rgba(131, 58, 224, 0.05);\n  }\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return T=function(){return e},e}var N=h.a.div(T()),L=h.a.div(M()),U=h.a.div(I()),Z=h.a.div(F()),$=h.a.div(A()),R=h.a.div(z()),V=h.a.div(B(),(function(e){return e.isNegative?"red":"green"})),J=h.a.span(P()),H=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).splitDecimals=function(e){var n=e.toString().split("."),t=Object(D.a)(n,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,a,".",r.a.createElement(J,null,o," $"))},a.state={},a}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.code,t=e.name,a=e.amount,o=e.purchasePrice,i=e.profit,c=e.sign;return r.a.createElement(N,null,r.a.createElement(L,null," ",r.a.createElement(U,null,n),r.a.createElement(Z,null,"undefined"!==t&&t?t:r.a.createElement("i",null,n)),r.a.createElement($,null,a," pcs"),r.a.createElement(R,null,this.splitDecimals((a*o).toFixed(3))),r.a.createElement(V,{isNegative:c<0},i)))}}]),t}(a.Component);function K(){var e=Object(p.a)(["\n  cursor: pointer;\n  border: none;\n  height: 30px;\n  width: 30px;\n  margin: 0 3px;\n\n  background-color: white;\n\n  color: ",";\n  font-weight: ",";\n\n  &:hover {\n    border: 0.5px solid black;\n  }\n\n  &:active {\n    color: #ffdc40;\n  }\n"]);return K=function(){return e},e}var W=h.a.button(K(),(function(e){return e.selected?"blueviolet":"black"}),(function(e){return e.selected?"bold":"normal"})),Y=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={},a}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(W,{onClick:function(){return e.props.handleBtnClick(e.props.buttonNum)},selected:this.props.isSelected},this.props.buttonNum)}}]),t}(a.Component);function q(){var e=Object(p.a)(["\n  cursor: pointer;\n  border: none;\n  height: 30px;\n  width: 30px;\n  margin: 0 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: white;\n\n  color: ",";\n  font-weight: ",";\n\n  &:hover {\n    border: 0.5px solid black;\n  }\n\n  &:active svg path {\n    stroke: #ffdc40;\n  }\n"]);return q=function(){return e},e}function G(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* text-align: center; */\n"]);return G=function(){return e},e}var Q=h.a.div(G()),X=h.a.button(q(),(function(e){return e.selected?"blueviolet":"black"}),(function(e){return e.selected?"bold":"normal"})),_=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).clickHandler=function(e){a.props.onChange(e)},a.getButton=function(e){return r.a.createElement(Y,{key:e,isSelected:a.props.curSelectedPage===e,buttonNum:e,handleBtnClick:a.clickHandler})},a.getPageNumButtons=function(){var e=[],n=a.props,t=n.pageAmount,o=n.curSelectedPage,i=r.a.createElement(r.a.Fragment,{key:"btnFirstWrapper"},"\xa0 ... \xa0",a.getButton(t)),c=r.a.createElement(r.a.Fragment,{key:"btnLastWrapper"},a.getButton(1),"... \xa0"),l=t-o,u=o-1,s=[];return o-2>=1&&s.push(a.getButton(o-2)),o-1>=1&&s.push(a.getButton(o-1)),s.push(a.getButton(o)),o+1<=t&&s.push(a.getButton(o+1)),o+2<=t&&s.push(a.getButton(o+2)),l>2&&s.push(i),u>2&&s.unshift(c),e.push([].concat(s)),e},a.state={},a}return Object(l.a)(t,[{key:"render",value:function(){var e=this.getPageNumButtons();return r.a.createElement(Q,null,r.a.createElement(X,{onClick:this.props.decrCallback},r.a.createElement("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M6.5653 0.869513L1 6.43481L6.5653 12.0001",stroke:"#833AE0"}))),e,r.a.createElement(X,{onClick:this.props.incrCallback},r.a.createElement("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.56531 0.869513L11.1306 6.43481L5.56531 12.0001",stroke:"#833AE0"}))))}}]),t}(a.Component);function ee(){var e=Object(p.a)(["\n  margin-bottom: 20px;\n"]);return ee=function(){return e},e}function ne(){var e=Object(p.a)([""]);return ne=function(){return e},e}var te=h.a.div(ne()),ae=h.a.div(ee()),re=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).incrementIndex=function(e){var n=a.state.curPage+1>Math.ceil(a.props.rowElems.length/20)?Math.ceil(a.props.rowElems.length/20):a.state.curPage+1;a.setState({curPage:n})},a.decrementIndex=function(e){var n=a.state.curPage-1<1?1:a.state.curPage-1;a.setState({curPage:n})},a.handleChangePage=function(e){a.setState({curPage:e})},a.state={curPage:1,pageAmount:0},a}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.state.curPage>Math.ceil(this.props.rowElems.length/20)+1&&this.setState({curPage:1})}},{key:"render",value:function(){return r.a.createElement(te,null,r.a.createElement(ae,null,this.props.rowElems.slice(20*(this.state.curPage-1),20*(this.state.curPage-1)+20)),r.a.createElement(_,{pageAmount:Math.ceil(this.props.rowElems.length/20),onChange:this.handleChangePage,incrCallback:this.incrementIndex,decrCallback:this.decrementIndex,curSelectedPage:this.state.curPage}))}}]),t}(a.Component),oe=t(196),ie="e8b028031b6229f8c46c81d34527b5fd";function ce(){return fetch("https://5e8da89e22d8cd0016a798db.mockapi.io/users/2").then((function(e){return e.json()}))}function le(e){return fetch("https://5e8da89e22d8cd0016a798db.mockapi.io/users/2",{method:"PUT",body:JSON.stringify({id:"2",name:"Team two",currentBalance:e}),headers:{"Content-Type":"application/json"}})}function ue(e){fetch("https://5e8da89e22d8cd0016a798db.mockapi.io/users/2/stocks",{method:"POST",body:JSON.stringify({code:e.symbol,name:e.name,purchasePrice:e.price,amount:e.pieces,totalPrice:e.pieces*e.price}),headers:{"Content-Type":"application/json"}})}function se(e,n,t){return fetch("https://financialmodelingprep.com/api/v3/historical-price-full/".concat(e,"?from=").concat(n,"&to=").concat(t,"&apikey=").concat(ie)).then((function(e){return e.json()}))}function pe(){var e=Object(p.a)(["\n    color: blueviolet;\n    font-size: 25px;\n    text-indent: -9999em;\n    margin: 0 auto;\n    overflow: hidden;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    position: relative;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-animation: "," 1.7s infinite ease, "," 1.7s infinite ease;\n    animation: "," 1.7s infinite ease,  "," 1.7s infinite ease;\n"]);return pe=function(){return e},e}function me(){var e=Object(p.a)(["\n  0% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    5%,\n    95% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    10%,\n    59% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n    }\n    20% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n    }\n    38% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n    }\n    100% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n"]);return me=function(){return e},e}function fe(){var e=Object(p.a)(["\n    from{\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n"]);return fe=function(){return e},e}var de=Object(h.b)(fe()),he=Object(h.b)(me()),be=h.a.span(pe(),he,de,he,de);function ge(){var e=Object(p.a)(["\n  font-size: 0.7em;\n"]);return ge=function(){return e},e}function ve(){var e=Object(p.a)(["\n  width: 100%;\n  padding: 20px 20%;\n  -webkit-box-shadow: inset 0px 6px 6px -6px gray;\n  -moz-box-shadow: inset 0px 6px 6px -6px gray;\n  box-shadow: inset 0px 6px 6px -6px gray;\n"]);return ve=function(){return e},e}function xe(){var e=Object(p.a)(["\n  text-align: center;\n  color: ",";\n"]);return xe=function(){return e},e}function ye(){var e=Object(p.a)(["\n  text-align: center;\n"]);return ye=function(){return e},e}function je(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 30px;\n  /* box-shadow: 0 6px 6px -6px gray; */\n"]);return je=function(){return e},e}function we(){var e=Object(p.a)(["\n  width: 100%;\n"]);return we=function(){return e},e}function Ee(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n"]);return Ee=function(){return e},e}var Oe=h.a.div(Ee()),ke=h.a.div(we()),Se=h.a.div(je()),Ce=h.a.h1(ye()),De=h.a.p(xe(),(function(e){return e.sign<0?"red":"green"})),Pe=h.a.div(ve()),Be=h.a.span(ge()),ze=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).getPurchaseDayTotalSum=function(e){return e.reduce((function(e,n){return e+n.totalPrice}),0).toFixed(3)},a.getCurrentTotalStockPrice=function(e,n){return e.map((function(e){var t=n.filter((function(n){return n.code===e.symbol})).reduce((function(e,n){return e+Number(n.amount)}),0);return e.price*t})).reduce((function(e,n){return e+n}),0).toFixed(3)},a.splitDecimals=function(e){if(0===e)return r.a.createElement(r.a.Fragment,null,"No profit");var n=e.toString().split("."),t=Object(D.a)(n,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,a,".",r.a.createElement(Be,null,o," $"))},a.getProfitAndPercentageComponent=function(e,n){var t=n-e,o=t/e*100;if(0===t)return r.a.createElement(r.a.Fragment,null,"No profit");var i=a.getSignSymbol(t);return r.a.createElement(r.a.Fragment,null,i,a.splitDecimals(t.toFixed(2))," (",o.toFixed(2),"%)")},a.state={accountInfo:[],stocksInfo:[],totalSpent:0,currentTotal:0,sign:0,loading:!1},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://5e8da89e22d8cd0016a798db.mockapi.io/users/2/stocks").then((function(e){return e.json()})).then((function(n){var t=n;(function(e){if(0===e.length)return Promise.resolve([]);var n,t=function(e,n){var t=0,a=e.length,r=[];for(t=0;t<a;t+=n){var o=e.slice(t,t+n);r.push(o)}return r}(Array.from(new Set(e)),3),a=[],r=Object(oe.a)(t);try{for(r.s();!(n=r.n()).done;){var o=n.value.join(",");a.push(fetch("https://financialmodelingprep.com/api/v3/company/profile/".concat(o,"?apikey=").concat(ie)))}}catch(i){r.e(i)}finally{r.f()}return Promise.all(a).then((function(e){var n=[];return e.forEach((function(e){n.push(e.json())})),Promise.all(n)})).then((function(e){return e.reduce((function(e,n){return n.hasOwnProperty("companyProfiles")?e.concat(n.companyProfiles):e.concat(n)}),[])})).then((function(e){return e.map((function(e){return{symbol:e.symbol,price:e.profile.price}}))}))})(n.map((function(e){return e.code}))).then((function(n){var a=n,r=e.getPurchaseDayTotalSum(t),o=e.getCurrentTotalStockPrice(a,t),i=o-r,c=Math.sign(i);e.setState({accountInfo:t,stocksInfo:a,totalSpent:r,currentTotal:o,sign:c,loading:!0})}))}))}},{key:"getSignSymbol",value:function(e){var n="";switch(Math.sign(e)){case-1:n="\u25bc ";break;case 1:n="\u25b2 +"}return n}},{key:"findCurrentPrice",value:function(e,n){try{return e.find((function(e){return e.symbol===n.code})).price*n.amount}catch(t){return console.error("Company info was not provided by the API: ".concat(t)),0}}},{key:"render",value:function(){var e=this,n=this.state,t=n.accountInfo,a=n.stocksInfo,o=n.totalSpent,i=n.currentTotal,c=t.map((function(n,t){var o=e.findCurrentPrice(a,n),i=e.getProfitAndPercentageComponent(n.totalPrice,o);return r.a.createElement(H,Object.assign({},n,{key:t,profit:i,sign:Math.sign(o-n.totalPrice)}))}));return r.a.createElement(ke,null,r.a.createElement(Oe,null,this.state.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,null,r.a.createElement(Ce,null,this.splitDecimals(i)),r.a.createElement(De,{sign:this.state.sign},this.getProfitAndPercentageComponent(o,i))),r.a.createElement(Pe,null,r.a.createElement(re,{rowElems:c}))):r.a.createElement(be,null," ")))}}]),t}(a.Component),Ae=t(197),Fe=t.n(Ae);function Ie(){var e=Object(p.a)(["\n  background: #f3f3f3;\n  border: none;\n  height: 40px;\n  margin: 0 auto;\n  width: 80%;\n  font-size: 25px;\n  outline: none;\n"]);return Ie=function(){return e},e}function Me(){var e=Object(p.a)(["\n  width: 8%;\n  margin: 0 auto;\n"]);return Me=function(){return e},e}function Te(){var e=Object(p.a)(["\n  width: 360px;\n  height: 60px;\n  border-radius: 94px;\n  display: flex;\n  margin: 0 auto;\n  background: #f3f3f3;\n  align-items: center;\n  margin-top: 30px;\n  margin-bottom: 15px;\n"]);return Te=function(){return e},e}var Ne=h.a.div(Te()),Le=h.a.img(Me()),Ue=h.a.input(Ie()),Ze=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={},a}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.value,t=e.handleChange;return r.a.createElement(Ne,null,r.a.createElement(Le,{src:Fe.a,alt:"Lens icon"}),r.a.createElement(Ue,{type:"text",placeholder:"enter company ticker",value:n,onChange:function(e){t(e.target.value)}}))}}]),t}(a.Component);function $e(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n  padding: 15px 10px;\n  &:hover {\n    background-color: #f9f5fd;\n    box-shadow: #e9e9e9 0 20px 20px 0;\n    transform: translateY(-10px);\n    cursor: pointer;\n  }\n  &:active {\n    box-shadow: #e9e9e9 0 5px 5px 0;\n    transform: translateY(0);\n  }\n"]);return $e=function(){return e},e}var Re=h.a.div($e()),Ve=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={},a}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.divs;return r.a.createElement(Re,null,e)}}]),t}(a.Component);function Je(){var e=Object(p.a)(["\n  font-size: 0.7em;\n"]);return Je=function(){return e},e}function He(){var e=Object(p.a)(["\n  font-size: 30px;\n  color: #000000;\n  width: 20%;\n  text-align: right;\n"]);return He=function(){return e},e}function Ke(){var e=Object(p.a)(["\n  font-size: 22px;\n  color: #000000;\n  width: 70%;\n  text-align: left;\n"]);return Ke=function(){return e},e}function We(){var e=Object(p.a)(["\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.5);\n  width: 10%;\n  font-family: monospace;\n  text-align: center;\n"]);return We=function(){return e},e}function Ye(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n"]);return Ye=function(){return e},e}var qe=h.a.div(Ye()),Ge=h.a.div(We()),Qe=h.a.div(Ke()),Xe=h.a.div(He()),_e=h.a.span(Je()),en=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).splitDecimals=function(e){var n=e.toString().split("."),t=Object(D.a)(n,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,a,".",r.a.createElement(_e,null,o)," $")},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.div1,t=e.div2,a=e.div3;return r.a.createElement(qe,null,r.a.createElement(Ge,null," ",n," "),r.a.createElement(Qe,null," ",t," "),r.a.createElement(Xe,null," ",this.splitDecimals(a)," "))}}]),t}(a.Component);function nn(){var e=Object(p.a)(["\n  width: 100%;\n"]);return nn=function(){return e},e}function tn(){var e=Object(p.a)(['\n  width: 100%;\n  min-height: calc(100vh - 90px - 90px);\n  -webkit-box-shadow: inset 0px 6px 6px -6px gray;\n  -moz-box-shadow: inset 0px 6px 6px -6px gray;\n  box-shadow: inset 0px 6px 6px -6px gray;\n  margin-top: 20px;\n  margin-bottom: 90px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 20%;\n  h2 {\n    text-align: center;\n  }\n  a {\n    text-decoration: none;\n    font-family: "Roboto", sans-serif;\n    & > div > div {\n      border-bottom: 0.5px dashed lightgrey;\n    }\n    & > div > div:hover {\n      border-bottom: none;\n    }\n    &:last-child > div > div {\n      border-bottom: none;\n    }\n  }\n']);return tn=function(){return e},e}var an=h.a.main(tn()),rn=h.a.div(nn()),on=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).handleSearch=function(e){var n=e.toUpperCase(),t=a.state.allStocks.filter((function(e){return e.symbol.includes(n)}));a.setState({value:e,filteredStocks:t})},a.state={allStocks:[],filteredStocks:[],value:""},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fmpcloud.io/api/v3/stock/list?apikey=".concat(ie)).then((function(e){return e.json()})).then((function(n){e.setState({allStocks:n,filteredStocks:n})}))}},{key:"render",value:function(){var e=this.state,n=e.filteredStocks,t=e.value,a=n.map((function(e,n){return r.a.createElement(m.b,{key:n,to:{pathname:"/Buy",state:{key:n,symbol:e.symbol,name:e.name,price:e.price}}},r.a.createElement(Ve,{divs:[r.a.createElement(en,{key:n,div1:e.symbol,div2:e.name,div3:e.price})]}))}));return r.a.createElement(rn,null,r.a.createElement(an,null,r.a.createElement(Ze,{value:t,handleChange:this.handleSearch}),0!==a.length?r.a.createElement(re,{rowElems:a}):""===t?r.a.createElement(be,null," "):r.a.createElement("h2",null,"Not Found")))}}]),t}(a.Component);function cn(){var e=Object(p.a)(["\n  width: 100px;\n  font-size: 50px;\n  color: blueviolet;\n  text-align: center;\n  border: none;\n  outline: none;\n"]);return cn=function(){return e},e}function ln(){var e=Object(p.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  button {\n    color: blueviolet;\n    background-color: transparent;\n    cursor: pointer;\n    font-size: 30px;\n    padding: 10px;\n    border: none;\n    outline: none;\n  }\n  /* Chrome, Safari, Edge, Opera */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  input[type="number"] {\n    -moz-appearance: textfield;\n  }\n']);return ln=function(){return e},e}function un(){var e=Object(p.a)(["\n  font-family: Roboto, sans-serif;\n  font-size: 20px;\n  line-height: 14px;\n  padding-top: 66px;\n  padding-bottom: 47px;\n"]);return un=function(){return e},e}function sn(){var e=Object(p.a)(["\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 14px;\n  padding-top: 56px;\n  padding-bottom: 66px;\n"]);return sn=function(){return e},e}function pn(){var e=Object(p.a)(["\n  display: flex;\n  width: 100%;\n  /* padding-bottom: 56px;\n  padding-top: 30px; */\n  padding: 30px 30px 56px 30px;\n  -webkit-box-shadow: 0px 6px 6px -6px gray;\n  -moz-box-shadow: 0px 6px 6px -6px gray;\n  box-shadow: 0px 6px 6px -6px gray;\n  a {\n    text-decoration: none;\n    color: blueviolet;\n    font-size: 18px;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n  h2 {\n    text-align: center;\n    word-break: break-word;\n    font-size: 28px;\n    flex-basis: 92%;\n    color: #2fc20a;\n  }\n  img {\n    width: 12px;\n  }\n"]);return pn=function(){return e},e}function mn(){var e=Object(p.a)(["\n  width: 100%;\n"]);return mn=function(){return e},e}function fn(){var e=Object(p.a)(["\n  a {\n    text-decoration: none;\n  }\n  a p {\n    width: 170px;\n    padding: 15px 20px;\n    border: 3px solid #833ae0;\n    border-radius: 49px;\n    color: #833ae0;\n    margin: 0 auto;\n  }\n  a p:hover {\n    background-color: blueviolet;\n    border: 3px solid #ffffff;\n    color: #ffffff;\n  }\n  span {\n    font-size: 15px;\n  }\n"]);return fn=function(){return e},e}function dn(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  text-align: center;\n"]);return dn=function(){return e},e}var hn=h.a.div(dn()),bn=h.a.div(fn()),gn=h.a.div(mn()),vn=h.a.div(pn()),xn=h.a.p(sn()),yn=h.a.p(un()),jn=h.a.div(ln()),wn=h.a.input(cn()),En=t(127),On=t.n(En);t(138);function kn(){var e=Object(p.a)(["\n  margin: 10px;\n  display: inline-block;\n  input {\n    padding: 5px;\n    cursor: pointer;\n  }\n"]);return kn=function(){return e},e}var Sn=h.a.div(kn());var Cn=function(e){var n=Object(a.useState)((new Date).setDate((new Date).getDate()-7)),t=Object(D.a)(n,2),o=t[0],i=t[1],c=Object(a.useState)(new Date),l=Object(D.a)(c,2),u=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Sn,null,"From: \xa0",r.a.createElement(On.a,{selected:o,onChange:function(n){i(n),e.handleStartDate(n.toISOString())},selectsStart:!0,startDate:o,endDate:u})),r.a.createElement(Sn,null,"To: \xa0",r.a.createElement(On.a,{style:{margin:10},selected:u,onChange:function(n){s(n),e.handleEndDate(n.toISOString())},selectsEnd:!0,startDate:o,endDate:u,minDate:o})))},Dn=t(44),Pn=t(208),Bn=t.n(Pn);function zn(){var e=Object(p.a)(["\n  margin: 20px;\n  padding: 20px;\n  border-radius: 3px;\n  border: 0.5px solid blueviolet;\n"]);return zn=function(){return e},e}var An=h.a.div(zn()),Fn=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={name:null,price:null,symbol:null,balance:null,pieces:"",startDate:0,endDate:0,chartInfo:null,isAvailable:!1},e.numberAfterDot=function(e){return e?(e.toFixed(2),"."+(e+="").substring(e.indexOf(".")+1).substring(0,2)):null},e.handlerPlus=function(){e.setState({pieces:+e.state.pieces+1})},e.handlerMinus=function(){e.state.pieces<=0?e.setState({pieces:0}):e.setState({pieces:+e.state.pieces-1})},e.sendToUserStock=function(){var n={name:"".concat(e.state.name),price:"".concat(e.state.price),symbol:"".concat(e.state.symbol),pieces:"".concat(e.state.pieces)},t=e.state.pieces*e.state.price;if(t<=0||""===e.state.pieces)return alert("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f");t>e.state.balance?alert("\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432"):(le(e.state.balance-t).then((function(n){return e.props.getBalanceCallback()})),ue(n))},e.changeValue=function(n){e.setState({pieces:n.target.value}),0===n.target.value.length?n.target.style.width="100px":n.target.style.width=8*(n.target.value.length+20)+"px",parseInt(n.target.value)},e.handleStartDate=function(n){e.setState({startDate:n.substring(0,10)},e.showChart)},e.handleEndDate=function(n){e.setState({endDate:n.substring(0,10)},e.showChart)},e.showChart=function(){var n=e.state,t=n.startDate,a=n.endDate;se(e.props.location.state.symbol,t,a).then((function(n){e.setState({chartInfo:n.historical,isAvailable:!0})}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0);var n=this.props.location.state,t=n.name,a=n.price,r=n.symbol;this.state.name||this.setState({name:t,price:a,symbol:r},(function(){var n=(new Date).getDate(),t=new Date((new Date).setDate(n-7));e.handleStartDate(t.toISOString().substring(0,10)),e.handleEndDate((new Date).toISOString().substring(0,10)),e.showChart()})),ce().then((function(n){e.setState({balance:n.currentBalance})}))}},{key:"render",value:function(){return r.a.createElement(gn,null,r.a.createElement(hn,null,r.a.createElement(vn,null,r.a.createElement(m.b,{to:"/Stock"},r.a.createElement("img",{src:Bn.a,alt:"arrow"}),"Back"),r.a.createElement("h2",null,"Buy ",this.state.name)),r.a.createElement(bn,null,r.a.createElement(xn,null,Math.trunc(this.state.price),r.a.createElement("span",null,this.numberAfterDot(this.state.price)," $")),r.a.createElement(jn,null,r.a.createElement("button",{onClick:this.handlerMinus},"-"),r.a.createElement(wn,{type:"number",min:"0",onChange:this.changeValue,value:this.state.pieces,placeholder:"0"}),r.a.createElement("button",{onClick:this.handlerPlus},"+")),r.a.createElement(yn,null,"Buy for ",Math.trunc(this.state.pieces*this.state.price),r.a.createElement("span",null,this.numberAfterDot(this.state.pieces*this.state.price)," $")),r.a.createElement(m.b,{to:{pathname:this.state.pieces<=0||""===this.state.pieces||this.state.pieces*this.state.price>this.state.balance?"/Buy":"/Stock",state:{symbol:this.state.symbol,name:this.state.name,price:this.state.price}}},r.a.createElement("p",{onClick:this.sendToUserStock},"Buy")),r.a.createElement(An,null,r.a.createElement(Cn,{handleStartDate:this.handleStartDate,handleEndDate:this.handleEndDate}),this.state.isAvailable&&r.a.createElement(Dn.c,{margin:{top:5,right:30,left:20,bottom:5},width:600,height:300,data:this.state.chartInfo},r.a.createElement(Dn.b,{type:"monotone",dataKey:"open",stroke:"blueviolet"}),r.a.createElement(Dn.d,null),r.a.createElement(Dn.a,{stroke:"#ccc"}),r.a.createElement(Dn.e,{dataKey:"label"}),r.a.createElement(Dn.f,{label:{value:"Opening price",angle:-90,position:"insideLeft",fontSize:16,offset:0},type:"number",domain:["auto","auto"]}))))))}}]),t}(r.a.Component),In=t(37);function Mn(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  /* height: 60vh; */\n  width: 100%;\n  /* border: 1px solid blueviolet; */\n  padding: 15px 0 100px 0;\n"]);return Mn=function(){return e},e}var Tn=h.a.div(Mn()),Nn=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).getUserBalance=function(){a.setState({loadingBalance:!0}),ce().then((function(e){a.setState({balance:e.currentBalance,loadingBalance:!1})}))},a.state={balance:0,loadingBalance:!1},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getUserBalance()}},{key:"render",value:function(){var e=this;return r.a.createElement(Tn,null,r.a.createElement(m.a,null,r.a.createElement(w,null),r.a.createElement(In.c,null,r.a.createElement(In.a,{path:"/Account",exact:!0,component:ze}),r.a.createElement(In.a,{path:"/Stock",component:on}),r.a.createElement(In.a,{path:"/Buy",render:function(n){return r.a.createElement(Fn,Object.assign({},n,{getBalanceCallback:e.getUserBalance}))}}),r.a.createElement(In.a,{path:"/",component:ze}))),r.a.createElement(C,{balanceVal:this.state.balance,loadingBalance:this.state.loadingBalance}))}}]),t}(a.Component);i.a.render(r.a.createElement(Nn,null),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.1dc05c87.chunk.js.map