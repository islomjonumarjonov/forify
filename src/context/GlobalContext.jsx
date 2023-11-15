import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export const GlobalContext = createContext();
function dataFromLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("forifyData")) || {
      user: null,
      onAuthChange: false,
      bookmarked: [],
    }
  );
}

const changeState = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_CHANGE":
      return { ...state, onAuthChange: true };
    case "ADD_BOOKMARK":
      return { ...state, bookmarked: [...state.bookmarked, action.payload] };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, dataFromLocalStorage());

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_CHANGE", payload: true });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("forifyData", JSON.stringify(state));
  }, [state]);

  const addNewBookmark = (newMovie) => {
    const isMovieAlreadyAdded = state.bookmarked.every((movie) => {
      return movie.id !== newMovie.id;
    });

    console.log(isMovieAlreadyAdded, state);

    if (isMovieAlreadyAdded) {
      dispatch({ type: "ADD_BOOKMARK", payload: newMovie });
      toast.dark("You bookmarked a movie");
    }
  };

  // console.log(state);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch, addNewBookmark }}>
      {children}
    </GlobalContext.Provider>
  );
}
