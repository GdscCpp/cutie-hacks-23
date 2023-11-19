import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useFirestoreCollectionData } from "reactfire";

export default function AddEventModal() {
  const firestore = getFirestore();
  const collectionRef = collection(firestore, "timeline");

  const [name, setName] = useState("");
  const [place, setPLace] = useState("");

  const addEvent = () => {
    addDoc(collectionRef, {
      username: name,
      place: place,
      time: Date().toString(),
    });

    document.getElementById("my_modal_1")?.close();
  };

  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_1")?.showModal()}
      >
        Open Modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Check In</h3>
          <div className="modal-action">
            <form method="dialog" action={addEvent}>
              <input
                type="text"
                placeholder="Attendee Name"
                className="input w-full max-w-xs"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Location"
                className="input w-full max-w-xs"
                onChange={(e) => setPLace(e.target.value)}
                value={place}
              />
              <br />

              <button className="btn">Check in</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
