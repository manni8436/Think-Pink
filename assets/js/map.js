function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 53.3,
            lng: -6.27
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 53.313578890861606, 
        lng: -6.209308225430981},
        {lat: 53.35847455964131, 
        lng:-6.262151356945275},
        {lat: 53.339209718734, 
        lng: -6.296859603223098},
        {lat: 53.28856254852567, 
        lng: -6.374126940541377}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}