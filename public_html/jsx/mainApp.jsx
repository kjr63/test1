import React from 'react';
import { URL_BLOG, URL_IMG } from './variables.jsx';

export default class MainApp extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <div className="mainroot">
				<div>Hello React MainApp</div>
				<div><a href={URL_BLOG} >Blogiin</a></div>
				<div className="test_bgimage"></div>
				<div className="test_layerimage">
					<img className="test_layerimage__image" src={URL_IMG+"pelto.jpg"} alt="pelto"/>
				</div>
				<div className="test_svgbg">
					<svg className="test_svgbg__svgel" viewBox="0 0 100 100">
						<circle className="test_svgbg__svgel__circle" />
					</svg>				
				</div>
            </div>
        );
    }
}

