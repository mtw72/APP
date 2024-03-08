// Initialize and add the map

// function initMap() {
//     // The location of APP
//     const app = { lat: 22.276805936463386, lng: 114.16923333620271 };
//     // The map, centered at APP
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 18,
//         center: app,
//     });
//     // The marker, positioned at APP
//     const marker = new google.maps.Marker({
//         position: app,
//         map: map,
//     });
// }

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 22.276805936463386, lng: 114.16923333620271 },
      zoom: 18,
    });
    const request = {
      placeId: "ChIJGVbsbcoBBDQRRCk3E0Z1gTM",
    //   fields: ["name", "formatted_address", "place_id", "geometry"],
      fields: ["photo", "name", "formatted_address"],
    };
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
  
    service.getDetails(request, (place, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
          icon: photos[0].getUrl({maxWidth: 35, maxHeight: 35}), 
        });
  
        google.maps.event.addListener(marker, "click", () => {

          const content = document.createElement("div");

          const imageElement = document.createElement("img");
          imageElement.innerHTML = place.photos;
          content.appendChild(imageElement);

          const nameElement = document.createElement("h4");
          nameElement.textContent = place.name;
          content.appendChild(nameElement);
  
          const placeAddressElement = document.createElement("p");
          placeAddressElement.textContent = place.formatted_address;
          content.appendChild(placeAddressElement);

          infowindow.setContent(content);
          infowindow.open(map, marker);
        });
      }
    });
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