import React from 'react';
import { connect } from 'react-redux';
import { deleteRemark } from '../../store/actions/milestoneActions';
import moment from 'moment';
import '../../index.css';

const RemarkDetails = ({remark, milestoneId, deleteRemark}) => {

    const handleDelete = (remark) => {
        if (window.confirm('Remove this remark?'))
        deleteRemark(remark)
    }

    if (remark && remark.milestoneId === milestoneId){
    return (
        <ul className="collection with-header remark">
        <li className="collection-header"><i>{remark.authorFirstName} {remark.authorLastName} : {moment(remark.createdAt.toDate()).calendar()} </i></li>
        <li className="collection-item"><div>{remark.comment}
            <i className="yellow-text text-darken-4 secondary-content">
                <i onClick = {() => handleDelete(remark)} style = {{ cursor: "pointer"}} className="material-icons">delete</i>
            </i></div>
        </li>
        </ul>
    )
    } else return null
}

const mapDistpatchToProps = (dispatch) => {
    return {
        deleteRemark: (remark) => dispatch(deleteRemark(remark))
    }
}

export default connect(null, mapDistpatchToProps)(RemarkDetails);