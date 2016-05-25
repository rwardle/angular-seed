"use strict";

describe("scripty12 question service", function() {
    var testee;
    var httpBackend;

    beforeEach(function() {
        module("scripty12");

        inject(function(question, $httpBackend) {
            testee = question;
            httpBackend = $httpBackend;
        });
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("should lookup question", function() {
        httpBackend.expectGET("http://localhost:8000/api/v1/surveys/1/questions/999").respond("Question 999");

        var result;
        testee(999).then(function(data) {
            result = data;
        });

        httpBackend.flush();
        expect(result).toEqual("Question 999");
    });

    it("should reject if http error", function() {
        httpBackend.expectGET("http://localhost:8000/api/v1/surveys/1/questions/999").respond(500, {error: "An error"});

        var result;
        testee(999).catch(function(data) {
            result = data;
        });

        httpBackend.flush();
        expect(result).toEqual("500 An error");
    });
});
