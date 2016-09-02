



var app = angular.module('cncMonitor',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{template:'这是首页页面'})
        .when('/onlineWorker',{
            templateUrl : 'https://sheldon-xieru.github.io/CNCMonitor/#/onlineWorker'
        })
        .when('/diary',{
            templateUrl : 'pages/diary.html'
        })

        // .otherwise({redirectTo:'/'});



}]);