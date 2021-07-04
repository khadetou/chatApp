import Styles from '../styles/style.module.scss'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
  const {
    show,
    hide,
    button,
    navContent,
    container,
    wrapper,
    navContent__container,
    navContent__brand,
    navContent__brandLight,
    navContent__links,
    navContent__linkC,
    navContent__close,
    navContent__menu,
    navContent__linkT,
    navContent__closeContent,
    navContent__linkp,
  } = Styles

  const [toggle, setToggle] = useState(false)
  return (
    <div className={navContent}>
      <div className={container}>
        <div className={`${wrapper} ${navContent__container}`}>
          <a href="#" className={navContent__brand}>
            Chat<span className={navContent__brandLight}>app</span>
          </a>
          <AiOutlineMenu
            className={
              toggle ? `${navContent__menu} ${hide}` : `${navContent__menu}`
            }
            onClick={() => setToggle(!toggle)}
          />
          <nav
            className={
              toggle ? `${navContent__links} ${show}` : `${navContent__links}`
            }
          >
            <div className={navContent__closeContent}>
              <AiOutlineClose
                className={navContent__close}
                onClick={() => setToggle(!toggle)}
              />
            </div>
            <a href="#" className={`${navContent__linkC} ${navContent__linkp}`}>
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
