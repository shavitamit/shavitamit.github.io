// var app = angular.module('app',['ngRoute','ngSanitize','ngAnimate']) ;
var app = angular.module('app',['ngRoute','ngSanitize']) ;

app.config(function($routeProvider) {

$routeProvider
	
	// route for home page
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'HomeController'
	})


	// route for other pages
	.when('/resume', {
		templateUrl: 'pages/resume.html',
		//controller: 'ResumeController',
		activetab: 'resume/cv'
	})

	.when('/publications', {
		templateUrl: 'pages/publications.html',
		//controller: 'PublicationsController',
		activetab: 'publications'
	})


	// route for other pages
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		//controller: 'ContactController',
		activetab: 'contact'
	});

});

app.controller('MainController', function($scope,$route) {
	
	$scope.message = 'Hello wrold mayne!' ;
	$scope.$route = $route ; 


});

app.controller('NavController', ['$scope', '$route', function($scope, $route) {
	
	$scope.pages = {
			'home' : '#/',
			'resume/cv' : '#/resume',
			'publications' : '#/publications',
			'contact' : '#/contact'
	};

	$scope.isActive = function(page) {

		// Fix the page variable for resume/cv
		//if ( page == 'resume/cv' ) page = 'resume' ;

		return (page === $route.current.activetab) ? true : false
	};


}]);






app.controller('HomeController', function($scope) {
	
	$scope.message = 'Home Page' ;
	
});

// app.controller('FooterController', function($scope) {
// 	$scope.lastModified = "Copy" ;
// });

app.controller('AboutController', function($scope) {
	
	$scope.message = 'About me' ;

});

app.controller('ContactController', function($scope) {
	
	$scope.message = 'Contact Me' ;
	
});