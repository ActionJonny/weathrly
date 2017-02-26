import { assert } from 'chai';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Main from '../lib/components/Main';
import Controls from '../lib/components/Controls';
import SevenHour from '../lib/components/SevenHour';

require('locus');

describe('testing weathrly', ()=> {
  it('should have a component called controls', ()=> {
    const wrapper = shallow(<Main/>);
    assert.equal(wrapper.find('Controls').length, 1);
  });
  it('should have a component called SevenHour', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.equal(wrapper.find('SevenHour').length, 1);
  });
  it('should have a default state', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.deepEqual(wrapper.state('locationInputField'), '[]');
    assert.deepEqual(wrapper.state('locationResults'), {});
  });
  it.skip('should allow user to input a search', ()=> {
    const wrapper = shallow(<Controls/>);
    assert.deepEqual()
  });
  it('should have a handle click function', ()=> {
    const wrapper = shallow(<Controls/>);
    console.log(wrapper.handleClickEvent);
  })
})


