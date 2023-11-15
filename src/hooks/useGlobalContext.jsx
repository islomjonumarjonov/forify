import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { auth } from "../firebase/firebaseConfig";

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  //   if (!context) {
  //     throw new Error("useGlobalContext must be use in the GlobalContext(");
  //   }

  return context;
}
