// SMOOTH SCROLL ON ALL ANCHORS - STARTS ================== //
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });
});
// SMOOTH SCROLL ON ALL ANCHORS - ENDS ================== //


$(document).ready(function(){

    $('.header__slider').slick({
        dots: false,
        arrows: true,
        autoplay: true,
    });

    $('#fs-header--slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 6000,
        fade: true,
        autoplay: true,
        cssEase: 'ease-out'
    });

    $('#gallery-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

});



$("img[usemap]").mapify({
    hoverClass: "custom-hover",
	popOver: {
		content: function(zone){
			return "<strong>"+zone.attr("data-title")+"</strong><br>"+zone.attr("data-nroSucursal")+" sucursal encontradas.";
		},
		delay: 0.6,
		margin: "15px",
		// height: "130px",
		// width: "260px"
	},
});

// initialize jvectormap
$(function(){
    $('#world-map').vectorMap({
        map: 'world_mill',
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.2,
        hoverColor: false,
        zoomAnimate: true,

        backgroundColor: '#f5f7f9',

        markerStyle: {
            initial: {
                fill: 'rgba(228, 0, 55, 1)',
                stroke: '#383f47'
            }
        },
        markers: [
            {latLng: [45.42, -75.69], name: 'Canada - Money Exchange'},
            {latLng: [38.00, -97.00], name: 'Estados Unidos - RIA, TransFast'},
            {latLng: [19.00, -99.00], name: 'Mexico - DelgadoTravel'},
            {latLng: [-23, -58], name: 'Paraguay - Fe Cambios S.A'},
            {latLng: [4, -72], name: 'Colombia - F. Pagos Internacionales'},
            {latLng: [-33, -70], name: 'Chile - Afex'},
            {latLng: [40, -4], name: 'España - Money Exchange'},
            {latLng: [51, -0], name: 'Inglaterra - Money Exchange, Small World'},
            {latLng: [42, 12], name: 'Italia - RIA'},
            {latLng: [8, -2], name: 'Ghana - RIA'},
            {latLng: [52, 5], name: 'Paises Bajos - RIA'},
            {latLng: [-27, 133], name: 'Australia - RIA'},
            {latLng: [35, 105], name: 'Chia - RIA'},
        ]
    });
});

//===========================================================================//
//================================= MAP INIT =================================//
//========================================= =================================//

