import React from 'react';
import {URL_BLOG} from './variables.jsx';

export default class MainApp extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <div className="mainroot">
				Hello React MainApp
				<div><a href={URL_BLOG} >Blogiin</a></div>
            </div>
        );
    }
}

