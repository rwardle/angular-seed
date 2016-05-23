angular.module('scripty12')
    .controller("QuestionController", function (question, answer) {
        question(1)
            .then(angular.bind(this, function (question) {
                this.question = question;
            }))
            .catch(angular.bind(this, function (notice) {
                this.notice = notice;
            }));

        this.submit = function() {
            answer(this.question, this.answer)
                .then(angular.bind(this, function(data) {
                    this.notice = "Success. Your answer was saved with id: " + data.id;
                    this.answer = "";
                }))
                .catch(angular.bind(this, function(notice) {
                    this.notice = notice;
                }));
        };
    });
