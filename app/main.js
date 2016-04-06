/**
 * Created by aysenurerdem on 4/2/16.
 */
var app = angular.module('stemsos', ["ngRoute"])


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/dashboard', {
            templateUrl: 'view/dashboard.html',
            controller: 'dashboardCtrl'
        }).


        when('/contracted', {
            templateUrl: 'view/contracted.html',
            controller: 'contractedCtrl'
        }).

        when('/contracted', {
            templateUrl: 'view/contracted.html',
            controller: 'contractedCtrl'
        }).
            
        otherwise({
            redirectTo: '/'
        });
    }]);

app.controller('contentCtrl', function ($scope) {
    $scope.firstName = "Aysenur "


} );


app.controller('dashboardCtrl', function ($scope) {
    $scope.firstName = "Aysenur dashboard "

});

app.controller('contractedCtrl', function ($scope) {
    $scope.firstName = "Aysenur "

});