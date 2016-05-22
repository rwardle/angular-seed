angular.module('scripty12')
    .controller("QuestionController", function ($http, url) {
        $http.get(url + "/surveys/1/questions/1")
            .success(angular.bind(this, function (data) {
                this.question = data;
            }));
    });
