import Styles from '../styles/style.module.scss'
const Section = () => {
  const {
    section,
    wrapper,
    container,
    section__container,
    section__h1,
    section__p,
    button,
    section__try,
    section__free,
  } = Styles
  return (
    <div className={section}>
      <div className={wrapper}>
        <div className={`${container} ${section__container}`}>
          <h1 className={section__h1}>Have your best call</h1>
          <p className={section__p}>
            Fast, easy & unlimited conference coll services.{' '}
          </p>
          <a href="#" class={`${button} ${section__try}`}>
            Try it free
          </a>
          <a href="#" class={`${button} ${section__free}`}>
            Get a Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default Section
