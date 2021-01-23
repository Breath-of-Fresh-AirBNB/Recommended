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
  width: 100%;
  padding: 0 80px 0 80px;
  font-family: Montserrat, sans-serif;
  background-color: #F7F7F7;
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
        const listings = homes.data.slice(0, 12);
        this.setState({
          homes: listings,
        });
      });
    axios.get('http://localhost:2222/activities/4')
      .then((activities) => {
        const activitiesList = activities.data.slice(0, 12);
        this.setState({
          activities: activitiesList,
        });
      });
  }

  render() {
    const { homes, activities, destinations } = this.state;
    return (
      <div className="recommended">
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
      </div>
    );
  }
}

export default App;
