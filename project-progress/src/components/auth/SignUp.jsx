import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        Email: '',
        Password: '',
        FirstName: '',
        LastName: ''
     }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
     
    }

    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor="lastName">Last Name</label>
                          <input type="text" id='lastName' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn cyan darken-2 z-depth-0">SIGN Up</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignUp;