import React from 'react';

const Status = (props) => {
        const { status } = props
        if (status === true ){
            return ( <span className="custom-badge green accent-4 white-text left">Complete</span> );
        } else {
            return ( <span className="custom-badge blue white-text left">InProgress</span> );
        }
}
 
export default Status;