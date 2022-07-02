import React from 'react';
import './header.styles.css';

function HeaderComponent() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="navbar"><a href="/" className="navbar-brand">Employee Management App</a></div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent;
