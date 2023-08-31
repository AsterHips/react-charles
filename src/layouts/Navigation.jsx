import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navigation = () => {

  const currentPage = useLocation().pathname;

        return (
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={currentPage === "/" ? "active" : ""}>Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/A_propos" className={currentPage === "/A_propos" ? "active" : ""}>A Propos</NavLink>
              </li>
            </ul>
          </nav>
        );
      };
      
      export default Navigation;