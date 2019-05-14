eden.controller('Ctrl', function ($scope, $rootScope, $translate) {
    $scope.changeLanguage = function () {
        $rootScope.lang = $scope.idioma;
        console.log($scope.idioma);
        key=$scope.idioma;
        $translate.use(key);
    };
});