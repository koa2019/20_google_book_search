import React from 'react';
import './styles.css';

// passing any children inherited from parent 
function Jumbotron({ children }) {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}
export default Jumbotron;