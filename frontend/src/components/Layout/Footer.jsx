import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By TuhinKundu.</div>
      <div>
        <Link to={"https://www.facebook.com/tuhin.kundu.169?mibextid=ZbWKwL"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://youtube.com/@tuhinkundu48?si=H4wB-2Ur513AtsXC"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/tuhinkundu007?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/tk_sk1999?igsh=MXg1MHN0N2I4NnU1cw=="} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
