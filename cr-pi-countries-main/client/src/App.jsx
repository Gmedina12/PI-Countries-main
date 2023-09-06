import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'

// import postActivity from './Components/Activity/postActivity'
import Home from './Components/Home/Home'
import CountryDetails from './Components/Details/CountryDetails'
import ActivityDetails from './Components/Details/ActivityDetails'
import LandingPage from './Components/Landing/LandingPage'
import Countries from './Components/CountryRender/CountryRender'
import Activities from './Components/ActivityRender/ActivityRender'
import About from './Components/About/About'

function App() {
  return (
    <BrowserRouter>
       <div className="App">
      <Routes>
        <Route path= '/' Component = {LandingPage}/>
        <Route path= '/home' Component = {Home}/>
        <Route path= '/about' Component = {About}/>
        <Route path='/countries' Component = {Countries}/> 
        <Route path= '/countries/:id' Component= {CountryDetails}/>
        <Route path='/countries/name' Component= {CountryDetails}/>
        {/* <Route path= '/form' Component= {postActivity}/> */}
        <Route path='/activities' Component = {Activities}/> 
        <Route path= '/activities/name' Component= {ActivityDetails}/>
      </Routes>
      
    </div>
    </BrowserRouter>
   
    
  );
}

export default App
