import logo from './logo.svg';
import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    // fetch("https://backend-app1109.herokuapp.com/user")
    //  .then((data) => {
    //    return data.json()
    //  }).then((data) => {
    //    this.setState({lists: data})
    //  })
    
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2 className="header__title">Sample React App</h2>
        </div>
        <div className="main">
          <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h3>Hello world</h3>
        </div>
        {/* <ul>
         {this.state.lists.map((li) => <li>{li.name}</li>)}
        </ul> */}
      </div>
    );
  }
}

export default App;
