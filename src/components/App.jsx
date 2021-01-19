import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlacesToStay from './PlacesToStay';
import sampleHomes from './sampleHomes';
import sampleActivities from './sampleActivities';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homes: sampleHomes,
      activities: sampleActivities,
      destinations: sampleHomes[0],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:2222/homes')
      .then((homes) => {
        const listings = [];
        for (var i = 0; i < homes.data.length; i += 1) {
          listings.push(homes.data[i]);
        }
        this.setState({
          homes: listings,
        });
      });
  }

  render() {
    return (
      <div className="recommended">
        <PlacesToStay
          homes={this.state.homes}
        />
      </div>
    );
  }
}

export default App;
