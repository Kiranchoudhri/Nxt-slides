import './index.css'

const Slide = props => {
  const {slideDetails, slideNo, onchangeActiveTab, activeTab} = props
  const {id, heading, description} = slideDetails

  const changeTab = () => {
    onchangeActiveTab(id)
  }
  const activeClass =
    activeTab === id ? `slideWrapper activeSlide` : `slideWrapper`
  return (
    <li
      className={activeClass}
      onClick={changeTab}
      testid={`slideTab${slideNo + 1}`}
    >
      <p>{slideNo + 1}</p>
      <div className="singleSlide">
        <h1 className="slideTitle">{heading}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default Slide
