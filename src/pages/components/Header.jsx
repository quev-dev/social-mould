import icDown from '../../theme/images/icons/down.svg';
import logo from '../../theme/images/socialmould-logo.png';

import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header id="sec-header" className="
    px-6 py-16 mb-16
    flex flex-col items-center justify-center
    animate__animated animate__fadeIn
    ">

      <section className="
      flex flex-col items-center
      animate__animated animate__rotateInDownLeft animate__fast
      ">
        
        <h1>Social Mould</h1>
        <img id="logo" src={logo} alt="Site Logo" className="
        animate__animated animate__rotateIn mb-4
        "/>

        <p id="site-description" className="
        mb-8
        animate__animated animate__fadeIn animate__delay-1s
        ">
          Generate a professional social media profile
          with a touch of your personality.
        </p>

        <Link to="sec-form" spy={true} smooth={true} 
        offset={-50} duration={500} className="no-defaults">
          <button id="header-button" className="
          animate__animated animate__fadeIn animate__delay-1s
          animate__slow
          ">
            <img src={icDown} alt="Down Icon" className=""/>
          </button>
        </Link>
      </section>
    </header>
  );
}