'use strict';

  var app = angular.module('mainApp', ['ngMaterial', 'ngRoute']);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main/index.html',
        controller: 'WeekController'
      })
      .when('/signup/:day', {
        templateUrl: '/views/signup/index.html',
        controller: 'SignupController'
      }).otherwise({redirectTo:'/'});

      $locationProvider.html5Mode(true);
  });


  app.controller("WeekController", function($location) {
    this.restaurants = restaurants;
    this.sel = "";

    this.setDay = function(day) {
      this.sel = day;
    };

    this.go = function(path) {
      $location.path(path);
    };

  });

  app.controller("SignupController", function($scope, $route, $http) {
    $scope.parm = $route.current.params.day;
    this.entry = {
      day: $scope.parm,
      name: "",
      goal: ""
    };

    this.setEntry = function() {
      $http({
          method : 'POST',
          url : '/submit',
          data : {
            "sub": {
              "day": this.entry.day,
              "name": this.entry.name,
              "goal": this.entry.goal
            }
          },
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
          // set the headers so angular passing info as form data (not request payload)
          }).success(function(data, status, headers, config) {
            console.log("horray!");
          }).error(function(data, status, headers, config) {
              console.log(status);
            });

    };

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
