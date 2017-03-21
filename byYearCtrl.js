angular
  .module('app')
  .controller('byYearCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "By Year";
    Friends.get().then(function(data) {
      $scope.items = data;
    });
  }]);