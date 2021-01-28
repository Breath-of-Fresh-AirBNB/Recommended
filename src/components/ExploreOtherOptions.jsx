/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 50px 0 0 0;
  margin: 60px auto 20px auto;
  border-top: 1px solid #DDDDDD;

  & .subheader {
    margin-left: 10px;
    font-size: 16px;
  }

  & .homeTypeLinks {
    margin-left: 10px;
    color: grey;
    :hover {
      cursor: pointer;
    }
  }
`;

const Title = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  color: #222222;
  margin-left: 10px;
`;

const Destinations = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 10px;
  color: grey;

  & .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  & .destination {
    width: 25%;
  }
`;

const DestinationLink = styled.p`
  :hover {
    cursor: pointer;
  }
`;

const ExploreOtherOptions = ({ destination, destinations }) => (
  <div className="exploreOtherOptions">
    <Container>
      <Title>
        Explore other options in and around
        {' '}
        {destination}
      </Title>
      <div className="subheader">
        More places to stay in
        {' '}
        {destination}
        :
      </div>
      <div className="homeTypeLinks">
        Houses • Bed and breakfasts • Lofts • Villas • Condominiums
      </div>
      <div className="list">
        <Destinations>
          <div className="destination">
            <DestinationLink>
              {destinations[0]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[1]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[2]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[3]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[4]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[5]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[6]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[7]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[8]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[9]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[10]}
            </DestinationLink>
          </div>
          <div className="destination">
            <DestinationLink>
              {destinations[11]}
            </DestinationLink>
          </div>
        </Destinations>
      </div>
    </Container>
  </div>
);

export default ExploreOtherOptions;
