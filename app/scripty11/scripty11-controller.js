angular.module('scripty11')
    .controller("ItemsController", function($location, Item) {
        this.location = $location.absUrl();
        this.items = Item.query();
    });
