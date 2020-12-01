import React from 'react';
import Axios from 'axios';
import {Button, Table, AutoComplete, Modal } from 'antd';
import 'antd/dist/antd.css';
import 'pages/main.css'
import './Stat.css'
import {ChampData,array_en, array_kr, array_en_simple, array_kr_simple} from './ChampData.jsx';
import {LinkOutlined, SearchOutlined} from '@ant-design/icons';
import summoner from 'images/summoner.png'

const GetURL = 'http://localhost:5000/'

function Stat(){
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

    const [userList, setUserList] = React.useState([]); // 빈 리스트 생성
    const [value, setValue] = React.useState('');
    const [table_data, setTableData] = React.useState([]); //테이블 데이터로 생성

    const changeName = (data) => {
        setValue(data);
      };

    const submit_data = () =>{
        var timerec = new Date().getTime(); //시간 추가
        setTableData([{key:0, champion:'데이터 로딩중'}]);
        Axios.get(GetURL+'user/'+value)
        .then(res =>{ 
            const { data } = res;
            // console.log(data);
            setUserList(x => { // 중복검색되지 않은 데이터만 나타나게...
                let val_list =x.map( y => y['value']);
                try{
                    console.log(val_list.length, '소환' ,val_list);
                    if (val_list.indexOf(value)==-1){
                    var cn = x.length;
                    x = [...x, {key:cn, value:value}]
                }}
                catch{
                    cn = x.length
                    x = [...x, {key:cn, value:value}]
                }
                return x;
            }) // 성공시+리스트 부재시에 userlist 추가
            let res_champ = {...data}; //하드카피
            delete res_champ['time'] //time 정보는 삭제
            console.log(Object.entries(res_champ))
            data['time']? //테이블 정보 갱신. 
                setTableData(Object.entries(res_champ).map((val) => { //var i=0; ++i;
                if (val && val[0]!=='time') {
                var win_rate_val = Math.round( parseInt(val[1][0])*10000/( parseInt(val[1][0])+parseInt(val[1][1])))/100;
                var win_rate = win_rate_val+'%';
                }
                return (val && val[0]!== 'time'? 
                {key:Object.keys(res_champ).indexOf(val[0]) , champion:val[0], win:val[1][0], lost:val[1][1], 
                 win_rate:win_rate}
                : null);
            })):
            setTableData([])
            console.log('조회시간', (new Date().getTime()-timerec)/1000);
        })
        .catch(error => console.log(1, error))
    }

    function champ_name_link(text) { 
        if (array_kr.indexOf(text) !==-1 ) {
        var valx = array_en_simple[array_kr.indexOf(text)] // en simple
        var url = 'https://www.op.gg/champion/'+valx+'/statistics/'
        return <a href={url}>{text}</a>;
        }
        else if (array_kr_simple.indexOf(text) !==-1 ) {
            valx = array_en_simple[array_kr_simple.indexOf(text)] // en simple
            url = 'https://www.op.gg/champion/'+valx+'/statistics/'
            return <a href={url}>{ChampData(text, 'kr', 'kr', false)}</a>; //원래 이름으로 출력
            }
        else if (array_en.indexOf(text) !==-1 ) {
                valx = array_en_simple[array_en.indexOf(text)] // en simple
                url = 'https://www.op.gg/champion/'+valx+'/statistics/'
                return <a href={url}>{text}</a>;
                }
        else if (array_en_simple.indexOf(text) !==-1 ) {
                    valx = text // en simple
                    url = 'https://www.op.gg/champion/'+valx+'/statistics/'
                    return <a href={url}>{ChampData(text, 'en', 'en', false)}</a>;
            }
        else {
            return text;
        }
    }

    const table_columns = [ 
        {title:'챔피언 이름', dataIndex:'champion', align:'center',
        render: (text)=> (champ_name_link(text)) 
        }, 
        {title:'승리', dataIndex:'win', align:'center'}, 
        {title:'패배', dataIndex:'lost', align:'center'}, 
        {title:'승률', dataIndex:'win_rate', align:'center'}
    ]

    
    return (<div>
        <img src={summoner} width='300'/>
            <Button type="primary" onClick={showModal} style={{'marginLeft':'20px'}}>?</Button>
                <Modal
                title="소환사 승률 안내"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                style={{'font-weight':'bold', 'font-size':'25px','background-color':'rgb(95, 103, 153)'}}
                >
                <p>1. 검색하고 싶은 소환사 이름을 입력하면 OP.GG에서 2020년 시즌의 사용 챔피언별 승, 패, 승률 가져옵니다.</p>
                <p>2. 이미 검색한 적이 있는 소환사는 조회 목록에 저장됩니다.</p>
                <p>3. 각 챔피언의 링크는 OP.GG의 챔피언별 전적에 연결됩니다.</p>
            </Modal> 
            <h3>참조 : <a href="https://op.gg/champion/"><LinkOutlined/> OP.GG</a> </h3>
        <div className='searchbox-wrapper' style={{'width':'340px'}}>
            <AutoComplete value={value} options={userList} placeholder="소환사명" name="username" onChange={changeName} style={{'width':'240px', 'float':'left'}} />
            <Button type="button" onClick={submit_data} style={{'width':'80px'}}> <SearchOutlined/> </Button>
        </div>
        <br/>
        <div className='table-wrapper' style={{'width':'70%', 'minWidth':'300px'}}>
            <Table onChange={submit_data} columns={table_columns} dataSource={table_data?table_data:[]}  style={{'width':'100%'}}
            pagination={{padding:'20px', size:'small', showTotal:(total) => (`${total} 챔피언`), }}/>
        </div> 

    </div>);
}

export default Stat;


