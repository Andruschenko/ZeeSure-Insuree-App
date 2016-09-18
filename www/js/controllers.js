angular.module('app.controllers', ['ionic', 'ngCordova'])

.controller('scanPageCtrl', ['$scope', '$stateParams', '$ionicPlatform', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPlatform) {

  $ionicPlatform.ready(function() {
    // On Windows, the alert function doesn't exist, so we add it.
    window.alert = window.alert !== undefined ? window.alert : function (message) {
      var alertBox = new Windows.UI.Popups.MessageDialog(message);
      alertBox.showAsync();
    };
    function success(session) {
      alert("Scanned " + session.newlyRecognizedCodes[0].symbology
        + " code: " + session.newlyRecognizedCodes[0].data);
    }
    function failure(error) {
      alert("Failed: " + error);
    }

    $scope.scan = function() {
      Scandit.License.setAppKey("av4AgeDqJQmFX695o+2F7ANuZt5M3+seunefjNQ4P3U");
      var settings = new Scandit.ScanSettings();
      settings.setSymbologyEnabled(Scandit.Barcode.Symbology.EAN13, true);
      settings.setSymbologyEnabled(Scandit.Barcode.Symbology.UPC12, true);
      settings.setSymbologyEnabled(Scandit.Barcode.Symbology.EAN8, true);
      settings.setSymbologyEnabled(Scandit.Barcode.Symbology.CODE39, true);
      // Some 1d barcode symbologies allow you to encode variable-length data. By default, the
      // Scandit BarcodeScanner SDK only scans barcodes in a certain length range. If your
      // application requires scanning of one of these symbologies, and the length is falling
      // outside the default range, you may need to adjust the "active symbol counts" for this
      // symbology. This is shown in the following few lines of code.
      var symSettings = settings.getSymbologySettings(Scandit.Barcode.Symbology.CODE39);
      symSettings.activeSymbolCounts = [
        7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
      ];
      // For details on defaults and how to calculate the symbol counts for each symbology, take
      // a look at http://docs.scandit.com/stable/c_api/symbologies.html.
      var picker = new Scandit.BarcodePicker(settings);
      picker.show(success, null, failure);
      picker.startScanning();
    }
  });

}])

.controller('loadingScreenCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('launchScreenCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('sendPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('settingsPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('requestController', function($scope, $http) {

  $scope.getData = function() {
    $http.get("http://5124486f.ngrok.io", { params: { "key1": "value1", "key2": "value2" } })
      .success(function(data) {
        $scope.firstname = data.firstname;
        $scope.lastname = data.lastname;
      })
      .error(function(data) {
        alert("ERROR");
      });
  }

})
