/**
 * Created by sagarkale on 2/13/2017.
 */

//services
app.service("changetext",function () {
    this.name="New York,NY";
});

app.service("weather",["$resource",function ($resource) {

    this.getweather=function (name,num) {
        var weather=$resource('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=922dc03bed13a9413f795345eb5431ca',{get:{method:"JSONP"}});
                return weather.get({city:name,cnt:num});

    };

}]);
