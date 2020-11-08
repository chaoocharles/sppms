import React from 'react';

const Remove = (props) => {
        const { onClick } = props
            return ( <button onClick = {onClick} className="testRemoveBtn btn red darken-2 z-depth-0">Remove</button> );
}
 
export default Remove;