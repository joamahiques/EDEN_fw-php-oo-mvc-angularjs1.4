eden.factory('localstorageServices',
function(){

    var service={};
    service.getuser=getuser;
    service.setuser=setuser;
    service.clearuser=clearuser
    return service;
    function getuser(){
        if(!localStorage.token){
            //localStorage.token = JSON.stringify(false);
        }
        return localStorage.token;
    }
    function setuser(token){
        localStorage.token=token;
    }
    function clearuser(){
        localStorage.removeItem('token');
        //localStorage.token = JSON.stringify(false);
    }
    
});