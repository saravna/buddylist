import React from 'react';
import './Scroll.css';
const Scroll=(props)=>{
    return(
        <div style={{overflowY: 'scroll', height : '492px', border: '1px solid black'}}>
            {props.children}
        </div>
    );
};
export default Scroll;
