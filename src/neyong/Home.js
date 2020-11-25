import React from 'react';
import 'pages/main.css'
import magician from 'images/species-removebg-preview.png'



function Home(){

    return(
        <div className='seungsan'>
                <div>
                    <h1>WhosTherWinner에 오신걸 환영합니다!</h1>
                </div>
                <div style={{'margin-top':'50px'}}>
                    <img src={magician} width='40%'/>
                </div>
                <div class ='seolmyung'>
                    <div>
                        <h1>소환사님 이번게임의 승률을 미리 알아보세요!</h1>
                        <p>입력창에 내용을 입력하면, 게임에 참여한 모든 유저의 정보를 수집하여<br/>
                            이번게임의 승률을 알아 볼 수 있습니다!
                        </p>
                    </div>
                </div>
                
                
        </div>
    );
};

export default Home;