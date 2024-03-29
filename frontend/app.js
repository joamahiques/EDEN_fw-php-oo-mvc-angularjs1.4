var eden = angular.module('eden',['ngRoute','toastr','ngAnimate','angularUtils.directives.dirPagination','ngDialog','ui.bootstrap','pascalprecht.translate','infinite-scroll','ngMaterial']);
eden.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
            .when('/', {templateUrl:'frontend/modules/home/view/home.view.html', controller:'homeCtrler'})
            .when('/home/active_user/:token', {resolve:{
                pass:function(services,$route){
                    return services.put('home', 'active_user',{'token':JSON.stringify({'token':$route.current.params.token})})
                    .then(function(response){
                        toastr.success('Cuenta Activa, inicia sesión', 'BIENVENID@')
                        location.href = '#/';
                    })
                }
            }})
            .when('/contacto', {templateUrl:'frontend/modules/contact/view/contact.view.html', controller: 'contactCtrler'})
            .when('/tienda', {templateUrl:'frontend/modules/shop/view/shop.view.html', controller: 'shopCtrler', resolve:{
                homes:function(services){
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
            .when("/profile", {templateUrl: "frontend/modules/profile/view/profile.view.html",controller: "profileCtrler",resolve:{
                user:function(services,localstorageServices){
                    $token = localstorageServices.getuser()
                    return services.post('profile', 'load_data_user',{'token': $token})
                },
            }})
            .when('/cart', {templateUrl:'frontend/modules/cart/view/cart.view.html', controller: 'cartCtrler',resolve:{
                cart:function(services,localstorageServices){
                    $token = localstorageServices.getuser()
                    return services.get1('cart', 'read_cart', $token)
                },
            }})
            .when('/crud', {templateUrl:'frontend/modules/CRUD/view/crudlist.view.html', controller: 'crudCtrler',resolve:{
                homes:function(services){
                    return services.get('crud', 'lista');
                },
            }})
            .when('/crudcreate', {templateUrl:'frontend/modules/CRUD/view/crudcreate.view.html', controller: 'createcrudCtrler'})
            .when('/crudupdate:home', {templateUrl: "frontend/modules/CRUD/view/crudupdate.view.html",controller: "updatecrudCtrler",resolve:{
                homeup:function($route, services){
                    return services.get('crud', 'read_home',$route.current.params.home);
                }
            }})
            .when('/error', {templateUrl:'frontend/modules/error/error404.view.html',controller:'errorCtrl'})
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
