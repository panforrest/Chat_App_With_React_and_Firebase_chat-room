import React, { Component } from 'react'

class ChatRoom extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      message:'',
      messages: [
        {id:0, text:'first message'},
        {id:1, text:'second message'},
        {id:2, text:'third message'},
        {id:3, text:'fourth message'},
      ]
    }
  } 

  updateMessage(event){
  	console.log('updateMessage: ' + event.target.value)
  	this.setState({
      message: event.target.value
  	})
  }

  submitMessage(event){
  	console.log('submitMessage: ' + this.state.message)
  	const nextMessage = {   //THIS IS THE KEY I CAN'T FIGURE OUT INDEPENDENTLY
  	  id: this.state.messages.length,
  	  text: this.state.message
  	}
  	var list = Object.assign([], this.state.messages)
  	list.push(nextMessage)
  	this.setState({
  	  messages: list
  	})
  } 

  render(){
    const currentMessage = this.state.messages.map((message, i)=>{
      return(
        <li key={message.id}>{message.text}</li>
      )
    })

  	return(
  	  <div>
  	    <ol>
  	      {currentMessage}
  	    </ol>
        <input onChange={this.updateMessage.bind(this)} type="text" placeholder="Message" /><br />
        <button onClick={this.submitMessage.bind(this)}>Submit Message</button>
  	  </div>
  	)
  }
}

export default ChatRoom