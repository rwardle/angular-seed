angular.module('scripty10')
    .controller("LocationController", function($scope, $location) {
        this.location = $location.absUrl();
    });
