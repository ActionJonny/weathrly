import { assert } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/components/Main';
import Controls from '../lib/components/Controls';
import Weather from '../lib/components/Weather';
import SevenHour from '../lib/components/SevenHour';
// import SevenHourCard from '..lib/components/SevenHourCard';
import sevenHourCleaner from '../lib/helpers/sevenHourCleaner';
import dataCleaner from '../lib/helpers/dataCleaner';
import tenDayCleaner from '../lib/helpers/tenDayCleaner';
import  testObject from './test-object';

require('locus');

describe('testing weathrly', ()=> {
    
  it('Main should have a component called controls', ()=> {
    const wrapper = shallow(<Main/>);
    assert.equal(wrapper.find('Controls').length, 1);
  });
  it('Controls should have a component called SevenHour', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.equal(wrapper.find('SevenHour').length, 1);
  });
  it('Controls should have a default state', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.deepEqual(wrapper.state('locationInputField'), '[]');
    assert.deepEqual(wrapper.state('locationResults'), {});
  });
  it('Controls should have a state describing location input field', ()=> {
    const wrapper = shallow(<Controls/>);
    assert(wrapper.state('locationInputField'));
    assert.equal(wrapper.state('locationInputField'), '[]');
  });
  it('Controls should have a state describing location results', ()=> {
    const wrapper = shallow(<Controls/>);
    assert(wrapper.state('locationResults'));
    assert.deepEqual(wrapper.state('locationResults'), {});
  });
  it.skip('Controls should allow user to input a search', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.deepEqual()
  });
  it('Controls should have a header', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.equal(wrapper.find('.header').length, 1);
  });
  it('Controls should have a search input and submit button in the header', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.equal(wrapper.find('.header').children('.inputs').children('.searchInput').length, 1);
    assert.equal(wrapper.find('.header').children('.inputs').children('.searchSubmit').length, 1);
  });
  it('Weather should have present city and date', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = shallow(<Weather locationResults={locationResults}/>);
    
    assert.equal(wrapper.find('.cityName').text(), 'Boulder, CO');
    assert.equal(wrapper.find('.currentDay').text(), 'February 27');
  });
  it('Weather should display current, high, and low temp', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = shallow(<Weather locationResults={locationResults}/>);
    
    assert.equal(wrapper.find('.currentTemp').text(), '24.8°');
    assert.equal(wrapper.find('.highLowPair').text(), 'H 52°L 29°');
  });
  it('Weather should display a description of the forecast', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = shallow(<Weather locationResults={locationResults}/>);

    assert.equal(wrapper.find('.longCond').text(), 'Sunshine and a few clouds. High 52F. NE winds shifting to W at 10 to 20 mph.');
  });
  it('Controls should have a header for the ten day forecast', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.equal(wrapper.find('h2').text(), 'Seven Hour Forecast')
  });
  // it.only('SevenHour should return seven hour cards', ()=> {
  //   const dataObject = testObject;
  //   const locationResults = dataCleaner(dataObject);
  //   const wrapper = mount(<SevenHour locationResults={locationResults}/>);
  //   console.log(wrapper);
  // })
});


