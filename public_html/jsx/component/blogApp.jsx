import React from 'react';

export default class BlogApp extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <div className="mainroot">
				<div>
					<a href="index.html">Aloitussivulle</a>
				</div>
            </div>
        );
    }
}