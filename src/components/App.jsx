/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlacesToStay from './PlacesToStay';
import ThingsToDo from './ThingsToDo';
import ExploreOtherOptions from './ExploreOtherOptions';
import sampleHomes from './sampleHomes';
import sampleActivities from './sampleActivities';
import GlobalStyle from './globalStyle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F7F7F7;
  width: 75%;
  margin: 0 auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      homes: sampleHomes,
      activities: sampleActivities,
      destinations: sampleHomes[0].relatedDestinations,
    };

    this.getHomesAndActivities = this.getHomesAndActivities.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.getHomesAndActivities(id);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.state;
    if (this.props.location !== prevProps.location) this.getHomesAndActivities(id);
  }

  getHomesAndActivities(id) {
    axios.get(`http://18.223.235.43homes/${id}`)
      .then((homes) => {
        const listings = homes.data.slice(0, 12);
        this.setState({
          homes: listings,
        });
      });
    axios.get(`http://18.223.235.43/activities/${id}`)
      .then((activities) => {
        const activitiesList = activities.data;
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
          <GlobalStyle />
          <PlacesToStay
            homes={homes}
          />
          <ThingsToDo
            activities={activities}
          />
          <ExploreOtherOptions
            destination={homes[0].destination}
            destinations={destinations}
          />
        </Container>
      </div>
    );
  }
}

export default App;
