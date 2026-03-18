import businessLogo from '../assets/businessLogo.jpg'
import { FlatButton } from './FlatButton'



export const Navbar = () => {
 

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme='light'>
      <div className="container-fluid">
        <img className='navbar-brand' src={businessLogo} alt='logo' />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href={`#about`} className="nav-link active">
                    About us
              </a>
            </li>
            <li className="nav-item">
              <a href={`#services`} className="nav-link active">
                    Services
              </a>
            </li>
            <li className="nav-item">
              <a href={`#projects`} className="nav-link active">
                    Projects
              </a>
            </li>
            <li className="nav-item">
              <a href={`/`} className="nav-link">
                <FlatButton title='Get Free Consultation' className='btn btnPrimary '/>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}