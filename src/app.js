import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatRoom from './components/ChatRoom'

class App extends Component {
  render(){
  	return(
      <div>This is React.
        <ChatRoom />
      </div>
  	)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))