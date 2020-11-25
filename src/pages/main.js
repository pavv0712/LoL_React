import React from 'react'
import './main.css';
import { BrowserRouter,Link,Route} from 'react-router-dom';


import Home from 'neyong/Home';
import WinLose from 'neyong/WinLose';
import FindChamp from 'neyong/FindChamp';
import Stat from 'neyong/Stat';


const menus = 
document.getElementsByClassName('menus');
    for(var i = 0; i < menus.length; i++)
    {
        menus[i].addEventListener('click',
        function(){
            for (var j = 0; j < menus.length;j++)
            {
                menus[j].getElementsByClassName.color = 'grey';
            }
            this.style.color = 'white'
        })
    }

const Main = () => {
    
   
    return(
        <BrowserRouter>
            <header>    
                <div id ='logo'>
                    <a href = '/' alt='logo'>
                        WhosTheWinner League of Legends
                    </a>
                </div>
                
                <div className = "menu">
                    <Link to="/"><div className='menus'>Home | </div></Link>
                    <Link to="winlose"><div className='menus'>| 승률계산 |</div></Link>
                    <Link to="findchamp"><div className='menus'>| 챔피언별 블루/레드 승률 |</div></Link>
                    <Link to="stat"><div className='menus'>| 소환사 챔피언별 승률</div></Link>
                </div>
            
            </header>

            <div className='content'>
                <Route exact path="/" component={Home}/>
                    <Route path="/winlose" component={WinLose}/>
                    <Route path='/findchamp' component={FindChamp}/>
                    <Route path='/stat' component={Stat}/>
                    
            </div>
            
     
        </BrowserRouter>
    );
}

export default Main