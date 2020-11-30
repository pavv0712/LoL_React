import './WinLose.css';
import React, {useState} from 'react';
import api from "pages/api.js";
import calcu from 'images/calcu.png';

// Antd
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';

function WinLose() {

    const [user,setUser] = React.useState([]);
    const [champs, setChamps] = React.useState([]);
    const [summoners, setSummoners] = React.useState({
        input_text:'',
    })
    const [result, setResult] = React.useState({
        our_top_champ:'',
        counter_top_champ:'',
        our_jungle_champ:'',
        counter_jungle_champ:'',
        our_middle_champ:'',
        counter_middle_champ:'',
        our_carry_champ:'',
        counter_carry_champ:'',
        our_support_champ:'',
        counter_support_champ:'',
        team_id:'',
    });
    const [summoner,setSummoner] = React.useState({
        our_top_summoner: '',
        our_jungle_summoner: '',
        our_middle_summoner: '',
        our_carry_summoner: '',
        our_support_summoner: '',
    })

    const [teamId, setTeamId] = React.useState({
        blue:100,
        red:200,
    })

    const { TextArea } = Input;
    const click=()=>{
        api.post('InputData/',{...result,...summoner,...teamId})
    }
    const click2=()=>{
        console.log(summoners.input_text)
        let tmp = summoners.input_text.split('님이 로비에 참가하셨습니다.\n');
        api.post('SummonerData/',{
            summoner1:tmp[0],
            summoner2:tmp[1],
            summoner3:tmp[2],
            summoner4:tmp[3],
            summoner5:tmp[4].replace("님이 로비에 참가하셨습니다.",''),

        })
        setUser(tmp);
    }

    React.useEffect(()=>{
        api.get('Champ').then((data)=>{
            console.log(data.data.results)

            setChamps(data.data.results);
        });
    },[])

    const { Option } = Select;

    return (
    <div className="App">
        <div>
            <img src={calcu} width = '160'/>
        </div>
        <div className='textbox'>
            <TextArea rows={7} placeholder="name님이 로비에 참가하셨습니다.... name2님이 로비에 참가하셨습니다. ..." onChange={e=>{setSummoners({input_text: e.target.innerHTML})}} />
        </div>
        <div className='backtext'>
        <button className='textsearch' onClick={click2}>
            소환사 검색
        </button>
        </div>
        <div className='teamselec'>
        <Col className="gutter-row" span={10}>
            <div>
            팀 선택
            </div>
            <Select
                showSearch
                onChange={e=>setResult({...result, team_id:e})}
                style={{ width: 200 }}
                placeholder="Select a team"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                <option className='blue' value='100'>블루팀(Blue)</option>
                <option className='red' value='200'>레드팀(Red)</option>
            </Select>
        </Col>
        </div>
        
        <div className='champs'>
        <span>챔피언명</span>
        <span>소환사명</span>
        <span>상대챔피언명</span>
        <Row>
        <Col span={8} className="our_top_champ">
            <Select
                showSearch
                // value={result.first}
                onChange={e=>setResult({...result, our_top_champ:e})}
                style={{ width: 200 }}
                placeholder="Select a our top champion"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {
                    champs.map((value)=>{
                        return  <Option value={value.number}>{value.name}</Option>
                    })
                }


            </Select>
        </Col>
            <Col span={8} className="our_top_summoner">
                <Select
                    showSearch
                    // value={result.first}
                    onChange={e=>setSummoner({...summoner, our_top_summoner:e})}
                    style={{ width: 200 }}
                    placeholder="Select a our top summoner"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        user.map((value)=>{
                            return  <Option value={value.replace("님이 로비에 참가하셨습니다.",'')}>{value.replace("님이 로비에 참가하셨습니다.",'')}</Option>
                        })
                    }


                </Select>
            </Col>
            <Col span={8} className="counter_top_champ">
                탑 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    onChange={e=>setResult({...result, counter_top_champ:e})}
                    placeholder="Select a counter top champion"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
        </Row>
        <Row>
            <Col span={8} className="our_jungle_champ">
                
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a our jungle champion"
                    onChange={e=>setResult({...result,our_jungle_champ: e})}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
            <Col span={8} className="our_jungle_summoner">
                
                <Select
                    showSearch
                    // value={result.first}
                    onChange={e=>setSummoner({...summoner, our_jungle_summoner:e})}
                    style={{ width: 200 }}
                    placeholder="Select a our jungle summoner"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        user.map((value)=>{
                            return  <Option value={value.replace("님이 로비에 참가하셨습니다.",'')}>{value.replace("님이 로비에 참가하셨습니다.",'')}</Option>
                        })
                    }


                </Select>            </Col>
            <Col span={8}className="counter_jungle_champ">
                 정글 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a counter jungle champion"
                    onChange={e=>setResult({...result,counter_jungle_champ: e})}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
        </Row>
        <Row>
            <Col span={8} className="our_middle_champ">
                
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a our middle champion"
                    onChange={e=>setResult({...result,our_middle_champ: e})}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
            <Col span={8} className="our_middle_summoner">
            
                <Select
                    showSearch
                    // value={result.first}
                    onChange={e=>setSummoner({...summoner, our_middle_summoner:e})}
                    style={{ width: 200 }}
                    placeholder="Select a our middle summoner"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        user.map((value)=>{
                            return  <Option value={value.replace("님이 로비에 참가하셨습니다.",'')}>{value.replace("님이 로비에 참가하셨습니다.",'')}</Option>
                        })
                    }


                </Select>            </Col>
            <Col span={8} className="counter_middle_champ">
                 미드 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a count middle champion"
                    onChange={e=>setResult({...result,counter_middle_champ: e})}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
        </Row>
        <Row>
            <Col span={8} className="our_carry_champ">
                
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a our carry champion"
                    onChange={e=>setResult({...result,our_carry_champ: e})}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
            <Col span={8} className="our_carry_summoner">
                
                <Select
                    showSearch
                    // value={result.first}
                    onChange={e=>setSummoner({...summoner, our_carry_summoner:e})}
                    style={{ width: 200 }}
                    placeholder="Select a our carry summoner"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        user.map((value)=>{
                            return  <Option value={value.replace("님이 로비에 참가하셨습니다.",'')}>{value.replace("님이 로비에 참가하셨습니다.",'')}</Option>
                        })
                    }


                </Select>            </Col>
            <Col span={8} className="counter_carry_champ">
                 원딜 
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a counter carry champion"
                    onChange={e=>setResult({...result,counter_carry_champ: e})}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
        </Row>
        <Row>
            <Col span={8} className="our_support_champ">
                
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a our support champion"
                    onChange={e=>setResult({...result,our_support_champ: e})}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
            <Col span={8} className="our_support_summoner">
                
                <Select
                    showSearch
                    // value={result.first}
                    onChange={e=>setSummoner({...summoner, our_support_summoner:e})}
                    style={{ width: 200 }}
                    placeholder="Select a our support summoner"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        user.map((value)=>{
                            return  <Option value={value.replace("님이 로비에 참가하셨습니다.",'')}>{value.replace("님이 로비에 참가하셨습니다.",'')}</Option>
                        })
                    }


                </Select>            </Col>
            <Col span={8} className="counter_support_champ">
                 서포터
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a counter support champion"
                    onChange={e=>setResult({...result,counter_support_champ: e})}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        champs.map((value)=>{
                            return  <Option value={value.number}>{value.name}</Option>
                        })
                    }
                </Select>
            </Col>
        </Row>
        </div>
        <div style ={{'height':'15p0px', 'width':'80%', 'background-color':'#4D5898'}}>
        <button className='predict' onClick={click}>승률 예측</button>
        </div>
        {/*<Tooltip title="승률예측">*/}
        {/*    <Button type="primary" shape="circle" icon={<SearchOutlined />} />*/}
        {/*</Tooltip>*/}

    </div>

  );
}

export default WinLose;