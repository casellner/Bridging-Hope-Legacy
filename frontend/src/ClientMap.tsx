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
  {key: 'CookevilleRescueMission', location: {lat: 36.126104072519304, lng: -85.50700598196516}},
  {key: 'LifeChurch', location: {lat: 36.19121147075565, lng: -85.49167830894544}},
  {key: 'CookevilleFirstBaptist', location: {lat: 36.1626903747245, lng: -85.50597237724672}}
];

const ClientMap = () => {
  return(
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={12}
        defaultCenter={{lat: 36.162839, lng: -85.5016423}}
        mapId='44349268b190049a'
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
          position={poi.location}
          //title={poi.key}
          //clickable={true}
          >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default ClientMap;
