(function(){
'use strict';

angular.module('app')
.factory('weatherFactory',weatherFactory);
weatherFactory.$inject=['$q','weatherService','WEATHERCONSTANTS'];
function weatherFactory($q,weatherService,WEATHERCONSTANTS) {

    return {
        getWorldWeather: getWorldWeather,
    };

    function getWorldWeather(){
        var deferer = $q.defer();
        weatherService.getWorldWeather().then(function(response,err){
            if(err){
                deferer.reject(err);
            }
            var listCities = response.data.list;
            var weatherCities = listCities.map(function(city){
                return {
                        name:city.name,
                        rank:Math.abs(WEATHERCONSTANTS.BESTTEMPERATURE-city.main.temp) + Math.abs(WEATHERCONSTANTS.BESTHUMIDITY-city.main.humidity),
                        temp:city.main.temp,
                        humidity:city.main.humidity
                    }
            });
           var sortedCities = _.filter(_.sortBy(weatherCities, ['rank']),function(city){return city.name!==''});
            console.log(sortedCities);
            deferer.resolve(sortedCities);
        });
        return deferer.promise;
    }
}
})();