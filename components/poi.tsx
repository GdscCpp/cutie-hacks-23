export interface PoiProps {
  name: string;
  location: google.maps.LatLngLiteral;
  map?: google.maps.Map;
}

import marker from "@/public/marker.svg";

export default function Poi({ name, location, map }: PoiProps) {
  const navigateToLocation = () => {
    map!.panTo(location);
  };
  return (
    <button className="btn flex-inline" onClick={navigateToLocation}>
      <img src={marker.src} />
      {name}
    </button>
  );
}
