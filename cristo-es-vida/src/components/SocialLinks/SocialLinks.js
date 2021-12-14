import React from 'react'
import {FaInstagram} from 'react-icons/fa';

//iconos
import { ReactComponent as YouTubeIcon } from "../../assets/img/svg/youtube.svg";
import { ReactComponent as FacebookIcon } from "../../assets/img/svg/facebook.svg";
//import { ReactComponent as InstagramIcon } from '../../../assets/img/svg/instagram.svg';

import './SocialLinks.css';

export default function SocialLinks() {
    return (
        <div className="social-links"  >
          <a
            href="https://www.facebook.com/gerardocristian.pinasco"
            className="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UChkPxQ1iIb98RREI4AAhVPA"
            className="Youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </a>
          <a
            href="https://www.instagram.com/mcristoesvida.padua/"
            id="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size="2rem"/>
          </a>
        </div>)
}
