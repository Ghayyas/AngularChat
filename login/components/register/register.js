/**
 * Created by Ghayyas Mubashir on 7/6/2015.
 */

var regapp = angular.module('app.reg',[]);
regapp.controller('RegisterController',function($scope, $window, $firebaseArray){
    var ref = new Firebase("https://flogin.firebaseio.com/users");
    $scope.user = $firebaseArray(ref);
    $scope.er = false;
    $scope.suc = false;
    $scope.reg = function()
    {
        var email = $scope.email;
        var password = $scope.user.pass;
        ref.createUser({
            email: email,
            password: password
        },function(error, userData) {
            if (error) {
                $scope.er = true;
                switch (error.code) {
                    case "INVALID_EMAIL":
                        $scope.logi = "The specified user account email is invalid.";
                        break;
                    case "EMAIL_TAKEN":
                        $scope.logi = "The specified email already be taken.";
                        break;
                    default:
                        $scope.logi ="Error creating user !";
                console.log(error);
                }
            }
            else {
                $scope.user.$add({Email:$scope.email, password: $scope.user.pass})
                $scope.suc = true;

                $scope.success = "Successfully created user account !";

                console.log('success!');
                    $window.location = '#/';


    }
        });
    }
});
