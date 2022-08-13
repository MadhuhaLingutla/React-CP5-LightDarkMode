// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {lightmode: false}

  modeChange = () => {
    this.setState(currentState => ({lightmode: !currentState.lightmode}))
  }

  render() {
    const {lightmode} = this.state

    let bgcontainerClass = 'light-container'
    let headingClass = 'light-heading'
    let text = 'Dark Mode'

    if (!lightmode) {
      bgcontainerClass = 'dark-container'
      headingClass = 'dark-heading'
      text = 'Light Mode'
    }

    return (
      <div className={bgcontainerClass}>
        <h1 className={headingClass}>Click To Change Mode</h1>
        <button className="button" onClick={this.modeChange}>
          {text}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
