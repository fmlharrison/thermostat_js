### Makers Week 5 - Interactive Thermostat App

## Set Up
Week first at Makers academy was the first time we had come in to contact with JavaScript.
Were were given the take of learning the basics of a new language in a week and building a fully working thermostat app that was both interactive and designed well.
I used javascript for the back end and HTML/CSS for the front end. I also learnt how to use jquery to make the application totally interactive. I used jasmine to test drive while making the thermostat.
I integrated the NowWeatherMap API and jSON requests in order to get real-time, local weather conditions.

## Usage
The thermostat is fully interactive.  

When the thermostat is started it had a default setting of 20 degrees and power-saving mode is on:  

![Alt text](./images/thermodefault.png?raw=true "Thermostat1")

The user can increase the temperature by clicking on the up arrow below the temperature display:
<img src="http://image.flaticon.com/icons/svg/56/56690.svg" height="50" width="50">  

The user can descrease the temperature by clicking on the down arrow below the temperature display:
<img src="http://s18.postimg.org/nwgb93zc9/down.png" height="50" width="50">  

The thermostat indicates it is in power-saving mode by displaying a green leaf above the temperature. If it is in power-saving mode the user can't raise the temperature above 25 degrees.  

Power-saving mode is switched on and off by clicking the eco button:
<img src="http://pazvizcainoconsultores.com/wp-content/uploads/icono-bombilla-verde-4.png" height="50" width="50">  

When power-saving mode is off the leaf with be in black.  

When power-saving mode is off, the user can raise the temperature above 25 degrees:  

![Alt text](./images/thermohighenergy.png?raw=true "Thermostat2")  

The maximum temperature while not in power-saving mode is 32 degrees.  

The minimum temperature of the thermostat is 10 degrees. The user is not able to reduce the temperature lower than 10.  

![Alt text](./images/thermolowenergy.png?raw=true "Thermostat3")  

The user can reset the thermostat back to its default settings by clicking the reset button:
<img src="http://www.clipartbest.com/cliparts/7Ta/KLb/7TaKLb6Xc.png" height="50" width="50">  

The user can select from a list of cities to see the local weather conditions and temperature at the bottom of the thermostat.  

![Alt text](./images/thermo1.png?raw=true "Thermostat1")  

The thermostat indicates what level of energy use it is currently at for a given temperature.  
When energy usage is low, the colour of the temperature display is green.  
When energy usage is middle, the colour of the temperature display is blue.  
When energy usage is high, the colour of the temperature display is red.  

#How to use

```
git clone https://github.com/fmlharrison/thermostat_js
cd thermostat_js/thermostat/jasmine/jasmine-standalone-2.5.2/views
open thermostat.html
```

#How to test
In the project directory
```
cd thermostat_js/thermostat/jasmine/jasmine-standalone-2.5.2/spec
open ThermostatSpec.js
```

#Technologies used
JavaScript  
jasmine  
jQuery  
jSON  
HTML  
CSS  

Enjoy!
