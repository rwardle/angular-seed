angular.module("scripty9", [])
    .directive("message", function() {
        return {
            template: "<p>hello, from {{message}}</p>",
            scope: {
                message: "="
            }
        };
    })
    .directive("bootstrapButton", function() {
        return {
            restrict: "E",
            scope: {
                theCallback: "&"
            },
            templateUrl: "scripty9/button.html"
        };
    })
    .directive("panel", function() {
        return {
            restrict: "E",
            templateUrl: "scripty9/panel.html",
            scope: {
                title: "@"
            },
            transclude: true
        };
    });
