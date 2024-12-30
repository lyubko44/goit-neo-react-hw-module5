import { NavLink } from 'react-router-dom';
import './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? 'active' : '')}>Movies</NavLink>
    </nav>
);

export default Navigation;