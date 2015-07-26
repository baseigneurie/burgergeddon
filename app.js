(function {
  var app = angular.module('mainApp', ['ngMaterial']);

  app.controller("WeekCtrl", function($scope, $http) {
    $http.get("eatery.json").success(function(response) {this.restaurants = response.restaurant});
    console.log("test");
  });

})();
