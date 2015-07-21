/*Created by Ghayyas Mubashir*/
var app = angular.module('app.login', []);
app.controller('LoginController', function($scope, $location, $window,  $mdToast ) {
    $scope.err = false;
    $scope.logout = true;
    $scope.submit = function(){

        var email = $scope.user.email;
        var password = $scope.user.pass;
        ref.authWithPassword({

            email : email,
            password : password
        }, function(error, authData) {
            if (error) {
                $scope.err = true;

                $scope.log = "Login Failed ! " +error;
              console.log("Login Failed!", error);
            } else {
                //console.log("Authenticated successfully with payload:", authData);
                $window.location = '#/dashboard';
                $scope.login = true;
            }
        });
    };
    });
