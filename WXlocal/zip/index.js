import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Login,ChildComponent,GetDate} from './login'; //ע��,ͻ�Ƶ�
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
   document.getElementById('root')         //�ҵ�id = root�Ľڵ�
  );
}

//��ʱ��
setInterval(cick,1000)

serviceWorker.register();

