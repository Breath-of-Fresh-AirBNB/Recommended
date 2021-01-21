/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import HomeListing from './HomeListing';

const Title = styled.h2`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
`;

const Buttons = styled.div`
  float: right;

  & button {
    background: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    margin: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
  }

  & button:hover {
    height: 32px;
    width: 32px;
    margin: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const CarouselContainer = styled.div`
  &.MuiPaper.root {
    width: 278px;
    height: 267px;
  }
`;

const prev = '<';
const next = '>';

class PlacesToStay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { homes } = this.props;
    return (
      <div className="morePlacesToStay">
        <div className="top-bar">
          <Title>More places to stay</Title>

        </div>
        <CarouselContainer>
        <Buttons>
            <button type="button" id="prevBtn" onClick={() => this.carousel.slidePrev()}>{prev}</button>
            <button type="button" id="nextBtn" onClick={() => this.carousel.slideNext()}>{next}</button>
          </Buttons>
          <Carousel
            ref={(ref) => { this.carousel = ref; }}
            itemsToShow={4}
            itemsToScroll={4}
            pagination={false}
            disableArrowsOnEnd={false}
            showArrows={false}
          >
            {homes.map((home) => (
              <HomeListing
                home={home}
                key={home.homeId}
              />
            ))}
          </Carousel>
        </CarouselContainer>
      </div>
    );
  }
}

export default PlacesToStay;
