import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LatLong } from '@app/models/location';
import { constants } from 'buffer';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-wb-showon-google-map',
  templateUrl: './wb-showon-google-map.component.html',
  styleUrls: ['./wb-showon-google-map.component.scss']
})
export class WbShowonGoogleMapComponent implements OnInit {

  @Input() location_name: string;
  @Input() defaultPosition: any;
  @Input() showMyPosition: boolean;
  @Input() computeDirection: boolean;
  currentLocation: any = null;
  map: google.maps.Map;
  marker: google.maps.Marker;
  markerArray: google.maps.Marker[] = [];
  travelModel: google.maps.TravelMode = google.maps.TravelMode.DRIVING;
  directionsRenderer: google.maps.DirectionsRenderer;
  // Instantiate a directions service.
  directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();


  //@Output() locationEmit = new EventEmitter<any>();
  center: any = { lat: -34.397, lng: 150.644 };
  constructor() { }

  ngOnInit(): void {
    var _this = this;
    if (this.computeDirection == true) {
      navigator.geolocation.getCurrentPosition((position) => {
        _this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        if (_this.defaultPosition != null) {
          this.center = this.getCenter(_this.currentLocation, _this.defaultPosition);
        }
        this.initMap();
        this.processRoutePath();
      }, (error) => {
        console.log(error)
      });
    } else {
      if (this.defaultPosition != null) {
        this.center = this.defaultPosition;
      }
      this.initMap();
      this.addMarker(this.defaultPosition, 'LOCATION_POSITION');
    }
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById("wb-showon-google-map") as HTMLElement, {
      center: this.center,
      zoom: 16,
      mapTypeControl: false,
      fullscreenControl: true,
      streetViewControl: false,
      scaleControl: false,
      gestureHandling: "cooperative",
    });
    //this.addMarker(this.center);
  }


  getCenter(cord_one: LatLong, cord_two: LatLong) {
    var _lat = (cord_one.lat + cord_two.lat) / 2;
    var _lng = (cord_one.lng + cord_two.lng) / 2;
    return { lat: _lat, lng: _lng };
  }

  addMarker(pos: any, position_type: string) {
    if (this.marker != undefined) {
      //this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      // The below line is equivalent to writing:
      // position: new google.maps.LatLng(-34.397, 150.644)
      position: pos,
      //title: this.location_name,
      //label: this.location_name,
      //icon: '/assets/icons/bg-map-marker-xs.png',
      draggable: false,
      map: this.map,
    });

    if (position_type == "CURRENT_POSITION") {
      this.marker.setIcon('/assets/icons/map/my_location_pin.png');
    } else if (position_type == "DW_WORKPLACE") {
      this.marker.setIcon('/assets/icons/bg-map-marker-xs.png');
    } else {

    }

  }


  processRoutePath(): void {

    // Create a renderer for directions and bind it to the map.
    this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });

    // Display the route between the initial start and end selections.
    this.calculateAndDisplayRoute();

  }

  calculateAndDisplayRoute() {
    var _this = this;
    // First, remove any existing markers from the map.
    for (let i = 0; i < this.markerArray.length; i++) {
      this.markerArray[i].setMap(null);
    }

    // Retrieve the start and end locations and create a DirectionsRequest using
    // WALKING directions.
    this.directionsService.route(
      {
        origin: this.currentLocation,
        destination: this.defaultPosition,
        travelMode: this.travelModel,
      },
      (
        result: google.maps.DirectionsResult,
        status: google.maps.DirectionsStatus
      ) => {
        // Route the directions and pass the response to a function to create
        // markers for each step.
        if (status === "OK") {
          console.log(result.routes[0].warnings);
          this.directionsRenderer.setDirections(result);
          this.directionsRenderer.setOptions({ suppressMarkers: true });
          _this.addMarker(_this.currentLocation, 'CURRENT_POSITION');
          _this.addMarker(_this.defaultPosition, 'DW_WORKPLACE');
          //directionsRenderer
          //this.showSteps(result, markerArray, map);
        } else {
          console.log("Directions request failed due to " + status);
        }
      }
    );
  }

  setTravelModel(mode: string) {
    if (mode == 'DRIVING') {
      this.travelModel = google.maps.TravelMode.DRIVING;
    }
    if (mode == 'WALKING') {
      this.travelModel = google.maps.TravelMode.WALKING;
    }
    if (mode == 'TRANSIT') {
      this.travelModel = google.maps.TravelMode.TRANSIT;
    }
    this.calculateAndDisplayRoute();
  }



  showSteps(
    directionResult: google.maps.DirectionsResult,
    markerArray: google.maps.Marker[],
    map: google.maps.Map
  ) {
    // For each step, place a marker, and add the text to the marker's infowindow.
    // Also attach the marker to an array so we can keep track of it and remove it
    // when calculating new routes.
    const myRoute = directionResult.routes[0].legs[0];

    for (let i = 0; i < myRoute.steps.length; i++) {
      const marker = (markerArray[i] =
        markerArray[i] || new google.maps.Marker());
      marker.setMap(map);
      marker.setPosition(myRoute.steps[i].start_location);
    }
  }


}
