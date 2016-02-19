angular.module('scripty3', [])
	.config(['$controllerProvider', function($controllerProvider) {
		$controllerProvider.allowGlobals();
	}]);
