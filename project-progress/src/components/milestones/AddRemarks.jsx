import React, {Component} from 'react';
import { addRemark } from '../../store/actions/milestoneActions';
import { connect } from 'react-redux';

class AddRemarks extends Component {
    state = { 
        comment: '',
        milestoneId: this.props.milestoneId
     }
    
     handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value 
        })
    }

    handleAddRemark = (milestoneId) => {
        this.props.addRemark(this.state, milestoneId);
    }

    render() { 
        const { milestoneId } = this.props
        return ( 
            <React.Fragment>
                <td colSpan="2">
                    <div className="input-field">
                        <label htmlFor="comment">Enter Remarks</label>
                        <input type="text" id="comment" onChange={this.handleChange}/>
                    </div>
                </td>
                <td>
                    <button onClick = {() => this.handleAddRemark(milestoneId)} className="btn cyan darken-2 z-depth-0"><i className="material-icons">send</i></button>
                </td>
            </React.Fragment>
         );
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addRemark: (remark, milestoneId) => dispatch(addRemark(remark, milestoneId))
    }
}

export default connect(null, mapDispatchToProps)(AddRemarks);





              