import React from 'react';
import 'pages/main.css';
import winrate1 from 'images/winrate1.png'
import BlueRed from './BlueRed.json';

function FindChamp(){
    const [pos, setPos] = React.useState(['탑', '정글러', '미드', 'AD 캐리', '서포트'])
    const [booltop, setBooltop] = React.useState(true);
    const [booljungle, setBooljungle] = React.useState(true);
    const [boolmid, setBoolmid] = React.useState(true);
    const [booladcarry, setBooladcarry] = React.useState(true);
    const [boolsupport, setBoolsupport] = React.useState(true);

    const position = (e) => {
        if(e.target.value === 'top'){
            let topval = e.target.checked?'탑':''
            setBooltop(!booltop)
            setPos([topval,...pos.slice(1,)])
        }
        else if(e.target.value === 'jungle'){
            let jungleval = e.target.checked?'정글러':''
            setBooljungle(!booljungle)
            setPos([pos[0], jungleval, ...pos.slice(2,)])
        }
        else if(e.target.value === 'mid'){
            let midval = e.target.checked?'미드':''
            setBoolmid(!boolmid)
            setPos([...pos.slice(0,2), midval,...pos.slice(3,)])
        }
        else if(e.target.value === 'ad-carry'){
            let adcval = e.target.checked?'AD 캐리':''
            setBooladcarry(!booladcarry)
            setPos([...pos.slice(0,3), adcval, pos[4]])
        }
        else if(e.target.value === 'support'){
            let supval = e.target.checked?'서포트':''
            setBoolsupport(!boolsupport)
            setPos([...pos.slice(0,4), supval])
        }
        console.log(pos)

    }
    
    console.log(pos)

    return(
        
        <div className='bluered'>
            
            <img src={winrate1} width='270'/>
            <div id="position-selector">
                <input type='checkbox' name='position' id='top' value='top' onChange={position} checked={booltop}/> 
                <label for='top'>탑</label>
                <input type='checkbox' name='position' id='jungle' value='jungle' onChange={position} checked={booljungle}/> 
                <label for='jungle'>정글러</label>
                <input type='checkbox' name='position' id='mid' value='mid' onChange={position} checked={boolmid} /> 
                <label for='mid'>미드</label>
                <input type='checkbox' name='position' id='ad-carry' value='ad-carry' onChange={position} checked={booladcarry} /> 
                <label for='ad-carry'>AD 캐리</label>
                <input type='checkbox' name='position' id='support' value='support' onChange={position} checked={boolsupport}/>
                <label for='support'>서포트</label>
            </div>    
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
                            return (pos.indexOf(v.position.split(', ')[0])!==-1 || pos.indexOf(v.position.split(', ')[v.position.split(', ').length-1]) !==-1 ?
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
                                
                                :''
                        )})}
                        <tr>
                            <td colSpan='6'></td>
                        </tr>
                        <tr style={{'height':'60px','border-top':'1px solid white', 'background-color':'rgba(193, 173, 212, 0.5)'}}>
                            <td colSpan='6'></td>
                        </tr>
                    </tbody>
                </table>
                
        </div>
                    
    );
};

export default FindChamp;