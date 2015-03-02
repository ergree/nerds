var link = document.querySelector(".btn-write");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var cancel = document.querySelector(".cancel-btn");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name='username']");
var email = popup.querySelector("[name='mail']");
        
        link.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.add("modal-content-show");
            userName.focus();
        });
        
        close.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.remove("modal-content-show");
        });
        
        cancel.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.remove("modal-content-show");
        });
        
        form.addEventListener("submit", function(event) {
        if (!(userName.value && email.value)) {
          event.preventDefault();
        }
        });

        function initialize() {
        var mapOptions = {
                zoom: 16,
                center: new google.maps.LatLng(45.0445861,38.9369641),
            }
            var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
            var image = "img/map-logo.png";
            var myLatLng = new google.maps.LatLng(45.0433959,38.9445065);
            var beachMarker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: image
            });
        }
google.maps.event.addDomListener(window, 'load', initialize);
