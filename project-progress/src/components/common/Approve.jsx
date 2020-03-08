import React from 'react';

const Approve = (props) => {
        const { status, onClick } = props
        if (status === true){
            return ( <button onClick = {onClick} className="btn yellow darken-4 z-depth-0">REVOKE</button> );
        } else {
           return ( <button onClick = {onClick} className="btn cyan darken-2 z-depth-0">APPROVE</button> );
        }
}
 
export default Approve;