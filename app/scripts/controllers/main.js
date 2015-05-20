'use strict';

/**
 * @ngdoc function
 * @name behanceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the behanceApp
 */
angular.module('behanceApp')
    .controller('MainCtrl', function ($scope, Behance) {

        Behance.getProjects().get({}, function (results) {

            $scope.projects = results.projects
//            $scope.projects = [{name:"test"}]
        });
//        $.getJSON("scripts/projects.json", function( data ) {
//            $scope.projects = data.projects;
//            console.log($scope)
//            $scope.$apply();
//        });
//        $scope.projects = [{name:"test", id: "213"}]


    });
