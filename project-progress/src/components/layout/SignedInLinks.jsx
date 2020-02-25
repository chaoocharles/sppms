import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../index.css';

const SignedInLinks = () => {
    return ( 
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating cyan darken-2'>CC</NavLink></li>
        </ul>
     );
}

 export const CreateProjectButton = () => {
    return ( 
            <div className="createProjectBtn">
                <NavLink to='/createproject' className="btn cyan darken-2 z-depth-0">NEW PROJECT</NavLink>
            </div>
     );
 }
 
export default SignedInLinks;