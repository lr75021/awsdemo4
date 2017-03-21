angular
  .module('app')
  .controller('byMinistry', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "By Ministry";
    Friends.get().then(function(data) {
      $scope.items = data;
    });
  }]);