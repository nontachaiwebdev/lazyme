import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lazy from './Lazy'

class App extends Component {

  state = {
    showComponent: [1,2,3,4,5,6,7,8,9].map((item, index) => (<div key={index} className='item'></div>)),
    allow: true
  }

  handleLoadMore = () => {
    const newData = [1,2,3,4,5,6,7,8,9].map((item, index) => (<div key={index} className='item'></div>))
    this.setState({showComponent: [...this.state.showComponent, newData]})
    console.log('trig')
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        {this.state.showComponent}
        <Lazy
          onLoadMore={this.handleLoadMore}
          allowLazy={this.state.allow} />
      </div>
    );
  }
}

export default App;
