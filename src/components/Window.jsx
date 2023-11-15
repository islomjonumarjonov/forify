import React from "react";

//components
import Popular from "./Popular";
import NowPlaying from "./NowPlaying";
import Upcoming from "./Upcoming";
// import SignUpReminder from "./SignUpReminder";

function Window(user) {
  const profile = user.user;
  // console.log(profile);
  return (
    <div className="">
      {/* {profile && <SignUpReminder />} */}
      <div className="flex flex-col gap-4">
        <div className="border">
          <h2 className="text-2xl font-bold bg text-neutral-950">Popular:</h2>
          <div className="h-[340px] py-5 space-x-4 carousel carousel-center rounded-box ">
            <Popular />
          </div>
        </div>
        <div className="border">
          <h2 className="text-2xl font-bold bg text-neutral-950">
            Now Playing:
          </h2>
          <div className="h-[340px] py-5 space-x-4 carousel carousel-center rounded-box ">
            <NowPlaying />
          </div>
        </div>
        <div className="border">
          <h2 className="text-2xl font-bold bg text-neutral-950">Upcoming:</h2>
          <div className="h-[650px] py-5 space-x-4 carousel carousel-center rounded-box ">
            <Upcoming />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Window;
