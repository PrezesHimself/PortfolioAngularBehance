'use strict';

/**
 * @ngdoc service
 * @name behanceApp.Behance
 * @description
 * # Behance
 * Factory in the behanceApp.
 */
angular.module('behanceApp')
    .factory('Behance', function ($resource) {

        var resource = {}


        resource.getProjects = function() {
            return $resource('http://www.behance.net/v2/users/mateuszrorat/projects?client_id=ONmbhVbzOEFvhmBHVfkOZfqLN4SX8FIz',
                {action: 'search.json', q: 'behance', callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}});
        }

        resource.getUser = function() {
            return $resource('http://www.behance.net/v2/users/mateuszrorat?client_id=ONmbhVbzOEFvhmBHVfkOZfqLN4SX8FIz',
                {action: 'search.json', q: 'behance', callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}});
        }

        resource.getProject = function(projectId) {
            return $resource('http://www.behance.net/v2/projects/'+projectId+'?client_id=ONmbhVbzOEFvhmBHVfkOZfqLN4SX8FIz',
                {action: 'search.json', q: 'behance', callback: 'JSON_CALLBACK'},
                {get: {method: 'JSONP'}});
        }

        return resource;
    });
