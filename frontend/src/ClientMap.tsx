import React from 'react';

//Google Maps imports
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  AdvancedMarker,
  Pin
} from '@vis.gl/react-google-maps';

type Poi={key: string, location: google.maps.LatLngLiteral}
const locations: Poi[] = [
  {key: 'CookevilleRescueMission', location: {lat: 36.1259299, lng: -85.50677}}
];

const ClientMap = () => {
  return(
    <APIProvider apiKey={'AIzaSyCMhIQ8SSNqECfLiNC2kyXZiV_z9wghRgw'} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={13}
        defaultCenter={{lat: 36.162839, lng: -85.5016423}}
        mapId='Client_Map'
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }
      >
        <PoiMarkers pois={locations} />
      </Map>
    </APIProvider>
  );
}

const PoiMarkers = (props: {pois: Poi[]}) => {
  return (
    <>
      {props.pois.map( (poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default ClientMap;
