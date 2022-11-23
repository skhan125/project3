function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.880193, lng: -87.633866 },
    zoom: 15,
  });

  new google.maps.Marker({
    position: { lat: 41.8349, lng: -87.6270 },
    map,
    title: "IIT!",
  });
  new google.maps.Marker({
    position: { lat: 41.9142, lng: -88.3087 },
    map,
    title: "Home!",
  });
}

window.initMap = initMap;
