import logo from '../../img/header/logo.png'
import './Header.css'
export const Header = () => {
  return (
    <header className='header'>
        <nav className='header_nav'>
            <img  className='heder_nav-img' src={logo} alt="" />
            <ul className='header_nav-ul'>
                <li className='header_nav-ul_li'>Browse</li>
                <li className='header_nav-ul_li'>Movies</li>
                <li className='header_nav-ul_li'>Tv Shows</li>
                <li className='header_nav-ul_li'>News</li>
            </ul>
        </nav>
    </header>
  )
}
