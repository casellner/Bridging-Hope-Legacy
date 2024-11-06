import React, { useCallback, useState } from 'react';

//Google Maps imports
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
  AdvancedMarkerProps,
  AdvancedMarkerAnchorPoint
} from '@vis.gl/react-google-maps';

const data = getData()
  .sort((a, b) => b.position.lat - a.position.lat)
  .map((dataItem, index) => ({...dataItem, zIndex: index}));

const Z_INDEX_SELECTED = data.length;
const Z_INDEX_HOVER = data.length + 1;

const ClientMap = () => {
  const [markers] = useState(data);

  const [hoverId, setHoverId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

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

  const onMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  const handleInfowindowCloseClick = useCallback(
    () => setInfoWindowShown(false),
    []
  );

  return(
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={12}
        defaultCenter={{lat: 36.162839, lng: -85.5016423}}
        mapId='44349268b190049a'
        onClick={onMapClick}
        clickableIcons={false}
        disableDefaultUI>
        {/* <PoiMarkers pois={locations} /> */}
        {markers.map(({id, zIndex: zIndexDefault, position}) => {
          let zIndex = zIndexDefault;

          if (hoverId === id) {
            zIndex = Z_INDEX_HOVER;
          }

          if (selectedId === id) {
            zIndex = Z_INDEX_SELECTED;
          }

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

        {infoWindowShown && selectedMarker && (
          <InfoWindow
            anchor={selectedMarker}
            pixelOffset={[0, -2]}
            onCloseClick={handleInfowindowCloseClick}>
            <h2>Marker {selectedId}</h2>
            <p>Some arbitrary html to be rendered into the InfoWindow.</p>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}

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
