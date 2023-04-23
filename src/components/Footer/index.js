import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='box'>
                <NavLink className="email"
                    to="/"> rakieciara@gmail.com
                </NavLink>
            </div>
            <ul className='footer'>
                <li>

                    <a
                        href="https://www.linkedin.com/in/milenamichalska"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>

                    <a
                        href="https://github.com/milenamichalska"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="anchor-icon"
                        />
                    </a>

                </li>
                <li>
                    <a
                        href="https://www.instagram.com/rakieciara/ "
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
        </div>)
}



export default Footer