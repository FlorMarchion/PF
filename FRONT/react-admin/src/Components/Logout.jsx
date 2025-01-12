import { signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Redux/Actions";
import closeSesion from "../assets/cerrar-sesion.png";

const firebaseConfig = {
  apiKey: "AIzaSyBlqjw6JkovRLJp8hSh-sG6q1tY1G-RitE",
  authDomain: "eatout-d06bc.firebaseapp.com",
  projectId: "eatout-d06bc",
  storageBucket: "eatout-d06bc.appspot.com",
  messagingSenderId: "716033457346",
  appId: "1:716033457346:web:532059ce3be30b1c140f5b",
  measurementId: "G-15QEGRB69P",
  serviceAccount:
    "firebase-adminsdk-e60fh@eatout-d06bc.iam.gserviceaccount.com",
  credential:
    "716033457346-uiqt23knlrpkkcp12d8da9qmp4pptfja.apps.googleusercontent.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

function Logout() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error ", error);
      setError(error.message);
    }
    dispatch(logoutUser());
    window.location.href = "/";
  };

  return (
    <>
      {user == null && (
        <img
          src={closeSesion}
          alt="cerrarSesion"
          onClick={handleSignOut}
          style={{ width: 25, paddingTop: 1, paddingRight: 7 }}
        />
      )}
    </>
  );
}

export default Logout;
