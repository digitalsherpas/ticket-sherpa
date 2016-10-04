import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Home from '../client/components/Home.jsx';

describe('<Home/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('Link')).to.have.length(3);
  });

  // it('should have props for email and src', function () {
  //   const wrapper = shallow(<Home/>);
  //   expect(wrapper.props().email).to.be.defined;
  //   expect(wrapper.props().src).to.be.defined;
  // });
});
