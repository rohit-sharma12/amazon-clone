import './Checkout.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/action/action';
import { toast, ToastContainer } from 'react-toastify';

function Checkout() {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a = 0;
  let cost = cartItems.map((item) => { return a = a + item.price })

  useEffect(() => {
    setCartItem(cartItems)
  }, [cartItems])

  const handleRemoveFromCart = (id) => {
    toast.error("Item Removed From Cart", {
      position: "bottom-right"
    })
    dispatch(removeFromCart(id))
  }
  return (
    <div className='checkout'>

      <div className="left">
        <div className="leftTitle"><h2>Your Shopping Cart</h2></div>
        <div className="deselectItem">Deselect all items</div>
        <div className="cartPrice">Price</div>

        <div className="cartItem">
          {
            cartItems.map((item, index) => {
              return (
                <div className="cartItemBlock">
                  <div className="cartItemLeftBlock">
                    <div className="cartItemLeftBlockImage">
                      <img className='cartItemLeftBlockImg' src={item.imageUrl} alt="" />
                    </div>
                    <div className="cartItemLeftBlockDetails">
                      <div className="cartItemProductName">{item.name}</div>
                      <div className="instockCart">In stock</div>
                      <div className="elgFreeShp">Eligible for FREE shipping</div>
                      <div className="removeFromCart" onClick={() => { handleRemoveFromCart(item.id) }}>Remove from Cart</div>
                    </div>
                  </div>
                  <div className="cartItemRightBlock">
                    $ {item.price}
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>

      <div className="right">
        <div className="subTotalTitle">Subtotal ({cartItem.length} items) : <span className='subTotalTitleSpan'>$ {a}</span></div>
        <small className='gift'>
          <input type="checkbox" /> This order contains a gift
        </small>
        <button>Proceed to Buy</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Checkout
