//we need a map to get the user location
const myMap = {
        coordinates: [],
        business: [],
        map: {},
        markers: {},

//leafletmap
    createMap(){
        console.log(this.coordinates)
        myMap.map = L.map('map',{
            center: this.coordinates,
            zoom: 11,
        });
    
//we need to map on Leaflet Map

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: '15',
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        //geolocation marker
        const marker = L.marker(this.coordinates)
        marker.addTo(this.map).bindPopup('<p>You Are Here</p>').openPopup();
    }
}
// Get the user's coordinates:                                                              
async function getCoords(){
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

//created a load up window
// On load, build ads:                                                             
window.onload = async () => {
    myMap.coordinates = await getCoords()
    console.log(myMap.coordinates)
    myMap.createMap();
}

//Create an event to ask for the user location
document.querySelector('#submit').addEventListener('click', async (event) =>{
    event.preventDefault()
    let business = document.querySelector('#busniess').value
    console.log(busniess)
})

//Allow the user to select a business type from Foursquare API
const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'me'}};

fetch('https://api.foursquare.com/v3/places/search', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
async function getFoursquare(business){
    const options = {
        method: 'GET',
        headers: {
        
        Accept:'Content-Type': 'application/json',
        Authorization: "fsq3j+39b4undMWmzl+yHOpfIWM2vGDFlObBPxT6MbcvgKs=",
    
    }
}
