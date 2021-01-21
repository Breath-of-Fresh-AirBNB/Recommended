/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import ActivityListing from './ActivityListing';

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

class ThingsToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { activities } = this.props;
    return (
      <div className="thingsToDoNearby">
        <div className="top-bar">
          <Title>Things to do nearby</Title>
          <Buttons>
            <button type="button" className="prevBtn" onClick={() => this.carousel.slidePrev()}>{prev}</button>
            <button type="button" className="nextBtn" onClick={() => this.carousel.slideNext()}>{next}</button>
          </Buttons>
        </div>
        <CarouselContainer>
          <Carousel
            ref={(ref) => { this.carousel = ref; }}
            itemsToShow={4}
            itemsToScroll={4}
            pagination={false}
            disableArrowsOnEnd={false}
            showArrows={false}
          >
            {activities.map((activity) => (
              <ActivityListing
                activity={activity}
                key={activity.activityId}
              />
            ))}
          </Carousel>
        </CarouselContainer>
      </div>
    );
  }
}

export default ThingsToDo;
