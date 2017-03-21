angular
  .module('app')
  .controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "Home";
  }]);