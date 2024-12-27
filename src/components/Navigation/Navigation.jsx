import { NavLink } from 'react-router-dom';
import './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/movies" activeClassName="active">Movies</NavLink>
    </nav>
);

export default Navigation;