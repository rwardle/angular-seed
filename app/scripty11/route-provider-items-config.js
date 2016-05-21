angular.module("scripty11")
    .config(function ($locationProvider) {
        // $locationProvider.hashPrefix("!");
        // $locationProvider.html5Mode(true);
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: "/items"
            })
            .when("/search", {
                controller: "ItemsController",
                controllerAs: "index",
                template: "<div class='well well-sm' ng-bind='location'></div>\
                   <a ng-href='#/items?color=red'>Red items</a>"
            })
            .when("/items", {
                controller: "ItemsController",
                controllerAs: "index",
                templateUrl: "scripty11/items/index.html"
            })
            .when("/items/:id", {
                controller: "ItemController",
                controllerAs: "index",
                templateUrl: "scripty11/items/show.html"
            });
    });
