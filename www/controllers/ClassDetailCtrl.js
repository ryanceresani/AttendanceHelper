var app = angular.module('starter');

app.controller('ClassDetailCtrl', ['$scope', '$stateParams', '$ionicHistory',
function ($scope, $stateParams, $ionicHistory) {
    $scope.course = $stateParams.class;
    var timeCurrent = new Date();
    $scope.hour = timeCurrent.getHours();
    $scope.isTime = function () {
        if ($scope.course == null) {
            console.log("totally broken");
        }
        console.log($scope.course.timestart);
       if ($scope.course.timestart == $scope.hour)
            return false
        else
            return true
    }
}
]);