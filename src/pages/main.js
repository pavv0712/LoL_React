import React from 'react'
import './main.css';
import { BrowserRouter,Link,Route} from 'react-router-dom';

import Home from 'neyong/Home';
import WinLose from 'neyong/WinLose';
import FindChamp from 'neyong/FindChamp';
import Stat from 'neyong/Stat';


function Main() {

    const isSSR = typeof window !== "undefined";
    const [windowSize, setWindowSize] = React.useState({
      width: isSSR ? 1200 : window.innerWidth,
      height: isSSR ? 800 : window.innerHeight,
    });
    
    const [select, setSelect] = React.useState(['active', '', '', ''])
    const changeSelect =  (val) => {setSelect(val)}
    const menus = document.querySelectorAll('.menu') // 메뉴 모음
    const menuselect = (e) => {
        setSelect([...menus].forEach(v => (v===e.target?v.classList.add('active'):v.classList.remove('active'))))
    }

    React.useEffect(() => { // 출처 : https://reedbarger.com/how-to-create-a-usewindowsize-react-hook/
        window.addEventListener("resize", () => {
          setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        });
    
  
        return () => {
          window.removeEventListener("resize", () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
          });
        };
      }, []);

      let summonerwin = (windowSize.width>1023&&window.innerWidth>1023)?'소환사 챔피언별 승률':'소환사 승률'

      const togglemenu = () =>{  //autohidden 내용 변경
        console.log(document.querySelectorAll('.menu') )
        document.querySelectorAll('.menu') .forEach(v => {v.classList.toggle('show')}); //show 토글하기
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
                
                <button type="button" className={`hid-button`} onClick={togglemenu}> V </button>
                <ul className = "menus">
                    <li><Link to="/" className={`menu`} onClick={menuselect}>Home</Link> </li>
                    <li><Link to="winlose" className={`menu`} onClick={menuselect}>승률계산</Link></li>
                    <li><Link to="findchamp" className={`menu`} onClick={menuselect}>블루 VS 레드</Link></li>
                    <li><Link to="stat" className={`menu`} onClick={menuselect}>{summonerwin}</Link></li>
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