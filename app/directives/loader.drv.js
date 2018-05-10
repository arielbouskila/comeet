(function(){
'use strict';
angular.module('app')
.directive('loader',loader);
function loader() {
    var directive = {
        link: link,
        templateUrl: 'app/directives/loader.tpl.html',
        restrict: 'E',
        scope:{
            loadingText: '@loadingText'
        }
    };
    return directive;

    function link(scope, element, attrs) {
     
    }
}

})();