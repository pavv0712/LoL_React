import React from 'react'
import './main.css';
import { BrowserRouter,Link,Route} from 'react-router-dom';

import Home from 'neyong/Home';
import WinLose from 'neyong/WinLose';
import FindChamp from 'neyong/FindChamp';
import Stat from 'neyong/Stat';


const MenuItem = ({active, children, to}) => (
    <div className='menu-item'>

        {children}

    </div>
)

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
                    <MenuItem><Link to="home">Home</Link></MenuItem>
                    <MenuItem><Link to="winlose">승률계산</Link></MenuItem>
                    <MenuItem><Link to="findchamp">챔프별 블루/레드 승률</Link></MenuItem>
                    <MenuItem><Link to="stat">전적</Link></MenuItem>
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