function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11.8,
        center: { lat: 53.9000000, lng: 27.5666700 },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        }
    });

    var contentString1 = '<p style="color:black;">ул. Котлетная 99</p>';
    var contentString2 = '<p style="color:black;">ул. Овощная 12</p>';
    var contentString3 = '<p style="color:black;">ул. Сырная 56</p>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1,
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2,
    });
    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3,
    });

    var marker1 = new google.maps.Marker({
        position: { lat: 53.890865, lng: 27.523058 },
        map: map,
        icon: 'img/icon/map-marker.svg',
        title:'ул. Котлетная 99'
    });
    var marker2 = new google.maps.Marker({
        position: { lat: 53.922414, lng: 27.582084 },
        map: map,
        icon: 'img/icon/map-marker.svg',
        title: 'ул. Овощная 12'
    });
    var marker3 = new google.maps.Marker({
        position: { lat: 53.897407, lng: 27.589854 },
        map: map,
        icon: 'img/icon/map-marker.svg',
        title: 'ул. Сырная 56'
    });
    marker1.addListener('click', function () {
        infowindow1.open(map, marker1);
    });
    marker2.addListener('click', function () {
        infowindow2.open(map, marker2);
    });
    marker3.addListener('click', function () {
        infowindow3.open(map, marker3);
    });
}


