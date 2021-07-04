import Styles from '../styles/style.module.scss'
import Image from 'next/image'
import Mockup from '../image/mockup.png'
const MiddleSection = () => {
  const {
    mSection,
    container,
    wrapper,
    mSection__h1,
    mSection__p,
    mSection__image,
  } = Styles
  return (
    <div className={mSection}>
      <div className={`${container} ${wrapper}`}>
        <div className="mSection__text">
          <h1 className={mSection__h1}>Instant Team Chats</h1>
          <p className={mSection__p}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa.
          </p>
        </div>
        <div className={mSection__image}>
          <Image src={Mockup} width={1061} height={633} />
        </div>
      </div>
    </div>
  )
}

export default MiddleSection
