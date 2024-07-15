import './Hub.css';
import { Loader } from "@googlemaps/js-api-loader"

let map;
let collection;
const loader = new Loader({
    apiKey: "AIzaSyDOyBG3OdssNX9-NvIk-r924F1Uk2wUiNA",
    version: "weekly",
  });

  async function nearbySearch() {
    //@ts-ignore
    const { Place, SearchNearbyRankPreference } = await window.google.maps.importLibrary(
      "places",
    );
    const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
    // Restrict within the map viewport.
    let center = new window.google.maps.LatLng(48.85, 2.351);
    const request = {
      // required parameters
      fields: ["displayName", "location", "businessStatus"],
      locationRestriction: {
        center: center,
        radius: 500,
      },
      // optional parameters
      maxResultCount: 5,
      rankPreference: SearchNearbyRankPreference.POPULARITY,
      language: "en-US",
      region: "us",
    };
    //@ts-ignore
    const { places } = await Place.searchNearby(request);
  
    if (places.length) {
      console.log(places);
  
      const { LatLngBounds } = await window.google.maps.importLibrary("core");
      const bounds = new LatLngBounds();
  
      // Loop through and get all the results.
      places.forEach((place) => {
        const markerView = new AdvancedMarkerElement({
          map,
          position: place.location,
          title: place.displayName,
        });
  
        bounds.extend(place.location);
        console.log(place);
      });
      map.fitBounds(bounds);
      return places;
    } else {
      console.log("No results");
      return null;
    }
  }
  
const promise = loader.load().then(async () => {
    const { Map } = await window.google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: 48.85, lng: 2.351 },
      zoom: 17,
      mapId: "DEMO_MAP_ID",
    });
    

  }).then(async () => {
    collection = await nearbySearch();
    collection.forEach((loc) => {
        document.getElementById("nearbyInfo").innerHTML += loc.Eg.displayName;

    })
  });


  


function Creation() {
    return (
        
        <div className='wrap'>
  
        <div className='Rectangle-12'>
            
            <input className='ImportantInfoInput' id='AddressBar' placeholder='Hey'></input>
            <div className='ImportantInfoInput' id='EventsForTheDay' placeholder='Hey'></div>
            <input className='ImportantInfoInput' id='notes' placeholder='Hey'></input>
            <button className='ImportantInfoInput' id='savebutton'>submit info here</button>

        </div>


        <div className='Rectangle-13'>
            <h1 id = "nearbyInfo" ></h1>   
        </div>
        
        <div className='Rectangle-14' id = 'map'>

        </div>
        </div>
        
    );
}

export default Creation