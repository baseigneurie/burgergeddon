class SignupCtrl {
  constructor ($scope, $route, $stateParams) {

    $scope.entry = {
      day: $stateParams.day,
      name: "",
      goal: ""
    };

    $scope.setEntry = function() {

    };

  }
}

SignupCtrl.$inject = ['$scope', '$route', '$stateParams'];

export default SignupCtrl;
