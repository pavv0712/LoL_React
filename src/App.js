import './App.css';
import React, {Component} from 'react';
import Main from './pages/main'


class App extends Component{
  render() {
    return(
      <div>
        <Main/>
        {this.props.children}
      </div>
    );
  }
}
export default App;