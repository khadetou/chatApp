import Styles from '../styles/style.module.scss'
const Navbar = () => {
  const {
    button,
    navContent,
    container,
    wrapper,
    navContent__container,
    navContent__brand,
    navContent__brandLight,
    navContent__links,
    navContent__linkC,

    navContent__linkT,
  } = Styles
  return (
    <div className={navContent}>
      <div className={container}>
        <div className={`${wrapper} ${navContent__container}`}>
          <a href="#" className={navContent__brand}>
            Chat<span className={navContent__brandLight}>app</span>
          </a>
          <nav className={navContent__links}>
            <a href="#" className={navContent__linkC}>
              Product
            </a>
            <a href="#" className={navContent__linkC}>
              Services
            </a>
            <a href="#" className={navContent__linkC}>
              Contact
            </a>
            <a href="#" className={navContent__linkC}>
              Log In
            </a>
            <a href="#" className={`${button} ${navContent__linkT}`}>
              Try It Free
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
