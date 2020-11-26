import React from 'react';
import 'pages/main.css';


function WinLose(){
    return(
        <div className='Winlose'>
           <h2>승률계산</h2>
            <input type="text" name="username" />
            <input type="button" value="검색" />
            
        </div>
    );
};

export default WinLose;