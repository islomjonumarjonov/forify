import React from "react";
import { Link } from "react-router-dom";

function Profile(user) {
  if (user) {
    const { displayName, email, password } = user.user;
    console.log(displayName, "DISPLAY");
    return (
      <div className="cite-container">
        <h1 className="text-xl">
          User: <span className="text-neutral-100 text-3xl">{displayName}</span>
        </h1>
        <h2 className="text-xl">
          Email: <span className="text-neutral-100 text-  xl">{email}</span>
        </h2>
        <Link className="btn btn-primary hover:btn-outline" to="signUp">
          SignUp
        </Link>
      </div>
    );
  } else if (user.user) {
    const profile = user.user;
    const {
      accessToken,
      email,
      photoURL,
      displayName: nick,
      phone_number: phone,
    } = profile;
    console.log(profile);
    return (
      <div className="cite-container flex gap-10">
        <div>
          <img className="w-36" src={photoURL} alt="" />
        </div>
        <div className="flex justify-between flex-col">
          <div>
            <h1>
              User: <span>{nick}</span>
            </h1>
            <p>
              Email: <span>{email}</span>
            </p>
            <p>
              Phone: {!phone && <span>---</span>}
              {phone && <span>{phone}</span>}
            </p>
          </div>
          <div>
            <Link className="hover:btn-outline btn btn-primary" to="signUp">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
