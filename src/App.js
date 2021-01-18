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
    fetch("https://backend-app1109.herokuapp.com/user")
     .then((data) => {
       return data.json()
     }).then((data) => {
       this.setState({lists: data})
     })
    
  }
  render() {
    console.log(this.state.lists)
    return (
      <div className="App">
        <ul>
         {this.state.lists.map((li) => <li>{li.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
