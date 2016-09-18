// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // Barcode Scanner

//     // Set your app key.
//     Scandit.License.setAppKey("av4AgeDqJQmFX695o+2F7ANuZt5M3+seunefjNQ4P3U");
//     var settings = new Scandit.ScanSettings();
//     settings.setSymbologyEnabled(Scandit.Barcode.Symbology.EAN13, true);
//     settings.setSymbologyEnabled(Scandit.Barcode.Symbology.UPC12, true);
//     settings.setSymbologyEnabled(Scandit.Barcode.Symbology.EAN8, true);
// // Instantiate the barcode picker by using the settings defined above.
//     var picker = new Scandit.BarcodePicker(settings);
//
//     picker.show(success, null, failure);
//
//     function success(session) {
//       alert("Scanned " + session.newlyRecognizedCodes[0].symbology + " code: " + session.newlyRecognizedCodes[0].data);
//       // If you are using continuous scanning you might want to stop here. Please note that
//       // stopScanning is an asynchronous call because of the nature of how phonegap plugin works.
//       // This means that more codes might still be scanned after you call it. You should make use
//       // of {@link Scandit.ScanSettings.codeDuplicateFilter ScanSettings.codeDuplicateFilter} to
//       // minimize/eliminate such problems.
//       session.stopScanning();
//     }
//     function manual(content) {
//       alert("Manual: " + content);
//     }
//     function failure(error) {
//       alert("Failed: " + error);
//     }
//
//     picker.startScanning();

  });
})
