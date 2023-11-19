"use client";

import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { center } from "@/lib/location";
import Card from "@/components/card";
import marker from "@/public/marker.svg";
import currentLocation from "@/public/current-location.svg";
import BottomBar from "@/components/bottom-bar";

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
  {
    name: "BRIC Pool",
    location: {
      lat: 34.05394266519396,
      lng: -117.82010841124998,
    },
  },
  {
    name: "Building 43",
    location: {
      lat: 34.0547064427341,
      lng: -117.81934668243306,
    },
  },
];

const blue_lights = [
  {
    name: "",
    location: {
      lat: 34.055625,
      lng: -117.829963,
    },
  },
  {
    name: "",
    location: {
      lat: 34.055340,
      lng: -117.829192,
    },
  },
  {
    name: "",
    location: {
      lat: 34.055340,
      lng: -117.829192,
    },
  },
  {
    name: "",
    location: {
      lat: 34.058038,
      lng: -117.828926,
    },
  },
  {
    name: "",
    location: {
      lat: 34.058161,
      lng: -117.828532,
    },
  },
  {
    name: "",
    location: {
      lat: 34.057138,
      lng: -117.825942,
    },
  },
  {
    name: "",
    location: {
      lat: 34.057138,
      lng: -117.825942,
    },
  },
  {
    name: "",
    location: {
      lat: 34.057331,
      lng: -117.826803,
    },
  },
  {
    name: "",
    location: {
      lat: 34.056803,
      lng: -117.826674,
    },
  },
  {
    name: "",
    location: {
      lat: 34.056803,
      lng: -117.826674,
    },
  },
  {
    name: "",
    location: {
      lat: 34.057205,
      lng: -117.822803,
    },
  },
  {
    name: "",
    location: {
      lat: 34.057205,
      lng: -117.822803,
    },
  },
  {
    name: "",
    location: {
      lat: 34.057753,
      lng: -117.822381,
    },
  },
  {
    name: "",
    location: {
      lat: 34.057394,
      lng: -117.821905,
    },
  },
  {
    name: "",
    location: {
      lat: 34.058472,
      lng: -117.822214,
    },
  },
  {
    name: "",
    location: {
      lat: 34.058338,
      lng: -117.821457,
    },
  },
  {
    name: "",
    location: {
      lat: 34.058032,
      lng: -117.820784,
    },
  },
  {
    name: "",
    location: {
      lat: 34.059903,
      lng: -117.820855,
    },
  },
  {
    name: "",
    location: {
      lat: 34.061502,
      lng: -117.820504,
    },
  },
  {
    name: "",
    location: {
      lat: 34.061048,
      lng: -117.819862,
    },
  },
  {
    name: "",
    location: {
      lat: 34.061561,
      lng: -117.818493,
    },
  },
  {
    name: "",
    location: {
      lat: 34.0602688732511,
      lng: -117.81807298323072,
    },
  },
  {
    name: "",
    location: {
      lat: 34.059883,
      lng: -117.816355,
    },
  },
  {
    name: "",
    location: {
      lat: 34.060683,
      lng: -117.815006,
    },
  },
  {
    name: "",
    location: {
      lat: 34.061934,
      lng: -117.811834,
    },
  },
  {
    name: "",
    location: {
      lat: 34.061177,
      lng: -117.812358,
    },
  },
  {
    name: "",
    location: {
      lat: 34.061076,
      lng: -117.811782,
    },
  },
  {
    name: "",
    location: {
      lat: 34.061088,
      lng: -117.811623,
    },
  },
  {
    name: "",
    location: {
      lat: 34.059466,
      lng: -117.809179,
    },
  },
  {
    name: "",
    location: {
      lat: 34.055684,
      lng: -117.820140,
    },
  },
  {
    name: "",
    location: {
      lat: 34.05605122082334,
      lng: -117.81947977451601,
    },
  },
  {
    name: "",
    location: {
      lat: 34.054204,
      lng: -117.820896,
    },
  },
  {
    name: "",
    location: {
      lat: 34.053977,
      lng: -117.818493,
    },
  },
  {
    name: "",
    location: {
      lat: 34.054479,
      lng: -117.817764,
    },
  },
  {
    name: "",
    location: {
      lat: 34.054519,
      lng: -117.815983,
    },
  },
  {
    name: "",
    location: {
      lat: 34.052977,
      lng: -117.815790,
    },
  },
  {
    name: "",
    location: {
      lat: 34.051079,
      lng: -117.816905,
    },
  },
  {
    name: "",
    location: {
      lat: 34.051568,
      lng: -117.818268,
    },
  },
]






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
    <div className={"w-screen h-screen"}>
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
          {blue_lights.map((poi, index) => {
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
      <div className="fixed right-0 bottom-[200px]">
        <button
          className="btn border-none bg-white rounded-full"
          onClick={setCurrentLocation}
        >
          <img src={currentLocation.src} />
        </button>
      </div>

      <Card pois={pois} map={map!} />
      <BottomBar />
    </div>
  );
}
