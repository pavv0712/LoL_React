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
        <div>
                <div className='logo1'>
                    League of Legends
                </div>
                <div className='logo2'>
                    WhosTheWinner
                </div>
                <div className="menu">
                    <Link to="home"><div>Home</div></Link>
                    <Link to="winlose"><div>승률계산</div></Link>
                    <Link to="findchamp"><div>챔프별 블루/레드 승률</div></Link>
                    <Link to="stat"><div>전적</div></Link>
                </div>



            <div id='content'>
                <Route exact path="/" component={Home}/>
                    <Route path="/home" component = {Home}/>
                    <Route path="/winlose" component={WinLose}/>
                    <Route path='/findchamp' component={FindChamp}/>
                    <Route path='/stat' component={Stat}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Main