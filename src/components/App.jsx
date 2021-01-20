import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlacesToStay from './PlacesToStay';
import ThingsToDo from './ThingsToDo';
import ExploreOtherOptions from './ExploreOtherOptions';
import sampleHomes from './sampleHomes';
import sampleActivities from './sampleActivities';

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
      activities: sampleActivities,
      destinations: sampleHomes[0].relatedDestinations,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:2222/homes/4')
      .then((homes) => {
        const listings = [];
        for (let i = 0; i <= 11; i += 1) {
          listings.push(homes.data[i]);
        }
        this.setState({
          homes: listings,
        });
      });
    axios.get('http://localhost:2222/activities/4')
      .then((activities) => {
        const activitiesList = [];
        for (let i = 0; i <= 11; i += 1) {
          activitiesList.push(activities.data[i]);
        }
        this.setState({
          activities: activitiesList,
        });
      });
  }

  render() {
    const { homes, activities, destinations } = this.state;
    return (
      <Container>
        <PlacesToStay
          homes={homes}
        />
        <ThingsToDo
          activities={activities}
        />
        <ExploreOtherOptions
          destinations={destinations}
        />
      </Container>
    );
  }
}

export default App;
