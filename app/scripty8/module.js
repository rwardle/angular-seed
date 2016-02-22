angular.module("scripty8", [])
    .directive("hello", function() {
        return function(scope, element) {
            element.text("hello");
        }
    })
    .directive("welcomeMessage", function() {
        return function(scope, element, attrs) {
            var options = scope.$eval(attrs.welcomeMessage);
            var result = options.emoticon + " " + options.message + " " + options.emoticon;
            element.text(result);
        };
    })
    .value("discountRate", 0.8)
    .factory("calculateDiscount", function(discountRate) {
        return function(amount) {
            return amount * discountRate;
        };
    })
    .directive("discount", function(calculateDiscount, currencyFilter) {
        return function(scope, element, attrs) {
            var price = scope.$eval(attrs.discount);
            var discountPrice = calculateDiscount(price);
            element.html(currencyFilter(discountPrice));
        };
    })
    .directive("wordList", function() {
        return {
            link: function(scope, element, attrs) {
                scope.words = attrs.wordList.split(" ");
            },
            template: "<li ng-repeat='word in words'>\
                        {{word}}\
                        </li>"
        };
    })
    .directive("wordListExternal", function() {
        return {
            link: function(scope, element, attrs) {
                scope.wordsExternal = attrs.wordListExternal.split(" ");
            },
            templateUrl: "scripty8/word-list.html",
            replace: true
        };
    })
    .directive("messageExternal", function() {
        return {
            template: "<strong>{{index.message}}</strong>",
            controller: "MessageController",
            controllerAs: "index"
        }
    })
    .directive("messageInternal", function() {
        return {
            template: "<strong>{{message}}</strong>",
            controller: function($scope) {
                $scope.message = "hello, from the internal controller";
            }
        }
    });
