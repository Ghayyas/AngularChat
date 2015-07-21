/**
 * Created by Ghayyas Mubashir on 7/6/2015.
 */

var app = angular.module('app', ['ngNewRouter','app.login','app.reg','firebase','ngMaterial','dashboard.app']);
    app.controller('AppController', ['$router',AppController]);
var ref = new Firebase("https://flogin.firebaseio.com");

      AppController.$routeConfig=[
          {path: '/', component: 'login'},
          {path: '/register', component: 'register'},
         {path: '/dashboard', component: 'dashboard'}
            ];
   function AppController ($router) {

   }
