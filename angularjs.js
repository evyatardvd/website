var app = angular.module("inputDataApp", []);
var x = [];
app.controller('inputGamesCtrl', function($scope, $http) {

	$scope.filterList = "";
	console.log($scope.filterList);
	$http.get("games.json").success(function(res) {

		$scope.games = res;

	}).error(function(data, conpig, status) {
		alert("error.......!");
	});

	$scope.selectFreeGames = function() {

		$scope.filterList = "free";
	};
	$scope.selectNotFreeGames = function() {

		$scope.filterList = "!free";
	};

});

app.controller('inputSoftwareCtrl', function($scope, $http) {
	$http.get("software.json").success(function(res) {

		$scope.softwares = res;

	}).error(function(data, conpig, status) {
		alert("error.......!");
	});
});

app.controller('inputGuidesCtrl', function($scope, $http) {
	$http.get("guides.json").success(function(res) {

		$scope.guides = res;

	}).error(function(data, conpig, status) {
		alert("error.......!");
	});
});

app.controller('testCtrl', function($scope, $http) {
	$http.get("guides.json").success(function(res) {
		$scope.guides = res;
	});
	$http.get("games.json").success(function(res) {
		$scope.games = res;
	});
	$http.get("software.json").success(function(res) {
		$scope.softwares = res;
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
