eden.controller('contactCtrler', function($scope, $http, contact_map,services){
    console.log('contact');
    
    $scope.contact = {
        inputName: "",
        inputEmail: "",
        inputSubject: "",
        inputMessage: ""
    };
    $scope.SubmitContact = function () {
        var data = {"name": $scope.contact.inputName, "email": $scope.contact.inputEmail, 
        "opcontact": $scope.contact.inputSubject, "mess": $scope.contact.inputMessage,"token":'contact_form'};
        var contact_form = JSON.stringify(data);
        console.log(contact_form);
        services.post('contact', 'send_form', contact_form).then(function (response) {
                console.log(response);
                if (response === 'True') {
                    $scope.contact = {};
                    $scope.form.$setPristine();///borramos formulario
                    $scope.form.$setUntouched();////sin $error
                    $scope.form = angular.copy($scope.contact);
                    toastr.success('Mensaje enviado correctamente','En breve nos pondremos en contacto con usted');
                } else {
                    console.log('not true');
                    toastr.success('Mensaje No Enviado','Pruebe más tarde');
                }
        });

        
    };
    contact_map.initmap();
});