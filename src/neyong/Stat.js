import React from 'react';
// import BrowserRouter from 'react-router-dom';
import Axios from 'axios';
import 'pages/main.css';


const GetURL = 'http://localhost:5000/'



function Stat(){
    
const [username, setUsername] = React.useState('');
const [result, setResult] = React.useState(Object()); //빈 오브젝트 생성

const changeName = (e) =>{ //이름 지정
    setUsername(e.target.value);
}

const submit_data = () =>{
    Axios.get(GetURL+'user/'+username)
    .then(res =>{ 
        const { data } = res;
        console.log(data);
        setResult(data)
    })
    .catch(error => console.log(error))

}
    return(
        
            <div>
            <h2>소환사 이름으로 챔피언별 전적 검색</h2>
            <input type="text" name="username" onChange={changeName} />
            <input type="button" value="제출" onClick={submit_data}/>
            <br/>
            
            <div style={{'width':'400px', 'height':'500px'}}>
            <table className="res-table">
            <thead>
                <tr>
                    <th>챔피언명</th>
                    <th>승리</th>
                    <th>패배</th>
                    <th>승률</th>
                </tr>
            </thead>
            {Object.keys(result).map(v => {
            return (v!=='time'?<tr>
                <td>{v}</td>
                <td>{(result[v]['win'])}</td>
                <td>{(result[v]['lose'])}</td>
                <td>{Math.round(parseInt(result[v]['win'])*10000/(parseInt(result[v]['win'])+parseInt(result[v]['lose'])))/100}{'%'}</td>
            </tr>:null);
            })}
            </table>
            </div>
        </div>
    );
};

export default Stat;

