import React from 'react';
import 'pages/main.css';
import Axios from 'axios';
import BlueRed from './BlueRed.json';

function FindChamp(){

    return(

        <div className='bluered'>
            <h2>챔피언 승률차</h2>
                <table className='rate'>
                    <thead>
                        <tr>
                            <th colSpan='2'>이름</th>
                            <th>포지션</th>
                            <th colSpan='2'>블루</th>
                            <th colSpan='2'>레드</th>
                        </tr>
                    </thead>
                    {BlueRed.map((v) => {
                        return (
                            <tr>       
                               
                                <td>{v.name}</td>
                                <td>{v.e_name}</td>
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
                    
    );
};

export default FindChamp;