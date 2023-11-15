import React from "react";
import { FaYoutube, FaTelegramPlane, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className=" border-t ">
      <div className="flex items-center justify-center cite-container py-8">
        <div className="flex gap-5">
          <a href="https://www.youtube.com/" className="cursor-pointer">
            <FaYoutube className="hover:text-neutral-50 transition-all text-xl text-neutral-600" />
          </a>
          <a href="https://web.telegram.org/k/" className="cursor-pointer">
            <FaTelegramPlane className="hover:text-neutral-50 transition-all text-xl text-neutral-600" />
          </a>
          <a
            href="https://www.google.com/search?q=tiktok&rlz=1C1VDKB_deUZ1043UZ1043&oq=tiktok&gs_lcrp=EgZjaHJvbWUyEQgAEEUYORhDGIMBGLEDGIoFMgYIARBFGEAyDQgCEAAYgwEYsQMYgAQyDQgDEAAYgwEYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBwgFEAAYgAQyDQgGEAAYgwEYsQMYgAQyBggHEEUYPdIBCDI2NzdqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8"
            className="cursor-pointer"
          >
            <FaTiktok className="hover:text-neutral-50 transition-all text-xl text-neutral-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
