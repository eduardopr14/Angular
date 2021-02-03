var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);
    
    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'NinjaController'
        })
        .when('/contact', {
            templateUrl: 'view/contact.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'view/contact-success.html',
            controller: 'ContactController'
        })
        .when('/directory', {
            templateUrl: 'view/directory.html',
            controller: 'NinjaController'
        })
        .otherwise({
            redirect: '/home'
        });
}]);

myNinjaApp.directive('randomNinja', [function(){
    
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        // template: '<img ng-src="{{ ninjas[random].thumb }}">',
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };

}]);

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
    };

    $scope.removeAll = function(){
        $scope.ninjas = [];
    };

    $http.get('data/ninjas.json').success(function(data){
        $scope.ninjas = data;
    });

}]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

    $scope.sendMessage = function(){
        $location.path('/contact-success');
    };

}]);