import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import Product from './Screen/Product/Product';
import Footer from './components/Footer/Footer';
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
  const [ dispatch] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("User is ", authUser);

      if (authUser) {
        //hey user just logged in /m the user was loogged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is looged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (

    <div className='app'>

      <Header />
      <Routes>

        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes>
      <Footer />

    </div >

  )
}

export default App
