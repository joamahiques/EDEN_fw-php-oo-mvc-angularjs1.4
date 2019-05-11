eden.directive("directiveWhenScrolled", function($window,$document) {
     return function(scope, element, attr,listElm) {
  
      // console.log($document);
      // console.log($window);      
      // angular.element($window).bind('scroll', function() {
      //   if ($document.scrollTop + $document.clientHeight >= $document.scrollHeight) {
      //     console.log(raw.scrollHeight);
      //     console.log(raw.scrollTop);
      //     console.log(raw.clientHeight);
      //     scope.$apply(attr.directiveWhenScrolled);
      //   }
      // });
    };
  });

