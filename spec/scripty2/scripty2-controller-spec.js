describe("scripty2 controller", function() {
    "use strict";

    var testee;

    beforeEach(function() {
        module("scripty2");

        inject(function($controller) {
            testee = $controller("ScriptyController");
        });
    });

    it("should default to unauthorized", function() {
        expect(testee.authorized).toBeFalsy();
    });

    it("should toggle authorized", function() {
        testee.toggle();
        expect(testee.authorized).toBeTruthy();
    });
});
