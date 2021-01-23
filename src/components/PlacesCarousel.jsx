/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-elastic-carousel';
import HomeListing from './HomeListing';

class PlacesCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      {
        width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false,
      },
      { width: 850, itemsToShow: 3, itemsToScroll: 3 },
      { width: 1150, itemsToShow: 4 },
    ];
  }

  render() {
    const { homes } = this.props;
    return (
      <Carousel
        ref={(ref) => { this.carousel = ref; }}
        itemsToShow={4}
        itemsToScroll={4}
        pagination={false}
        disableArrowsOnEnd={false}
        showArrows={false}
        breakPoints={this.breakPoints}
      >
        {homes.map((home) => (
          <HomeListing
            home={home}
            key={home.homeId}
          />
        ))}
      </Carousel>
    );
  }
}

export default PlacesCarousel;
