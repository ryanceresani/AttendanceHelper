var app = angular.module('starter');

app.controller('ClassesCtrl', ['$scope', 'api', '$state',
  function ($scope, api, $state) {
      $scope.classes = api.getClasses();
      $scope.goToDetail = function (classDetail) {
          $state.go('ClassDetail', {'class': classDetail});
      }
  }
]);