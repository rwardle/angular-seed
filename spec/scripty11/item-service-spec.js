describe("scripty11 Item service with real filterFilter", function() {
    "use strict";

    var testee;

    beforeEach(function() {
        module("scripty11");

        inject(function(Item) {
            testee = Item;
        });
    });

    it("should query items", function() {
        expect(testee.query({color: "red"}).length).toEqual(2);
    });

    it("should get item", function() {
        expect(testee.get({id: 1})).toEqual(jasmine.objectContaining({id: 1}));
    });
});

describe("scripty11 Item service with spy filterFilter", function() {
    "use strict";

    var filterFilterSpy;
    var testee;

    beforeEach(function() {
        module("scripty11", function($provide) {
            filterFilterSpy = jasmine.createSpy("filter");
            $provide.value("filterFilter", filterFilterSpy);
        });

        inject(function(Item) {
            testee = Item;
        });
    });

    it("should query items", function() {
        var items = [];
        filterFilterSpy.and.returnValue(items);
        expect(testee.query({color: "red"})).toBe(items);
        expect(filterFilterSpy).toHaveBeenCalledWith(jasmine.anything(), jasmine.objectContaining({color: "red"}));
    });

    it("should get item", function() {
        var item = {};
        filterFilterSpy.and.returnValue([item]);
        expect(testee.get({id: 1})).toBe(item);
        expect(filterFilterSpy).toHaveBeenCalledWith(jasmine.anything(), jasmine.objectContaining({id: 1}));
    });
});
