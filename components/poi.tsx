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
    <button className="rounded-full bg-primary m-3 flex text-white p-4" onClick={navigateToLocation}>
      <img src={marker.src} />
      <p className="ml-2">{name}</p>
    </button>
  );
}
