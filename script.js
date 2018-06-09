var myApp=angular.module("myModule",[]);
// var myController=function($scope){
//     $scope.message="Angular js tutorial";
// }
//controller name is myController
myApp.controller("myController",function($scope){
    var tech=[
        {name:"c#",likes:0,dislikes:0},
        {name:"perl",likes:0,dislikes:0},
        {name:"python",likes:0,dislikes:0},
        {name:"ajax",likes:0,dislikes:0},
    ];
    $scope.tech=tech;
    $scope.incrementLikes=function(t){
        t.likes++;
    }
    $scope.incrementDislikes=function(t){
        t.dislikes++;
    }
}); 