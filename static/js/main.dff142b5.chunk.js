(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=(a(15),a(2)),s=a(3),o=a(5),u=a(4),p=a(6),g=(a(16),a(1)),m=(a(17),function(e){var t,a={all:[],anserw:"",question:"",category:""},n=e.counters;if(e.counters<10){var c=function(t,a){t===a?e.changeCounter(1,0):t!==a&&e.changeCounter(0,1)};if(t=e.item,e.item.length>0)if(a.question=t[n].question.replace(/%20/g," ").replace(/%3F/g,"?").replace(/%28/g,"(").replace(/%29/g,")").replace(/%2C/g,",").replace(/%22/g,'"').replace(/%3A/g,":").replace(/%27/g,"'").replace(/%26/g,"&").replace(/%60/g,"`").replace(/%2B/g,"+").replace(/%23/g,"#").replace(/%C4/g,"\xc4").replace(/%81/g,"").replace(/%3C/g,"<").replace(/%B1/g,"\xb1").replace(/%C3%A9/g,"\xe9").replace(/%21/g,"!").replace(/%2F/g,"/"),a.category=t[n].category.split(/[%0123456789]/).join(" "),a.anserw=t[n].correct_answer,a.all=t[n].incorrect_answers,7==a.anserw.charAt(0)&&a.anserw.length>2){var l=a.anserw.indexOf("%"),i=a.anserw.substring(l,-1),s=a.anserw.substr(l+7);a.anserw="".concat(i," - ").concat(s);var o=a.all.join(",").split(/[-,]/),u="",p="",m="";a.all=[];for(var h=0;h<o.length;h++){var v=o[h].replace("%20","");h%2===1&&(u=v),h%2===0&&(p=v,u=""),""!==u&&""!==p&&(m="".concat(u," - ").concat(p),a.all.push(m))}a.all=[].concat(Object(g.a)(a.all),[a.anserw])}else{for(var f=t[n].incorrect_answers,d=0;d<f.length;d++){var E=f[d].replace(/%20/g," ").replace(/%3F/g,"?").replace(/%28/g,"(").replace(/%29/g,")").replace(/%2C/g,",").replace(/%22/g,'"').replace(/%3A/g,":").replace(/%27/g,"'").replace(/%26/g,"&").replace(/%60/g,"`").replace(/%2B/g,"+").replace(/%23/g,"#").replace(/%C4/g,"\xc4").replace(/%81/g,"").replace(/%3C/g,"<").replace(/%B1/g,"\xb1").replace(/%2F/g,"/").replace(/%3B/g,";").replace(/%C3%A9/g,"\xe9");a.all[d]=E}a.anserw=t[n].correct_answer.replace(/%20/g," ").replace(/%3F/g,"?").replace(/%28/g,"(").replace(/%29/g,")").replace(/%2C/g,",").replace(/%22/g,'"').replace(/%3A/g,":").replace(/%27/g,"'").replace(/%26/g,"&").replace(/%60/g,"`").replace(/%2B/g,"+").replace(/%23/g,"#").replace(/%C4/g,"\xc4").replace(/%81/g,"").replace(/%2F/g,"/"),a.all=[].concat(Object(g.a)(a.all),[a.anserw])}if(0!==a.all.length)for(var k,w,C=a.all.length;0!==C;)k=Math.floor(Math.random()*C),C-=1,w=a.all[C],a.all[C]=a.all[k],a.all[k]=w;if(e.item.length>0){var b=a.question,y=a.all,j=a.anserw;return r.a.createElement("div",null,r.a.createElement("ul",{className:"question"},r.a.createElement("li",null,b),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return c(y[0],j)},id:y[0]},y[0])),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return c(y[1],j)},id:y[1]},y[1])),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return c(y[2],j)},id:y[2]},y[2])),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return c(y[3],j)},id:y[3]},y[3]))))}return r.a.createElement("div",null)}return 10===e.counters?(t=[],r.a.createElement("div",null)):r.a.createElement("div",null)}),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeTaskList:!0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.state.activeTaskList&&this.setState({activeTaskList:!1})}},{key:"render",value:function(){var e="";if(this.props.result.length>0){var t=this.props.result;(e=Object(g.a)(t)).map(function(t){return r.a.createElement(m,{key:t.question,item:e})})}return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:this.state.activeTaskList?null:"activeTaskList"},r.a.createElement(m,{item:e,counters:this.props.counters,changeCounter:this.props.changeCounter})))}}]),t}(n.Component),v=(a(18),function(e){var t=e.time,a=e.score,n=e.mistakes,c=(new Date).getTime()-t;return r.a.createElement("div",{className:"final"},r.a.createElement("ul",null,r.a.createElement("li",null,"Your time : ","".concat(Math.floor(c/1e3%60),"s")," "),r.a.createElement("li",null,"You scored points : ",a," "),r.a.createElement("li",null,"You made mistakes : ",n," "),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){e.restart()}},"Again?"))))}),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={time:"",inactive:!1,active:!0,activeTaskList:!0,score:0,mistakes:0,counter:0,results:[]},a.toggleClass=function(e){var t=a.state.inactive,n=a.state.active,r=(new Date).getTime(),c=a.state.activeTaskList;a.setState({inactive:!t,active:!n,activeTaskList:!c,time:r});var l="";"film"===e.target.id?l="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple&encode=url3986":"video game"===e.target.id?l="https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple&encode=url3986":"mathematics"===e.target.id?l="https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986":"sports"===e.target.id&&(l="https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple&encode=url3986"),fetch(l).then(function(e){if(e.ok)return e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(e){a.setState({results:e.results})})},a.changeCounter=function(e,t){e?a.setState(function(e){return{counter:e.counter+1,score:e.score+1}}):t&&a.setState(function(e){return{counter:e.counter+1,mistakes:e.mistakes+1}})},a.restart=function(){a.setState({time:"",inactive:!1,active:!0,activeTaskList:!0,score:0,mistakes:0,counter:0,results:[]})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.results,a=e.counter,n=e.time,c=e.score,l=e.mistakes;return r.a.createElement("div",{className:"wrapp active "},r.a.createElement("div",{className:this.state.inactive?"inactive":"active"},r.a.createElement("p",null,"pick your test"),r.a.createElement("button",{onClick:this.toggleClass,id:"film"},"film"),r.a.createElement("button",{onClick:this.toggleClass,id:"video game"},"video game"),r.a.createElement("button",{onClick:this.toggleClass,id:"mathematics"},"Science computers"),r.a.createElement("button",{onClick:this.toggleClass,id:"sports"},"sports")),r.a.createElement(h,{result:t,counters:a,changeCounter:this.changeCounter}),10===this.state.counter?r.a.createElement(v,{time:n,score:c,mistakes:l,restart:this.restart}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.dff142b5.chunk.js.map