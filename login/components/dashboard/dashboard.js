 /*Created by Ghayyas Mubashir*/


    angular.module('dashboard.app',[])
    .controller('DashboardController', function($scope, $mdDialog, $window, $firebaseArray) {
$scope.time = Firebase.ServerValue.TIMESTAMP;
        var ref = new Firebase("https://flogin.firebaseio.com/coms");

        $scope.messages = $firebaseArray(ref);
       $scope.newVal = "" ;
            $scope.image = "http://www.androidsoftol.com/android45678/uploads/allimg/120117/e427dc14-4423-4264-9946-fdadb7d890b6_1.jpg";


        $scope.addThis = function () {
            if($scope.newVal === "") {
                var confirm = $mdDialog.confirm()
                    .parent(angular.element(document.body))
                    .title('Input Error')
                    .content('Hmmm its seems Your Message is not Post correctly ! \n Click Ok and Write your Message in Prompt Box.')
                    //.ariaLabel('Lucky day')
                    .ok('Oky')
                    .cancel('Not Now !')
                    .targetEvent();
                $mdDialog.show(confirm).then(function() {
                    $scope.prom = prompt("Enter Your Message here !");
                    $scope.messages.$add({ text: $scope.prom, Name: $scope.Name,timestamp: $scope.time
                    });
                }, function() {

                });

            }
            else {
                $scope.messages.$add({text: $scope.newVal});
                $scope.newVal = "";
                console.log($scope.messages, $scope.newVal);
            }
        };
        $scope.logOut = function(){
            ref.unauth();
           $window.location = '#/'

       };
               var authData = ref.getAuth();
        if (authData) {
            $scope.Name = authData.password.email;
            $scope.user = "You are Login as " + $scope.Name;

              $scope.login = true;
        }
        else {

            console.log("User is logged out");
            $scope.login = false;

        }

    });
