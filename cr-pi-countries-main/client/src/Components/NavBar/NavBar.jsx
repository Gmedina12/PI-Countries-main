import SearchBar from '../SearchBar/SearchBar'
import { Link, useLocation } from "react-router-dom";
import style from './NavBar.module.css'

const NavBar = (props) => {
    const location = useLocation().pathname
    return (
        <div className={style.navBar}>
            <Link to='/home'>
                <button className={style.buttonNav}>Home 🏚️</button>
            </Link>
            <Link to = '/activities'>
                <button className={style.buttonNav}>Activities 🌎</button>
            </Link>
            <Link to = '/form'>
                <button className={style.buttonNav}>New Tourism Experience 🗺️</button>
            </Link>
            <Link>
                <button className= {style.buttonNav}>Exit ✈️</button>
            </Link>
            {(location === '/home')? <SearchBar onSearch={props.onSearch}/>: ''}   
        </div>
    )
}


export default NavBar;