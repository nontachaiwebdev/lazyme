import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnMount() {
    window.removeEventListener("scroll")
  }

  handleScroll = (e) =>{
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const node = ReactDom.findDOMNode(this.refs['lazy']);
    if(node.getBoundingClientRect().top-viewportHeight <= 100)
    console.log('Trig Event')
  }

  render() {
    return (
      <div className="container">
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div ref='lazy' className='lazy'></div>
      </div>
    );
  }
}

export default App;
