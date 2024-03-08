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
}

setTimeout(changeFont, 0700);

// change font after loading Google map
function changeFont() {
    document.querySelector('footer h4').style.fontFamily = "arial";
    document.querySelector('footer h4').style.fontWeight = "400";
    document.querySelector('h2.touch').style.fontFamily = "arial";
    document.querySelector('h2.touch').style.fontWeight = "400";
}