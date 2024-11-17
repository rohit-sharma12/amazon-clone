import './Header.css';
import Navbar from './Navbar/Navbar';
import SubHeader from './SubHeader/SubHeader';
//import { Link } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';

function Header() {
  //const cartItems = useSelector((state) => state.cart.items)
  return (
    <div className='Header'>
      <Navbar/>
      <SubHeader/>
    </div>
  )
}

export default Header;
