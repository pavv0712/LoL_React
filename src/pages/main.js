import React from 'react'
import './main.css';
import { BrowserRouter,Link,Route} from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons';
import Home from 'neyong/Home';
import WinLose from 'neyong/WinLose';
import FindChamp from 'neyong/FindChamp';
import Stat from 'neyong/Stat';


function Main() {

    
    const menuselect = (e) => {
        document.querySelectorAll('.menu').forEach(v=> {v.classList.remove('active')}); //active 모두 제거
        e.target.classList.add('active');
    }

      const togglemenu = () =>{  //autohidden 내용 변경
        document.querySelectorAll('.menu') .forEach(v => {v.classList.toggle('show')}); //show 토글하기
        document.querySelector('header').classList.toggle('show');
      }
   
    return(
        <BrowserRouter>
            <header>    
                <div id ='logo'>
                <a href = '/' alt='logo'>
                        <span id='1'>Whos</span>	            
                        <span id='2'>The</span>	
                        <span id='3'>Winner</span>	
                    </a>
                </div>
                
                <button type="button" className={`hid-button`} onClick={togglemenu}> <MenuOutlined/> </button>
                <ul className = "menus">
                    <li>
                      <Link to="/" className={window.location.pathname==="/"?"menu active":"menu"} onClick={menuselect}>Home</Link> 
                    </li>
                    <li>
                      <Link to="winlose" className={window.location.pathname==="/winlose"?"menu active":"menu"} onClick={menuselect}>승률계산</Link>
                    </li>
                    <li>
                      <Link to="findchamp" className={window.location.pathname==="/findchamp"?"menu active":"menu"} onClick={menuselect}>블루 VS 레드</Link>
                    </li>
                    <li>
                      <Link to="stat" className={window.location.pathname==="/stat"?"menu active":"menu"} onClick={menuselect}>소환사 승률</Link>
                    </li>
                </ul>
            
            </header>

            <div className='content'>
                <Route exact path="/" component={Home}/>
                <Route path="/winlose" component={WinLose}/>
                <Route path='/findchamp' component={FindChamp}/>
                <Route path='/stat' component={Stat}/>    
            </div>
            <div className='footer'>
                <div>Copyright C 2020 by MaSuTer | All rights reserved</div>

            </div>
            
     
        </BrowserRouter>
    );
}



export default Main