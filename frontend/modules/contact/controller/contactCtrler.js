eden.controller('contactCtrler', function($scope, $http, ngDialog,services){
    console.log('contact');
    $scope.contact = {
        inputName: "",
        inputEmail: "",
        inputSubject: "",
        inputMessage: ""
    };
    $scope.SubmitContact = function () {
        var data = {"inputName": $scope.contact.inputName, "inputEmail": $scope.contact.inputEmail, 
        "inputSubject": $scope.contact.inputSubject, "inputMessage": $scope.contact.inputMessage,"token":'contact_form'};
        var contact_form = JSON.stringify(data);
        console.log(contact_form);
    };
});