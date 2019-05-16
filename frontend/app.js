var eden = angular.module('eden',['ngRoute','toastr','ngAnimate','angularUtils.directives.dirPagination','ngDialog','ui.bootstrap','pascalprecht.translate']);
eden.config(['$routeProvider',
    function($routeProvider,$translateProvider){
        //console.log('$rProvider');
        $routeProvider
            .when('/', {templateUrl:'frontend/modules/home/view/home.view.html', controller:'homeCtrler',resolve:{
                homes:function(services){
                    return services.post('home', 'scroll_home');
            }}})
            .when('/home/active_user/:token', {resolve:{
                pass:function(services,$route){
                    return services.put('home', 'active_user',{'token':JSON.stringify({'token':$route.current.params.token})})
                    .then(function(response){
                        location.href = '#/';
                    })
                }
            }})
            .when('/contacto', {templateUrl:'frontend/modules/contact/view/contact.view.html', controller: 'contactCtrler'})
            .when('/tienda', {templateUrl:'frontend/modules/shop/view/shop.view.html', controller: 'shopCtrler', resolve:{
                homes:function(services,searchservices){
                    // searchservices.data={};
                    return services.post('shop', 'products');
                }
            }})
            .when('/ubication', {templateUrl:'frontend/modules/shop/view/ubication.view.html', controller: 'mapshopCtrler'})
            
            .otherwise('/', {templateUrl:'frontend/modules/home/view/home.view.html', controller:'homeCtrler'});
        //$locationProvider.html5Mode(true);
    }
]);
eden.run (['$rootScope', function ($rootScope) { 
    $rootScope. lang = 'es'; 
}])
eden.config(function ($translateProvider) {
    $translateProvider
    .useStaticFilesLoader({
        prefix: 'frontend/components/translate/resources/',
        suffix: '.json'
    })
    .useSanitizeValueStrategy('sanitizeParameters')    
    .preferredLanguage('es');
});
