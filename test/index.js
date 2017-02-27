import { assert } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/components/Main';
import Controls from '../lib/components/Controls';
import SevenHour from '../lib/components/SevenHour';
import dataCleaner from '../lib/helpers/dataCleaner';
import sevenHourCleaner from '../lib/helpers/sevenHourCleaner';
import tenDayCleaner from '../lib/helpers/tenDayCleaner';
// import  testObject from './test-object.json';

require('locus');

describe('testing weathrly', ()=> {
  
  // const dataObject = JSON.parse(testObject);
  
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
  it.only('Controls should have weather component', ()=> {
    const wrapper = shallow(<Controls/>);
    
    console.log(wrapper.find(<Weather/>).length)
  });
})


