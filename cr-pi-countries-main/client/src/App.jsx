import { Route,Routes } from 'react-router-dom'

import './App.css'
import postActivity from './Components/Activity/postActivity'
import Home from './Components/Home/Home'
import CountryDetails from './Components/Details/CountryDetails'
import ActivityDetails from './Components/Details/ActivityDetails'
import LandingPage from './Components/Landing/LandingPage'

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path= '/' element = {LandingPage}/>
        <Route path= '/home' element = {Home}/>
        <Route path= '/countries/:id' element= {CountryDetails}/>
        <Route path='/countries/name' element= {CountryDetails}/>
        <Route path= '/form' element= {postActivity}/>
        <Route path= '/activities/name' element= {ActivityDetails}/>
      </Routes>
      
    </div>
    
  );
}

export default App
