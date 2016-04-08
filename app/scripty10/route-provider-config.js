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
                templateUrl: "scripty10/index.html"
            })
            .when("/about", {
                controller: "LocationController",
                controllerAs: "index",
                templateUrl: "scripty10/about.html"
            })
            .when("/404", {
                controller: "LocationController",
                controllerAs: "index",
                templateUrl: "scripty10/404.html"
            })
            .otherwise({
                redirectTo: "/404"
            });
    });
