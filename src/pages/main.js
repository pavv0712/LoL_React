import React from 'react'
import './main.css';
import { BrowserRouter,Link,Route} from 'react-router-dom';


import Home from 'neyong/Home';
import WinLose from 'neyong/WinLose';
import FindChamp from 'neyong/FindChamp';
import Stat from 'neyong/Stat';


const Main = () => {
    return(
        <BrowserRouter>
            <header>    
                <div id ='logo'>
                    <a href = '/' alt='logo'>
                        WhosTheWinner League of Leagends
                    </a>
                </div>

                <div id = "menu">
                    <Link to="/" className='menu1'><div>Home | </div></Link>
                    <Link to="winlose" className='menu2'><div>| 승률계산 |</div></Link>
                    <Link to="findchamp" className='menu3'><div>| 챔피언별 블루/레드 승률 |</div></Link>
                    <Link to="stat" className='menu4'><div>| 소환사 챔피언별 승률</div></Link>
                </div>
            
            </header>

            <div id='content'>
                <Route exact path="/" component={Home}/>
                    <Route path="/winlose" component={WinLose}/>
                    <Route path='/findchamp' component={FindChamp}/>
                    <Route path='/stat' component={Stat}/>
                    
            </div>
            
     
        </BrowserRouter>
    );
}

export default Main