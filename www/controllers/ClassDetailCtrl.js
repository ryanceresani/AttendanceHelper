var app = angular.module('starter');

app.controller('ClassDetailCtrl', ['$scope', '$stateParams', '$ionicHistory',
function ($scope, $stateParams, $ionicHistory) {
    $scope.class = $stateParams.class;
}
]);