//we need a map to get the user location
const myMap = {
        coordinates: [],
        business: [],
        map: {},
        markers: {},

//leafletmap
    buildMap(){
        this.map = L.map('map',{
            center: this.coordinates,
            zoom: 11,
        });
    

    L.tileLayer('https://{s}tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        //geolocation marker
        const marker = L.marker(this.coordinates)
        marker.addTo(map).blindPopup(<p>You Are Here</p>).openPopup();
    }
}
// Get the user's coordinates:                                                              
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

console.log(getCoords());                              

//created a load up window

//we need to map on Leaflet Map

//Allow the user to select a business type from Foursquare API

//Create an event to ask for the user location