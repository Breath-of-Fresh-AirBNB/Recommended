import React from 'react';
import styled from 'styled-components';

const Explore = styled.div`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
`;

const Title = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
`;

const Destinations = styled.div`
  display: flex;
  justify-content: space-evenly;

`;

const ExploreOtherOptions = ({ destinations }) => (
  <Explore>
    <Title>Explore other options in and around Paris</Title>
    <p>
      More places to stay in Paris:
      <br />
      Houses • Bed and breakfasts • Lofts • Villas • Condominiums
      <br />
      <Destinations>
        <div>
          {destinations[0]}
          <br />
          {destinations[1]}
          <br />
          {destinations[2]}
        </div>
        <div>
          {destinations[3]}
          <br />
          {destinations[4]}
          <br />
          {destinations[5]}
        </div>
        <div>
          {destinations[6]}
          <br />
          {destinations[7]}
          <br />
          {destinations[8]}
        </div>
        <div>
          {destinations[9]}
          <br />
          {destinations[10]}
          <br />
          {destinations[11]}
        </div>
      </Destinations>
    </p>
  </Explore>
);

export default ExploreOtherOptions;
