angular.module('starter.controllers', ['ionic'])

.controller('MyCtrl', function($scope) {
 
  $scope.val = '';
  $scope.clicked = function(val){
    $scope.val += val;
    console.log(val);
  }
  
});
