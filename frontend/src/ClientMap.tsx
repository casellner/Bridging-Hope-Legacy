import React from 'react';

//Google Maps imports
import {
  APIProvider,
  Map,
  MapCameraChangedEvent
} from '@vis.gl/react-google-maps';

const ClientMap = () => {
  return(
    <APIProvider apiKey={'AIzaSyCMhIQ8SSNqECfLiNC2kyXZiV_z9wghRgw'} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={13}
        defaultCenter={{lat: -33.860664, lng: 151.208138}}
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
      </Map>
    </APIProvider>
  );
}

export default ClientMap;
