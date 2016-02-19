angular.module("scripty6", [])
    .value("randomScore", function() {
        return Math.ceil(Math.random() * 10);
    })
    .factory("score", function(randomScore) {
        var points = randomScore();
        return {
            increment: function() {
                return ++points;
            },
            getPoints: function() {
                return points;
            }
        };
    });