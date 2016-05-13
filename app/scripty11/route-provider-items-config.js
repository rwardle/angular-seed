angular.module("scripty11")
    .config(function($locationProvider) {
        // $locationProvider.hashPrefix("!");
        // $locationProvider.html5Mode(true);
    })
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: "/items"
            })
            .when("/items", {
                controller: "ItemsController",
                controllerAs: "index",
                templateUrl: "scripty11/items/index.html"
            });
    });
