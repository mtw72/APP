// in html
// <!-- JS for google map-->
// <script defer src="../scripts/contact.js" charset="utf-8"></script>
// <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbkNt7cxVrmN7pheifwBJpgj1rLgi5Qn0&callback=initMap&libraries=places&v=weekly"></script>

// Initialize and add the map
function initMap() {
    // The location of APP
    const app = { lat: 22.276805936463386, lng: 114.16923333620271 };
    // The map, centered at APP
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: app,
    });
    // The marker, positioned at APP
    const marker = new google.maps.Marker({
        position: app,
        map: map,
    });

    // Create an InfoWindow  
    const infoWindow = new google.maps.InfoWindow();

    // Fetch business details from Google Maps Places API
    const placesService = new google.maps.places.PlacesService(map);

    placesService.getDetails(
        {
            placeId: 'ChIJGVbsbcoBBDQRRCk3E0Z1gTM', // Replace with the actual place ID
            fields: ['name', 'formatted_address', 'formatted_phone_number', 'photo'],
        },
        (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const photoUrl = place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : '';
                
                // Build HTML content for the infoWindow
                const content = `<div id="info-content">
                                <h2>${place.name}</h2>
                                <p>Address: ${place.formatted_address}</p>
                                <p>Phone: ${place.formatted_phone_number}</p>
                                ${photoUrl ? `<img src="${photoUrl}" alt="Business Photo" style="max-width: 100%;">` : ''}
                              </div>`;
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
            }
        }
    );
}