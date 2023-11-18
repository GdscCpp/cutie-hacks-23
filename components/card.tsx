import Poi, { PoiProps } from "./poi";

interface CardProps {
  map: google.maps.Map;
  pois: PoiProps[];
}



export default function Card({ map, pois }: CardProps) {
  return (
    <div className="card w-full bg-white shadow-xl fixed bottom-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Nearby Locations</h2>
        <div className="flex flex-row">
          {pois.map((poi, index) => {
            return (
              <Poi
                key={index}
                name={poi.name}
                location={poi.location}
                map={map}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
