import CartWidget from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const NavBar= () => {
    return(
        <nav className='NavBar my-5'> 
         <Link to='/'>
            <h2 className='title has-text-danger  has-text-centered p-5'>CarsCell</h2>
            </Link>
            <div className="is-flex is-align-items-center is-justify-content-center">
                <NavLink to={`/`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>

                    Home&nbsp; <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink to={`/category/Autos`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Autos</NavLink>
                {/* <button className="button is-primary m-3">Celulares</button> */}
                <NavLink to={`/category/Pick-ups`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Pikc-ups</NavLink>
                <NavLink to={`/category/Suvs`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Suvs</NavLink>
                <CartWidget />
            </div>

        </nav>
    );
}

export default NavBar;