import React, { Component } from 'react'
import axios from 'axios'

export default class Clicker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }

        this.incrementCount = this.incrementCount.bind(this)
        this.decrementCount = this.decrementCount.bind(this)
    }

    componentDidMount() {
        fetch("api/clicker")
          .then((res) => res.json())
          .then((counter) => this.setState({
              counter: counter[0].counter
          }))
      }

        incrementCount() {
            this.setState({
                counter: this.state.counter + 1 
            })
        }

        decrementCount() {
            this.setState({
                counter: this.state.counter - 1 
            })
        }

        sendCount(counter){
            const apiUrl = `http://localhost:3001/api/clicker`
            axios({
                url: apiUrl,
                method: "PATHC",
                params: {
                    counter: counter
                }

            })
        }
    
    render() {
        return (
            <div className="clicker">
               <button onClick={this.incrementCount}> + </button>
                <div> {this.state.counter} </div>
                <button onClick={this.decrementCount}> - </button> 
            </div>
        )
    }
}
