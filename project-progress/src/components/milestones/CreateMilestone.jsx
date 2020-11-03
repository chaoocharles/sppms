import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createMilestone} from '../../store/actions/milestoneActions';
import { Redirect } from 'react-router-dom';
import '../../index.css';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateMilestone extends Component {
    state = { 
        milestoneTitle: '',
        milestoneDesc: '',
        projectId: this.props.projectId,
        status: '',
        endDate: null
     }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value,
        })
    }

    handleDate = (date) => {
        this.setState({
            endDate: date
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const projectId = this.props.projectId;
        this.props.createMilestone(this.state, projectId);
        document.getElementById("create-milestone-form").reset();
        console.log("state", this.state)
    }

    render() { 
        const { auth} = this.props;
        if(!auth.uid) return <Redirect to = '/signin' />

        return ( 
            <div>
                <form id = "create-milestone-form" onSubmit={this.handleSubmit} className ="white createMilestone" autoComplete="off">
                    <h5 className="grey-text text-darken-3">Add New Milestone</h5>
                    <div className='input-field'>
                        <label htmlFor="milestoneTitle">Milestone Title</label>
                        <input type="text" id='milestoneTitle' onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="milestoneDesc">Milestone Description</label>
                        <input type="text" id="milestoneDesc" onChange={this.handleChange} required/>
                    </div>
                    <div className= "grey-text">Estimated Completion Date:</div>
                    <DatePicker
                        selected={ this.state.endDate }
                        onChange={ this.handleDate }
                        showTimeSelect
                        name="endDate"
                        dateFormat="dd/MM/yyyy"
                        minDate = {new Date()}
                        isClearable
                    />
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
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createMilestone: (milestone, projectId) => dispatch(createMilestone(milestone, projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMilestone);