"use strict";

describe("scripty12 ItemsController", function() {
    var $scope;
    var $q;
    var questionSpy;
    var answerSpy;
    var testee;

    beforeEach(function() {
        module("scripty12");

        questionSpy = jasmine.createSpy("question");
        answerSpy = jasmine.createSpy("answer");

        inject(function($rootScope, $controller, _$q_) {
            $scope = $rootScope.$new();
            $q = _$q_;
            questionSpy.and.returnValue($q.when("A question"));
            testee = $controller("QuestionController", {question: questionSpy, answer: answerSpy});
            $scope.$apply();
        });
    });

    it("should store question", function() {
        expect(testee.question).toEqual("A question");
    });

    it("should submit entered answer", function() {
        testee.answer = "An answer";
        answerSpy.and.returnValue($q.when({id: 999}));
        testee.submit();
        $scope.$apply();
        expect(answerSpy).toHaveBeenCalledWith("A question", "An answer");
        expect(testee.notice).toEqual("Success. Your answer was saved with id: 999");
        expect(testee.answer).toEqual("");
    });
});
