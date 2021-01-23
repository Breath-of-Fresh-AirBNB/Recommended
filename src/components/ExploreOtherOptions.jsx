/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 75%;
  padding: 50px 100px 0 100px;
  margin: 60px auto 20px auto;
  border-top: 1px solid grey;

  & .subheader {
    margin-left: 10px;
    font-family: Montserrat, sans-serif;
    font-size: 16px;
  }

  & .homeTypeLinks {
    margin-left: 10px;
    font-family: Montserrat, sans-serif;
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
  font-family: Montserrat, sans-serif;
  margin-left: 10px;
`;

const Destinations = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 10px;
  color: grey;

  & .list {
    display: flex;
    flex-direction: column;
  }
`;

const DestinationLink = styled.p`
  :hover {
    cursor: pointer;
  }
`;

const ExploreOtherOptions = ({ destination, destinations }) => (
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
    <Destinations>
      <div className="list">
        <DestinationLink>
          {destinations[0]}
        </DestinationLink>
        <DestinationLink>
          {destinations[1]}
        </DestinationLink>
        <DestinationLink>
          {destinations[2]}
        </DestinationLink>
      </div>
      <div className="list">
        <DestinationLink>
          {destinations[3]}
        </DestinationLink>
        <DestinationLink>
          {destinations[4]}
        </DestinationLink>
        <DestinationLink>
          {destinations[5]}
        </DestinationLink>
      </div>
      <div className="list">
        <DestinationLink>
          {destinations[6]}
        </DestinationLink>
        <DestinationLink>
          {destinations[7]}
        </DestinationLink>
        <DestinationLink>
          {destinations[8]}
        </DestinationLink>
      </div>
      <div className="list">
        <DestinationLink>
          {destinations[9]}
        </DestinationLink>
        <DestinationLink>
          {destinations[10]}
        </DestinationLink>
        <DestinationLink>
          {destinations[11]}
        </DestinationLink>
      </div>
    </Destinations>
  </Container>
);

export default ExploreOtherOptions;

// const ExploreOtherOptions = ({ destinations }) => (
//   <Container>
//     <Title>Explore other options in and around Paris</Title>
//     <p>
//       More places to stay in Paris:
//       <br />
//       Houses • Bed and breakfasts • Lofts • Villas • Condominiums
//       <br />
//       <Destinations>
//         <div>
//           {destinations[0]}
//           <br />
//           {destinations[1]}
//           <br />
//           {destinations[2]}
//         </div>
//         <div>
//           {destinations[3]}
//           <br />
//           {destinations[4]}
//           <br />
//           {destinations[5]}
//         </div>
//         <div>
//           {destinations[6]}
//           <br />
//           {destinations[7]}
//           <br />
//           {destinations[8]}
//         </div>
//         <div>
//           {destinations[9]}
//           <br />
//           {destinations[10]}
//           <br />
//           {destinations[11]}
//         </div>
//       </Destinations>
//     </p>
//   </Container>
// );
