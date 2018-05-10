(function(){
'use strict';
angular.module('app').service('weatherService',weatherService);
weatherService.$inject = ['$http','WEATHERCONSTANTS']

function weatherService($http,WEATHERCONSTANTS){

    this.getWorldWeather = function(){
            return $http.get('http://api.openweathermap.org/data/2.5/box/city?bbox='+WEATHERCONSTANTS.BBOX+'&appid='+WEATHERCONSTANTS.APIKEY);
    }
}
})();