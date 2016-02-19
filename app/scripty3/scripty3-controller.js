function SumController($scope) {
    this.values = [1,2];
    this.newValue = 1;
    this.sum = 0;

    this.add = function() {
        this.values.push(parseInt(this.newValue));
    };

    $scope.$watch(angular.bind(this, function() {
        return this.values;
    }), angular.bind(this, function() {
        this.sum = this.values.reduce(function(a, b) {
            return a + b;
        });
    }), true);
}
