'use strict';

/**
 * @ngdoc directive
 * @name behanceApp.directive:circular
 * @description
 * # circular
 */
angular.module('behanceApp')
  .directive('circular', function () {
        return function(scope, element, attrs){
            attrs.$observe('circular', function(value) {

                element.addClass('circular')
                element.css({

                'background-image': 'url('+value+')'
                });
            });
        };
  });
