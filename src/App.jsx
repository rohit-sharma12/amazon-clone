import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import Product from './Screen/Product/Product';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>

      <Header />
      <Routes>

        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />

    </div >

  )
}

export default App
