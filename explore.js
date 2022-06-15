const EXPLORE_TITLE = document.querySelector('#explore-info > h3');
const EXPLORE_IMGS = document.querySelectorAll('.explore_img');
const EXPLORE_BODY = document.querySelector('#explore-info > p');
const EXPLORE_CTA = document.querySelector('#explore-cta');

console.log(EXPLORE_IMGS);

const MAP_DATA = JSON.stringify([
  {
    place: "Nærøyfjord",
    coordinates: { lat: 60.962817325849045, lng: 6.966716166571534 },
    exploreBody: `The Nærøyfjord is a <a href="https://en.wikipedia.org/wiki/Fjord">fjord</a> in Aurland Municipality in Vestland county, Norway. The narrow fjord is a branch of the large Sognefjord, and it is featured on the "Norway in a Nutshell" daytrips for tourists. The 18-kilometre long fjord is only 500 metres wide in some parts.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie tellus faucibus nisl finibus, at consectetur sem elementum. Morbi id odio vel nisi egestas viverra. Fusce porttitor condimentum accumsan. Pellentesque lorem tortor, dignissim sit amet lobortis in, efficitur eu sapien. Curabitur semper porta eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce augue quam, hendrerit ac condimentum a, vulputate sed risus.`,
    exploreImg: ["images/naeroyfjord-explore-img1.jpg", "images/naeroyfjord-explore-img2.jpg", "images/naeroyfjord-explore-img3.jpg"]
  },
  {
    place: "Antelope Canyon",
    coordinates: { lat: 36.8617380714134, lng: -111.37436880864594 },
    exploreBody: `The Antelope Canoyon Navajo Upper Antelope Canyon is a slot canyon in the American Southwest, on Navajo land east of Lechee, Arizona. It includes five separate, scenic slot canyon sections on the Navajo Reservation, referred to as Upper Antelope Canyon, Rattle Snake Canyon, Owl Canyon, Mountain Sheep Canyon and Lower Antelope Canyon.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie tellus faucibus nisl finibus, at consectetur sem elementum. Morbi id odio vel nisi egestas viverra. Fusce porttitor condimentum accumsan. Pellentesque lorem tortor, dignissim sit amet lobortis in, efficitur eu sapien. Curabitur semper porta eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce augue quam, hendrerit ac condimentum a, vulputate sed risus.`,
    exploreImg: ["images/antelope-canyon-img1.png", "images/antelope-canyon-img2.jpg", "images/antelope-canyon-img3.webp"]
  },
  {
    place: "Grossglockner",
    coordinates: { lat: 47.07421847644507, lng: 12.694681769658086 },
    exploreBody: `The Grossglockner is, at 3,798 metres above the Adriatic, the highest mountain in Austria and the highest mountain in the Alps east of the Brenner Pass. It is part of the larger Glockner Group of the Hohe Tauern range, situated along the main ridge of the Central Eastern Alps and the Alpine divide.`,
    exploreImg: ["images/grossglockner-img1.png", "images/grossglockner-img2.jpg", "images/grossglockner-img3.jpg"]
  },
]);

const MAP_DATA_JSON = JSON.parse(MAP_DATA);

function myMap(coordinates) {
  if (coordinates === undefined) {
    coordinates = MAP_DATA_JSON[0].coordinates;
  }

  const POS = coordinates;
  // The map, centered at Uluru
  const MAP = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 12,
    center: POS,
    mapId: "1d0de8f5ee9999c4",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });
  // The marker, positioned at Uluru
  const MARKER = new google.maps.Marker({
    position: POS,
    map: MAP,
  });
}

const MAPS_BTNS = document.querySelectorAll(".mapsBtn");

//foreach loop, checks the innerHTML of the button, and sets properties

MAPS_BTNS.forEach((mapsBtn) => {
  mapsBtn.addEventListener("click", () => {
    var placeName = mapsBtn.innerHTML;
    console.log(placeName);
    for (let i = 0; i < MAP_DATA_JSON.length; i++) {
      if (placeName == MAP_DATA_JSON[i].place) {
        myMap(MAP_DATA_JSON[i].coordinates);
        EXPLORE_TITLE.textContent= MAP_DATA_JSON[i].place;
        EXPLORE_BODY.innerHTML = MAP_DATA_JSON[i].exploreBody;

        // for(let j = 0; j < MAP_DATA_JSON[i].exploreImg.length; j++){
            EXPLORE_IMGS[0].style.backgroundImage = "HI";
        // }
      }
    }
  });
});

console.log(EXPLORE_IMGS[0].style.backgroundImage)

