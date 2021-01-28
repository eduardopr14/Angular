var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html'
        })
        .when('/directory', {
            templateUrl: 'view/directory.html',
            controller: 'NinjaController'
        })
        .otherwise({
            redirect: '/home'
        });
}]);

myNinjaApp.run(function(){

});

myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

    // console.log(angular.toJson($scope.ninjas));

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });
        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    }

    $http.get('data/ninjas.json').success(function(data){
        $scope.ninjas = data;
    });

}]);