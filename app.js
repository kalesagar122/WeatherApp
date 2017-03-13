/**
 * Created by sagarkale on 2/10/2017.
 */
var app=angular.module("myapp",["ngRoute","ngResource"]);
//Route config
app.config(["$routeProvider",function ($routeProvider) {

    $routeProvider
        .when("/start",{
            templateUrl:"Home.html",
            controller:"first"
        })
        .when("/second",{
            templateUrl:"cityforecast.html",
            controller:"second"


        })
        .when("/second/:num",{
            templateUrl:"cityforecast.html",
            controller:"second"
        })
}]);



//controllers
app.controller("first",["$scope","$log","$location","changetext",function ($scope,$log,$location,changetext) {

            $scope.submit=function () {
                $location.path("/second");
            }
            $scope.formtext=changetext.name;
            $scope.$watch("formtext",function () {
                changetext.name=$scope.formtext;
            });
}]);

app.controller("second",["$scope","$resource","$http","$routeParams","changetext","weather",function ($scope,$resource,$http,$routeParams,changetext,weather) {

    $scope.name=changetext.name;
    $scope.num=$routeParams.num||'2';
    $scope.weatherresult=weather.getweather($scope.name,$scope.num);
    $scope.converttemp=function (degk) {
        return Math.round((1.8*(degk-273))+32);
    }
    $scope.convertdate=function (date) {
        return new Date(date*1000);
    }
    console.log($scope.weatherresult);
}]);

app.directive("searchResult",function () {
     return {
                restrict:"EAC",
                templateUrl:"template.html",
                scope:{
                        weatherDay:"=",
                        converterDate:"&",
                        converterTemp:"&",
                        dateFormat:"@"
                }

            }
});
