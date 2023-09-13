import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import PostActivity from './Components/Activity/PostActivity'
import Home from './Components/Home/Home'
import CountryDetails from './Components/Details/CountryDetails'
import LandingPage from './Components/Landing/LandingPage'
import Countries from './Components/CountryRender/CountryRender'
import NavBar from './Components/NavBar/NavBar'
import Activities from './Components/Activity/Activities'


function App() {
  const location = useLocation().pathname
  return (
    
      <div>
        {(location !== '/')?<NavBar/>:''}
        <Routes>
          <Route path='/' Component={LandingPage} />
          <Route path='/home' Component={Home} />
          <Route path='/countries' Component={Countries} />
          <Route path='/countries/:ID' Component={CountryDetails} />
          <Route path='/countries/name' Component={CountryDetails} />
          <Route path='/form' Component={PostActivity} />
          <Route path='/activities' Component={Activities} />
        </Routes>
      </div>
 
  );
}

export default App
