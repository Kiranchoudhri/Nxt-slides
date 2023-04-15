import {Component} from 'react'
import './index.css'

class Mainslide extends Component {
  state = {isEditable: false}

  changeEditable = () => {
    this.setState({isEditable: true, title: '', desc: ''})
  }

  handleTitleChange = e => {
    this.setState({title: e.target.value})
  }

  handleDescChange = e => {
    this.setState({desc: e.target.value})
  }

  render() {
    const {mainSlideDetails, updateHeading, updateDesc} = this.props
    const {id, heading, description} = mainSlideDetails
    const {isEditable, title, desc} = this.state
    return (
      <div className="mainSlide">
        {isEditable ? (
          <input
            className="editHead"
            value={title.length ? title : heading}
            onBlur={e => updateHeading(id, e.target.value)}
            onChange={this.handleTitleChange}
          />
        ) : (
          <h1 className="mainSlideHeading" onClick={this.changeEditable}>
            {heading}
          </h1>
        )}
        {isEditable ? (
          <input
            className="editDesc"
            value={desc.length ? desc : description}
            onBlur={e => updateDesc(id, e.target.value)}
            onChange={this.handleDescChange}
          />
        ) : (
          <p className="mainSlideDesc" onClick={this.changeEditable}>
            {description}
          </p>
        )}
      </div>
    )
  }
}

export default Mainslide
