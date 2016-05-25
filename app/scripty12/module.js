angular.module("scripty12", [])
    // .value("url", "http://www.scriptybooks.com/api/v1");
    // Use http-server proxy to work around CORS restriction
    .value("url", "http://localhost:8000/api/v1");
    // .constant("X_CSRF_TOKEN", "X7XdcSTOaQ7AvB85WXez6uIm/auP+3Zd6wT8JB/0MPg=")
    // .config(function($httpProvider, X_CSRF_TOKEN) {
    //     $httpProvider.defaults.headers.post["X-CSRF-Token"] = X_CSRF_TOKEN;
    // })    
