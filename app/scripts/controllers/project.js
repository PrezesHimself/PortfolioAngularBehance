'use strict';

/**
 * @ngdoc function
 * @name behanceApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the behanceApp
 */
angular.module('behanceApp')
  .controller('ProjectCtrl', function ($scope, $stateParams, Behance, $sce) {


        Behance.getProject($stateParams.projectId).get({}, function (results) {

            $scope.project = results.project;

            for (var i = 0; i < results.project.modules.length; i++) {

                var obj = results.project.modules[i];
                if(obj.type === "embed") {

                    var regex = /src=(["\'])(.*?)\1/;
                    console.log(obj.embed)
                    console.log(regex.exec(obj.embed)[0])
                    var src = regex.exec(obj.embed)[0];


                    obj.embed = src.replace('src="', "").replace('"', "");
                    obj.embed = $sce.trustAsResourceUrl(obj.embed);
                }

            }

        });


//        console.log($stateParams);
//        $.getJSON("../scripts/project.json", function( data ) {
//
//
//            for (var i = 0; i < data.project.modules.length; i++) {
//
//                    var obj = data.project.modules[i];
//                if(obj.type === "embed") {
//
//                    var regex = /src=(["\'])(.*?)\1/;
//                    console.log(obj.embed)
//                    console.log(regex.exec(obj.embed)[0])
//                    var src = regex.exec(obj.embed)[0];
//
//
//                    obj.embed = src.replace('src="', "").replace('"', "");
//                    obj.embed = $sce.trustAsResourceUrl(obj.embed);
//                }
//
//            }
//            $scope.project = data.project;
//
//            $scope.$apply();
//        });
  });
