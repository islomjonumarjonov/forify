import { Link } from "react-router-dom";
import React from "react";

function SignUpReminder() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center gap-3 border p-5 rounded-lg">
        <h1 className="text-3xl">Sign Up to get more opportunities</h1>
        <Link className="btn btn-primary hover:btn-outline" to="signUp">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignUpReminder;
