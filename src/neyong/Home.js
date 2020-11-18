import React from 'react';
import 'pages/main.css'
import magician from 'images/magician.jpg'



function Home(){

    return(
        <div className='seungsan'>
                <div>
                    <h1>WhosTherWinner에 오신걸 환영합니다!</h1>
                    <h3>소환사님 이번게임의 승산을 알아보세요!</h3>
                </div>
                <div style={{'margin-top':'50px'}}>
                    <img src={magician} width='45%'/>
                </div>
                
                
        </div>
    );
};

export default Home;