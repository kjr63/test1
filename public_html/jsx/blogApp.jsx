import React from 'react';
import {URL_INDEX} from './variables.jsx';

export default class BlogApp extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <div className="mainroot">
				Hello React BlogApp
				<div><a href={URL_INDEX} >Aloitussivulle</a></div>
            </div>
        );
    }
}