import Style from '../styles/style.module.scss'
import Image from 'next/image'
import Team from '../image/team.png'
import Stars from '../image/stars.svg'
const CtaSection = () => {
  const {
    button,
    container,
    wrapper,
    ctasection,
    ctasection__container,
    ctasection__image,
    ctaseciton__text,
    ctasection__h1,
    ctasection__p,
    ctasection__free,
    ctasection__try,
    ctasection__buttons,
    ctasection__line,
    ctasection__star,
    ctasection__bold,
    ctasection__business,
  } = Style
  return (
    <div className={ctasection}>
      <div className={`${container} ${wrapper} ${ctasection__container}`}>
        <div className={ctasection__image}>
          <Image src={Team} alt="team work" width={816} height={592} />
        </div>
        <div className={ctaseciton__text}>
          <h1 className={ctasection__h1}>
            Perfect Solution for Small Businesses
          </h1>
          <div className={ctasection__p}>
            Pricing plans that fit like a glove.
          </div>
          <div className={ctasection__buttons}>
            <a href="#" className={`${button} ${ctasection__try}`}>
              Try It Free
            </a>
            <a href="#" className={`${button} ${ctasection__free}`}>
              Get a demo
            </a>

            <span className={ctasection__line}></span>
            <div className={ctasection__star}>
              <Image src={Stars} title="stars" />
              <p className={ctasection__business}>
                {' '}
                <span className={ctasection__bold}>5,200 businesses</span> use
                ChatApp and they rate it as{' '}
                <span className={ctasection__bold}>5-stars.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaSection
