angular.module("scripty10")
    .config(function($locationProvider) {
        // $locationProvider.hashPrefix("!");
        // $locationProvider.html5Mode(true);
    })
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "LocationController",
                controllerAs: "index",
                template: "<div ng-bind='index.location'></div><a href='#/about'>About</a>"
            })
            .when("/about", {
                controller: "LocationController",
                controllerAs: "index",
                template: "<div ng-bind='index.location'></div><a href='#/'>Home</a>"
            });
    });
