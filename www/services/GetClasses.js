var app = angular.module("starter");

// this factory returns a synchronized array of chat messages
app.factory("api", ["$firebaseArray",
  function ($firebaseArray) {
      // create a reference to the database location where we will store our data
      var ref = new Firebase("https://popping-heat-4617.firebaseio.com/Classes");
      api.getClasses = function () {
          return $firebaseArray(ref);
      }

      api.getStudentsOfSomeClass = function (classDetail){
          return $firebaseArray(ref.child('classDetail.id').child('students'));
      }
  }
]);