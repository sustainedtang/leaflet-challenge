var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
    d3.json(queryUrl, function(data) {
        createMap(data.features);
    })

function createFeatures(quakeData) {
    
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3> Location: " + feature.properties.place + "</h3><hr><p>" + new Date(feature.properties.time))
    }
}

function createMap(quakeMap) {

    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "light-v10",
        accessToken: API_KEY
    }).addTo(myMap);

    // Create a baseMaps object to hold the lightmap layer
    var baseMaps = {
    "Light Map": lightmap
    };

    
    
    // Create the map object with options
    var myMap = L.map("map", {
        center: [
            37.09, -95.71
        ],
        zoom: 5,
    });
}

    


    var magMarkers = []

    var magnitude = L.layerGroup(magMarkers);
    var latlong = L.layerGroup(locMarkers);