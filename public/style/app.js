(function {
  var app = angular.module('mainApp', ['ngMaterial']);

  app.controller("WeekController", function() {
    this.restaurants = restaurants;
  });


var restaurants = [
  {
    name: "Bug Eye'd Betty's",
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


})();
