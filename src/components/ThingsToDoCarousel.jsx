/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-elastic-carousel';
import ActivityListing from './ActivityListing';

class ThingsToDoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      {
        width: 550, itemsToShow: 3, itemsToScroll: 3, pagination: false,
      },
      { width: 850, itemsToShow: 4, itemsToScroll: 4 },
      { width: 1150, itemsToShow: 6 },
    ];
  }

  render() {
    const { activities } = this.props;
    return (
      <Carousel
        ref={(ref) => { this.carousel = ref; }}
        itemsToShow={6}
        itemsToScroll={6}
        pagination={false}
        disableArrowsOnEnd={false}
        showArrows={false}
        breakPoints={this.breakPoints}
      >
        {activities.map((activity) => (
          <ActivityListing
            activity={activity}
            key={activity.activityId}
          />
        ))}
      </Carousel>
    );
  }
}

export default ThingsToDoCarousel;
