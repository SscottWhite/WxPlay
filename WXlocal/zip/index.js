import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Login,ChildComponent,GetDate} from './login'; //注意,突破点
import * as serviceWorker from './serviceWorker';


function cick(){
  ReactDOM.render(
   // <React.StrictMode>
      <div>
       <App date={new Date()} />
       <Login />
       {/* <ChildComponent  showIntro='true' showBody='false' /> */}
       {/* <ChildComponent  showIntro={'false'} showBody={'false'} /> */}
       {/* <ChildComponent  showIntro={true} showBody={false} /> */}
       <ChildComponent  showIntro  showBody={false}  guess="guess123">
          <span>one</span>
          <span>two</span>   
       </ChildComponent>

       <GetDate />
      </div>  ,
   // </React.StrictMode>,  
   document.getElementById('root')         //找到id = root的节点
  );
}

//定时跑
setInterval(cick,1000)

serviceWorker.register();

