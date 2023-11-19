import firebaseConfig from "@/config/firebase";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { useFirestoreCollectionData } from "reactfire";

export default function Events() {
  const firestore = getFirestore();
  const collectionRef = collection(firestore, "timeline");
  const timelineQuery = query(collectionRef, orderBy("time", "desc"));

  const { status, data: events } = useFirestoreCollectionData(timelineQuery, {
    idField: "id",
  });

  if (status === "loading")
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <div>
        <div className="card w-auto bg-white shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Recent Events</h2>
            <div className="flex flex-col">
              {events.map((event) => (
                <div key={event.id}>
                  <strong>{event.username}</strong> checked in at{" "}
                  <strong>{event.place}</strong> at{" "}
                  {event.time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
