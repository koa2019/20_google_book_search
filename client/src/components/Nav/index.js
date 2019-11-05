import React from 'react';
import './styles.css';

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg nav-justified bg-secondary fixed-top'>
            <a className='navbar-brand nav-link' href='/'>Google Books</a>
            <a className='navbar-item nav-link' href='/'>Search</a>
            <a className='navbar-item nav-link' href='/saved'>Saved</a>
        </nav>
    );
}
export default Nav;