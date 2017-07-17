import React, { Component } from 'react'
import { database } from './Firebase'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      newData: ''
    }
    this.dataRef = null
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    /*fetch('/users').then(res => res.json()).then(users => this.setState({ users }))*/
    this.dataRef = database.ref('/tweets')
    this.dataRef.on('value', snapshot => {
      this.setState({
        data: snapshot.val()
      })
    })
  }

  render() {
    return (
      <div className="App">
        <pre>
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className="app-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
  handleChange(event) {
    const newData = event.target.value
    this.setState({
      newData
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.dataRef.push(this.state.newData)
  }
}

export default App
