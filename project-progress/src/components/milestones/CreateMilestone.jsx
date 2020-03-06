import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createMilestone} from '../../store/actions/milestoneActions';
import { Redirect } from 'react-router-dom';

class CreateMilestone extends Component {
    state = { 
        milestoneTitle: '',
        milestoneDesc: ''
     }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMilestone(this.state);
    }

    render() { 
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to = '/signin' />

        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Milestone</h5>
                    <div className='input-field'>
                        <label htmlFor="projectTitle">Milestone Title</label>
                        <input type="text" id='projectTitle' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="projectDesc">Milestone Description</label>
                        <input type="text" id="projectDesc" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn cyan darken-2 z-depth-0">ADD</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createMilestone: (milestone) => dispatch(createMilestone(milestone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMilestone);