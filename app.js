var app = angular.module('couzzi', []);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {

        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 5) {
                 scope.boolChangeClass = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});

app.controller('mainCtrl', function($scope){

  $scope.currentYear = new Date().getFullYear();

});
