/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */
  
(function () {
    'use strict';

    angular
        .module('gladys')
        .factory('weatherService', weatherService);

    weatherService.$inject = ['$http'];

    function weatherService($http) {
        
        var service = {
            get: get
        };

        return service;
    
        function get(options) {
            return $http({method: 'GET', url: '/weather', params: options });
        }
    }
})();