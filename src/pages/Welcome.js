import React from 'react';
import './Welcome.css'


const Welcome = ({children}) => {
    return(
        <div className='welcome'>
            {children}
        </div>
    );
};

export default Welcome;