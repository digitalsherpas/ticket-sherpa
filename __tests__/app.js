import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';

function setup() {
  const props = {
  };

  const enzymeWrapper = shallow(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('App', () => {
    it('should render a link as the title', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('h1').text()).toBe('<Link />');
    });
  });
});
