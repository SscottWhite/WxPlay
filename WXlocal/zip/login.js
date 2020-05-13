import React from 'react';
import './login.css';

let bobs = {
    className:"Pw",
    type: "password",
    name:"pwd",
    placeholder:"输入密码123"
}

export function Login(){
    return (     
          <form className="form one">
            <div>
              <label className="labLine one">账号</label>
              <input className="Ne" type="text" name='user'  placeholder="请输入账号"/>
            </div>
            <div>
              <label className="labLine two">密码</label>
              <input {...bobs}/>
             
            </div>
            <button className="loginbtn" form-type="submit" type="submit">登陆</button> 
          </form>     
    );
}


export class ChildComponent extends React.Component{
  state = {
      name : "明"
  }
  
  constructor(props){
      super(props);
      this.update = this.update.bind(this);//要写, 不要踩坑
  }
 // tow(n) {
      //   return n >= 0 && n < 10 ? '0' + n : '' + n;
      // }
 

  update(e){
    this.setState({
      name : e.target.value
    })
  }

  render() {
      console.log(this)
      const { showIntro, showBody } = this.props;//{国宝级的this.props}
      //this.prosp是父组件那边的属性传过来的 , ,,那是头,这是身子
      return (
          <div className='show'>
           <span> {showIntro && <p> hello ! </p>}  {showBody && <p> shot !</p>} </span>
           <input type="password" onChange={this.update} defaultvalue={this.state.name}/>
           <span>{this.state.name}</span> <br/>
           <span {...this.props}>{this.props.guess}</span>  
           {/* <div dangerouslySetInnerHTML={{__html: str}}></div> */}
           {/* start 对于插入的html的用法 ：this.props.children 的值有3种可能：即当前组件没有字节点时，它就是undefined；如果有一个子节点，数据类型是object；如果有多个子节点时，数据类型就是array。所以处理this.props.children时需要特别注意。 */}
           <ul>
              {React.Children.map(this.props.children, function(child,index){
                  return <li>{child},{index}</li>
              })}
           </ul>
           {/* end */}           
          </div>
      );
  }
}

export function GetDate() {
  var oDate = new Date();//获取日期对象
  var oldTime = oDate.getTime();//现在距离1970年的毫秒数
  var newDate = new Date('2020/5/13 17:00:00');
  var newTime = newDate.getTime();//2019年距离1970年的毫秒数
  var second = Math.floor((newTime - oldTime) / 1000);//未来时间距离现在的秒数
  // var day = Math.floor(second / 86400);//整数部分代表的是天；一天有24*60*60=86400秒 ；
    second = second % 86400;//余数代表剩下的秒数；
  var hour = Math.floor(second / 3600);//整数部分代表小时；
    second %= 3600; //余数代表 剩下的秒数；
  var minute = Math.floor(second / 60);
    second %= 60;

  return (
      <div>
        {/* <span class="time">{day}天</span>  */}
        <span class="time">{hour}小时</span>
        <span class="time">{minute}分钟</span>
        <span class="time">{second}秒</span>
      </div>
     );
};
// export { Login, ChildComponent }; // export default Login = export { Login } 把它导出, 给别的方法import用即可