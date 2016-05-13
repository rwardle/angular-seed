angular.module("scripty11")
    .factory("Item", function(filterFilter) {
        var items = [
            {id: 1, name: "Item 1", color: "red"},
            {id: 2, name: "Item 2", color: "blue"},
            {id: 3, name: "Item 3", color: "red"},
            {id: 4, name: "Item 4", color: "white"}
        ];

        return {
            query: function(params) {
                return filterFilter(items, params);
            },
            get: function(params) {
                return this.query(params)[0];
            }
        };
    });
