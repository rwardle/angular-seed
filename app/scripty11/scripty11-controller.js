angular.module('scripty11')
    .controller("ItemsController", function($location, Item) {
        this.location = $location.absUrl();
        this.items = Item.query({color: $location.search().color});
    })
    .controller("ItemController", function($location, $routeParams, Item) {
        this.location = $location.absUrl();
        this.item = Item.get({id: $routeParams.id});
    });
