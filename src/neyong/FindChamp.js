import React from 'react';
import 'pages/main.css';
import winrate1 from 'images/winrate1.png'
import BlueRed from './BlueRed.json';

function FindChamp(){
    

    return(

        <div className='bluered'>
            <img src={winrate1} width='270'/>
                <table className='rate'>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>포지션</th>
                            <th colSpan='2'>블루</th>
                            <th colSpan='2'>레드</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                <td></td>
                        </tr>
                        <tr>
                                <td></td>
                        </tr>
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
                    </tbody>
                </table>
                
        </div>
                    
    );
};

export default FindChamp;