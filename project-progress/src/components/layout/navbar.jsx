import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';

const Navbar = () => {
    return ( 
        <nav className="nav-wrapper grey darken-2">
            <div className="container">
                <Link to='/' className="brand-logo"> SPPMS </Link>
            </div>
            <SignedInLinks/>
            <SignOutLinks/>
        </nav>
     );
}
 
export default Navbar;