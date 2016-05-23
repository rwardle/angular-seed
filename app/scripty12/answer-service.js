angular.module("scripty12")
    .factory("answer", function($q, $http, url) {
        return function(question, answer) {
            var options = {
                method: "POST",
                url: url + "/answers",
                data: {
                    answer: {
                        question_id: question.id,
                        content: answer
                    }
                }
                // headers: {
                //     "X-CSRF-Token": X_CSRF_TOKEN
                // }
            };
            return $http(options)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return $q.reject(response.status + " " + response.data.error);
                });
        };
    });
