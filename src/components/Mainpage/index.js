import {Component} from 'react'
import Slide from '../Slide'
import Mainslide from '../Mainslide'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Mainpage extends Component {
  state = {
    slidesList: [...initialSlidesList],
    activeTab: initialSlidesList[0].id,
  }

  onchangeActiveTab = id => {
    this.setState({activeTab: id})
  }

  updateHeading = (id, value) => {
    const {slidesList} = this.state
    this.setState({
      slidesList: slidesList.map(item => {
        if (item.id === id) {
          return {...item, heading: value}
        }
        return item
      }),
    })
  }

  updateDesc = (id, value) => {
    const {slidesList} = this.state
    this.setState({
      slidesList: slidesList.map(item => {
        if (item.id === id) {
          return {...item, description: value}
        }
        return item
      }),
    })
  }

  updateActiveId = () => {
    const {activeTab, slidesList} = this.state

    const firstIndex = slidesList.findIndex(item => item.id === activeTab)
    this.setState({activeTab: slidesList[firstIndex + 1].id})
  }

  addSlide = () => {
    const {activeTab, slidesList} = this.state
    const newSlide = {
      id: slidesList.length,
      heading: 'Heading',
      description: 'Description',
    }
    const firstIndex = slidesList.findIndex(item => item.id === activeTab)

    const firstPart = slidesList.slice(0, firstIndex + 1)
    const lastPart = slidesList.slice(firstIndex + 2)
    console.log(firstIndex, firstIndex + 2)
    this.setState(
      {
        slidesList: [...firstPart, newSlide, ...lastPart],
      },
      this.updateActiveId,
    )
  }

  render() {
    const {slidesList, activeTab} = this.state
    console.log(activeTab)
    const mainSlideDetails = slidesList.filter(item => item.id === activeTab)

    return (
      <div className="pageWrapper">
        <div>
          <button className="addButton" onClick={this.addSlide}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="addIcon"
            />
            <p className="buttonText">New</p>
          </button>
          <div className="slidesList">
            <ol className="allSlides">
              {slidesList.map((eachSlide, index) => (
                <Slide
                  key={eachSlide.id}
                  slideDetails={eachSlide}
                  slideNo={index}
                  onchangeActiveTab={this.onchangeActiveTab}
                  activeTab={activeTab}
                />
              ))}
            </ol>
            <div className="mainSlideSection">
              <Mainslide
                mainSlideDetails={mainSlideDetails[0]}
                updateHeading={this.updateHeading}
                updateDesc={this.updateDesc}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Mainpage
