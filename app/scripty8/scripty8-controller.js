angular.module("scripty8")
    .controller("MessageController", function() {
        this.message = "hello, from the external controller";
    })
    .controller("ItemsController", function() {
        this.items = [
            {name: "Item 1", color: "green", price: 5.0},
            {name: "Item 2", color: "blue", price: 4.93}
        ];
    });
