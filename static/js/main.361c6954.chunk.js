(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t){},101:function(e,t){},105:function(e,t){},107:function(e,t){},142:function(e,t){},143:function(e,t){},198:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),s=i(89),r=i.n(s),c=(i(95),i(11)),o=i(12),m=i(15),l=i(13),u=i(17),d=i(14),b=(i(96),i(97),i(98),i(195),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"footer",style:{color:"white",fontFamily:"cursive",letterSpacing:"2px",backgroundColor:"#333",fontSize:"13px"}},n.a.createElement("p",null,"Designed and Developed by"," ",n.a.createElement("a",{target:"_blank",rel:"noopener",href:"https://github.com/avatarfreak"}," ","Dave."," ")))}}]),t}(a.Component)),h=i(5),p=i.n(h),v=function(e){function t(e){var i;return Object(c.a)(this,t),(i=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={initialOffset:679},i}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e,t=this.props,i=t.sessionTime,a=t.breakTime,n=t.timeRemaining,s=t.status,r=this.state.initialOffset;e=!s&&n>-1?r/(i*=60)*n:r/(a*=60)*n,document.getElementById("circle_animation").setAttributeNS(null,"stroke-dashoffset",e)}},{key:"displayTime",value:function(){var e=this.props.timeRemaining,t=Math.floor(e/60),i=Math.floor(e%60);return"".concat(t<10?"0"+t:t,":").concat(i<10?"0":"").concat(i)}},{key:"render",value:function(){return n.a.createElement("div",{className:"pie",id:"pie"},n.a.createElement("div",{className:"block"},n.a.createElement("svg",null,n.a.createElement("circle",{id:"circle_animation",r:"108",cx:"110",cy:"110"})),n.a.createElement("span",{id:"time-left"},this.displayTime())))}}]),t}(a.Component);v.prototypes={sessionTime:p.a.number.isRequired,breakTime:p.a.number.isRequired,timeRemaining:p.a.number.isRequired,status:p.a.bool.isRequired,initialOffset:p.a.number.isRequired};var f=v,k=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.initialize,i=e.display,a=e.status,s=e.startTimer,r=e.active,c=e.breakTime,o=e.sessionTime;return n.a.createElement("div",{className:"time-box"},n.a.createElement("div",{id:"timer-label"},n.a.createElement("h3",null,a?"Take A Break":"Happy Working")),n.a.createElement(f,{active:r,status:a,sessionTime:o,breakTime:c,timeRemaining:i,reset:t}),n.a.createElement("div",{className:"btn-group"},n.a.createElement("button",{id:"reset",onClick:t},n.a.createElement("span",null,"\u21ba")),n.a.createElement("button",{id:"start_stop",onClick:s},r=r?n.a.createElement("span",null,"\u275a\u275a"):n.a.createElement("span",null,"\u25ba"))))}}]),t}(a.Component);k.prototypes={status:p.a.bool.isRequired,active:p.a.bool.isRequired,display:p.a.number.isRequired,initialize:p.a.func.isRequired,startTimer:p.a.func.isRequired};var E=k,T=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.display,i=e.increment,a=e.decrement;return n.a.createElement("div",{className:"break-length-box"},n.a.createElement("button",{id:"break-increment",onClick:i},"+"),n.a.createElement("div",{id:"break-length"},t),n.a.createElement("button",{id:"break-decrement",onClick:a},"-"),n.a.createElement("div",{id:"break-label"},"Break Length"))}}]),t}(a.Component);T.prototypes={increment:p.a.func.isRequired,decrement:p.a.func.isRequired,time:p.a.number.isRequired};var y=T;var O=function(e){var t=e.display,i=e.increment,a=e.decrement;return n.a.createElement("div",{className:"session-length-box"},n.a.createElement("button",{id:"session-increment",onClick:i},"+"),n.a.createElement("div",{id:"session-length"},t),n.a.createElement("button",{id:"session-decrement",onClick:a},"-"),n.a.createElement("div",{id:"session-label"},"Session Length"))},g=function(e){function t(e){var i;return Object(c.a)(this,t),(i=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={sessionTime:25,breakTime:5,time:1500,active:!1,status:!1},i.initialize=i.initialize.bind(Object(u.a)(i)),i.startTimer=i.startTimer.bind(Object(u.a)(i)),i.increment=i.increment.bind(Object(u.a)(i)),i.decrement=i.decrement.bind(Object(u.a)(i)),i.countDown=i.countDown.bind(Object(u.a)(i)),i}return Object(d.a)(t,e),Object(o.a)(t,[{key:"initialize",value:function(){clearInterval(this.counter),this.audio.pause(),this.audio.currentTime=0,this.setState({sessionTime:25,breakTime:5,time:1500,active:!1,status:!1})}},{key:"startTimer",value:function(e){this.state.active||(this.counter=setInterval(this.countDown,1e3)),this.state.active&&(clearInterval(this.counter),this.audio.pause(),this.setState({active:!1}))}},{key:"countDown",value:function(){var e;(this.setState({time:this.state.time-1,active:!0}),this.state.time<0)&&(clearInterval(this.counter),this.audio.play(),this.audio.currentTime=0,e=this.state.status?{time:60*this.state.sessionTime,status:!1,active:!1}:{time:60*this.state.breakTime,active:!1,status:!0},this.setState(e),this.startTimer())}},{key:"increment",value:function(e){var t=this.state,i=t.breakTime,a=t.sessionTime;"break-increment"===e.target.id&&60!==i&&this.setState({breakTime:i+1}),"session-increment"===e.target.id&&60!==a&&this.setState({sessionTime:a+1,time:60*a+60})}},{key:"decrement",value:function(e){var t=this.state,i=t.breakTime,a=t.sessionTime;"break-decrement"===e.target.id&&1!==i&&this.setState({breakTime:i-1}),"session-decrement"===e.target.id&&1!==a&&this.setState({sessionTime:a-1,time:60*a-60})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"App-header"},"Pomodoro Clock"),n.a.createElement("div",{className:"pgt-timer"},n.a.createElement(E,{status:this.state.status,display:this.state.time,initialize:this.initialize,startTimer:this.startTimer,active:this.state.active,breakTime:this.state.breakTime,sessionTime:this.state.sessionTime})),n.a.createElement("div",{className:"pgt-control-btn"},n.a.createElement("div",{className:"pgt-breaker"},n.a.createElement(y,{display:this.state.breakTime,increment:this.increment,decrement:this.decrement})),n.a.createElement("div",{className:"pgt-session"},n.a.createElement(O,{display:this.state.sessionTime,increment:this.increment,decrement:this.decrement}))),n.a.createElement("audio",{id:"beep",src:"red-alert.mp3",ref:function(t){return e.audio=t}}),n.a.createElement("div",{className:"pgt-footer"},n.a.createElement(b,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,i){e.exports=i(198)},95:function(e,t,i){},96:function(e,t,i){},97:function(e,t,i){},99:function(e,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.361c6954.chunk.js.map