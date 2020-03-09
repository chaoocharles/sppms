import React, {Component} from 'react';
import { addRemark } from '../../store/actions/milestoneActions';
import { connect } from 'react-redux';

class AddRemarks extends Component {
    state = { 
        comment: '',
        milestoneId: this.props.milestone.id,
        projectId: this.props.milestone.projectId
     }
    
     handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value 
        })
    }

    handleAddRemark = (milestone) => {
        const projectId = milestone.projectId;
        this.props.addRemark(this.state, projectId);
    }

    render() { 
        const { milestone } = this.props
        return ( 
            <React.Fragment>
                <td colSpan="2">
                    <div className="input-field">
                        <label htmlFor="comment">Enter Remarks</label>
                        <input type="text" id="comment" onChange={this.handleChange}/>
                    </div>
                </td>
                <td>
                    <button onClick = {() => this.handleAddRemark(milestone)} className="btn cyan darken-2 z-depth-0"><i className="material-icons">send</i></button>
                </td>
            </React.Fragment>
         );
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addRemark: (remark, projectId) => dispatch(addRemark(remark, projectId))
    }
}

export default connect(null, mapDispatchToProps)(AddRemarks);





              