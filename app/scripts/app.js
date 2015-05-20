'use strict';

/**
 * @ngdoc overview
 * @name behanceApp
 * @description
 * # behanceApp
 *
 * Main module of the application.
 */
angular
  .module('behanceApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {



        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states

        $stateProvider
            .state('index', {
                abstract: true,
                url: '/',
                views: {
                    'viewA@index': {
                        templateUrl: 'views/about.html', controller: 'AboutCtrl'
                    },
                    'main': {
                        templateUrl: "views/holder.html"
                    }
                }
            })
            .state('index.main', {
                url: '',
                views: {

                    'viewB@index': {
                         templateUrl: 'views/main.html', controller: 'MainCtrl'
                    }
                }
            })
            .state('index.projects', {
                url: 'projects/:projectId',
                views: {

                    'viewB@index': {
                         templateUrl: 'views/project.html', controller: 'ProjectCtrl'
                    }
                }
            });

//            .state('state1.list', {
//                url: "/list",
//                templateUrl: "partials/state1.list.html",
//                controller: function($scope) {
//                    $scope.items = ["A", "List", "Of", "Items"];
//                }
//            })
//            .state('state2', {
//                url: "/state2",
//                templateUrl: "partials/state2.html"
//            })
//            .state('state2.list', {
//                url: "/list",
//                templateUrl: "partials/state2.list.html",
//                controller: function($scope) {
//                    $scope.things = ["A", "Set", "Of", "Things"];
//                }
//            })


//        $locationProvider.html5Mode(true);

//        $routeProvider
//            .when('/', {
//                templateUrl: 'views/main.html',
//                controller: 'MainCtrl'
//            })
//            .when('/about', {
//                templateUrl: 'views/about.html',
//                controller: 'AboutCtrl'
//            })
//            .when('/project/:projectId', {
//                templateUrl: 'views/project.html',
//                controller: 'ProjectCtrl'
//            })
//            .otherwise({
//                redirectTo: '/'
//            });

    })

