import Styles from '../styles/style.module.scss'
import heroImage from '../image/Group.png'
import Image from 'next/image'
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
    section__imageContainer,
    section__textContainer,
  } = Styles
  return (
    <div className={section}>
      <div className={wrapper}>
        <div className={`${container} ${section__container}`}>
          <div className={section__textContainer}>
            <h1 className={section__h1}>Have your best call</h1>
            <p className={section__p}>
              Fast, easy & unlimited conference coll services.{' '}
            </p>
            <a href="#" className={`${button} ${section__try}`}>
              Try it free
            </a>
            <a href="#" className={`${button} ${section__free}`}>
              Get a Demo
            </a>
          </div>

          <div className={section__imageContainer}>
            <Image
              src={heroImage}
              width={560}
              height={574}
              alt="Chatting image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section
