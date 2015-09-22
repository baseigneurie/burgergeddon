import HeaderCtrl from './views/partial/header.controller';
import FooterCtrl from './views/partial/footer.controller';
import AppCtrl from 'main.controller';
import SignupCtrl from 'SignupController';



angular.module('mainApp', ['ngMaterial', 'ngRoute'])
  .controller('MainCtrl', MainCtrl)
  .controller('SignupCtrl', SignupCtrl)
  .controller('HeaderCtrl', HeaderCtrl)
  .controller('FooterCtrl', FooterCtrl)
  .config(($stateProvider, $urlRouterProvider, $interpolateProvider, $locationProvider, localStorageServiceProvider) =>

    let headerState = {
      templateUrl: 'views/partial/header.html',
      controller: HeaderCtrl
    };
    let footerState = {
      templateUrl: '../views/partial/footer.html',
      controller: FooterCtrl
    }

    $stateProvider.state({
      name: 'home',
      url: '/',
      views: {
        'body': {
          templateUrl: '../views/main/index.html',
          controller: MainCtrl
        },
        'header': headerState,
        'footer': footerState
      }
    }).state({
      name: 'signup',
      url: '/signup/:day',
      views: {
        'body': {
          templateUrl: '../views/signup/index.html',
          controller: SignupCtrl
        },
        'header': headerState,
        'footer': footerState
      }
    });
    $urlRouteProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    localStorageServiceProvider.setPrefix('localStorage').setPrefix('burgergeddon');

});
