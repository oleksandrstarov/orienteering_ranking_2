(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){e.exports=n(315)},123:function(e,t,n){},125:function(e,t,n){},130:function(e,t,n){},277:function(e,t,n){},303:function(e,t,n){},305:function(e,t,n){},307:function(e,t,n){},309:function(e,t,n){},311:function(e,t,n){},313:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),c=n.n(i),o=(n(123),n(17)),s=n(18),l=n(21),u=n(20),m=n(22),d=(n(125),n(50)),p=n(10),h=n.n(p),f=n(24),g=n(38),E=n.n(g),v=n(39),b=n.n(v),k=n(27),y=n.n(k),R=n(41),C=n.n(R),N=n(25),O=n.n(N),w=n(40),j=n.n(w),S=n(11),x=n.n(S),A=n(114),D=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getResponse",value:function(){var e=Object(f.a)(h.a.mark(function e(t,n){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/admin",e.next=3,fetch("".concat("http://localhost:8080/admin").concat(t),n);case 3:if(a=e.sent,console.log(a),a.ok){e.next=8;break}throw window.parent.postMessage({error:!0},"*"),new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 8:return e.abrupt("return",a.json());case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"getCompetitions",value:function(){var e=Object(f.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResponse("/competitions",{method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.sort(function(e,t){return e.DATE<t.DATE?1:-1}).map(function(e){return{id:e.ID,name:e.NAME,date:A(e.DATE).format("YYYY-MM-DD"),runners:e.RUNNERS,status:e.STATUS,isAllowed:e.IS_ALLOWED,isAllowedUpdated:e.IS_ALLOWED,link:e.URL}}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveCompetition",value:function(){var e=Object(f.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResponse("/competitions/updateCompetitionDetails",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"addCompetition",value:function(){var e=Object(f.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResponse("/competitions/addCompetition",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"recalculateCompetitions",value:function(){var e=Object(f.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResponse("/competitions/recalculate",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"totalDropCompetitions",value:function(){var e=Object(f.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResponse("/competitions/drop",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRunners",value:function(){var e=Object(f.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResponse("/runners",{method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.man.concat(t.woman).sort(function(e,t){return e.FULLNAME>t.FULLNAME?1:t.FULLNAME>e.FULLNAME?-1:0}).map(function(e){return{curPlace:e.CUR_PLACE,curRank:e.CUR_RANK,name:e.FULLNAME,id:e.ID,place:e.PLACE,placeDiff:e.PLACE_DIFF,points:e.POINTS,pointsDiff:e.POINTS_DIFF,sex:e.SEX,subjective:e.SUBJECTIVE,team:e.TEAM,checked:!1,isVisible:!0}}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveMergedRunners",value:function(){var e=Object(f.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.map(function(e){return e.duplicates=e.duplicates.map(function(e){return{CUR_PLACE:e.curPlace,CUR_RANK:e.curRank,FULLNAME:e.name,ID:e.id,PLACE:e.place,PLACE_DIFF:e.placeDiff,POINTS:e.points,POINTS_DIFF:e.pointsDiff,SEX:e.sex,SUBJECTIVE:e.subjective,TEAM:e.team}}),e.main={CUR_PLACE:e.main.curPlace,CUR_RANK:e.main.curRank,FULLNAME:e.main.name,ID:e.main.id,PLACE:e.main.place,PLACE_DIFF:e.main.placeDiff,POINTS:e.main.points,POINTS_DIFF:e.main.pointsDiff,SEX:e.main.sex,SUBJECTIVE:e.main.subjective,TEAM:e.main.team},{duplicates:e.duplicates,main:e.main}}),e.next=3,this.getResponse("/runners/merge",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateSingleRunner",value:function(){var e=Object(f.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResponse("/runners/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{CUR_PLACE:t.curPlace,CUR_RANK:t.curRank,FULLNAME:t.name,ID:t.id,PLACE:t.place,PLACE_DIFF:t.placeDiff,POINTS:t.points,POINTS_DIFF:t.pointsDiff,SEX:t.sex,SUBJECTIVE:t.subjective,TEAM:t.team}})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),L=(n(130),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={competitionName:"",competitionId:"",disable:!1},n.onValueChange=function(e){console.log(e),n.setState({competitionName:e})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({competitionName:e.currCompetition.name,competitionId:e.currCompetition.id,disable:""===e.currCompetition.name})}},{key:"onValueSave",value:function(){var e=this.state,t=e.competitionId,n=e.competitionName,a=e.getAllCompetitions;(new D).saveCompetition({id:t,title:n}).finally(function(){return a(t)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.competitionName,a=t.disable,i=this.props.currCompetition;return r.a.createElement(E.a,{className:"base-margin"},r.a.createElement(b.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h4",component:"h4",className:"margin-bottom"},n||"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f"),r.a.createElement(y.a,{component:"div"},r.a.createElement(x.a,{container:!0,spacing:24},r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement("strong",{className:"edit-text"},"ID:")),r.a.createElement(x.a,{item:!0,xs:10},r.a.createElement("span",{className:"edit-text"},i.id?i.id:"0000"))),r.a.createElement("div",{className:"input-wrapp"},r.a.createElement(x.a,{container:!0,spacing:24},r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement("strong",{className:"edit-text"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:")),r.a.createElement(x.a,{item:!0,xs:10},r.a.createElement(j.a,{id:"competition-name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f",className:"input input-name-width",value:n||"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f",onChange:function(t){return e.onValueChange(t.target.value)}})))),r.a.createElement("div",null,r.a.createElement(x.a,{container:!0,spacing:24},r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement("strong",{className:"edit-text"},"\u0414\u0430\u0442\u0430: ")),r.a.createElement(x.a,{item:!0,xs:10},r.a.createElement("span",{className:"edit-text"},i.date?i.date:"00-00-000")))),r.a.createElement("div",null,r.a.createElement(x.a,{container:!0,spacing:24},r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement("strong",{className:"edit-text"},"\u0421\u0442\u0430\u0442\u0443\u0441: ")),r.a.createElement(x.a,{item:!0,xs:10},r.a.createElement("span",{className:"edit-text"},i.status?i.status:"STATUS")))))),r.a.createElement(C.a,{className:"db-controls"},r.a.createElement(O.a,{disabled:a,variant:"contained",color:"primary",onClick:function(){return e.onValueSave()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}]),t}(a.Component)),T=n(42),M=n.n(T),I=n(44),U=n.n(I),P=n(9),F=n.n(P),B=n(43),_=n.n(B),V=n(28),W=n.n(V),J=n(31),Y=n.n(J),K=n(57),X=n.n(K),G=n(60),$=n.n(G),q=n(58),z=n.n(q),H=n(59),Q=n.n(H),Z=n(45),ee=n.n(Z),te=n(116),ne=n.n(te),ae=(n(277),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={radioButtonState:""},n.radioButtonChange=function(e){(0,n.props.radioButtonChange)(+e.target.value),n.setState({radioButtonState:e.target.value})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.competitions,a=t.statusChange,i=this.state.radioButtonState;return r.a.createElement(Y.a,{className:"base-margin"},r.a.createElement(M.a,null,r.a.createElement(_.a,null,r.a.createElement(W.a,null,r.a.createElement(F.a,{padding:"none",className:"padding-td",align:"center"}),r.a.createElement(F.a,{padding:"none",className:"padding-td",align:"center"}),r.a.createElement(F.a,{padding:"none",className:"padding-td",align:"left"},"\u0421\u0442\u0430\u0442\u0443\u0441"),r.a.createElement(F.a,{padding:"dense",align:"left"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(F.a,{padding:"dense",align:"left"},"\u0414\u0430\u0442\u0430"),r.a.createElement(F.a,{padding:"dense",align:"left"},"\u0421\u043f\u043e\u0440\u0442\u0441\u043c\u0435\u043d\u044b"))),r.a.createElement(U.a,null,n.map(function(t){return r.a.createElement(W.a,{key:t.id},r.a.createElement(F.a,{padding:"none",className:"padding-td"},r.a.createElement(X.a,{className:"controls-padding",checked:"Y"===t.isAllowedUpdated,disabled:null===t.isAllowedUpdated,value:t.id.toString(),onChange:function(e){return a(+e.target.value)}})),r.a.createElement(F.a,{padding:"none",className:"padding-td"},r.a.createElement(z.a,{className:"controls-padding","aria-label":"competitions",value:i,onChange:function(t){return e.radioButtonChange(t)}},r.a.createElement(Q.a,{value:t.id.toString(),control:r.a.createElement($.a,null),label:""}))),r.a.createElement(F.a,{padding:"none",className:"padding-td"},"IMPORTED"===t.status?r.a.createElement(ee.a,{className:"green"},"check"):null,"INVALID"===t.status?r.a.createElement(ee.a,{className:"red"},"close"):null,"VALID"===t.status?r.a.createElement(ee.a,{className:"blue"},"access_time"):null),r.a.createElement(F.a,{padding:"dense"},r.a.createElement(ne.a,{title:t.name,placement:"bottom-start"},r.a.createElement("a",{className:"link",href:t.link},t.name))),r.a.createElement(F.a,{padding:"dense"},r.a.createElement("span",{className:"date"},t.date)),r.a.createElement(F.a,{padding:"dense"},t.runners))}))))}}]),t}(a.Component)),re=(n(303),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={competitionLink:"",urlRegExp:/http:\/\/(.+)\.(.+)\/(.+)\.(htm|html)/,urlError:"",disabled:!0},n.onChange=function(e){var t=n.state.urlRegExp;n.setState({competitionLink:e.target.value}),t.test(e.target.value)?n.setState({urlError:"",disabled:!1}):n.setState({urlError:"Invalid URL (Only MEOS, SFR and WinOrient pages)",disabled:!0})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"addNewCompetition",value:function(e){var t=this.state.competitionLink,n=new D;e.preventDefault(),n.addCompetition(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.competitionLink,a=t.disabled,i=t.urlError;return r.a.createElement("form",{onSubmit:function(t){return e.addNewCompetition(t)}},r.a.createElement("div",{className:"input-wrapp form-width"},r.a.createElement(j.a,{id:"competition-name",label:"New competition",value:n,onChange:function(t){return e.onChange(t)},className:"input link-input"}),r.a.createElement(O.a,{variant:"contained",type:"submit",disabled:a,className:"add-link"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),r.a.createElement("div",{className:"error red"},i))}}]),t}(a.Component)),ie=(n(305),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onRecalculate",value:function(){var e=this.props.competitions,t=new D,n=e.filter(function(e){return e.isAllowed!==e.isAllowedUpdated}).map(function(e){return{ID:e.id,IS_ALLOWED:e.isAllowed,IS_ALLOWED_UPDATED:e.isAllowedUpdated}});t.recalculateCompetitions(n)}},{key:"onTotalDrop",value:function(){(new D).totalDropCompetitions()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"db-controls"},r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){return e.onRecalculate()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u043f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044c"),r.a.createElement(O.a,{variant:"contained",color:"secondary",onClick:function(){return e.onTotalDrop()}},"\u041f\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c"))}}]),t}(a.Component)),ce=(n(307),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={competitions:[],currentCompetition:{id:"",name:"",date:"",runners:"",status:"",link:""}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getAllCompetitions("");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAllCompetitions",value:function(){var e=Object(f.a)(h.a.mark(function e(t){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new D,e.next=3,n.getCompetitions();case 3:a=e.sent,this.setState({competitions:a}),t&&this.radioButtonChange(t);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"radioButtonChange",value:function(e){var t=this.state.competitions.find(function(t){return t.id===e});this.setState({currentCompetition:t})}},{key:"statusChange",value:function(e){var t=this.state.competitions.find(function(t){return t.id===e});t.isAllowedUpdated="N"===t.isAllowedUpdated?"Y":"N",this.setState({competitions:Object(d.a)(this.state.competitions)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.competitions,a=t.currentCompetition;return r.a.createElement("div",{className:"admin-competitions"},r.a.createElement("div",{className:"buttons-wrapper"},r.a.createElement(re,null),r.a.createElement(ie,{competitions:n})),r.a.createElement(L,{currCompetition:a,getAllCompetitions:function(t){return e.getAllCompetitions(t)},className:"base-margin"}),r.a.createElement(ae,{competitions:n,radioButtonChange:function(t){return e.radioButtonChange(t)},statusChange:function(t){return e.statusChange(t)},className:"base-margin"}))}}]),t}(a.Component)),oe=(n(309),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.allRunners,n=e.statusChange;return r.a.createElement(Y.a,{className:"base-margin"},r.a.createElement(M.a,null,r.a.createElement(_.a,null,r.a.createElement(W.a,null,r.a.createElement(F.a,{padding:"checkbox",align:"center"}),r.a.createElement(F.a,{align:"left"},"\u0418\u043c\u044f"),r.a.createElement(F.a,{align:"left"},"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u043e\u0435 \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"),r.a.createElement(F.a,{align:"left"},"\u041e\u0447\u043a\u0438"))),r.a.createElement(U.a,null,t.map(function(e){return r.a.createElement(W.a,{key:e.id,className:e.isVisible?"":"invisible-row"},r.a.createElement(F.a,{padding:"checkbox"},r.a.createElement(X.a,{className:"controls-padding",checked:e.checked,value:e.id.toString(),onChange:function(e){return n(+e.target.value)}})),r.a.createElement(F.a,null,e.name),r.a.createElement(F.a,null,e.team),r.a.createElement(F.a,null,e.points))}))))}}]),t}(a.Component)),se=n(117),le=n.n(se),ue=(n(311),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sex:"",team:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.checkedRunnersLength,n=e.currentRunner;1===t&&this.setState({sex:n.sex,team:n.team})}},{key:"componentWillReceiveProps",value:function(){var e=this.props,t=e.checkedRunnersLength,n=e.currentRunner;1===t&&this.setState({sex:n.sex,team:n.team})}},{key:"onTeamChange",value:function(e){this.setState({team:e})}},{key:"sexChange",value:function(){var e="M"===this.state.sex?"W":"M";this.setState({sex:e})}},{key:"updateSingleRunner",value:function(e){var t=this.state,n=t.sex,a=t.team,r=this.props.updateSingleRunner,i=e;i.sex=n,i.team=a,r(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.team,a=t.sex,i=this.props,c=i.currentRunner,o=i.checkedRunnersLength,s=i.addRunnerToMerge;return r.a.createElement(E.a,{className:"base-margin"},r.a.createElement(b.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h4",component:"h4",className:"margin-bottom"},c.name),r.a.createElement(y.a,{component:"div",variant:"h6"},r.a.createElement(x.a,{container:!0,spacing:24},r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement("strong",null,"ID: ")),r.a.createElement(x.a,{item:!0,xs:10},r.a.createElement("span",null,c.id))),r.a.createElement(x.a,{container:!0,spacing:24},r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement("strong",null,"\u041a\u043b\u0443\u0431: ")),r.a.createElement(x.a,{item:!0,xs:10},r.a.createElement("span",null,o>1?c.team:r.a.createElement(j.a,{id:"runner-club",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f",className:"input input-name-width",value:n,onChange:function(t){return e.onTeamChange(t.target.value)}})))),r.a.createElement(x.a,{container:!0,spacing:24},r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement("strong",null,"\u041f\u043e\u043b: ")),r.a.createElement(x.a,{item:!0,xs:10},r.a.createElement("span",null,o>1?c.sex:r.a.createElement(le.a,{value:a,name:"sex",onChange:function(){return e.sexChange()},className:"select-gender"},r.a.createElement("option",{value:"M"},"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"),r.a.createElement("option",{value:"W"},"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"))))))),r.a.createElement(C.a,{className:"db-controls"},o>1?r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){return s(c.id)}},"\u041e\u0431\u044c\u0435\u0434\u0438\u043d\u0438\u0442\u044c"):r.a.createElement(O.a,{variant:"contained",color:"secondary",onClick:function(){return e.updateSingleRunner(c)}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")))}}]),t}(a.Component)),me=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={radioButtonState:"",currentRunner:{}},n.radioButtonChange=function(e){var t=n.props.checkedRunners;n.setState({radioButtonState:e.target.value});var a=t.find(function(t){return t.id===+e.target.value});n.setState({currentRunner:a})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.state.radioButtonState;e.checkedRunners.find(function(e){return e.id===+t})||this.setState({currentRunner:{},radioButtonState:""})}},{key:"updateSingleRunner",value:function(e){(new D).updateSingleRunner(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.checkedRunners,a=t.addRunnerToMerge,i=this.state,c=i.radioButtonState,o=i.currentRunner;return r.a.createElement("div",null,r.a.createElement(Y.a,{className:"base-margin"},r.a.createElement(M.a,null,r.a.createElement(_.a,null,r.a.createElement(W.a,null,r.a.createElement(F.a,{padding:"checkbox",align:"center"}),r.a.createElement(F.a,{align:"left"},"\u0418\u043c\u044f"),r.a.createElement(F.a,{align:"left"},"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u043e\u0435 \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"))),r.a.createElement(U.a,null,n.map(function(t){return r.a.createElement(W.a,{key:t.id},r.a.createElement(F.a,{padding:"checkbox"},r.a.createElement(z.a,{className:"controls-padding","aria-label":"competitions",value:c,onChange:function(t){return e.radioButtonChange(t)}},r.a.createElement(Q.a,{value:t.id.toString(),control:r.a.createElement($.a,null),label:""}))),r.a.createElement(F.a,null,t.name),r.a.createElement(F.a,null,t.team))})))),c?r.a.createElement(ue,{currentRunner:o,checkedRunnersLength:n.length,addRunnerToMerge:function(e){return a(e)},updateSingleRunner:function(){return e.updateSingleRunner(o)}}):null)}}]),t}(a.Component),de=(n(313),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.mergedRunners,n=e.deleteMergedRunner,a=e.saveMergedRunners,i=e.cancelMergedRunners;return r.a.createElement(E.a,{className:"base-margin sticky-top"},r.a.createElement(b.a,null,r.a.createElement(y.a,{gutterBottom:!0,variant:"h4",component:"h4",className:"margin-bottom"},"\u0421\u043f\u043e\u0440\u0442\u0441\u043c\u0435\u043d\u044b \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438:"),r.a.createElement(y.a,{component:"div",variant:"h6"},t.map(function(e,t){return r.a.createElement("div",{key:e.main.id,className:"runners-list"},r.a.createElement("strong",null,t+1,". "),r.a.createElement("span",null,e.main.name),r.a.createElement("button",{className:"trash-button",onClick:function(){return n(e.main.id)}},r.a.createElement(ee.a,{className:"red"},"close")),e.duplicates.map(function(e,t){return r.a.createElement("div",{key:t,className:"duplicates-runners"},e.name)}))}))),r.a.createElement(C.a,{className:"db-controls"},r.a.createElement(O.a,{variant:"contained",color:"secondary",onClick:function(){return a()},className:"red"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(){return i()}},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c")))}}]),t}(a.Component)),pe=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={allRunners:[],checkedRunners:[],mergedRunners:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new D,e.next=3,t.getRunners();case 3:n=e.sent,this.setState({allRunners:n});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"statusChange",value:function(e){var t=this.state,n=t.checkedRunners,a=t.allRunners,r=a.find(function(t){return t.id===e});if(r.checked=!r.checked,r.checked)n.push(r);else{var i=n.findIndex(function(t){return t.id===e});n.splice(i,1)}this.setState({allRunners:Object(d.a)(a),checkedRunners:Object(d.a)(n)})}},{key:"addRunnerToMerge",value:function(e){var t=this.state,n=t.checkedRunners,a=t.mergedRunners,r=n.find(function(t){return t.id===e});a.push({duplicates:n,main:r}),n.forEach(function(e){e.isVisible=!1}),this.setState({checkedRunners:[]})}},{key:"cancelMergedRunners",value:function(){this.state.mergedRunners.forEach(function(e){e.duplicates.forEach(function(e){var t=e;t.checked=!1,t.isVisible=!0})}),this.setState({mergedRunners:[]})}},{key:"saveMergedRunners",value:function(){var e=this.state.mergedRunners;(new D).saveMergedRunners(e),this.cancelMergedRunners()}},{key:"deleteMergedRunner",value:function(e){var t=this.state.mergedRunners,n=t.findIndex(function(t){return t.main.id===e});t[n].duplicates.forEach(function(e){var t=e;t.isVisible=!0,t.checked=!1}),t.splice(n,1),this.setState({mergedRunners:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.allRunners,a=t.checkedRunners,i=t.mergedRunners;return r.a.createElement("div",{className:"Admin-runners"},r.a.createElement(x.a,{container:!0,spacing:24},r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(oe,{allRunners:n,statusChange:function(t){return e.statusChange(t)}})),r.a.createElement(x.a,{item:!0,xs:6},a.length>0?r.a.createElement(me,{checkedRunners:a,addRunnerToMerge:function(t){return e.addRunnerToMerge(t)}}):null,i.length>0?r.a.createElement(de,{mergedRunners:i,cancelMergedRunners:function(){return e.cancelMergedRunners()},saveMergedRunners:function(){return e.saveMergedRunners()},deleteMergedRunner:function(t){return e.deleteMergedRunner(t)}}):null)))}}]),t}(a.Component),he=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showRunners:!0},n.getDataFromAngular=function(e){"runners"===e.data.path&&n.setState({showRunners:!0}),"competition"===e.data.path&&n.setState({showRunners:!1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.getDataFromAngular),window.parent.postMessage({componentDidMount:!0},"*")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.getDataFromAngular)}},{key:"render",value:function(){var e=this.state.showRunners;return r.a.createElement("div",{className:"Admin wrapper db-controls"},e?r.a.createElement(pe,null):r.a.createElement(ce,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,2,1]]]);
//# sourceMappingURL=main.0e1ce8f8.chunk.js.map