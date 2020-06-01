import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLink.css';

export default function MenuLink({ icon, text, link, onClick }) {

    return (
        <Link
            to={link}
            className='menu-link'
            onClick={onClick}>
            <div>
                <img src={require(`./${icon}.svg`)} alt={ text } />
            </div>
            <div><h3>{ text }</h3></div>
        </Link>
    )
}