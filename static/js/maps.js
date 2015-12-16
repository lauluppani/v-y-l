// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptionsPilar
    var mapOptionsPilar = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        scrollwheel: false,
        // draggable: false,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-34.414026, -58.827135), // Entrada Pilar

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [   {       "featureType":"landscape",      "stylers":[         {               "hue":"#FFBB00"         },          {               "saturation":43.400000000000006         },          {               "lightness":37.599999999999994          },          {               "gamma":1           }       ]   },  {       "featureType":"road.highway",       "stylers":[         {               "hue":"#FFC200"         },          {               "saturation":-61.8          },          {               "lightness":45.599999999999994          },          {               "gamma":1           }       ]   },  {       "featureType":"road.arterial",      "stylers":[         {               "hue":"#FF0300"         },          {               "saturation":-100           },          {               "lightness":51.19999999999999           },          {               "gamma":1           }       ]   },  {       "featureType":"road.local",     "stylers":[         {               "hue":"#FF0300"         },          {               "saturation":-100           },          {               "lightness":52          },          {               "gamma":1           }       ]   },  {       "featureType":"water",      "stylers":[         {               "hue":"#0078FF"         },          {               "saturation":-13.200000000000003            },          {               "lightness":2.4000000000000057          },          {               "gamma":1           }       ]   },  {       "featureType":"poi",        "stylers":[         {               "hue":"#00FF6A"         },          {               "saturation":-1.0989010989011234            },          {               "lightness":11.200000000000017          },          {               "gamma":1           }       ]   }]
    };

    var mapOptionsEscobar = {
        zoom: 15,
        scrollwheel: false,
        center: new google.maps.LatLng(-34.404073, -58.829034), // Entrada Escobar
        styles: [   {       "featureType":"landscape",      "stylers":[         {               "hue":"#FFBB00"         },          {               "saturation":43.400000000000006         },          {               "lightness":37.599999999999994          },          {               "gamma":1           }       ]   },  {       "featureType":"road.highway",       "stylers":[         {               "hue":"#FFC200"         },          {               "saturation":-61.8          },          {               "lightness":45.599999999999994          },          {               "gamma":1           }       ]   },  {       "featureType":"road.arterial",      "stylers":[         {               "hue":"#FF0300"         },          {               "saturation":-100           },          {               "lightness":51.19999999999999           },          {               "gamma":1           }       ]   },  {       "featureType":"road.local",     "stylers":[         {               "hue":"#FF0300"         },          {               "saturation":-100           },          {               "lightness":52          },          {               "gamma":1           }       ]   },  {       "featureType":"water",      "stylers":[         {               "hue":"#0078FF"         },          {               "saturation":-13.200000000000003            },          {               "lightness":2.4000000000000057          },          {               "gamma":1           }       ]   },  {       "featureType":"poi",        "stylers":[         {               "hue":"#00FF6A"         },          {               "saturation":-1.0989010989011234            },          {               "lightness":11.200000000000017          },          {               "gamma":1           }       ]   }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElementPilar = document.getElementById('map-pilar');
    var mapElementEscobar = document.getElementById('map-escobar');

    // Create the Google Map using our element and options defined above
    var mapPilar = new google.maps.Map(mapElementPilar, mapOptionsPilar);
    var mapEscobar = new google.maps.Map(mapElementEscobar, mapOptionsEscobar);

    // Let's also add a marker while we're at it
    var markerPilar = new google.maps.Marker({
        position: new google.maps.LatLng(-34.414026, -58.827135),
        map: mapPilar
    });

    var markerEscobar = new google.maps.Marker({
        position: new google.maps.LatLng(-34.404073, -58.829034),
        map: mapEscobar
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = mapPilar.getCenter();
        google.maps.event.trigger(mapPilar, "resize");
        mapPilar.setCenter(center); 
    });

    google.maps.event.addDomListener(window, "resize", function() {
        var center = mapEscobar.getCenter();
        google.maps.event.trigger(mapEscobar, "resize");
        mapEscobar.setCenter(center); 
    });

}