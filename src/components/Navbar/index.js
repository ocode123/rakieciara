import { NavLink,} from 'react-router-dom'
import './index.scss'

const Navbar = () =>  
 <div className="nav-bar">
<navbar>
<nav>
  <div className='box'>
<NavLink className="title"
    exact="true"
    activeclassname="active"
    to="/"> RAKIECIARA
  </NavLink>
  </div>
<ul>
<li>
   
  <NavLink
    exact="true"
    activeclassname="active"
    to="/"> GŁÓWNA
  </NavLink>
  </li>
  <li>
  <NavLink 
    activeclassname="active"
    className="about-link"
    to="/cv"> KOSMICZNE&nbsp;CV
  </NavLink>
  </li>
  <li>
  <NavLink
    activeclassname="active"
    className="portfolio-link"
    to="/articles">PUBLIKACJE
  </NavLink></li>
  </ul>
</nav>
</navbar>
</div>

export default Navbar