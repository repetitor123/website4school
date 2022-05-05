function mapInit() {
  const cords = { lat: -34.86, lng: 138.51 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: cords,
    scrollwheel: false,
  });

  // Прослуховувач подій при натисканні на елемент (map) визиває func addMarker()
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

  addMarker(cords, map);

  // Маркери на карті.
  function addMarker(location, map) {
    const marker = new google.maps.Marker({
      position: location,
      //- label: labels[labelIndex++ % labels.length],
      map: map
    });
  }
}

google.maps.event.addDomListener(window, 'load', mapInit);
