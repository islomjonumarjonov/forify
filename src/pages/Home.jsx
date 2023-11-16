import React from "react";
import Window from "../components/Window";
import Search from "../components/Search";
import { Link } from "react-router-dom";

function Home(user) {
  const profile = user.user;

  return (
    <div className="cite-container">
      <div className="flex justify-between items-center">
        {profile && <Search />}
        {/* <Filter /> */}
      </div>
      <div>
        <Window className="w-full" user={user} />
      </div>
    </div>
  );
}

export default Home;
