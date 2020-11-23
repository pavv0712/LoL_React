import React from 'react';
import 'pages/main.css';
// import Axios from 'axios';
import BlueRed from './BlueRed.json';

function FindChamp(){


    return(

        <div>
            <h2>챔피언 승률차</h2>
            <input type="text" name="champ"  size={"25"} />
            <input type="button" value="검색"/>
                <div>
                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>포지션</th>
                            <th colSpan='2'>블루</th>
                            <th>레드</th>
                        </tr>
                    </thead>
                    {BlueRed.map((v) => {
                        return (
                            <tr>       
                                <td>{v.name}</td>
                                <td>{v.position}</td>
                                <td>
                                    <progress className='blue' value={v.Blue} max='100'/>
                                </td>
                                
                                <td>{v.Blue}%</td>
                                <td>
                                    <progress className='red' value={v.Red} max='100'/>
                                </td>
                                
                                <td>{v.Red}%</td>
                            </tr>
                        )})}
                </table>
                </div>
        </div>
                    
    );
};

export default FindChamp;