var app = angular.module('starter');

app.controller('ClassesCtrl', ['$scope', 'classList', '$state',
  function ($scope, classList, $state) {
      $scope.classes = classList;
      $scope.goToDetail = function (classDetail) {
          $state.go('ClassDetail', {'class': classDetail});
      }
  }
]);