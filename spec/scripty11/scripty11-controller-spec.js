"use strict";

describe("scripty11 ItemsController", function() {
    var itemService;
    var testee;

    beforeEach(function() {
        module("scripty11");

        itemService = jasmine.createSpyObj("itemService", ["query"]);
        itemService.query.and.returnValue([0, 1]);

        inject(function($controller, $location) {
            spyOn($location, "absUrl").and.returnValue("http://url");
            spyOn($location, "search").and.returnValue({color: "blue"});
            testee = $controller("ItemsController", {/*$location: $location,*/ Item: itemService});
        });
    });

    it("should store url", function() {
        expect(testee.location).toEqual("http://url");
    });

    it("should query for items", function() {
        expect(itemService.query).toHaveBeenCalledWith({color: "blue"});
        expect(testee.items).toEqual([0, 1]);
    });
});
