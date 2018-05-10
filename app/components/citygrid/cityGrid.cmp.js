(function () {
    'use strict';
    angular.module('app')
        .component('cityGrid', {            
            templateUrl:'app/components/citygrid/cityGrid.tpl.html',
            controller: cityGridController
        });
        cityGridController.$inject=['weatherFactory'];
    function cityGridController(weatherFactory) {
        var ctrl = this;
        ctrl.loading = false;
        ctrl.cities = [];
        ctrl.getWorldWeather = function () {
            ctrl.loading = true;
            weatherFactory.getWorldWeather().then(function(response){
                ctrl.loading = false;
                ctrl.cities = response;
            })
        }
        ctrl.$onLoad = function(){

        }
    }

})();