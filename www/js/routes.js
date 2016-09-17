angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.scanPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/scanPage.html',
        controller: 'scanPageCtrl'
      }
    }
  })

  .state('loadingScreen', {
    url: '/page6',
    templateUrl: 'templates/loadingScreen.html',
    controller: 'loadingScreenCtrl'
  })

  .state('launchScreen', {
    url: '/page5',
    templateUrl: 'templates/launchScreen.html',
    controller: 'launchScreenCtrl'
  })

  .state('tabsController.sendPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sendPage.html',
        controller: 'sendPageCtrl'
      }
    }
  })

  .state('tabsController.settingsPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settingsPage.html',
        controller: 'settingsPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')



});
