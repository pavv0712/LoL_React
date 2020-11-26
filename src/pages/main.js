import React from 'react'
import './main.css';
import { BrowserRouter,Link,Route} from 'react-router-dom';



import Home from 'neyong/Home';
import WinLose from 'neyong/WinLose';
import FindChamp from 'neyong/FindChamp';
import Stat from 'neyong/Stat';




function Main() {
   
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
                
                <div className = "menus">
                    <Link to="/" className='menu'>Home</Link>
                    
                    <Link to="winlose" className='menu'>승률계산</Link>
                    
                    <Link to="findchamp" className='menu'>블루 VS 레드</Link>
                    
                    <Link to="stat" className='menu'>소환사 챔피언별 승률</Link>
                </div>
            
            </header>

            <div className='content'>
                <Route exact path="/" component={Home}/>
                    <Route path="/winlose" component={WinLose}/>
                    <Route path='/findchamp' component={FindChamp}/>
                    <Route path='/stat' component={Stat}/>
                    
            </div>
            <div class='footer'>
                <div>Copyright C 2020 by MaSuTer | All rights reserved</div>

            </div>
            
     
        </BrowserRouter>
    );
}



export default Main