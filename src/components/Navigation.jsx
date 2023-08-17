import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/A_propos">A Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;