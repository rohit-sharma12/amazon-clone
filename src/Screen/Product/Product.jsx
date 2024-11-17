import './Product.css';
import productDetail from './product.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/action';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Product() {

  const dispatch = useDispatch();
  const cartItems= useSelector((state) => state.cart.items);
  const handleAddToCart = (item) => {
    toast.success("Successfully added in cart", {
      position: "bottom-right"
    });
    dispatch(addToCart(item));
  }
  return (
    <div className='productPage'>
      <div className="productTopBanner">
        <div className="productTopBannerItems">
          Electronic
        </div>
        <div className="productTopBannerItemsSubMenu">Mobile & Accessories</div>
        <div className="productTopBannerItemsSubMenu">Laptop & Accessories</div>
        <div className="productTopBannerItemsSubMenu">TV & Accessories</div>
        <div className="productTopBannerItemsSubMenu">Audio</div>
        <div className="productTopBannerItemsSubMenu">Cameras</div>
        <div className="productTopBannerItemsSubMenu">Office Stationary</div>
        <div className="productTopBannerItemsSubMenu">Musical Instrument</div>
        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
      </div>

      <div className="productPageMain">
        <div className="productPageMainTopBanner">1-5 of 5 results for <span className='productPageMainTopBannerSpan'>AsusVivobook</span>
        </div>

        <div className="itemImageProductPage">

          {
            productDetail.product.map((item) => {
              return (
                <div className="itemImageProductPageOne" key={item.id}>
                  <div className="imgBlockItemsImageProductPageOne">
                    <img src={item.imageUrl} className='productImageProduct' alt="" />
                  </div>

                  <div className="productName">
                    <div>{item.name}</div>
                    <div className="productNameRating">
                      <p>⭐</p>
                      <p>⭐</p>
                      <p>⭐</p>
                    </div>
                    <div className="priceProductDetailPage">
                      <div className="priceText">$</div>
                      <div className="rateHomeDetail">
                        <div className="rateHomeDetailPrice">{item.price}</div>
                        <div className="addCart" onClick={() => (handleAddToCart(item))}>Add to Cart</div>
                      </div>
                    </div>
                    <div className="offProduct">Upto 20% off on select cards</div>
                    <div className="freeDelivery">Free Delivery By Amazon</div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Product
