import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <NavLink to='/breakfast'>
                Breakfast
            </NavLink>
            <NavLink to='/lunch'>
                Lunch
            </NavLink>
            <NavLink to='/dinner'>
                Dinner
            </NavLink>
            <NavLink to='/dessert'>
                Dessert
            </NavLink>
        </nav>
    );
}

export default Navbar;
