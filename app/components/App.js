import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/ips')
      .then(({ data }) => {
        this.setState({ data });
      });
  }

  render() {
    const list = this.state.data.map(ip => <li>{ip}</li>);

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default App;
