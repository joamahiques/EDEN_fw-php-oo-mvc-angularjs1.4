eden.factory('CommonServices', ['services','$rootScope','localstorageServices', '$timeout','$document',
function(){
    var service = {};
    service.numeroAleatorio = numeroAleatorio;
    return service;
    function numeroAleatorio(min, max) {
        var num=Math.round(Math.random() * (max - min) + min);
        //console.log(num);
        return num;
        }
}])

eden.controller('CarouselDemoCtrl', function ($scope,$timeout) {
    var slidesInSlideshow = 4;
    var slidesTimeIntervalInMs = 5000; 
     
     $scope.slideshow = 1;
     var slideTimer =
       $timeout(function interval() {
         $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
         slideTimer = $timeout(interval, slidesTimeIntervalInMs);
       }, slidesTimeIntervalInMs);
});