import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createMilestone} from '../../store/actions/milestoneActions';
import { Redirect } from 'react-router-dom';
import '../../index.css';

class CreateMilestone extends Component {
    state = { 
        milestoneTitle: '',
        milestoneDesc: '',
        projectId: this.props.projectId,
        status: 'false'
     }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const projectId = this.props.projectId;
        this.props.createMilestone(this.state, projectId);
    }

    render() { 
        const { auth} = this.props;
        if(!auth.uid) return <Redirect to = '/signin' />

        return ( 
            <div>
                <form onSubmit={this.handleSubmit} className ="white createMilestone">
                    <h5 className="grey-text text-darken-3">Add New Milestone</h5>
                    <div className='input-field'>
                        <label htmlFor="milestoneTitle">Milestone Title</label>
                        <input type="text" id='milestoneTitle' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="milestoneDesc">Milestone Description</label>
                        <input type="text" id="milestoneDesc" onChange={this.handleChange}/>
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
        auth: state.firebase.auth,
        waitError: state.milestone.waitError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createMilestone: (milestone, projectId) => dispatch(createMilestone(milestone, projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMilestone);