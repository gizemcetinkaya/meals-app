import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../Layout/Header.module.scss';

const Header = () => {
    return (
        <header className="lg:px-5">
            <div className="container mx-auto">
                <nav className="navbar py-2 bg-white relative flex items-center w-full justify-between">
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/">
                            <img src={logo} className="App-logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="px-6 w-full flex flex-wrap items-center justify-end">
                        <div className="items-center justify-end" id="navbarSupportedContentY">
                            <ul className="navbar-nav mr-auto flex flex-row justify-end">
                                <li className="nav-item mr-5">
                                    <NavLink className={`nav-link block pr-2 lg:px-2 py-2 text-gray-600 border-b-4 border-transparent hover:text-pink-700 hover:border-b-4 hover:border-pink-700 focus:text-pink-700 transition duration-150 ease-in-out ${(navData) => navData.isActive ? 'text-pink-700' : ''}`} to='/home'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link block pr-2 lg:px-2 py-2 text-gray-600 border-b-4 border-transparent hover:text-pink-700 hover:border-b-4 hover:border-pink-700 focus:text-pink-700 transition duration-150 ease-in-out ${(navData) => navData.isActive ? 'text-pink-700' : ''}`} to='/categories'>Categories</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;