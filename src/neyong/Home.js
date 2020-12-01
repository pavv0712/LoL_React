import React from 'react';
import 'pages/main.css'
import species from 'images/species-removebg-preview.png'
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {TrophyFilled} from '@ant-design/icons';


function Home(){
    const menuselect = (e) => {
        document.querySelectorAll('.menu').forEach(
            v=> {v.innerHTML==='승률계산'?v.classList.add('active'):v.classList.remove('active')}
        ); //active 모두 제거
    }

    return(
        <div className='home'>
                <div>
                    <h1>WhosTheWinner에 오신걸 환영합니다!</h1>
                </div>
                <div style={{'margin-top':'25px'}}>
                    <img  className= 'specie' src={species} width='40%'/>
                </div>
                <div className ='info'>
                    <div>
                        <h1>소환사님 이번게임의 승률을 미리 알아보세요!</h1>
                        <p>입력창에 정보를 입력하면, 게임에 참여한 모든 유저의 정보를 수집하여<br/>
                            이번게임의 승률을 알아 볼 수 있습니다!
                        </p>
                    </div>
                </div> 
                <Link to="winlose" onClick={menuselect}>
                <Button className='button-to-match'
                style ={{fontSize: '2em', fontWeight:600, height:'2.5em', backgroundColor:'rgba(192,192,224,0.5)',
                    marginTop:'30px', borderRadius:'10px', color:'whitesmoke'}}>
                    <TrophyFilled style={{fontSize:'1.8em'}} /> 승률 예측하기
                </Button>
                </Link>
        </div>
    );
};

export default Home;