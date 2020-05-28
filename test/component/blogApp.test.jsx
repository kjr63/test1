import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import BlogApp from '../../public_html/jsx/component/blogApp.jsx';

test (
	'should return html-code',
	function () {
		const renderer = new ReactShallowRenderer();
		renderer.render(<BlogApp />);
		expect(renderer.getRenderOutput()).toMatchSnapshot();
	}
);
