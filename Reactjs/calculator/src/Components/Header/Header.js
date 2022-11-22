import React, { Component } from 'react';

import './Header.css';

function Header() {
    return (  
        <div className='header'>
            <div className='Header-history'>
                <p>10+2</p>
                <p>10+5</p>
                <p>34+2</p>
            </div>
            <br/>
            <div className='header-expression'>
                <p>100+3+4</p>
            </div>
            <p className='header_result'>107</p>
        </div>
    );
}

export default Header;