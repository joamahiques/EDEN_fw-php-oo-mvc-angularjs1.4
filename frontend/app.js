var eden = angular.module('eden',['ngRoute','ngAnimate','angularUtils.directives.dirPagination','ngDialog']);
eden.config(['$routeProvider',
    function($routeProvider){
        //console.log('$rProvider');
        $routeProvider
            .when('/', {templateUrl:'frontend/modules/home/view/home.view.html', controller:'homeCtrler',resolve:{homes:function(services){return services.post('home', 'scroll_home');}}})
            .when('/contacto', {templateUrl:'frontend/modules/contact/view/contact.view.html', controller: 'contactCtrler'})
            // .when('/tienda', {templateUrl:'frontend/modules/shop/view/shop.view.html', controller: 'shopCtrler'})
            .otherwise('/', {templateUrl:'frontend/modules/home/view/home.view.html', controller:'homeCtrler'});
    }
]);