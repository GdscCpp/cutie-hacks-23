"use client";

import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { center } from "@/lib/location";
import Card from "@/components/card";
import marker from "@/public/marker.svg";

const containerStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};

const OPTIONS: google.maps.MapOptions = {
  minZoom: 16,
  maxZoom: 18,
  mapTypeId: "satellite",
  disableDefaultUI: true,
};

const pois = [
  {
    name: "BRIC",
    location: {
      lat: 34.05439687248437,
      lng: -117.82052277045571,
    },
  },
];

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [map, setMap] = useState<null | google.maps.Map>();
  const [loadedLocation, setLoadedLocation] = useState(false);
  const [location, setLocation] = useState<google.maps.LatLngLiteral>();

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    map.setZoom(5);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  const setCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setLocation({ lat: latitude, lng: longitude });
      if (map) {
        map.moveCamera({ center: location });
        if (location && location != center) {
          setLoadedLocation(true);
        }
      }
    });
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      if (!loadedLocation) {
        setCurrentLocation();
      }
    }
  });

  return (
    <main className={"w-screen h-screen"}>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={OPTIONS}
        >
          <Marker position={location!} animation={google.maps.Animation.DROP} />
          {pois.map((poi, index) => {
            return (
              <Marker
                label={{
                  text: poi.name,
                }}
                position={poi.location}
                icon={{
                  url: marker.src,
                  labelOrigin: new google.maps.Point(5, 30),
                }}
              />
            );
          })}
        </GoogleMap>
      )}
      <div className="fixed right-0 bottom-[150px] hover:border-white border-2 rounded-full">
        <button
          className="btn bg-transparent border-none hover:bg-transparent"
          onClick={setCurrentLocation}
        >
          <img src={marker.src} />
        </button>
      </div>

      <Card pois={pois} map={map!} />
    </main>
  );
}
