import React from 'react';
import 'pages/main.css';
// import Axios from 'axios';
import BlueRed from './BlueRed.json';

function FindChamp(){
    // console.log('BlueRed:', typeof BlueRed);
    // console.log(BlueRed)
    const [champ, setChamp] = React.useState('')
    
    const changeName = (e) =>{ //이름 지정
        setChamp(e.target.value);
    }
    const submit_data = () =>{

    }


    return(

        <div>
            <h2>챔피언별 블루/레드 승률</h2>
            <input type="text" name="champ" onChange={changeName} />
            <input type="button" value="검색" onClick={submit_data}/>
            {
                BlueRed.map((v) => {
                    return <div>
                        <table>
                            <tr>
                                <td>{v.name}</td> 
                                <td>{v.position}</td>
                                <td>{v.Blue}</td>
                                <td>{v.Red}</td>
                            </tr>
                        </table>
                        </div>
                })
            }
        </div>
    );
};

export default FindChamp;