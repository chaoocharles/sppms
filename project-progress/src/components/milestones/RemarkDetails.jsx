import React from 'react';
import { connect } from 'react-redux';
import { deleteRemark } from '../../store/actions/milestoneActions';

const RemarkDetails = ({remark, milestoneId, deleteRemark}) => {

    const handleDelete = (remark) => {
        if (window.confirm('Remove this remark?'))
        deleteRemark(remark)
    }

    if (remark.milestoneId === milestoneId){
    return (
        <li className="collection-item"><div>{remark.comment}
            <i className="yellow-text text-darken-4 secondary-content">
                <i onClick = {() => handleDelete(remark)} style = {{ cursor: "pointer"}} className="material-icons">delete</i>
            </i></div>
        </li>
    )
    }else return null
}

const mapDistpatchToProps = (dispatch) => {
    return {
        deleteRemark: (remark) => dispatch(deleteRemark(remark))
    }
}

export default connect(null, mapDistpatchToProps)(RemarkDetails);