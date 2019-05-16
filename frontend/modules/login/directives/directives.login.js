eden.directive("compareTo", function() {
    return {
      require: "ngModel",
      scope: {
        rpassword: "=compareTo"
      },
      link: function(scope, element, attributes, modelVal) {

        modelVal.$validators.compareTo = function(val) {
          return val == scope.rpassword;
        };

        scope.$watch("rpassword", function() {
          modelVal.$validate();
        });
      }
    };
  });