import SearchBar from '../SearchBar/SerachBar'
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to = '/about'>
                <button>About</button>
            </Link>
            <Link to = '/activities'>
                <button>Activities</button>
            </Link>
            <Link to = '/form'>
                <button>New Tourism Experience</button>
            </Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}


export default NavBar;