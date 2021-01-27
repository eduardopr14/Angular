var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "Green",
            rate: 50,
            available: true
        },
        {
            name: "Crystal",
            belt: "Purple",
            rate: 30,
            available: true
        },
        {
            name: "Ryu",
            belt: "Orange",
            rate: 10,
            available: false
        },
        {
            name: "Shaun",
            belt: "Black",
            rate: 100,
            available: true
        }
    ]

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

}]);