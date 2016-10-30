$( document ).ready(function () {

  var thermostat = new Thermostat();

$("#weather").change(function (e) {
   e.preventDefault();
   var city = $("#weather").val();
   $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=121a9ab6b7bae94bcb61113c310c6e21', function (data){
    //  var icon = ("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
     $(".city_name").text(data.name);
    //  $(".weather_forcast").html(icon);
     $(".weather_forcast").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
     $(".temp").text(Math.round(data.main.temp) + "°C");
 });
 });

  updateTemperature();

  $('#up').click(function() {
    thermostat.temperatureUp();
    updateTemperature();
    });

  $('#down').click(function () {
    thermostat.temperatureDown();
    updateTemperature();
  });

  $('#eco').click(function(){
    thermostat.switchMode();
    ecoColor();
  });

  $('#reset').click(function () {
    thermostat.thermoReset();
    updateTemperature();
    ecoColor();
  });

  function updateTemperature(){
    $('#temperature').text(thermostat._currentTemperature()+ "°");
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function ecoColor() {
    if (thermostat._isPowerSaving() == true) {
      $("#mode").css("color", "limegreen");
    }
    else {
      $("#mode").css("color", "black");
    }
  };
});
