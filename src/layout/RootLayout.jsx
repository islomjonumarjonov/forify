import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SignUpReminder from "../components/SignUpReminder";

function RootLayout(user) {
  return (
    <>
      <>
        <Navbar user={user} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    </>
  );
}

export default RootLayout;
