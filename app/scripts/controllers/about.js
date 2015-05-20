'use strict';

/**
 * @ngdoc function
 * @name behanceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the behanceApp
 */
angular.module('behanceApp')
  .controller('AboutCtrl', function ($scope,$rootScope, Behance) {
//        Behance.getUser().get({}, function (results) {
//
//            $scope.user = results.user
////            $scope.projects = [{name:"test"}]
//        });

        $scope.aboutClass = "onTheSide";

        $scope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){

                if(toState.name === "index.projects") {
                    $scope.aboutClass = "onTheSide";
                    console.log(toState)
                } else {
                    $scope.aboutClass = "onTheCenter";
                }
//                $scope.$$ph $scope.$apply();
            })
  });
