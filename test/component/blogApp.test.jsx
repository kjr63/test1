import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import BlogApp from '../../public_html/jsx/component/blogApp.jsx';


test (
	'should return html-code wit react test renderer',
	function () {
		const renderer = new ReactShallowRenderer();
		renderer.render(<BlogApp />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	}
);


test (
	'pitäisi palauttaa html-koodin entsyymi testillä',
	function () {
		const wrapper = shallow(<BlogApp />);
		//expect(toJSON(wrapper)).toMatchSnapshot();
		expect(wrapper).toMatchSnapshot();
	}

);
