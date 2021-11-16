import { NavLink } from 'react-router-dom';
import UseAuth from '../auth/useAuth';

const Navbar = () => {
  const auth = UseAuth();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Contact
            </NavLink>
          </li>
          {!auth.isLogged ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            ''
          )}
          {auth.isLogged ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payment"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Payment
                </NavLink>
              </li>

              <li>
                <button onClick={auth.logout}>Logout</button>
              </li>
            </>
          ) : (
            ''
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
