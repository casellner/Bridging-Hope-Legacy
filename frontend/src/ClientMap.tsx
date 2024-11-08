import React, { useEffect, useCallback, useState } from 'react';

//Google Maps imports
import {
  APIProvider,
  Map,
  useMap,
  useMapsLibrary,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
  AdvancedMarkerProps,
  AdvancedMarkerAnchorPoint
} from '@vis.gl/react-google-maps';

const data = getData()
  /* .sort((a, b) => b.position.lat - a.position.lat) */ // Sort by latitude (this messes up the array, but I am keeping the code here for reference)
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
            <h2>{markers[Number(selectedId)].name}</h2>
            <p>selectedID: {selectedId}</p>
            <p>{markers[Number(selectedId)].description}</p>
          </InfoWindow>
        )}

        <Directions />
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

// This type is used to define the data for the markers on the map
type MarkerData = Array<{
  id: string;
  name: string;
  description: string;
  position: google.maps.LatLngLiteral;
  zIndex: number;
}>;

/* function: getData
   purpose:  This function returns an array of locations where clients can get aid */
function getData() {
  const data: MarkerData = [
    {
      id: '0',
      name: 'Cookeville Rescue Mission',
      description:'Cookeville Rescue Mission offers temporary emergency shelter to anyone who has need of it. ' +
                  'In addition to Emergency Shelter, we provide a long-term transitional program for men, women, ' +
                  'and families who are seeking to enrich their lives and break the cycle of homelessness. ' +
                  'Residents attend Life Recovery Groups to help them overcome the crushing weight of chemical dependence ' +
                  'and other life controlling habits. ' +
                  'Families and individuals receive food boxes that are prepared with donations received from local foodbanks, ' +
                  'and donations from individuals, churches, businesses, and civic groups.',
      position: {lat: 36.126104072519304, lng: -85.50700598196516},
      zIndex: 0
    },
    {
      id: '1',
      name: 'Life Church',
      description: 'TODO: Add description',
      position: {lat: 36.19121147075565, lng: -85.49167830894544},
      zIndex: 0
    },
    {
      id: '2',
      name: 'Cookeville First Baptist Church',
      description: 'TODO: Add description',
      position: {lat: 36.1626903747245, lng: -85.50597237724672},
      zIndex: 0
    }
  ];

  return data;
}

function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}));
  }, [routesLibrary, map]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: '1331 S Jefferson Ave, Cookeville, TN 38506',
        destination: '2223 N Washington Ave, Cookeville, TN 38501',
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true
      })
      .then(response => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientMap;
