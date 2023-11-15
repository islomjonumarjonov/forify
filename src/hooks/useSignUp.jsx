import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "./useGlobalContext";
import { toast } from "react-toastify";

export function useSignUp() {
  const [error, setError] = useState(null);
  const { dispatch } = useGlobalContext();

  const signUp = (displayName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch({ type: "LOGIN", payload: user });
        toast.dark("You signed up");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return { signUp, error };
}
