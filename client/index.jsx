import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>

        <h1>Test Header</h1>

        <p>Test Paragraph</p>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));