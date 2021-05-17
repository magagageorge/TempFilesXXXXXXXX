import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wb-mark-google-map',
  templateUrl: './wb-mark-google-map.component.html',
  styleUrls: ['./wb-mark-google-map.component.scss']
})
export class WbMarkGoogleMapComponent implements OnInit {

  @Input() location_name: string;
  @Input() defaultPosition: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  @Output() locationEmit = new EventEmitter<any>();
  center: any = { lat: -34.397, lng: 150.644 };
  constructor() { }

  ngOnInit(): void {
    if (this.defaultPosition == null) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.locationEmit.emit(this.center);
        this.initMap();
      }, (error) => {
        console.log(error)
      })
    } else {
      this.center = this.defaultPosition;
      this.initMap();
    }

  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById("wb-google-map") as HTMLElement, {
      center: this.center,
      zoom: 16,
    });
    this.addMarker(this.center);

    // Listen for clicks and add the location of the click to firebase.
    this.map.addListener('click', (e) => {
      this.addMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      });
      this.locationEmit.emit({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      });
    });

  }

  addMarker(pos: any) {
    if (this.marker != undefined) {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      // The below line is equivalent to writing:
      // position: new google.maps.LatLng(-34.397, 150.644)
      position: pos,
      title: this.location_name,
      label: this.location_name,
      draggable: true,
      map: this.map,
    });
    this.marker.addListener('dragend', (e) => {
      this.locationEmit.emit({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      });
    });

  }

}
