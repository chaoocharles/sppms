import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return ( 
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-1'>CC</NavLink></li>
        </ul>
     );
}
 
export default SignedInLinks;