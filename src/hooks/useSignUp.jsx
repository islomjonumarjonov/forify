import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

export function useSignUp() {
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const signUp = (displayName, email, password) => {
    const user = { displayName, email, password };
    dispatch({ type: "LOGIN", payload: user });
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(async (user) => {
    //     await updateProfile(auth.currentUser, {
    //       displayName,
    //     });

    //   })
    //   .catch((error) => {
    //     setError(error);
    //   });
  };

  return { signUp, error };
}
