import React, { Component } from 'react';
import EventsList from '../containers/EventsList';

class App extends Component {
  render () {
    return (
      <div>
        <h1>Tickether</h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

// // <HostLogin />
// const App = () => (
//   <div>
//     <h1>Tickether</h1>


//   </div>
// )

export default App