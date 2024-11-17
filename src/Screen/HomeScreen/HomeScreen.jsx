import './HomeScreen.css'
import HomeBanner from './HomeBanner/HomeBanner';
import HomeDetails from './HomeDetails/HomeDetails';
//import Footer from '../../components/Footer/Footer';
function HomeScreen() {
  return (
    <div className='homeScreen'>
      <HomeBanner/>
      <HomeDetails/>
    </div>
  )
}

export default HomeScreen
