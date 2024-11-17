import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector,  } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <div className='Navbar'>
      <Link to='/'>
        <img className='logo' src="amazon_logo.png" alt="" />
      </Link>

      <div className="search">
        <input className='searchIn' type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>

      </div>
      <div className="nav">
        <Link to='/login'>
          <div className="option">
            <span className='optionOne'>Hello Rahul</span>
            <span className='optionTwo'>Sign In</span>
          </div>
        </Link>
        <div className="option">
          <span className='optionOne'>Returns</span>
          <span className='optionTwo'>& Orders</span>
        </div>
        <div className="option">
          <span className='optionOne'>Your</span>
          <span className='optionTwo'>Prime</span>
        </div>

        <Link to='/checkout'>
          <div className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='cartCount'>{cartItems.length}</span>
          </div>
        </Link>

      </div>
    </div>
  )
}
export default Navbar
