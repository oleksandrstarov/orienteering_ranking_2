"use strict";function handleMaintanance(e){e.go("app.service")}angular.module("app",["ui.router","ngResource","ngMaterial","chart.js"]).config(["$stateProvider","$urlRouterProvider","ChartJsProvider",function(e,n,t){t.setOptions({chartColors:["#00ADF9","#BD4C4C"]}),Chart.defaults.global.elements.point.radius=0,Chart.defaults.global.elements.point.borderWidth=0,Chart.defaults.global.elements.point.hitRadius=3,e.state("app",{url:"/",views:{header:{templateUrl:"views/header.html"},content:{templateUrl:"views/main.html",controller:"HomeController as homeCtrl"},footer:{templateUrl:"views/footer.html"}}}).state("app.runners",{url:"runners",views:{"content@":{templateUrl:"views/runnersTable.html",controller:"RunnersController as runnersCtrl"}}}).state("app.runner",{url:"runners/:id",views:{"content@":{templateUrl:"views/runnerView.html",controller:"RunnerViewController as runnerViewCtrl"}}}).state("app.competitions",{url:"competitions",views:{"content@":{templateUrl:"views/competitionsTable.html",controller:"CompetitionsController as competitionsCtrl"}}}).state("app.competition",{url:"competitions/:id",views:{"content@":{templateUrl:"views/competitionView.html",controller:"CompetitionViewController as competitionViewCtrl"}}}).state("app.about",{url:"about",views:{"content@":{templateUrl:"views/about.html",controller:"AboutController as ctrl"}}}).state("app.adminRunners",{url:"admin/runners",views:{"content@":{templateUrl:"views/adminRunners.html",controller:"AdminRunnersController as AdminRunnersCtrl"}}}).state("app.adminCompetitions",{url:"admin/competitions",views:{"content@":{templateUrl:"views/adminCompetitions.html",controller:"AdminCompetitionsController as AdminCompCtrl"}}}).state("app.service",{url:"ooops",views:{"content@":{templateUrl:"views/service.html"}}}),n.otherwise("/")}]),angular.module("app").controller("HomeController",["$scope","statsService","$state",function(e,n,t){var o=this;o.info=[],e.isDataLoaded=!1,e.isError=!1,e.message="",o.data={},n.getStats().get().$promise.then(function(n){o.data=n.stats,e.isDataLoaded=!0},function(n){434===n.status&&handleMaintanance(t),e.message=n.error,e.isError=!0,e.isDataLoaded=!0})}]).controller("CompetitionsController",["$scope","competitionsService","$state",function(e,n,t){var o=this;o.info=[],e.isDataLoaded=!1,e.isError=!1,e.message="",n.getCompetitions().query(function(n){o.info=n,e.isDataLoaded=!0},function(n){434===n.status&&handleMaintanance(t),e.isDataLoaded=!0,e.isError=!0,e.message=n.status+""+n.statusText})}]).controller("CompetitionViewController",["$scope","$stateParams","competitionsService","$state",function(e,n,t,o){function r(e){if(0===e.length)return null;for(var n=[[]],t=e[0].COMP_GROUP,o=0;o<e.length;o++)e[o].COMP_GROUP===t?n[n.length-1].push(e[o]):(n.push([e[o]]),t=e[o].COMP_GROUP);return n}var a=this;a.info=[],e.isDataLoaded=!1,e.isError=!1,e.message="",t.getCompetition().get({id:parseInt(n.id,10)}).$promise.then(function(n){n.details[0].runners=n.results.length,n.results=r(n.results),a.info=n,e.isDataLoaded=!0},function(n){434===n.status&&handleMaintanance(o),e.isDataLoaded=!0,e.isError=!0,e.message=n.status+""+n.statusText})}]).controller("RunnersController",["$scope","runnerService","$state",function(e,n,t,o,r){var a=this;a.info=[],e.isDataLoaded=!1,e.isError=!1,e.message="",a.manFilter="",a.womanFilter="",a.manShift=null,a.womanShift=null,a.manData=[],a.womanData=[],e.showMan=!0,e.showWoman=!0,e.toggleManInfo=function(){e.showMan=!e.showMan},e.toggleWomanInfo=function(){e.showWoman=!e.showWoman},a.search=function(e){if("M"===e.SEX){var n=a.manFilter.toLowerCase();return e.FULLNAME.toLowerCase().indexOf(n)!=-1||e.TEAM.toLowerCase().indexOf(n)!=-1}var n=a.womanFilter.toLowerCase();return e.FULLNAME.toLowerCase().indexOf(n)!=-1||e.TEAM.toLowerCase().indexOf(n)!=-1},a.subjectiveFilter=function(e){return"M"===e.SEX?!a.noSubjectiveMan||"Y"!==e.SUBJECTIVE:!a.noSubjectiveWoman||"Y"!==e.SUBJECTIVE},n.getRunners().get(function(n){e.isDataLoaded=!0,a.manData=n.man,a.womanData=n.woman,a.manShift=-a.manData[0].CUR_RANK,a.womanShift=-a.womanData[0].CUR_RANK,a.info=n},function(n){434===n.status&&handleMaintanance(t),e.isDataLoaded=!0,e.isError=!0,e.message=n.status+""+n.statusText}),a.isSubjective=function(e){return"Y"===e?"subjective-points":""},a.getPopup=function(e){return null===e.PLACE_DIFF?"Новый спортсмен":"Место "+-e.PLACE_DIFF+" \n Очки "+-e.POINTS_DIFF},a.checkPlace=function(e){return e.PLACE_DIFF>0?"glyphicon-circle-arrow-up color-green":e.PLACE_DIFF<0?"glyphicon-circle-arrow-down color-red":null===e.PLACE_DIFF?"glyphicon glyphicon-plus-sign color-blue":"glyphicon-circle-arrow-right color-grey"}}]).controller("RunnerViewController",["$scope","$stateParams","runnerService","$state","$mdDialog",function(e,n,t,o,r){function a(n,t){var o=n.map(function(e){return e.ENTRY_DATE.slice(0,e.ENTRY_DATE.indexOf("T"))}),r=n.map(function(e){return e.POINTS}),a=n.map(function(e){return e.PLACE});e.labels=o,e.series=["очки","место"],e.data=[r,a],e.datasetOverride=[{yAxisID:"y-axis-1"},{yAxisID:"y-axis-2"}],e.options={scales:{yAxes:[{id:"y-axis-1",type:"linear",display:!0,position:"left"},{id:"y-axis-2",type:"linear",display:!0,position:"right",ticks:{min:1}}]}}}function i(e,n,t){n.info=u(e),t.isDataLoaded=!0}function s(e,n){n.isDataLoaded=!0,n.isError=!0,n.message=e.status+""+e.statusText}function u(e){for(var n=0;n<e.results.length&&("C"===e.results[n].ACT_RESULT&&n<6);n++)e.results[n].POINTS_RANK=n+1;return e}var l=this;l.info=[],e.isDataLoaded=!1,e.isError=!1,e.message="",t.getRunner().get({id:parseInt(n.id,10)}).$promise.then(function(n){a(n.stats,n.details[0].FULLNAME),i(n,l,e)},function(n){434===n.status&&handleMaintanance(o),s(n,e)}),e.getRunners=function(){return t.getRunners().get().$promise.then(function(e){console.log(e);var n="M"==l.info.details[0].SEX;l.runners=n?e.man:e.woman})},e.compare=function(a){t.compareRunner().query({id:parseInt(n.id,10),compare:a.ID}).$promise.then(function(n){var t=!1,o={clickOutsideToClose:!0,controller:"CompereDialogController",template:"<md-dialog aria-label='Compare'><compare-runners-component runner='runner' compare-runner='compareRunner' compare-data='compareData'></compare-runners-component></md-dialog>",parent:angular.element(document.body),targetEvent:event,fullscreen:t,locals:{runner:l.info.details[0],compareRunner:a,compareData:n}};r.show(o).then(function(e){console.log("cancel111")},function(){console.log("cancel222"),e.compareRunner=null})},function(e){434===e.status&&handleMaintanance(o),console.log(e.error)})}}]).controller("CompereDialogController",["$scope","runner","compareRunner","compareData",function(e,n,t,o){e.runner=n,e.compareRunner=t,e.compareData=o}]).controller("AboutController",["aboutService","$scope","$state",function(e,n,t){var o=this;o.groups="(Загрузка..)",n.isDataLoaded=!1,n.showInfo=!1,n.toggleInfo=function(){n.showInfo=!n.showInfo},e.getGoupsData().query(function(e){o.groups=e.map(function(e){return e.name}).join(", "),o.points=e,n.isDataLoaded=!0},function(e){434===e.status&&handleMaintanance(t),n.isDataLoaded=!0,n.isError=!0,n.message=e.status+""+e.statusText})}]).controller("LoginController",["$mdDialog","$mdMedia","$mdToast","$state",function(e,n,t,o){var r=!1;this.showPrompt=function(n){e.show({clickOutsideToClose:!0,controller:"LoginDialogController as ctrl",templateUrl:"views/templates/loginPopup.html",parent:angular.element(document.body),targetEvent:n,fullscreen:r}).then(function(e){o.go(e.adminPanel)},function(){console.log("cancel")})}}]).controller("AdminCompetitionsController",["$scope","adminCompetitionsService","$state",function(e,n,t){function o(e){return e.map(function(e){return e.IS_ALLOWED_UPDATED=e.IS_ALLOWED,e})}var r=this;r.info=[],e.message="",e.newCompetition="",e.addCompetition=function(){return e.message="Adding...",e.newCompetition?(n.addLink().update({data:e.newCompetition},function(n){n.error||r.info.push(o([n.data])),e.message=n.error||"Competition added"}),void(e.newCompetition="")):void(e.message="Empty link!")},e.recalculate=function(){e.message="Recalculation...",n.recalculateCompetitions().update({data:r.info},function(n){n.error||(r.info=o(JSON.parse(n.data))),e.message=n.error||"Competitions updated"}),e.newCompetition=""},e.dropData=function(){e.message="Drop and Update...",n.dropData().update({},function(n){n.error||(r.info=o(JSON.parse(n.data))),e.message=n.error||"Competitions updated"}),e.newCompetition=""},e.updateCompetition=function(){e.message="Updating...",n.updateCompetition().update({data:{id:r.selectedCompetition.ID,title:r.selectedCompetition.NAME}},function(n){e.message=n.data||"Data updated"})},r.info=[],n.getCompetitions().query(function(e){r.info=o(e)},function(n){401===n.status?t.go("app"):e.message=n.status+""+n.statusText})}]).controller("AdminRunnersController",["$scope","adminRunnersService","$state",function(e,n,t){var o=this;e.info=[],o.selectedRunner={},e.show=!1,e.selectedRunners=[],e.mergedRunners=[],e.isMerge=!1,e.message="";var r=[];e.filterInfo=function(n){return 0===r.length?n:e.info.filter(function(e){return r.indexOf(e.ID)===-1})},e.$watch("selectedRunners",function(){e.isMerge=e.selectedRunners.length>2}),e.merge=function(){e.mergedRunners.push({main:o.selectedRunner,duplicates:e.selectedRunners}),o.selectedRunner={},e.show=!1;for(var n=0;n<e.selectedRunners.length;n++)e.selectedRunners[n].isSelected=!1,r.push(e.selectedRunners[n].ID);e.selectedRunners=[]},e.cancel=function(){r=[],e.mergedRunners=[],e.selectedRunners=[],o.selectedRunner={},e.show=!1;for(var n=0;n<e.selectedRunners.length;n++)e.selectedRunners[n].isSelected=!1},e.updateMergedData=function(){e.message="Merging...",n.mergeDuplicates().update(e.mergedRunners,function(n){n.error||(e.info=JSON.parse(n.data)),e.message=n.error||"Runners updated",r=[]})},e.update=function(){e.message="Updating...",n.updateRunner().update({data:o.selectedRunner},function(n){e.message=n.error||"Runner updated"}),o.selectedRunner={},e.show=!1;for(var t=0;t<e.selectedRunners.length;t++)e.selectedRunners[t].isSelected=!1},this.selected=function(n){n.isSelected||n!==o.selectedRunner||(e.show=!1,o.selectedRunner={})},this.selectedPrimary=function(n){e.show=!0},n.getRunners().get(function(n){console.log(n),e.info=n.man,e.info=e.info.concat(n.woman)},function(e){401===e.status&&t.go("app"),console.log(e)})}]).controller("LoginDialogController",["$mdDialog","loginService","$state",function(e,n,t){var o=this;o.password="",o.username="admin01",o.close=function(){o.wrongPass=!1,e.cancel()},o.login=function(){o.wrongPass=!1,o.loading=!0,n.adminLogin().check({user:o.username,password:o.password},function(n){return o.loading=!1,n.error?void(o.wrongPass=!0):void e.hide(n)},function(e){o.loading=!1,o.service=!0})}}]).controller("CompareRunnersController",["$mdDialog",function(e){var n=this;n.close=function(){e.cancel()},n.getTitle=function(){var e=!0;return n.runner.CUR_RANK-n.compareRunner.CUR_RANK>0&&(e=!1),(e?n.runner.FULLNAME:n.compareRunner.FULLNAME)+" по статистике сильнее:"},n.getRunnerCompetitionPoints=function(){for(var e=0,t=0;t<n.compareData.length;t++)e+=n.compareData[t].POINTS;return e/n.compareData.length},n.getCompareRunnerCompetitionPoints=function(){for(var e=0,t=0;t<n.compareData.length;t++)e+=n.compareData[t].OPPONENT_POINTS;return e/n.compareData.length},n.getRunnerCompetitionWins=function(){for(var e=0,t=0;t<n.compareData.length;t++){var o=n.compareData[t];o.OPPONENT_PLACE>o.PLACE&&e++}return e},n.getCompareRunnerCompetitionWins=function(){for(var e=0,t=0;t<n.compareData.length;t++){var o=n.compareData[t];o.OPPONENT_PLACE<o.PLACE&&e++}return e}}]),angular.module("app").service("competitionsService",["$resource",function(e){this.getCompetitions=function(){return e("/competitions")},this.getCompetition=function(){return e("/competitions/:id")}}]).service("runnerService",["$resource",function(e){this.getRunners=function(){return e("/runners")},this.getRunner=function(){return e("/runners/:id")},this.compareRunner=function(){return e("/runner/:id/:compare")}}]).service("statsService",["$resource",function(e){this.getStats=function(){return e("/stats")}}]).service("adminCompetitionsService",["$resource",function(e){this.getCompetitions=function(){return e("admin/competitions")},this.addLink=function(){return e("admin/competitions/addCompetition",null,{update:{method:"PUT"},query:{method:"GET",isArray:!0}})},this.recalculateCompetitions=function(){return e("admin/competitions/recalculate",null,{update:{method:"PUT"},query:{method:"GET",isArray:!0}})},this.dropData=function(){return e("admin/competitions/drop",null,{update:{method:"PUT"},query:{method:"GET",isArray:!0}})},this.updateCompetition=function(){return e("admin/competitions/updateCompetitionDetails",null,{update:{method:"PUT"},query:{method:"GET",isArray:!1}})}}]).service("adminRunnersService",["$resource",function(e){this.getRunners=function(){return e("admin/runners")},this.mergeDuplicates=function(){return e("admin/runners/merge",null,{update:{method:"PUT"},query:{method:"GET",isArray:!1}})},this.updateRunner=function(){return e("admin/runners/update",null,{update:{method:"PUT"},query:{method:"GET",isArray:!1}})}}]).service("loginService",["$resource",function(e){this.adminLogin=function(){return e("/adminLogin",null,{check:{method:"PUT"}})}}]).service("aboutService",["$resource",function(e){this.getGoupsData=function(){return e("/about")}}]).value("runnersManValue",[]).value("runnersWomanValue",[]),angular.module("app").directive("loaderTemplate",function(){return{restrict:"E",templateUrl:"views/templates/loader.html"}}).component("loginComponent",{templateUrl:"views/templates/login.html",controller:"LoginController"}).component("compareRunnersComponent",{templateUrl:"views/templates/compareRunners.html",controller:"CompareRunnersController as ctrl",bindings:{runner:"<",compareRunner:"<",compareData:"<",cancel:"&"}});