(function() {
    'use strict';

    angular.module('MyApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
    	$scope.myStyle = '';

      $scope.CheckNumItems = function() {
          var numItems = getNumItems($scope.ItemsList);
          $scope.msg = getMessage(numItems);
      };

        //I'm not consider empty items
      function getNumItems(ItemsList) {
          if (ItemsList === undefined) {
              return 0;
          } else {
              //filter() remove empty items
              return ItemsList.split(',').filter(function(i) {
                  return i;
              }).length;
          }
      }

      function getMessage(numItems) {
          var msg = '';
          if (numItems == '0') {
              msg = 'Please enter data first';
              $scope.myStyle = 'alert-danger';
          } else if (numItems <= 3) {
              msg = 'Enjoy!';
              $scope.myStyle = 'alert-success';
          } else {
              msg = 'Too much!';
              $scope.myStyle = 'alert-success';
          }
          return msg;
      }

    }

})();
