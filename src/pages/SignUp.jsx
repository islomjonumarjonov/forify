import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";
import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Signup() {
  const [value, setValue] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useSignUp();
  const { dispatch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(displayName, email, password);
    {
      displayName && toast.dark("You signed up");
      // toast.dark("Please refresh this site");
    }
  };

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      const user = data;
      toast.dark("You signed up");
      toast.dark("Please refresh this site");
      dispatch({ type: "LOGIN", payload: user });
    });
  };
  return (
    <div className="flex h-full cite-container justify-center">
      <form
        onSubmit={handleSubmit}
        className="border px-5 w-fullmax-w-xl py-10 flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl">Signup</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your name:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email:</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password:</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary my-10">
          Signup
        </button>
      </form>
      {/* google 
      {/* <div className="px-5 py-10 flex flex-col gap-10">
        <h2 className="text-3xl">SignUp with:</h2>
        <Link className="btn btn-primary" onClick={handleClick}>
          <span>
            <FaGoogle />
          </span>
          Google
        </Link>
      </div> */}
    </div>
  );
}

export default Signup;
