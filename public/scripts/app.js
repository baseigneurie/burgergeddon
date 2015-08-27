'use strict';
console.log('here')
  var app = angular.module('mainApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/views/main/index.html',
        controller: 'WeekController'
      })
      .when('/signup', {
        templateUrl: 'scripts/views/signup/index.html',
        controller: 'SignupController'
      }).otherwise({redirectTo: '/'});
  });


  app.controller("WeekController", function($scope) {
    this.restaurants = restaurants;
    this.sel = "";

    $scope.setDay = function(day) {
      $scope.sel = day;
    };
    $scope.wc = {
      restaurants:restaurants
    };
  });

  app.controller("SignupController", function($scope) {
    $scope.tester="test";

  });


var restaurants = [
  {
    name: "Bug Eyed Betty's",
    day: "Monday",
    date: "8/3/15",
    image: "/images/bugeye.jpg",
    description: "Blah Blah Blah"
  },
  {
    name: "Amber Inn",
    day: "Tuesday",
    date: "8/4/15",
    image: "/images/amberinn.jpg",
    description: "Farts and stuff"
  },
  {
    name: "Mogie's Pub",
    day: "Wednesday",
    date: "8/5/15",
    image: "/images/mogies.jpg",
    description: "Haerp a Daerp"
  },
  {
    name: "Court'n House",
    day: "Thursday",
    date: "8/6/15",
    image: "/images/courthouse.jpg",
    description: "2 for 1?!"
  },
  {
    name: "Wagner's Lanes",
    day: "Friday",
    date: "8/7/15",
    image: "/images/wagners.jpg",
    description: "Burgers in the gutter."
  }
];
