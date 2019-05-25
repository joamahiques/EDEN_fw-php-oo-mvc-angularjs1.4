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

