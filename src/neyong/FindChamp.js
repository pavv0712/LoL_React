import React from 'react';
import 'pages/main.css';
import winrate1 from 'images/winrate1.png'
import BlueRed from './BlueRed.json';
import 'neyong/FindChamp.css'
import {Button, Table, Modal } from 'antd';

function FindChamp(){
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
     };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [pos, setPos] = React.useState(['탑', '정글러', '미드', 'AD 캐리', '서포트'])
    const [booltop, setBooltop] = React.useState(true);
    const [booljungle, setBooljungle] = React.useState(true);
    const [boolmid, setBoolmid] = React.useState(true);
    const [booladcarry, setBooladcarry] = React.useState(true);
    const [boolsupport, setBoolsupport] = React.useState(true);

    const sortBy = (attr) => { // 정렬된 리스트 출력
        let attrlist = BlueRed.map(v=>v[attr]) // 정렬 안 된 리스트
        let attrsort = [...attrlist].sort() // 정렬된 리스트
        if (attr === 'Blue' || attr ==='Red') { attrsort.reverse() }
        var res = []
        var tmp = 0
        for (var idx =0; idx<152; idx++){
            var v = attrsort[idx]
            if (idx>0 && v === attrsort[idx-1] ){
                tmp = attrlist.indexOf(v, tmp+1)
                res.push(BlueRed[tmp])
            }
            else {
                tmp = attrlist.indexOf(v)
                res.push(BlueRed[tmp])
            }

        }
        return res; // 

    }
    const defaultsort = sortBy('name')
    const [sortres, setSortRes] = React.useState(defaultsort); //정렬 기준. 

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
       

    }
    
    const sorting = (e) =>{ //기준에 따라 sorting
        if (Object.keys(BlueRed[0]).indexOf(e.target.value) !==-1){
            setSortRes(sortBy(e.target.value)); //
        }
    }

    const render_graph = (val, teamcolor) => {
        return (<div style={{'display':'flex', 'flex-wrap':'wrap'}}>
                    <div style={{'width':'60%', 'margin':'0px 10px', 'padding':'10px 0px'}}>
                        <progress style= {{'width':'100%', 'minWidth':'60px', 'margin':'0px'}} className={teamcolor} value={val} max='100'/>
                    </div>
                <div style={{'margin':'10px', 'textAlign':'center'}}>{val}%</div>
                </div>)
    }

    const table_columns = [
        {title:'이름', dataIndex:'name', align:'center', width:'14%', maxWidth:'9em'}, 
        {title:'포지션', dataIndex:'position', align:'center', width:'16%', maxWidth:'10em'}, 
        {title:'블루', dataIndex:'bluewin',align:'center', className:'title-blue', render:(val)=>(render_graph(val, 'blue'))  }, 
        {title:'레드', dataIndex:'redwin',align:'center', className:'title-red', render:(val)=>(render_graph(val, 'red'))}
    ]

    let data_filter = sortres.filter(v=> (pos.indexOf(v.position.split(', ')[0])!==-1 || 
    pos.indexOf(v.position.split(', ')[v.position.split(', ').length-1]) !==-1))
    let table_data = data_filter.map(v=>(
            {key:data_filter.indexOf(v), name:v.name, position:v.position, bluewin:v.Blue, redwin:v.Red }
            ))


    return(
        
        <div className='bluered'>
        <img src={winrate1} width='270'/>
        
        <Button type="primary" onClick={showModal}>?</Button>
            <Modal
            title="챔피언 승률차 사용법"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            style={{'font-weight':'bold', 'font-size':'25px','background-color':'rgb(95, 103, 153)'}}
            >
                <p>1. League of Data에서 가져온 승률 정보입니다.</p>
                <p>2. 포지션을 선택한 뒤 포지션에 사용되는 챔피언을 검색할 수 있습니다.</p>
                <p>3. 기본적으로 한글 이름 순서로 정렬되어 있지만 영어 이름, 블루 팀 승률, 레드 팀 승률 순서로도 정렬 가능합니다.</p>
                <p>4. 사용자 편의성을 위해 10개씩, 20개씩, 50개씩, 100개씩 데이터를 나누어서 볼 수 있습니다.</p>
        </Modal> 
        <div id="position-selector">
            <h3>포지션 선택 </h3>
            <div id='position-selector-container'>
                <div>
                    <input type='checkbox' name='position' id='top' value='top' onChange={position} checked={booltop}/> 
                    <label for='top'>탑</label>
                </div>
                <div>
                    <input type='checkbox' name='position' id='jungle' value='jungle' onChange={position} checked={booljungle}/> 
                    <label for='jungle'>정글러</label>
                </div>
                <div>
                    <input type='checkbox' name='position' id='mid' value='mid' onChange={position} checked={boolmid} /> 
                    <label for='mid'>미드</label>
                </div>
                <div>
                    <input type='checkbox' name='position' id='ad-carry' value='ad-carry' onChange={position} checked={booladcarry} /> 
                    <label for='ad-carry'>AD 캐리</label>
                </div>
                <div>
                    <input type='checkbox' name='position' id='support' value='support' onChange={position} checked={boolsupport}/>
                    <label for='support'>서포트</label>
                </div>
            </div>
        
            <h3>챔피언 정렬 기준</h3>
            <div id='sort-selector-container'>
                <div>
                    <input type='radio' name='sort' id='k_name' value='name' onChange={sorting} defaultChecked/> 
                    <label for='k_name'>한글 이름</label>
                </div>
                <div>
                    <input type='radio' name='sort' id='e_name' value='e_name' onChange={sorting} /> 
                    <label for='e_name'>영어 이름</label>
                </div>
                <div>
                    <input type='radio' name='sort' id='bluewin' value='Blue' onChange={sorting}  /> 
                    <label for='bluewin'>블루 승률</label>
                </div>
                <div>
                    <input type='radio' name='sort' id='redwin' value='Red' onChange={sorting} /> 
                    <label for='redwin'>레드 승률</label>
                  </div>
            </div>
        </div>
            <Table className='rate' columns={table_columns} size='small'
            dataSource={table_data} pagination={{padding:'10px', size:'small', 
            showTotal:(total) => (`${total} 챔피언`), pageSizeOptions:[10,20,50,100]}} 
            style={{'width':'80%', 'minWidth':'400px', 'background':'transparent'}}/>      
            
    </div>
    );
};

export default FindChamp;