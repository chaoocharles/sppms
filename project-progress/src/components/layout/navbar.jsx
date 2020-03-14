import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import logo from '../../logo-white.png';
import '../../index.css';

const Navbar = ({auth, profile}) => {
    const links = auth.uid? <SignedInLinks profile = {profile}/> : <SignOutLinks/>
    return ( 
        <nav className="nav-wrapper grey darken-2">
            <div className="container">
                <Link to='/'><img src = {logo} alt = "SPPMS" className="brand-logo logo"/></Link>
            </div>
            { links }
        </nav>
     );
}
 
const mapStateToProps = (state) => {
    console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);