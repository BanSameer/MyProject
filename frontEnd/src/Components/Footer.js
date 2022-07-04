import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import "../App.css";

const Footer=()=> {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> 
         <TwitterIcon /> 
         <FacebookIcon /> 
         <LinkedInIcon /> 
      </div>
      <p> &copy; 2022 pizzaSam.com, All-Rights reserved by Sameer.org</p>
    </div>
  );
}

export default Footer;
