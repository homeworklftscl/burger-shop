function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 53.9000000, lng: 27.5666700 }
    });
    var pos1 = { lat: 53.890865, lng: 27.523058 };
    var pos2 = { lat: 53.922414, lng: 27.582084 };
    var pos3 = { lat: 53.897407, lng: 27.589854 }; 
    var marker = new google.maps.Marker({
        position: pos1,
        map: map,
        icon: 'img/icon/map-marker.svg',
        title:'ул. Котлетная 99'
    });
    var marker = new google.maps.Marker({
        position: pos2,
        map: map,
        icon: 'img/icon/map-marker.svg',
        title: 'ул. Овощная 12'
    });
    var marker = new google.maps.Marker({
        position: pos3,
        map: map,
        icon: 'img/icon/map-marker.svg',
        title: 'ул. Сырная 56'
    });
}


