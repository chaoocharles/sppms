import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = ({auth, profile}) => {
    const links = auth.uid? <SignedInLinks profile = {profile}/> : <SignOutLinks/>
    return ( 
        <nav className="nav-wrapper grey darken-2">
            <div className="container">
                <Link to='/' className="brand-logo"> SPPMS </Link>
            </div>
            { links }
        </nav>
     );
}
 
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);