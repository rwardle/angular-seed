"use strict";

describe("scripty9 message directive", function() {
    var scope;
    var elem;

    beforeEach(function() {
        module("scripty9");

        elem = angular.element("<div message='name'></div>");

        inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            var compiled = $compile(elem);
            compiled(scope);
        });
    });

    it("should display the message", function() {
        scope.name = "me";
        scope.$digest();
        expect(elem.text()).toBe("hello, from me");
    });
});
