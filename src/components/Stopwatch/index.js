// Write your code here
import {Component} from 'react'
class Stopwatch extends Component {
    constructor(props){
        super(props)
        {
            time : 0
        } = this.state
    }
    onClickStart = () =>{

    }
  render() {
    return (
      <div>
        <h1>Stopwatch</h1>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>
            {minutes}:{seconds}
          </h1>
          <button type="button" onClick={this.onClickStart}>
            Start
          </button>
          <button type="button" onClick={this.onClickStop}>
            Stop
          </button>
          <button type="button" onClick={this.onClickReset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}
