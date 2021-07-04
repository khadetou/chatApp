import Style from '../styles/style.module.scss'
const CtaSection = () => {
  const { container, wrapper, ctasection } = Style
  return (
    <div className={ctasection}>
      <div className={container}></div>
    </div>
  )
}

export default CtaSection
