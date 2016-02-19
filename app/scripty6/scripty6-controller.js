angular.module("scripty6")
    .controller("ScoreController", function(score) {
        this.score = score;

        this.increment = function() {
            this.score.increment();
        };
    });
