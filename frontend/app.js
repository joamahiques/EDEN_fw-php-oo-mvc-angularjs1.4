var eden = angular.module('eden',['ngRoute','toastr','ngAnimate','angularUtils.directives.dirPagination','ngDialog','ui.bootstrap','pascalprecht.translate','infinite-scroll']);
eden.config(['$routeProvider',
    function($routeProvider){
        //console.log('$rProvider');
        $routeProvider
            .when('/', {templateUrl:'frontend/modules/home/view/home.view.html', controller:'homeCtrler'})//,resolve:{
            //     homes:function(services){
            //         return services.post('home', 'scroll_home',{row:0,rowperpage:6});
            // }
            // }})
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
                homes:function(services){
                    // searchservices.data={};
                    return services.post('shop', 'products');
                }
            }})
            .when('/ubication', {templateUrl:'frontend/modules/shop/view/ubication.view.html', controller: 'mapshopCtrler'})
            .when('/social:token', {templateUrl:'frontend/modules/home/view/home.view.html',controller:'homeCtrler', resolve:{
                homes:function(services,localstorageServices,$route,toastr){
                    localstorageServices.setuser($route.current.params.token)
                    toastr.success('Sesión iniciada', 'BIENVENID@')
                    return services.post('home', 'scroll_home')
                    .then(function(response){
                        location.href = '#/';
                    })
                }
            }})
            .when("/login/changepass/:token", {templateUrl: "frontend/modules/login/view/changepass.view.html",controller: "changepassCtrler",resolve:{
                token:function($route){
                    return $route.current.params.token;
                }
            }})
            .otherwise('/', {templateUrl:'frontend/modules/home/view/home.view.html', controller:'homeCtrler'});
    }
]);
eden.run (['$rootScope', function ($rootScope) { 
    $rootScope.lang = 'es'; 
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
