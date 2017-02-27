import { assert } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Main from '../lib/components/Main';
import Controls from '../lib/components/Controls';
import Weather from '../lib/components/Weather';
import SevenHour from '../lib/components/SevenHour';
import sevenHourCleaner from '../lib/helpers/sevenHourCleaner';
import dataCleaner from '../lib/helpers/dataCleaner';
import tenDayCleaner from '../lib/helpers/tenDayCleaner';
import TenDay from '../lib/components/tenDay';
import testObject from './test-object';
import SevenHourCard from '../lib/components/SevenHourCard';

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
  
  it('Controls should have a header', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.equal(wrapper.find('.header').length, 1);
  });
  
  it('Controls should have a search input and submit button in the header', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.equal(wrapper.find('.header').children('.inputs').children('.searchInput').length, 1);
    assert.equal(wrapper.find('.header').children('.inputs').children('.searchSubmit').length, 1);
  });
  
  it('Controls should have a header for the ten day forecast', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.equal(wrapper.find('h2').text(), 'Seven Hour Forecast')
  });
  
  it('Controls should call componentDidMount on load', ()=> {
    sinon.spy(Controls.prototype, 'componentDidMount');
    const wrapper = mount(<Controls/>);
    assert.equal(Controls.prototype.componentDidMount.calledOnce, true);
  });
  
  it('Controls should accept a city and state from input field', ()=> {
    const wrapper = shallow(<Controls/>);
    let thisState = wrapper.state();
    wrapper.find('.searchInput').simulate('change', {target: {value:'Boulder, CO'}});
    thisState = wrapper.state();
    wrapper.find('.searchSubmit').simulate('click');
    thisState = wrapper.state();
    assert.equal(wrapper.state().locationInputField, 'Boulder, CO');
  });
  
  it('Controls submit button should call handleClickEvent event on click', ()=> {
    const wrapper = shallow(<Controls/>);
    sinon.spy(wrapper.instance(), 'handleClickEvent');
    wrapper.find('.searchSubmit').simulate('click');
    assert(wrapper.instance().handleClickEvent.calledOnce);
  });
  
  it('Controls should allow changing the search location', ()=> {
    const wrapper = shallow(<Controls/>);
    let thisState = wrapper.state();
    wrapper.find('.searchInput').simulate('change', {target: {value:'Boulder, CO'}});
    wrapper.find('.searchSubmit').simulate('click');
    thisState = wrapper.state();
    assert.equal(wrapper.state().locationInputField, 'Boulder, CO');
    
    wrapper.find('.searchInput').simulate('change', {target: {value:'Boulder, MT'}});
    wrapper.find('.searchSubmit').simulate('click');
    thisState = wrapper.state();
    assert.equal(wrapper.state().locationInputField, 'Boulder, MT');
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

  it('SevenHour should return seven individual hour cards', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<SevenHour locationResults={locationResults}/>);
    
    assert.equal(wrapper.find('.sevenHourCard').length, 7);
  });
  
  it('SevenHour card should display the hour', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<SevenHour locationResults={locationResults}/>);

    assert.equal(wrapper.find('.hourCardHour').at(0).text(), '9:00 AM');
    assert.equal(wrapper.find('.hourCardHour').at(6).text(), '3:00 PM');
    assert.equal(wrapper.find('.hourCardHour').length, 7);
  });
  
  it('SevenHour card should display hourly temp', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<SevenHour locationResults={locationResults}/>);

    assert.equal(wrapper.find('.hourCardTemp').at(1).text(), '32°');
    assert.equal(wrapper.find('.hourCardTemp').at(5).text(), '48°');
    assert.equal(wrapper.find('.hourCardTemp').length, 7);
  });
  
  it('SevenHour cards should have an image', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<SevenHour locationResults={locationResults}/>);

    assert.equal(wrapper.find('.sevenHourCard').at(0).find('img').length, 1);
    assert.equal(wrapper.find('.sevenHourCard').at(6).find('img').length, 1);
    assert.equal(wrapper.find('.sevenHourCard').find('img').length, 7);
  });
  
  it('SevenHour cards should have a short condition description for the hour', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<SevenHour locationResults={locationResults}/>);

    assert.equal(wrapper.find('.hourCardCond').at(0).text(), 'Clear');
    assert.equal(wrapper.find('.hourCardCond').at(4).text(), 'Clear');
    assert.equal(wrapper.find('.hourCardCond').length, 7);
  });  
  
  it('TenDay should return 10 cards for the 10 day forecast', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<TenDay locationResults={locationResults}/>);
    
    assert.equal(wrapper.find('.tenDayCard').length, 10);
  });
  
  it('TenDay should display cards that have the date', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<TenDay locationResults={locationResults}/>);

    assert.equal(wrapper.find('.tenDayCardDate').at(1).text(), 'February 28');
    assert.equal(wrapper.find('.tenDayCardDate').at(4).text(), 'March 3');
    assert.equal(wrapper.find('.tenDayCardDate').length, 10);
  });
  
  it('TenDay should display cards with the high and low temp', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<TenDay locationResults={locationResults}/>);

    assert.equal(wrapper.find('.tenHigh').at(0).text(), 'H 52°');
    assert.equal(wrapper.find('.tenHigh').at(9).text(), 'H 60°');
    assert.equal(wrapper.find('.tenLow').at(0).text(), 'L 29°');
    assert.equal(wrapper.find('.tenLow').at(9).text(), 'L 37°');
    assert.equal(wrapper.find('.tenHigh').length, 10);
    assert.equal(wrapper.find('.tenLow').length, 10);
  });
  
  it('TenDay should display cards with an image', ()=> {
    const dataObject = testObject;
    const locationResults = dataCleaner(dataObject);
    const wrapper = mount(<TenDay locationResults={locationResults}/>);

    assert.equal(wrapper.find('img').length, 10);
    assert.equal(wrapper.find('img').at(3).length, 1);
    assert.equal(wrapper.find('img').at(9).length, 1);
  });
});
