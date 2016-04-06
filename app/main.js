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

        when('/level', {
            templateUrl: 'view/level.html',
            controller: 'levelCtrl'
        }).

        when('/portfolio', {
            templateUrl: 'view/portfolio.html',
            controller: 'portfolioCtrl'
        }).

        when('/students', {
            templateUrl: 'view/students.html',
            controller: 'studentsCtrl'
        }).

        when('/schoolRoster', {
            templateUrl: 'view/schoolRoster.html',
            controller: 'schoolRosterCtrl'
        }).

        otherwise({
            redirectTo: '/'
        });
    }]);

app.controller('contentCtrl', function ($scope) {
    $scope.firstName = "Aysenur "


} );


app.controller('dashboardCtrl', function ($scope) {
    $scope.firstName = "dashboard "

});

app.controller('contractedCtrl', function ($scope) {
    $scope.firstName = "contracted school page "

});

app.controller('levelCtrl', function ($scope) {
    $scope.firstName = "level one submisson page"

});

app.controller('portfolio', function ($scope) {
    $scope.firstName = "E-portfolio submisson page"

});

app.controller('students', function ($scope) {
    $scope.firstName = "My students page"

});

app.controller('schoolRoster', function ($scope) {
    $scope.firstName = "school Roster page"

});

