angular.module("scripty12")
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push("csrfTokenInterceptor");
    })
    .factory("csrfTokenInterceptor", function() {
        var csrfToken = null;
        return {
            response: function (response) {
                if (response.headers("X-CSRF-Token")) {
                    csrfToken = response.headers("X-CSRF-Token");
                }
                return response;
            },
            request: function (config) {
                if (config.method == "POST" && csrfToken) {
                    config.headers['X-CSRF-Token'] = csrfToken;
                }
                return config;
            }
        };
    });