// =====================sucursales argentina ===================== //
// oficina principal map
function initMap() {

    var oficinaPrincipal = {lat: -34.6046, lng: -58.4015}

    // map options
    var settings = {
        zoom: 15,
        center: oficinaPrincipal,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaPrincipal = new google.maps.Map(document.getElementById('principal_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaPrincipal,
        map: mapOficinaPrincipal,
        icon: '/images/pin-argenper.png'
    });
}
// oficina almagro map
function initMap_almagro() {

    var oficinaAlmagro = {lat: -34.603916, lng: -58.415114}

    // map options
    var settings = {
        zoom: 15,
        center: oficinaAlmagro,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaAlmagro = new google.maps.Map(document.getElementById('almagro_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaAlmagro,
        map: mapOficinaAlmagro,
        icon: '/images/pin-argenper.png'
    });
}
// oficina flores map
function initMap_flores() {

    var oficinaFlores = {lat: -34.629287, lng: -58.465096}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaFlores,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaFlores = new google.maps.Map(document.getElementById('flores_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaFlores,
        map: mapOficinaFlores,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bajo flores map
function initMap_bajoflores() {

    var oficinaBajoFlores = {lat: -34.642825, lng: -58.437945}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBajoFlores,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBajoFlores = new google.maps.Map(document.getElementById('bajoflores_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBajoFlores,
        map: mapOficinaBajoFlores,
        icon: '/images/pin-argenper.png'
    });
}
// oficina balbastro map
function initMap_balbastro() {

    var oficinaBalbastro = {lat: -34.641161, lng: -58.446203}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBalbastro,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBalbastro = new google.maps.Map(document.getElementById('balbastro_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBalbastro,
        map: mapOficinaBalbastro,
        icon: '/images/pin-argenper.png'
    });
}
// oficina comodoro rivadavia map
function initMap_comodoroR() {

    var oficinaComodoroR = {lat: -45.861564, lng: -67.475506}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaComodoroR,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaComodoroR = new google.maps.Map(document.getElementById('comodoroR_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaComodoroR,
        map: mapOficinaComodoroR,
        icon: '/images/pin-argenper.png'
    });
}
// oficina belgrano map
function initMap_belgrano() {

    var oficinaBelgrano = {lat: -34.556367, lng: -58.461501}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBelgrano,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBelgrano = new google.maps.Map(document.getElementById('belgrano_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBelgrano,
        map: mapOficinaBelgrano,
        icon: '/images/pin-argenper.png'
    });
}
// oficina liniers map
function initMap_liniers() {

    var oficinaLiniers = {lat: -34.641707, lng: -58.527185}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaLiniers,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaLiniers = new google.maps.Map(document.getElementById('liniers_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaLiniers,
        map: mapOficinaLiniers,
        icon: '/images/pin-argenper.png'
    });
}
// oficina pompeya map
function initMap_pompeya() {

    var oficinaPompeya = {lat: -34.654556, lng: -58.418228}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaPompeya,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaPompeya = new google.maps.Map(document.getElementById('pompeya_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaPompeya,
        map: mapOficinaPompeya,
        icon: '/images/pin-argenper.png'
    });
}
// oficina retiro map
function initMap_retiro() {

    var oficinaRetiro = {lat: -34.588290, lng: -58.370992}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaRetiro,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaRetiro = new google.maps.Map(document.getElementById('retiro_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaRetiro,
        map: mapOficinaRetiro,
        icon: '/images/pin-argenper.png'
    });
}
// oficina florida map
function initMap_florida() {

    var oficinaFlorida = {lat: -34.601583, lng: -58.374904}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaFlorida,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaFlorida = new google.maps.Map(document.getElementById('florida_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaFlorida,
        map: mapOficinaFlorida,
        icon: '/images/pin-argenper.png'
    });
}
// oficina reconquista map
function initMap_reconquista() {

    var oficinaReconquista = {lat: -34.60421, lng: -58.37224}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaReconquista,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaReconquista = new google.maps.Map(document.getElementById('reconquista_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaReconquista,
        map: mapOficinaReconquista,
        icon: '/images/pin-argenper.png'
    });
}
// oficina miserere map
function initMap_miserere() {

    var oficinaMiserere = {lat: -34.612371, lng: -58.40887}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaMiserere,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaMiserere = new google.maps.Map(document.getElementById('miserere_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaMiserere,
        map: mapOficinaMiserere,
        icon: '/images/pin-argenper.png'
    });
}
// oficina mataderos map
function initMap_mataderos() {

    var oficinaMataderos = {lat: -34.659210, lng: -58.477063}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaMataderos,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaMataderos = new google.maps.Map(document.getElementById('mataderos_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaMataderos,
        map: mapOficinaMataderos,
        icon: '/images/pin-argenper.png'
    });
}
// oficina palermo map
function initMap_palermo() {

    var oficinaPalermo = {lat: -34.583115, lng: -58.434994}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaPalermo,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaPalermo = new google.maps.Map(document.getElementById('palermo_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaPalermo,
        map: mapOficinaPalermo,
        icon: '/images/pin-argenper.png'
    });
}
// oficina chacarita map
function initMap_chacarita() {

    var oficinaChacarita = {lat: -34.587753, lng: -58.45238}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChacarita,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaChacarita = new google.maps.Map(document.getElementById('chacarita_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChacarita,
        map: mapOficinaChacarita,
        icon: '/images/pin-argenper.png'
    });
}
// oficina san cristobal map
function initMap_sancristobal() {

    var oficinaSanCristobal = {lat: -34.62304, lng: -58.398322}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSanCristobal,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaSanCristobal = new google.maps.Map(document.getElementById('sancristobal_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSanCristobal,
        map: mapOficinaSanCristobal,
        icon: '/images/pin-argenper.png'
    });
}
// oficina munro map
function initMap_munro() {

    var oficinaMunro = {lat: -34.530266, lng: -58.524692}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaMunro,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaMunro = new google.maps.Map(document.getElementById('munro_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaMunro,
        map: mapOficinaMunro,
        icon: '/images/pin-argenper.png'
    });
}
// oficina san isidro  map
function initMap_sanisidro() {

    var oficinaSanIsidro = {lat: -34.472659, lng: -58.514267}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSanIsidro,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaSanIsidro = new google.maps.Map(document.getElementById('sanisidro_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSanIsidro,
        map: mapOficinaSanIsidro,
        icon: '/images/pin-argenper.png'
    });
}
// oficina san martin map
function initMap_sanmartin() {

    var oficinaSanMartin = {lat: -34.574579, lng: -58.531731}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSanMartin,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaSanMartin = new google.maps.Map(document.getElementById('sanmartin_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSanMartin,
        map: mapOficinaSanMartin,
        icon: '/images/pin-argenper.png'
    });
}
// oficina virreyes map
function initMap_virreyes() {

    var oficinaVirreyes = {lat: -34.620254, lng: -58.453783}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaVirreyes,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaVirreyes = new google.maps.Map(document.getElementById('virreyes_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaVirreyes,
        map: mapOficinaVirreyes,
        icon: '/images/pin-argenper.png'
    });
}
// oficina san miguel map
function initMap_sanmiguel() {

    var oficinaSanMiguel = {lat: -34.539813, lng: -58.709400}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSanMiguel,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaSanMiguel = new google.maps.Map(document.getElementById('sanmiguel_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSanMiguel,
        map: mapOficinaSanMiguel,
        icon: '/images/pin-argenper.png'
    });
}
// oficina florencio varela map
function initMap_florenciov() {

    var oficinaFlorencioV = {lat: -34.873397, lng: -58.275624}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaFlorencioV,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaFlorencioV = new google.maps.Map(document.getElementById('florenciov_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaFlorencioV,
        map: mapOficinaFlorencioV,
        icon: '/images/pin-argenper.png'
    });
}
// oficina quilmes map
function initMap_quilmes() {

    var oficinaQuilmes = {lat: -34.723066, lng: -58.260188}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaQuilmes,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaQuilmes = new google.maps.Map(document.getElementById('quilmes_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaQuilmes,
        map: mapOficinaQuilmes,
        icon: '/images/pin-argenper.png'
    });
}
// oficina ezpeleta map
function initMap_ezpeleta() {

    var oficinaEzpeleta = {lat: -34.758402, lng: -58.238573}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaEzpeleta,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaEzpeleta = new google.maps.Map(document.getElementById('ezpeleta_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaEzpeleta,
        map: mapOficinaEzpeleta,
        icon: '/images/pin-argenper.png'
    });
}
// oficina villacelina map
function initMap_villacelina() {

    var oficinaVillacelina = {lat: -34.6969299, lng: -58.4890521}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaVillacelina,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaVillacelina = new google.maps.Map(document.getElementById('villacelina_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaVillacelina,
        map: mapOficinaVillacelina,
        icon: '/images/pin-argenper.png'
    });
}
// oficina la noria map
function initMap_lanoria() {

    var oficinaLanoria = {lat: -34.707048, lng: -58.459567}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaLanoria,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaLanoria = new google.maps.Map(document.getElementById('lanoria_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaLanoria,
        map: mapOficinaLanoria,
        icon: '/images/pin-argenper.png'
    });
}
// oficina olimpo map
function initMap_olimpo() {

    var oficinaOlimpo = {lat: -34.7360868, lng: -58.4817169}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaOlimpo,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaOlimpo = new google.maps.Map(document.getElementById('olimpo_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaOlimpo,
        map: mapOficinaOlimpo,
        icon: '/images/pin-argenper.png'
    });
}
// oficina moreno map
function initMap_moreno() {

    var oficinaMoreno = {lat: -34.651485, lng: -58.791693}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaMoreno,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaMoreno = new google.maps.Map(document.getElementById('moreno_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaMoreno,
        map: mapOficinaMoreno,
        icon: '/images/pin-argenper.png'
    });
}
// oficina la plata map
function initMap_laplata() {

    var oficinaLaplata = {lat: -34.9119058, lng: -57.9452847}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaLaplata,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaLaplata = new google.maps.Map(document.getElementById('laplata_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaLaplata,
        map: mapOficinaLaplata,
        icon: '/images/pin-argenper.png'
    });
}
// oficina mar del plata map
function initMap_mardelplata() {

    var oficinaMardelplata = {lat: -37.999361, lng: -57.547305}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaMardelplata,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaMardelplata = new google.maps.Map(document.getElementById('mardelplata_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaMardelplata,
        map: mapOficinaMardelplata,
        icon: '/images/pin-argenper.png'
    });
}
// oficina cordoba centro map
function initMap_cordobacentro() {

    var oficinaCordobacentro = {lat: -31.414999, lng: -64.1787585}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaCordobacentro,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaCordobacentro = new google.maps.Map(document.getElementById('cordobacentro_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaCordobacentro,
        map: mapOficinaCordobacentro,
        icon: '/images/pin-argenper.png'
    });
}
// oficina mendoza map
function initMap_mendoza() {

    var oficinaMendoza = {lat: -32.890159, lng: -68.838956}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaMendoza,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaMendoza = new google.maps.Map(document.getElementById('mendoza_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaMendoza,
        map: mapOficinaMendoza,
        icon: '/images/pin-argenper.png'
    });
}
// oficina rosario map
function initMap_rosario() {

    var oficinaRosario = {lat: -32.949249, lng: -60.659669}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaRosario,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaRosario = new google.maps.Map(document.getElementById('rosario_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaRosario,
        map: mapOficinaRosario,
        icon: '/images/pin-argenper.png'
    });
}
// oficina villa carlos paz map
function initMap_vcarlospaz() {

    var oficinaVcarlospaz = {lat: -31.420383, lng: -64.495689}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaVcarlospaz,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaVcarlospaz = new google.maps.Map(document.getElementById('vcarlospaz_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaVcarlospaz,
        map: mapOficinaVcarlospaz,
        icon: '/images/pin-argenper.png'
    });
}
// oficina salta map
function initMap_salta() {

    var oficinaSalta = {lat: -24.789178, lng: -65.412503}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSalta,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaSalta = new google.maps.Map(document.getElementById('salta_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSalta,
        map: mapOficinaSalta,
        icon: '/images/pin-argenper.png'
    });
}

// =====================sucursales bolivia ===================== //
// oficina bolivia > santa cruz map
function initMap_boliviaSantacruz() {

    var oficinaBoliviaSantacruz = {lat: -17.7817138, lng: -63.1821209}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaSantacruz,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaSantacruz = new google.maps.Map(document.getElementById('boliviasantacruz_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaSantacruz,
        map: mapOficinaBoliviaSantacruz,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > cliza map
function initMap_boliviaCliza() {

    var oficinaBoliviaCliza = {lat: -17.5919271, lng: -65.9344735}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaCliza,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaCliza = new google.maps.Map(document.getElementById('boliviacliza_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaCliza,
        map: mapOficinaBoliviaCliza,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > cochabamba map
function initMap_boliviaCochabamba() {

    var oficinaBoliviaCochabamba = {lat: -17.39443, lng: -66.157178}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaCochabamba,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaCochabamba = new google.maps.Map(document.getElementById('cochabamba_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaCochabamba,
        map: mapOficinaBoliviaCochabamba,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > quillacollo map
function initMap_boliviaquillacollo() {

    var oficinaBoliviaQuillacollo = {lat: -17.395131, lng: -66.279989}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaQuillacollo,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaQuillacollo = new google.maps.Map(document.getElementById('quillacollo_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaQuillacollo,
        map: mapOficinaBoliviaQuillacollo,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > la paz map
function initMap_boliviaLapaz() {

    var oficinaBoliviaLapaz = {lat: -16.4982961, lng: -68.1333715}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaLapaz,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaLapaz = new google.maps.Map(document.getElementById('lapaz_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaLapaz,
        map: mapOficinaBoliviaLapaz,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > la paz desaguadero map
function initMap_boliviaLapazdesaguadero() {

    var oficinaBoliviaLapazDesa = {lat: -16.4982961, lng: -68.1333715}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaLapazDesa,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaLapazDesa = new google.maps.Map(document.getElementById('lapazdesa_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaLapazDesa,
        map: mapOficinaBoliviaLapazDesa,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > la paz el alto map
function initMap_boliviaLapazElalto() {

    var oficinaBoliviaLapazElalto = {lat: -16.508904, lng: -68.164265}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaLapazElalto,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaLapazElalto = new google.maps.Map(document.getElementById('lapazelalto_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaLapazElalto,
        map: mapOficinaBoliviaLapazElalto,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > la paz sur map
function initMap_boliviaLapazSur() {

    var oficinaBoliviaLapazSur = {lat: -16.5390546, lng: -68.078335}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaLapazSur,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaLapazSur = new google.maps.Map(document.getElementById('lapazsur_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaLapazSur,
        map: mapOficinaBoliviaLapazSur,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > sucre map
function initMap_boliviaSucre() {

    var oficinaBoliviaSucre = {lat: -19.048557, lng: -65.259279}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaSucre,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaSucre = new google.maps.Map(document.getElementById('boliviasucre_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaSucre,
        map: mapOficinaBoliviaSucre,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > montero map
function initMap_boliviaMontero() {

    var oficinaBoliviaMontero = {lat: -17.342745, lng: -63.255719}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaMontero,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaMontero = new google.maps.Map(document.getElementById('montero_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaMontero,
        map: mapOficinaBoliviaMontero,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > oruro map
function initMap_boliviaOruro() {

    var oficinaBoliviaOruro = {lat: -17.970651, lng: -67.112882}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaOruro,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaOruro = new google.maps.Map(document.getElementById('oruro_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaOruro,
        map: mapOficinaBoliviaOruro,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > tarija map
function initMap_boliviaTarija() {

    var oficinaBoliviaTarija = {lat: -21.535014, lng: -64.732064}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaTarija,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaTarija = new google.maps.Map(document.getElementById('tarija_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaTarija,
        map: mapOficinaBoliviaTarija,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > potosi map
function initMap_boliviaPotosi() {

    var oficinaBoliviaPotosi = {lat: -19.587708, lng: -65.755076}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaPotosi,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaPotosi = new google.maps.Map(document.getElementById('potosi_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaPotosi,
        map: mapOficinaBoliviaPotosi,
        icon: '/images/pin-argenper.png'
    });
}
// oficina bolivia > punata map
function initMap_boliviaPunata() {

    var oficinaBoliviaPunata = {lat: -17.545449, lng: -65.836268}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaBoliviaPunata,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaBoliviaPunata = new google.maps.Map(document.getElementById('punata_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaBoliviaPunata,
        map: mapOficinaBoliviaPunata,
        icon: '/images/pin-argenper.png'
    });
}

// =====================sucursales chile ===================== //
// oficina chile > santiago map
function initMap_chileSantiago() {

    var oficinaChileSantiago = {lat: -33.4367008, lng: -70.6556711}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChileSantiago,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaChileSantaigo = new google.maps.Map(document.getElementById('santiago_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChileSantiago,
        map: mapOficinaChileSantaigo,
        icon: '/images/pin-argenper.png'
    });
}
// oficina chile > antofagasta map
function initMap_antofagasta() {

    var oficinaChileAntofagasta = {lat: -23.6484687, lng: -70.4005949}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChileAntofagasta,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaChileAntofagasta = new google.maps.Map(document.getElementById('antofagasta_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChileAntofagasta,
        map: mapOficinaChileAntofagasta,
        icon: '/images/pin-argenper.png'
    });
}
// oficina chile > iquique map
function initMap_iquique() {

    var oficinaChileIquique = {lat: -20.2134682, lng: -70.1534613}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChileIquique,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaChileIquique = new google.maps.Map(document.getElementById('iquique_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChileIquique,
        map: mapOficinaChileIquique,
        icon: '/images/pin-argenper.png'
    });
}
// oficina chile > recoleta map
function initMap_recoleta() {

    var oficinaChileRecoleta = {lat: -33.4293737, lng: -70.6489752}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChileRecoleta,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaChileRecoleta = new google.maps.Map(document.getElementById('recoleta_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChileRecoleta,
        map: mapOficinaChileRecoleta,
        icon: '/images/pin-argenper.png'
    });
}
// oficina chile > calama map
function initMap_calama() {

    var oficinaChileCalama = {lat: -22.4628443, lng: -68.929157}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChileCalama,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaChileCalama = new google.maps.Map(document.getElementById('calama_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChileCalama,
        map: mapOficinaChileCalama,
        icon: '/images/pin-argenper.png'
    });
}
// oficina chile > estacion central map
function initMap_estcentral() {

    var oficinaChileEstcentral = {lat: -33.4529941, lng: -70.6823991}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChileEstcentral,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaChileEstcentral = new google.maps.Map(document.getElementById('estcentral_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChileEstcentral,
        map: mapOficinaChileEstcentral,
        icon: '/images/pin-argenper.png'
    });
}

// ===================== uruguay ===================== //
// oficina chile > montevideo map
function initMap_montevideo() {

    var oficinaChileMontevideo = {lat: -34.905812, lng: -56.189449}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChileMontevideo,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaChileMontevideo = new google.maps.Map(document.getElementById('montevideo_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChileMontevideo,
        map: mapOficinaChileMontevideo,
        icon: '/images/pin-argenper.png'
    });
}

// ===================== estados unidos ===================== //
// oficina estados unidos > new jersey map
function initMap_newjersey() {

    var oficinaNewjersey = {lat: 40.915894, lng: -74.1752261}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaNewjersey,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaNewjersey = new google.maps.Map(document.getElementById('newjersey_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaNewjersey,
        map: mapOficinaNewjersey,
        icon: '/images/pin-argenper.png'
    });
}
// oficina estados unidos > union city map
function initMap_unioncity() {

    var oficinaUnioncity = {lat: 40.7725265, lng: -74.0290639}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaUnioncity,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaUnioncity = new google.maps.Map(document.getElementById('unioncity_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaUnioncity,
        map: mapOficinaUnioncity,
        icon: '/images/pin-argenper.png'
    });
}

// ===================== ecuador ===================== //
// oficina ecuador > guayaquil map
function initMap_guayaquil() {

    var oficinaGuayaquil = {lat: -2.1932813, lng: -79.8809145}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaGuayaquil,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaGuayaquil = new google.maps.Map(document.getElementById('guayaquil_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaGuayaquil,
        map: mapOficinaGuayaquil,
        icon: '/images/pin-argenper.png'
    });
}
// oficina ecuador > quito amazonas map
function initMap_quitoamazonas() {

    var oficinaQuitoamazonas = {lat: -0.2059254, lng: -78.4947975}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaQuitoamazonas,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaQuitoamazonas = new google.maps.Map(document.getElementById('quitoamazonas_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaQuitoamazonas,
        map: mapOficinaQuitoamazonas,
        icon: '/images/pin-argenper.png'
    });
}
// oficina ecuador > quito villaflora map
function initMap_quitovillaflora() {

    var oficinaQuitovillaflora = {lat: -0.2059254, lng: -78.4947975}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaQuitovillaflora,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaQuitovillaflora = new google.maps.Map(document.getElementById('quitovillaflora_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaQuitovillaflora,
        map: mapOficinaQuitovillaflora,
        icon: '/images/pin-argenper.png'
    });
}
// oficina ecuador > quevedo map
function initMap_quevedo() {

    var oficinaQuevedo = {lat: -1.019900, lng: -79.467627}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaQuevedo,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaQuevedo = new google.maps.Map(document.getElementById('quevedo_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaQuevedo,
        map: mapOficinaQuevedo,
        icon: '/images/pin-argenper.png'
    });
}
// oficina ecuador > cuenca map
function initMap_cuenca() {

    var oficinaCuenca = {lat: -2.8967, lng: -78.99859}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaCuenca,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaCuenca = new google.maps.Map(document.getElementById('cuenca_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaCuenca,
        map: mapOficinaCuenca,
        icon: '/images/pin-argenper.png'
    });
}
// oficina ecuador > machala map
function initMap_machala() {

    var oficinaMachala = {lat: -3.2636805, lng: -79.954257}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaMachala,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaMachala = new google.maps.Map(document.getElementById('machala_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaMachala,
        map: mapOficinaMachala,
        icon: '/images/pin-argenper.png'
    });
}

// ===================== peru ===================== //
// oficina peru > lima map
function initMap_lima() {

    var oficinaLima = {lat: -12.048931, lng: -77.03312}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaLima,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaLima = new google.maps.Map(document.getElementById('lima_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaLima,
        map: mapOficinaLima,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru > vitarte map
function initMap_vitarte() {

    var oficinaVitarte = {lat: -12.030015, lng: -76.924672}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaVitarte,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaVitarte = new google.maps.Map(document.getElementById('vitarte_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaVitarte,
        map: mapOficinaVitarte,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru > callao argentina map
function initMap_callaoar() {

    var oficinaCallaoar = {lat: -12.048471, lng: -77.110814}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaCallaoar,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]

    }

    // new map
    var mapOficinaCallaoar = new google.maps.Map(document.getElementById('callaoar_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaCallaoar,
        map: mapOficinaCallaoar,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru > callao saenz peña map
function initMap_saenzpe() {

    var oficinaCallaosaenz = {lat: -12.055699, lng: -77.102033}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaCallaosaenz,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaCallaosaenz = new google.maps.Map(document.getElementById('saenzpe_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaCallaosaenz,
        map: mapOficinaCallaosaenz,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru > chosica peña map
function initMap_chosica() {

    var oficinaChosica = {lat: -11.93511, lng: -76.693403}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaChosica,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaChosica = new google.maps.Map(document.getElementById('chosica_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaChosica,
        map: mapOficinaChosica,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru > comas peña map
function initMap_comas() {

    var oficinaComas = {lat: -11.955181, lng: -77.052108}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaComas,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaComas = new google.maps.Map(document.getElementById('comas_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaComas,
        map: mapOficinaComas,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru > independencia peña map
function initMap_independencia() {

    var oficinaIndependencia = {lat: -11.955181, lng: -77.060465}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaIndependencia,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaIndependencia = new google.maps.Map(document.getElementById('independencia_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaIndependencia,
        map: mapOficinaIndependencia,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru > la molina peña map
function initMap_lamolina() {

    var oficinaLamolina = {lat: -12.079868, lng: -77.004}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaLamolina,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaLamolina = new google.maps.Map(document.getElementById('lamolina_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaLamolina,
        map: mapOficinaLamolina,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru > lima pasaje acuña map
function initMap_limaacuna() {

    var oficinaLimaacuna = {lat: -12.048319, lng: -77.031395}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaLimaacuna,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaLimaacuna = new google.maps.Map(document.getElementById('limaacuna_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaLimaacuna,
        map: mapOficinaLimaacuna,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > lince map
function initMap_lince() {

    var oficinaLince = {lat: -12.082035, lng: -77.035891}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaLince,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaLince = new google.maps.Map(document.getElementById('lince_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaLince,
        map: mapOficinaLince,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > miraflores map
function initMap_miraflores() {

    var oficinaMiraflores = {lat: -12.118808, lng: -77.035199}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaMiraflores,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaMiraflores = new google.maps.Map(document.getElementById('miraflores_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaMiraflores,
        map: mapOficinaMiraflores,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > puente piedra map
function initMap_puentepiedra() {

    var oficinaPuentepiedra = {lat: -11.868582, lng: -77.072703}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaPuentepiedra,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaPuentepiedra = new google.maps.Map(document.getElementById('puentepiedra_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaPuentepiedra,
        map: mapOficinaPuentepiedra,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > san miguel map
function initMap_perusanmiguel() {

    var oficinaSanmiguel = {lat: -12.074861, lng: -77.081901}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSanmiguel,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaSanmiguel = new google.maps.Map(document.getElementById('perusanmiguel_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSanmiguel,
        map: mapOficinaSanmiguel,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > san juan de lurigancho map
function initMap_sjl() {

    var oficinaSjl = {lat: -12.006942, lng: -77.005589}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSjl,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaSjl = new google.maps.Map(document.getElementById('sjl_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSjl,
        map: mapOficinaSjl,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > san juan de lurigancho 2 map
function initMap_sjl2() {

    var oficinaSjl2 = {lat: -11.987781, lng: -77.008499}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSjl2,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaSjl2 = new google.maps.Map(document.getElementById('sjl2_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSjl2,
        map: mapOficinaSjl2,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > san juan de miraflores map
function initMap_sjm() {

    var oficinaSjm = {lat: -12.15414, lng: -76.972405}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSjm,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaSjm = new google.maps.Map(document.getElementById('sjm_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSjm,
        map: mapOficinaSjm,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > surco map
function initMap_surco() {

    var oficinaSurco = {lat: -12.1591801, lng: -76.9888776}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaSurco,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaSurco = new google.maps.Map(document.getElementById('surco_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaSurco,
        map: mapOficinaSurco,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > villa el salvador map
function initMap_villasalvador() {

    var oficinaVillasalvador = {lat: -12.231055, lng: -76.910461}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaVillasalvador,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaVillasalvador = new google.maps.Map(document.getElementById('villasalvador_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaVillasalvador,
        map: mapOficinaVillasalvador,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > andahuaylas map
function initMap_andahuaylas() {

    var oficinaAndahuaylas = {lat: -12.231055, lng: -76.910461}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaAndahuaylas,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaAndahuaylas = new google.maps.Map(document.getElementById('andahuaylas_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaAndahuaylas,
        map: mapOficinaAndahuaylas,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > arequipa map
function initMap_arequipa() {

    var oficinaArequipa = {lat: -12.231055, lng: -76.910461}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaArequipa,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaArequipa = new google.maps.Map(document.getElementById('arequipa_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaArequipa,
        map: mapOficinaArequipa,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > barranca map
function initMap_barranca() {

    var oficinabarranca = {lat: -10.753422, lng: -77.759555}

    // map options
    var settings = {
        zoom: 16,
        center: oficinabarranca,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinabarranca = new google.maps.Map(document.getElementById('barranca_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinabarranca,
        map: mapOficinabarranca,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > casagrande map
function initMap_casagrande() {

    var oficinacasagrande = {lat: -10.753422, lng: -77.759555}

    // map options
    var settings = {
        zoom: 16,
        center: oficinacasagrande,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinacasagrande = new google.maps.Map(document.getElementById('casagrande_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinacasagrande,
        map: mapOficinacasagrande,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > cusco map
function initMap_cusco() {

    var oficinacusco = {lat: -13.5187376, lng: -71.9766825}

    // map options
    var settings = {
        zoom: 16,
        center: oficinacusco,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinacusco = new google.maps.Map(document.getElementById('cusco_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinacusco,
        map: mapOficinacusco,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > chiclayo map
function initMap_chiclayo() {

    var oficinachiclayo = {lat: -6.773072, lng: -79.8380607}

    // map options
    var settings = {
        zoom: 16,
        center: oficinachiclayo,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinachiclayo = new google.maps.Map(document.getElementById('chiclayo_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinachiclayo,
        map: mapOficinachiclayo,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > chimbote map
function initMap_chimbote() {

    var oficinachimbote = {lat: -9.0772139, lng: -78.5920102}

    // map options
    var settings = {
        zoom: 16,
        center: oficinachimbote,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinachimbote = new google.maps.Map(document.getElementById('chimbote_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinachimbote,
        map: mapOficinachimbote,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > huaral map
function initMap_huaral() {

    var oficinahuaral = {lat: -11.495169, lng: -77.205923}

    // map options
    var settings = {
        zoom: 16,
        center: oficinahuaral,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinahuaral = new google.maps.Map(document.getElementById('huaral_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinahuaral,
        map: mapOficinahuaral,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > huaraz map
function initMap_huaraz() {

    var oficinahuaraz = {lat: -9.5296545, lng: -77.5275138}

    // map options
    var settings = {
        zoom: 16,
        center: oficinahuaraz,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinahuaraz = new google.maps.Map(document.getElementById('huaraz_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinahuaraz,
        map: mapOficinahuaraz,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > huacho map
function initMap_huacho() {

    var oficinahuacho = {lat: -11.109455, lng: -77.61371}

    // map options
    var settings = {
        zoom: 16,
        center: oficinahuacho,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinahuacho = new google.maps.Map(document.getElementById('huacho_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinahuacho,
        map: mapOficinahuacho,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > huancayo map
function initMap_huancayo() {

    var oficinahuancayo = {lat: -11.109455, lng: -77.61371}

    // map options
    var settings = {
        zoom: 16,
        center: oficinahuancayo,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinahuancayo = new google.maps.Map(document.getElementById('huancayo_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinahuancayo,
        map: mapOficinahuancayo,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > huanuco map
function initMap_huanuco() {

    var oficinahuanuco = {lat: -11.109455, lng: -77.61371}

    // map options
    var settings = {
        zoom: 16,
        center: oficinahuanuco,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinahuanuco = new google.maps.Map(document.getElementById('huanuco_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinahuanuco,
        map: mapOficinahuanuco,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > ica map
function initMap_ica() {

    var oficinaica = {lat: -14.0723825, lng: -75.7291719}

    // map options
    var settings = {
        zoom: 16,
        center: oficinaica,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinaica = new google.maps.Map(document.getElementById('ica_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinaica,
        map: mapOficinaica,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > juliaca map
function initMap_juliaca() {

    var oficinajuliaca = {lat: -14.0723825, lng: -75.7291719}

    // map options
    var settings = {
        zoom: 16,
        center: oficinajuliaca,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinajuliaca = new google.maps.Map(document.getElementById('juliaca_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinajuliaca,
        map: mapOficinajuliaca,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > piura map
function initMap_piura() {

    var oficinapiura = {lat: -14.0723825, lng: -75.7291719}

    // map options
    var settings = {
        zoom: 16,
        center: oficinapiura,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinapiura = new google.maps.Map(document.getElementById('piura_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinapiura,
        map: mapOficinapiura,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > tacna map
function initMap_tacna() {

    var oficinatacna = {lat: -18.011285, lng: -70.248195}

    // map options
    var settings = {
        zoom: 16,
        center: oficinatacna,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinatacna = new google.maps.Map(document.getElementById('tacna_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinatacna,
        map: mapOficinatacna,
        icon: '/images/pin-argenper.png'
    });
}
// oficina peru  > trujillo map
function initMap_trujillo() {

    var oficinatrujillo = {lat: -8.10962, lng: -79.0260241}

    // map options
    var settings = {
        zoom: 16,
        center: oficinatrujillo,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles:
        [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#008eff"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ]
    }

    // new map
    var mapOficinatrujillo = new google.maps.Map(document.getElementById('trujillo_office_map'), settings)

    // map marker
    var marker = new google.maps.Marker({
        position: oficinatrujillo,
        map: mapOficinatrujillo,
        icon: '/images/pin-argenper.png'
    });
}



// ========================== Buscador de empleados

    $('#dni-content').hide();


    $('#search-employees').submit(function(e) {
        e.preventDefault();

        $.ajax({
            type: 'GET',
            url: '/empleados/empleados.json',
            dataType: 'json',
            success: function() {

                $('#emplo-name').text(empleados[i].name)
                $('#emplo-dni').text(empleados[i].cuil)

                $('#dni-content').show()
            }
        });
    })
