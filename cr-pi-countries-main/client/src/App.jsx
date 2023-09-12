import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './Components/Redux/Store/index'


import PostActivity from './Components/Activity/postActivity'
import Home from './Components/Home/Home'
import CountryDetails from './Components/Details/CountryDetails'
import activityDetail from './Components/Details/ActivityDetails'
import LandingPage from './Components/Landing/LandingPage'
import Countries from './Components/CountryRender/CountryRender'
import ActivityRender from './Components/ActivityRender/ActivityRender'
import About from './Components/About/About'
import NavBar from './Components/NavBar/NavBar'


function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' Component={LandingPage} />
          <Route path='/home' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/countries' Component={Countries} />
          <Route path='/countries/:ID' Component={CountryDetails} />
          <Route path='/countries/name' Component={CountryDetails} />
          <Route path='/form' Component={PostActivity} />
          <Route path='/activities' Component={ActivityRender} />
          <Route path='/activities/name' Component={activityDetail} /> 
        </Routes>
      </div>
    </BrowserRouter>


    </Provider>


  );
}

export default App
