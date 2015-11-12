function init_map() {
    var location = new google.maps.LatLng(32.8875,-117.2465);
    var center = new google.maps.LatLng(32.8875,-117.246);
 
    var mapoptions = {
        center: center,
        zoom: 16
    };

    var marker = new MarkerWithLabel({
        position: location,
        map: map,
    	labelContent:"<strong>McVicker Lab</strong>",
    	title:"McVicker Lab"
    });
 
    var map = new google.maps.Map(document.getElementById("map-container"),
				  mapoptions);
    
    map.set('styles', 
	[{"featureType":"all","stylers":[{"saturation":0},{"hue":"#e7ecf0"}]},{"featureType":"road","stylers":[{"saturation":-70}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"simplified"},{"saturation":-60}]}]);
 
    marker.setMap(map);
 
}
 
google.maps.event.addDomListener(window, 'load', init_map);
