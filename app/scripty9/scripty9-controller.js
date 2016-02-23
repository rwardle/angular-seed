angular.module("scripty9")
    .controller("MessageController", function() {
        this.message = "the controller";
        this.message1 = "directive 1";
        this.message2 = "directive 2";
    })
    .controller("ClickController", function() {
        this.message = "Waiting...";
        this.kaboom = function() {
            this.message = "Kaboom!"
        };
    });
