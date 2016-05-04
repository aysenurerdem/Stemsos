/**
 * Created by aysenurerdem on 4/2/16.
 */
var app = angular.module('stemsos', ["ui.router", "ui.grid","ui.grid.edit","ngResource"]);


app.config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: "views/dashboard.html",
            controller: 'dashboardCtrl'
        })
        .state('levelOneSubmission', {
            url: '/submission/level1',
            templateUrl: "views/level.html",
            controller: 'levelCtrl'
        })
        .state('levelTwoSubmission', {
            url: '/submission/level2',
            templateUrl: "views/portfolio.html",
            controller: 'portfolioCtrl'
        })
        .state('students', {
            url: '/students',
            templateUrl: "views/students.html",
            controller: 'studentsCtrl'
        })
        .state('school', {
            url: '/roster',
            templateUrl: "views/schoolRoster.html",
            controller: 'schoolRosterCtrl'
        })
});



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

app.controller('portfolioCtrl', function ($scope) {
    $scope.firstName = "E-portfolio submisson page"

});

app.controller('studentsCtrl', function ($scope,myStudentService) {
    $scope.firstName = "My students page";

    $scope.gridOptions = {};

    $scope.gridOptions.data = myStudentService.myStudents;
    $scope.gridOptions.enableCellEditOnFocus = true;

    $scope.gridOptions.columnDefs = [
        { name: 'name', enableCellEdit: true },
        { name: 'gender', enableCellEditOnFocus:true, width: 200  },
        { name: 'school',width: 300 },
        { name: 'grade', enableCellEdit: true,displayName: 'Grade', width: 200},
        { name: 'email',enableCellEdit: true, width: 200}
        
    ];

});

app.controller('schoolRosterCtrl', function ($scope,studentData,myStudentService) {
    $scope.firstName = "school Roster page";

    studentData.query(function(students) {

        $scope.gridOptions.data = students;

    }); //query() returns all the entries


    $scope.gridOptions = {};


    $scope.gridOptions.enableCellEditOnFocus = true;

    $scope.gridOptions.columnDefs = [
        { name: 'name', enableCellEdit: true },
        { name: 'gender', enableCellEditOnFocus:true, width: 200  },
        { name: 'school',width: 300 },
        { name: 'grade', enableCellEdit: true,displayName: 'Grade', width: 200},
        { name: 'email',enableCellEdit: true, width: 200},
        {
            name:'Action',
            cellTemplate: '<div><button ng-hide="row.entity.assigned" ng-click="grid.appScope.assignStudent(row.entity)">Assign To me</button></div>'
        }
    ];


    $scope.assignStudent = function (student) {

        student.assigned = true;
        myStudentService.assignStudent(student);
    };




});


//Factory and service for communicating between controllers

//Services are like objects you don't have to return anything
//you can build like an object
app.service('myStudentService', function () {

    this.myStudents = [];
    this.assignStudent = function (student) {

        //
        this.myStudents.push(student);
    };

});

//difference of the factory , you have to return an object
app.factory('studentData', function($resource) {
    return $resource('data.json');
});
