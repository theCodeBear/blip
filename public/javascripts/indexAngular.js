var blip = angular.module("blip", []);

blip.controller("googleAPI", function($scope) {
  $scope.googsapi = process.env.GOOGLE_API_KEY;
});