import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlacesToStay from './PlacesToStay';
import sampleHomes from './sampleHomes';
// import sampleActivities from './sampleActivities';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1128px;
  margin: auto auto;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homes: sampleHomes,
      // activities: sampleActivities,
      // destinations: sampleHomes[0],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:2222/homes')
      .then((homes) => {
        const listings = [];
        for (let i = 0; i <= 11; i += 1) {
          listings.push(homes.data[i]);
        }
        this.setState({
          homes: listings,
        });
      });
  }

  render() {
    const { homes } = this.state;
    return (
      <Container>
        <PlacesToStay
          homes={homes}
        />
      </Container>
    );
  }
}

export default App;
