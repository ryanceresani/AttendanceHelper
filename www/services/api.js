var app = angular.module("starter");

app.factory("api", ["$firebaseArray",
  function ($firebaseArray) {
      var api = {};
      var ref = new Firebase("https://attendancehelper.firebaseio.com/Classes");
      api.getClasses = function () {
          return $firebaseArray(ref);
      }
      api.getStudents = function () {
          return $firebaseArray(ref);
      }
      return api;
  }
]);