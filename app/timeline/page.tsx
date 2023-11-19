"use client";

import AddEventModal from "@/components/add-event";
import Events from "@/components/events";
import { getFirestore } from "firebase/firestore";

import { FirestoreProvider } from "reactfire";

export default function page() {
  const firestoreInstance = getFirestore();

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <div className="w-full flex-col items-center mx-auto inset-0 flex bg-primary">
        <Events />
        <AddEventModal />
      </div>
    </FirestoreProvider>
  );
}
