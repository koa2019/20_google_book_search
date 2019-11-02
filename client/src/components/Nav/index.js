import React from 'react';
import './styles.css';

function Nav() {
    return (
        <nav className=' nav navbar navbar-expand-lg navbar-dark bg-primary'>
            <a className='navbar-brand nav-link' href='/search'>Google Book Search</a>
            <a className='navbar-item nav-link' href='/saved'>Saved Books</a>
        </nav>
    );
}
export default Nav;