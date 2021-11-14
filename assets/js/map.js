function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 54,
            lng: -5.5,
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 53.339209718734, 
        lng: -6.296859603223098},
        {lat: 51.511820465271974, 
        lng:-0.07517867478553211},
        {lat: 51.520971603854306, 
        lng: -0.10886653043839452},
        {lat: 53.313578890861606, 
        lng: -6.209308225430981},
        {lat: 55.87017906799597, 
        lng: -4.294974889811593},
        {lat: 52.12227521792561, 
        lng: -1.7464358304186884}        
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}