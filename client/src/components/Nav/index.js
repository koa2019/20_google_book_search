import React from 'react';
import './styles.css';

function Nav() {
    return (
        <nav className='navbar-nav navbar-expand-lg nav-justified navbar-dark bg-primary'>
            <a className='navbar-brand nav-link' href='/'>Google Books</a>
            <a className='nav-item nav-link' href='/'>Search</a>
            <a className='nav-item nav-link' href='/saved'>Saved</a>
        </nav>
    );
}
export default Nav;