angular.module("scripty7")
    .controller("SmileyController", function(smileyFilter) {
        this.message = smileyFilter("hello filtered in controller", "\u263A");
    });
