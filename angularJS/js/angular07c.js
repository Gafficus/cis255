var app5 = angular.module('app5', []);

app5.controller('gListCtrl', function($scope) {

  $scope.cities= [
    {zipCode: "77070", city: "Harris", state:"Texas"},
    {zipCode: "11510", city: "Baldwin", state:"New York"},
    {zipCode: "96815", city: "Honolulu", state:"Hawaii"},
    {zipCode: "60185", city: "West Chicago", state:"Illinois"},
    {zipCode: "56001", city: "Mankato", state:"Minnesota"},
    {zipCode: "13090", city: "Liverpool", state:"New York"},
    {zipCode: "11202017", city: "Best Bouncy Castle", state:"Moon"},
  ];

  // Receives the new item entered in the input box and puts
  // it on the end of the array
  $scope.addItem = function(newItem) {

    // Check that the input box has a value
    if(!(newItem === undefined || newItem === "")){
      $scope.groceries.push({
        item: newItem, purchased: false
      });
      $scope.missingNewItemError = "";
    } else {

      // Show an error if no item was entered
      $scope.missingNewItemError = "Please Enter an Item";
    }
  };
});

app5.controller('userCtrl', function($scope) {

  $scope.user= [{
    fName: "Derek",
    lName: "Banas",
    street: "123 Main St",
    subscribe: "Subscribe",
    delivery: "Email"
  }];

  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, street: userInfo.street, subscribe: userInfo.subscribe, delivery: userInfo.delivery
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }

});