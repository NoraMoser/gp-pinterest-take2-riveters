'use strict';

console.log("navbar.controller");

app.controller("NavBar", function($scope, $window, $routeParams, userFactory){

    $scope.isLoggedIn = false;
    
    $scope.logout = () => {
        userFactory.logOut();
      };

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          $scope.isLoggedIn = true;
          console.log("currentUser logged in?", user);
          console.log("logged in t-f", $scope.isLoggedIn );
          $scope.$apply();
        } else {
          $scope.isLoggedIn = false;
          console.log("user logged in?", $scope.isLoggedIn);
          $window.location.href = "#!/login";
        }
      });
});