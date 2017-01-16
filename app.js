var app = angular.module('couzzi', []);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {

        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 5) {
                 scope.activateClass = true;
             } else {
                 scope.activateClass = false;
             }
            scope.$apply();
        });
    };
});

app.controller('mainCtrl', function($scope){

  $scope.currentYear = new Date().getFullYear();

});
