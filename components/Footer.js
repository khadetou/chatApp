import Styles from '../styles/style.module.scss'
const Footer = () => {
  const {
    container,
    footer,
    wrapper,
    footer__grid,
    footer__fp,
    footer__logo,
    footer__company,
    footer__contact,
    footer__features,
    footer__h1,
    footer__help,
    footer__light,
    footer__p,
    footer__h3,
    footer__copy,
  } = Styles
  return (
    <div className={footer}>
      <div className={`${container} ${wrapper}`}>
        <div className={footer__grid}>
          <div className={footer__logo}>
            <h1 className={footer__h1}>
              chat<span className={footer__light}>app</span>
            </h1>
            <p className={`${footer__p} ${footer__fp}`}>
              The last team chat you will ever need.
            </p>
          </div>

          <div className={footer__help}>
            <h3 className={footer__h3}>Help</h3>
            <p className={footer__p}>Support</p>
            <p className={footer__p}>Knowledgebase</p>
            <p className={footer__p}>Tutorials</p>
          </div>

          <div className={footer__features}>
            <h3 className={footer__h3}>Features</h3>
            <p className={footer__p}>Screen Sharing</p>
            <p className={footer__p}>iOS & Android Apps</p>
            <p className={footer__p}>File Sharing</p>
            <p className={footer__p}>User Management</p>
          </div>

          <div className={footer__company}>
            <h3 className={footer__h3}>Company</h3>
            <p className={footer__p}>About Us</p>
            <p className={footer__p}>Careers</p>
            <p className={footer__p}>Contact Us</p>
          </div>

          <div className={footer__contact}>
            <h3 className={footer__h3}>Contact Us</h3>
            <p className={footer__p}>info@chatapp.com</p>
            <p className={footer__p}>1-800-200-300</p>
            <p className={footer__p}>3500 Deer Creek Rd Palo Alto, CA</p>
          </div>
        </div>
        <p className={`${footer__p} ${footer__copy}`}>
          © Copyright ChatApp Inc.
        </p>
      </div>
    </div>
  )
}

export default Footer
