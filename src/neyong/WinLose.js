import React from 'react';
import 'pages/main.css';


const WinLose = () => {
    return(
        <div className='row'>
           <h2>소환사 이름으로 챔피언별 전적 검색</h2>
            <input type="text" name="username" />
            <input type="button" value="제출" />
            
        </div>
    );
};

export default WinLose;