import React from 'react';
//  import logo from './logo.svg';
import './App.css';
// import Login from './login';

//也可以保存为一个小组件
// let bobs = {
//   className:"Pw",
//   type: "password",
//   name:"pwd",
//   placeholder:"输入密码"
// }

function App(props) {
  
  function stopApp(){
     alert("123")
  }
  return (
    <div className="App">
      <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <p>
          现在是 { new Date().toLocaleTimeString() } <br/>
          二更 {props.date.toLocaleTimeString()}  <br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <body>
        <button className='but' onClick={stopApp}>暂停</button> <br/>
        {/* <button className='but' onClick={()=> {alert("hain")}}>暂停</button> <br/> */}

        {/* <form action="index.php" method="POST"> 
          123 <input type="text"  autoComplete="on"  placeholder="123" name="user"/> <br/>
        <input type="submit" name="sub" value="TJ"></input>
        </form>   */}

        {/* <label for="l1">label1</label>
          <input type="checkbox" id="l1" /> */}

        {/* <div>
          <select autoFocus  multiple="true" disabled="true" name="city" size="2" >
            <option value="cs">cs</option> 
            <option value="sz">sz</option>
            <option value="sz">sz1</option>
            <option value="sz">sz2</option>
          </select>
        </div> */}

        {/* <div>
          <label>密码: &nbsp;&nbsp;&nbsp;</label>
          <input {...bobs}/>
        </div> */}

        {/* <Login />   //将组件放入其中 */}
      </body>     
    </div>
  );
}

export default App;


