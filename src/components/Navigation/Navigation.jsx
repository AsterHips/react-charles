import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <a href="/yo3">Lien 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
