angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      })
      .state('ByYear', {
        url: '/ByYear',
        templateUrl: 'ByYear.html',
        controller: 'byYearCtrl'
      })
      .state('ByMinistry', {
        url: '/ByMinistry',
        templateUrl: 'ByMinistry.html',
        controller: 'byMinistry'
      })
  }])