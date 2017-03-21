angular
  .module('app')
  .factory('Friends', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('Budget_2017.json').then(function(response) {
          return response.data;
        });
      }
    };
  }])