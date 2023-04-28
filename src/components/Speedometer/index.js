// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Accelerate = () => {
    this.setState(prevState =>
      prevState.count === 200 ? {count: 200} : {count: prevState.count + 10},
    )
  }

  ApplyBrake = () => {
    this.setState(prevState =>
      prevState.count === 0 ? {count: 0} : {count: prevState.count - 10},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <h1>Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <button type="button" onClick={this.Accelerate}>
          Accelerate
        </button>
        <button type="button" onClick={this.ApplyBrake}>
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
