angular.module('starter')
.controller("GetClassesController", function ($scope, $firebaseObject) {
    var ref = new Firebase("https://popping-heat-4617.firebaseio.com/Classes");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "classes");

    $scope.changeView = function ($class) {
        alert($class.name);
    }
});

