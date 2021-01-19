import React from 'react';
import styled from 'styled-components';
import HomeListing from './HomeListing';

const Title = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
`;

const PlacesToStay = ({ homes }) => (
  <div className="morePlacesToStay">
    <Title>More places to stay</Title>
    {homes.map((home, i) => (
      <HomeListing
        home={home}
        key={i}
      />
    ))}
  </div>
);

export default PlacesToStay;
