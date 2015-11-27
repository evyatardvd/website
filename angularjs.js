var app = angular.module("inputDataApp", []);

app.controller('inputGamesCtrl', function($scope, $http) {
	$http.get("games.json").success(function(res) {

		$scope.games = res;

	}).error(function(data,conpig,status){
		alert("error.......!");
	});
});

app.controller('inputSoftwareCtrl', function($scope, $http) {
	$http.get("software.json").success(function(res) {

		$scope.softwares = res;

	}).error(function(data,conpig,status){
		alert("error.......!");
	});
});

app.directive("game", function() {
	return {
		restrict : 'E',
		template : "{{games.name}} <br/> {{games.pic}} <br/> {{games.info}}"
	};
});

app.filter('trustAsResourceUrl', ['$sce',
			function($sce) {
				return function(val) {
					return $sce.trustAsResourceUrl(val);
				};
			}]);