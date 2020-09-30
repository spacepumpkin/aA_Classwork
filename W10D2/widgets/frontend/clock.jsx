import React from 'react'

class Clock extends React.Component {
    constructor(){
        super();
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }
    render(){
        return(
            <div>
                <h1> Clock
                    <span>Time: </span>
                    <span>
                    {this.state.time.getHours()}:
                    {this.state.time.getMinutes()}:
                    {this.state.time.getSeconds()} PDT
                    </span>
                </h1>
                <h1>
                    <span>Date: </span>
                    <span>
                    {this.state.time.toDateString()}
                    </span>
                </h1>
            </div>
        )
    }

    tick() {
    //   this.setState({time: new Date()}, this.componentDidMount)
    // console.log("ran tick")
        this.setState({ time: new Date() })

    }

    componentDidMount() {
      this.pause = setInterval(this.tick, 1000, console.log("ran setinterval"));
    }
    componentWillUnmount(){
        clearInterval(this.pause);
    }
}

export default Clock;