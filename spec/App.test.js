/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';

import App from '../src/components/App';
import PlacesToStay from '../src/components/PlacesToStay';
import ThingsToDo from '../src/components/ThingsToDo';
import ActivityListing from '../src/components/ActivityListing';
import HomeListing from '../src/components/HomeListing';

Enzyme.configure({ adapter: new Adapter() });

describe('Component Rendering', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<App />).is('.recommended')).toBe(true);
  });

  it('calls componentDidMount()', () => {
    jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
  });
});

describe('Carousel components Rendering', () => {
  it('should render PlacesToStay without throwing an error', () => {
    PlacesToStay.defaultProps = { homes: [] };
    expect(shallow(<PlacesToStay />).is('.morePlacesToStay')).toBe(true);
  });

  it('should render HomeListing without throwing an error', () => {
    HomeListing.defaultProps = { home: {} };
    expect(shallow(<HomeListing />).is('.homeListing')).toBe(true);
  });

  it('should render ThingsToDo without throwing an error', () => {
    ThingsToDo.defaultProps = { activities: [] };
    expect(shallow(<ThingsToDo />).is('.thingsToDoNearby')).toBe(true);
  });

  it('should render ActivityListing without throwing an error', () => {
    ActivityListing.defaultProps = { activity: {} };
    expect(shallow(<ActivityListing />).is('.activityListing')).toBe(true);
  });
});
