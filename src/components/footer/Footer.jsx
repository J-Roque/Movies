import logo from '../../img/header/logo.png'
import './Footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_supcripcion">
            <p className='footer_supcripcion-p'>Get the movie & TV Shows straght <br />in your inbox each week</p>
            <div className="footer_supcripcion-inputs">
                <input type="text" placeholder="Firt Name" />
                <input type="Email" placeholder='Email' />
            </div>
            <button className='footer_supcripcion-btn'>Subscribe</button>
        </div>
        <div className="footer__polis">
        <img  className='footer__polis-img' src={logo} alt="logo" />
        <p className='footer__polis-p1'>2016 Movies .All Rights Reserved</p>
        <p>Terms of servise <span>Privasy Policy</span></p>
        </div>
    </footer>
  )
}
