import { LatLong } from "@app/models/location";

function getMapStraightDistanceInKm(point_A:LatLong,point_B:LatLong) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(point_B.lat-point_A.lat);  // deg2rad below
    var dLon = deg2rad(point_B.lng-point_A.lng); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(point_A.lat)) * Math.cos(deg2rad(point_B.lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }