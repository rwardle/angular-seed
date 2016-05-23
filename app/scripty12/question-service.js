angular.module("scripty12")
    .factory("question", function ($q, $http, url) {
        return function(id) {
            return $http.get(url + "/surveys/1/questions/" + id)
                .then(function (response) {
                    return response.data;
                }).catch(function (response) {
                    return $q.reject(response.status + " " + response.data.error)
                });
        };
    });
