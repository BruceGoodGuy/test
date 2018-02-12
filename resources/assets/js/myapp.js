var myapp = angular.module("myApp",["ngRoute","ngAnimate"]);

//route

myapp.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "view/home.js",
		controller: "homecontroller"
	})
	.when("/product",{
		templateUrl: "view/product.js",
		controller: "productcontroller"
	})
	.when("/update",{
		templateUrl: "view/update.js",
		controller: "updatecontroller"
	})
	.otherwise({
		template: "nope",
	})
})

//controller
	//homecontroller
myapp.controller("homecontroller",function($scope,$http,boxservice){
	$scope.first = "First name";
	$scope.last = "Last name";
	$scope.email = "Email";
	$http.get("resources/file/getList.php")
	.success(function(data){
		$scope.users = data.users;
	})
	.error(function(data){
		console.log("Cant Read File");
	});
	$scope.update = function(data){
		boxservice.saveId(data);
		location.href="#/update";
	}
})

	//productcontroller
myapp.controller("productcontroller",function($scope,$http){
	$scope.name = "Name";
	$scope.price = "Price";
	$http.get("resources/file/getProduct.php")
	.success(function(data){
		$scope.products = data.product;
	})
	.error(function(data){
		console.log("Cant read file");
	})
})
	//updatecontroller
myapp.controller("updatecontroller",function($scope,$http,boxservice){
  var id = boxservice.loadId();
  $http.get("resources/file/pre_update.php?id="+id)
  .success(function(data){
  	$scope.first = data.user.first_name;
  	$scope.last = data.user.last_name;
  	$scope.email = data.user.email;
  })
  .error(function(data){
  	console.log("Cant read file");
  })
  $scope.notify ="Update";
  $scope.update = function(){
  	var first_name = $scope.first;
  	var last_name = $scope.last;
  	var user_email = $scope.email;
  	var id = boxservice.loadId();
  	$http.get("resources/file/process_update.php?id="+id+"&first="+first_name+"&last="+last_name+"&email="+user_email)
  	.success(function(data){
  		$scope.notify =data;
  	})
  	.error(function(data){
  		console.log("Cant read file");
  	})
  }
})


//serivces
myapp.factory('boxservice',function(){
	var id;
	var info = [];
	return {
		saveId: function(data){
			id =data;
		},
		loadId: function(){
			return id;
		},

		putInfo: function(in1,in2,in3){
			info = [in1,in2,in3];
		},
		getInfo: function(){
			return info;
		}

	}
});