function SumController($scope) {
    $scope.values = [1,2];
    $scope.newValue = 1;

    $scope.add = function() {
        $scope.values.push(parseInt($scope.newValue));
    };

    $scope.$watch("values", function() {
        $scope.sum = $scope.values.reduce(function(a, b) {
            return a + b;
        });
    }, true);
}
