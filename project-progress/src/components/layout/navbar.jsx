import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

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
 
const mapStateToProps = (state) => {
    console.log(state)
    return{

    }
}

export default connect(mapStateToProps)(Navbar);