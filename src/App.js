import React, { Component } from 'react'
// import ReactAudioPlayer from 'react-audio-player'

import './App.css'

import Main from './Main'

class App extends Component {
  playAudio() {
    console.log('playing audio')
    var audio = new Audio('./big-car-theft.mp4')
    audio.play()
  }

  render() {
    return (
      <div className="App">
        {/*Attempts at adding audio player capability*/}
        {/*<ReactAudioPlayer
          src="./big-car-theft.mp4"
          autoPlay
          controls
          autoBuffer
        />
        <button className="fa fa-play-circle-o" onClick={this.playAudio} />*/}
        {/*<audio src="./big-car-theft.mp4" autoPlay controls preload="auto"></audio>*/}
        <Main />
      </div>
    )
  }
}

export default App

