import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="add">AddContact</NavLink>
      </li>
    </nav>
  );
};

export default Navigation;
