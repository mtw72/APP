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
                // Build HTML content for the infoWindow
                const content = `<div id="info-content">
                                <h2>${place.name}</h2>
                                <p>Address: ${place.formatted_address}</p>
                                <p>Phone: ${place.formatted_phone_number}</p>
                                <img src="${place.photos && place.photos[0].getUrl()}" alt="Business Photo" style="max-width: 100%;">
                              </div>`;
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
            }
        }
    );
}

window.initMap = initMap;






setTimeout(changeFont, 0700);

// change font after loading Google map
function changeFont() {
    document.querySelector('footer h4').style.fontFamily = "arial";
    document.querySelector('footer h4').style.fontWeight = "400";
    document.querySelector('h2.touch').style.fontFamily = "arial";
    document.querySelector('h2.touch').style.fontWeight = "400";
}