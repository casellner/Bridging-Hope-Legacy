import React, { useCallback, useState } from 'react';

//Google Maps imports
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
  AdvancedMarkerProps,
  AdvancedMarkerAnchorPoint
} from '@vis.gl/react-google-maps';

type Poi={key: string, location: google.maps.LatLngLiteral, description: string};
const locations: Poi[] = [
  {key: 'CookevilleRescueMission', location: {lat: 36.126104072519304, lng: -85.50700598196516}, description: 'Cookeville Rescue Mission'},
  {key: 'LifeChurch', location: {lat: 36.19121147075565, lng: -85.49167830894544}, description: 'Life Church'},
  {key: 'CookevilleFirstBaptist', location: {lat: 36.1626903747245, lng: -85.50597237724672}, description: 'Cookeville First Baptist Church'},
];

const data = getData()
  .sort((a, b) => b.position.lat - a.position.lat)
  .map((dataItem, index) => ({...dataItem, zIndex: index}));

const Z_INDEX_SELECTED = data.length;
const Z_INDEX_HOVER = data.length + 1;

const ClientMap = () => {
  const [markers] = useState(data);

  const [hoverId, setHoverId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [anchorPoint, setAnchorPoint] = useState('BOTTOM' as AnchorPointName);
  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const onMouseEnter = useCallback((id: string | null) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);
  const onMarkerClick = useCallback(
    (id: string | null, marker?: google.maps.marker.AdvancedMarkerElement) => {
      setSelectedId(id);

      if (marker) {
        setSelectedMarker(marker);
      }

      if (id !== selectedId) {
        setInfoWindowShown(true);
      } else {
        setInfoWindowShown(isShown => !isShown);
      }
    },
    [selectedId]
  );

  return(
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={12}
        defaultCenter={{lat: 36.162839, lng: -85.5016423}}
        mapId='44349268b190049a'
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
        {/* <PoiMarkers pois={locations} /> */}
        {markers.map(({id, zIndex: zIndexDefault, position, type}) => {
          let zIndex = zIndexDefault;

          return (
            <AdvancedMarkerWithRef
              onMarkerClick={(
                marker: google.maps.marker.AdvancedMarkerElement
              ) => onMarkerClick(id, marker)}
              onMouseEnter={() => onMouseEnter(id)}
              onMouseLeave={onMouseLeave}
              key={id}
              zIndex={zIndex}
              className="custom-marker"
              style={{
                transform: `scale(${[hoverId, selectedId].includes(id) ? 1.3 : 1})`,
                transformOrigin: AdvancedMarkerAnchorPoint['BOTTOM'].join(' ')
              }}
              position={position}>
              <Pin
                background={selectedId === id ? '#22ccff' : null}
                borderColor={selectedId === id ? '#1e89a1' : null}
                glyphColor={selectedId === id ? '#0f677a' : null}
              />
            </AdvancedMarkerWithRef>
          );
        })}
      </Map>
    </APIProvider>
  );
}

const PoiMarkers = (props: {pois: Poi[]}) => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      {props.pois.map( (poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          //title={poi.key}
          clickable={true}
          ref={markerRef}
          onClick={() => setInfowindowOpen(true)}>
          {infowindowOpen && (
            <InfoWindow
              anchor={marker}
              maxWidth={200}
              onCloseClick={() => setInfowindowOpen(false)}>
              {poi.description}
            </InfoWindow>
          )}
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

const AdvancedMarkerWithRef = (
  props: AdvancedMarkerProps & {
    onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
  }
) => {
  const {children, onMarkerClick, ...advancedMarkerProps} = props;
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <AdvancedMarker
      onClick={() => {
        if (marker) {
          onMarkerClick(marker);
        }
      }}
      ref={markerRef}
      {...advancedMarkerProps}>
      {children}
    </AdvancedMarker>
  );
};

type MarkerData = Array<{
  id: string;
  position: google.maps.LatLngLiteral;
  zIndex: number;
}>;

function getData() {
  const data: MarkerData = [];

  data.push({
    id: '0',
    position: {lat: 36.126104072519304, lng: -85.50700598196516},
    zIndex: 0,
  });
  data.push({
    id: '1',
    position: {lat: 36.19121147075565, lng: -85.49167830894544},
    zIndex: 0,
  });
  data.push({
    id: '2',
    position: {lat: 36.1626903747245, lng: -85.50597237724672},
    zIndex: 0
  });

  return data;
}

export default ClientMap;
