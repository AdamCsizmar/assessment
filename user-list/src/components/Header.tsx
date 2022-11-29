import { Link } from "react-router-dom";
import { GoHome, GoPlus } from "react-icons/go";

const Header = () => {
  return (
    <header className='Header'>
      <div className='Nav'>
        <Link to='/' className='Nav-button'>
          <GoHome />
          Home
        </Link>
        <Link to='/new' className='Nav-button'>
          <GoPlus />
          New User
        </Link>
      </div>
    </header>
  );
};

export default Header;
