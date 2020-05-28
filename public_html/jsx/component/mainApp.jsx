import React from 'react';

export default class MainApp extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <div className="mainroot">
				<div>Hello React MainApp</div>
				<div><a href="blog.html" >Blogiin</a></div>
				<div className="test_bgimage"></div>
				<div className="test_layerimage">
					<img className="test_layerimage__image" src="img/pelto.jpg" alt="pelto"/>
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

