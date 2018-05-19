function initMap() {
    var uluru = { lat: 53.9000000, lng: 27.5666700 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12.42,
        center: uluru
    });
    var pos1 = { lat: 53.890865, lng: 27.523058 };
    var pos2 = { lat: 53.922414, lng: 27.582084 };
    var pos3 = { lat: 53.897407, lng: 27.589854 }; 
    var marker = new google.maps.Marker({
        position: pos1,
        map: map,
        icon: 'img/icon/map-marker.svg'
    });
    var marker = new google.maps.Marker({
        position: pos2,
        map: map,
        icon: 'img/icon/map-marker.svg'
    });
    var marker = new google.maps.Marker({
        position: pos3,
        map: map,
        icon: 'img/icon/map-marker.svg'
    });

    var infoWindow = new google.maps.InfoWindow ({
        content: '<h2 style="color:black;margin:0;">Mr.Burger</h2><br><p style="color:black">ул.Котлетная 15</p>',
        
    });

    marker.addListener('click', function () {
        infoWindow.open(map,marker);
    })
    
    
}


