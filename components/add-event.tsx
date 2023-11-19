import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";

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

    // @ts-ignore
    document.getElementById("my_modal_1")?.close();
  };

  return (
    <>
      <button
        className="p-4 rounded-full bg-secondary text-white fixed bottom-14 right-10 border-none"
        // @ts-ignore
        onClick={() => document.getElementById("my_modal_1")?.showModal()}
      >
        +
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Check In</h3>
          <div className="modal-action">
            <form method="dialog" action={addEvent}>
              <input
                type="text"
                placeholder="Attendee Name"
                className="input w-full max-w-xs mb-4"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="text"
                placeholder="Location"
                className="input w-full max-w-xs mb-4"
                onChange={(e) => setPLace(e.target.value)}
                value={place}
              />
              <br />

              <button className="btn bg-secondary hover:bg-secondary border-info">
                Check in
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
